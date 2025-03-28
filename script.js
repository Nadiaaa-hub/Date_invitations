const inputContainer = document.querySelector(".input-container");
const secondWindow = document.querySelector(".second-window");
const thirdWindow = document.querySelector(".third-window");
const fourthWindow = document.querySelector(".fourth-window");
const fifthWindow = document.querySelector(".fifth-window");
const sixWindow = document.querySelector(".six-window");

const yesButton = document.querySelector(".yes-button");
const noButton = document.querySelector(".no-button");
const maybeButton = document.querySelector(".maybe-button");
const button = document.querySelector(".button");
const nextButton = document.querySelectorAll(".next-button");
const cancelButtons = document.querySelectorAll(".cancel-button");
const fourthCancelButton = document.querySelector(".fourth-cancel-button");

const thirdNextButton = document.querySelector(".third-window .next-button");
const fourthNextButton = document.querySelector(".fourth-window .next-button");
const fifthNextButton = document.querySelector(".fifth-window .next-button");

const imageElement = document.createElement("img");
const imageContainers = document.querySelectorAll(".image-container");
const chosenDateType = document.getElementById("chosen-date-type");
const chosenTimeType = document.getElementById("chosen-time-type");

const inputThird = document.querySelector(".input-third");
const inputField = document.querySelector(".fourth-window input");
const inputFifth = document.querySelector(".input-fifth");

imageElement.src = "./img/jpg";
imageElement.autoplay = true;
imageElement.muted = true;
imageElement.loop = true;
imageElement.classList.add("hidden");
document.body.appendChild(imageElement);

function checkInput() {
  const input = document.querySelector(".input").value;
  if (input === "") {
    alert("Please fill in the field.");
  } else if (input === "Yura") {
    inputContainer.classList.add("hidden");
    thirdWindow.classList.add("hidden");
    secondWindow.classList.remove("hidden");
  } else {
    alert("You are not my date, sorry((");
  }
}
button.addEventListener("click", checkInput);

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     checkInput();
//     button.classList.add("button-enter-pressed");
//     setTimeout(() => {
//       button.classList.remove("button-enter-pressed");
//     }, 400);
//   }
// });

if (yesButton) {
  yesButton.addEventListener("click", () => {
    secondWindow.classList.add("hidden");
    thirdWindow.classList.remove("hidden");
  });
}

if (noButton) {
  noButton.addEventListener("click", () => {
    imageElement.classList.remove("hidden");
    imageElement.classList.add("full-screen");

    setTimeout(() => {
      imageElement.classList.add("visible");
    }, 40);

    setTimeout(() => {
      imageElement.classList.remove("visible");
      imageElement.classList.add("hidden");
    }, 3000);

    secondWindow.classList.add("hidden");
    inputContainer.classList.remove("hidden");
  });
}

if (maybeButton) {
  maybeButton.addEventListener("click", () => {
    // let currentImageIndex = 0;

    // function showImage() {
    //   if (currentImageIndex < imageContainers.length) {
    //     const currentImage = imageContainers[currentImageIndex];
    //     currentImage.classList.remove("hidden");
    //     currentImage.classList.add("visible");

    //     currentImage.classList.remove("visible");
    //     currentImage.classList.add("hidden");

    //     currentImageIndex++;

    //     if (currentImageIndex < imageContainers.length) {
    //       showImage();
    //     }
    //   }
    // }
    alert("Incorrect answer (｡•̀ ⤙ •́ ｡ꐦ) !!!");
    secondWindow.classList.add("hidden");
    inputContainer.classList.remove("hidden");
  });
}

if (fourthCancelButton) {
  fourthCancelButton.addEventListener("click", () => {
    inputField.value = "";

    inputField.focus();
    secondWindow.classList.add("hidden");
  });
}

cancelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    inputThird.selectedIndex = 0;
    inputFifth.selectedIndex = 0;
  });
});

if (thirdNextButton) {
  thirdNextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector(".input-third").value;

    if (!selectedOption) {
      alert("Please choose a date type!");
      return;
    }

    let dateTypeText = "";
    switch (selectedOption) {
      case "1":
        dateTypeText = "romantic dinner?";
        break;
      case "2":
        dateTypeText = "outdoor adventure?";
        break;
      case "3":
        dateTypeText = "chill hangout?";
        break;
      case "4":
        dateTypeText = "surprise me!";
        break;
    }

    document.getElementById("chosen-date-type").textContent = dateTypeText;
    document.querySelector(".third-window").classList.add("hidden");
    document.querySelector(".fourth-window").classList.remove("hidden");
  });
}

if (fourthNextButton) {
  fourthNextButton.addEventListener("click", () => {
    const selectedOptionPlace = document.querySelector(".input-fourth").value;
    if (!selectedOptionPlace) {
      alert("Please enter a place!");
      return;
    }

    document.getElementById("chosen-place-type").textContent =
      selectedOptionPlace;

    document.querySelector(".fourth-window").classList.add("hidden");
    document.querySelector(".fifth-window").classList.remove("hidden");
  });
}

if (fifthNextButton) {
  fifthNextButton.addEventListener("click", () => {
    const selectedOptionTime = document.querySelector(".input-fifth").value;
    const selectedOptionPlace = document.querySelector(".input-fourth").value;

    if (!selectedOptionTime || !selectedOptionPlace) {
      alert("Please choose a time!");
      return;
    }

    let timeTypeText = "";
    switch (selectedOptionTime) {
      case "1":
        timeTypeText = "morning";
        break;
      case "2":
        timeTypeText = "afternoon";
        break;
      case "3":
        timeTypeText = "evening";
        break;
      default:
        timeTypeText = "unknown time";
    }

    const placeElement = document.getElementById("chosen-place-type");
    const timeElement = document.getElementById("chosen-time-type");

    if (placeElement && timeElement) {
      placeElement.textContent = selectedOptionPlace;
      timeElement.textContent = timeTypeText;
    } else {
      console.error("Elements with the given IDs are missing!");
    }

    document.querySelector(".fifth-window").classList.add("hidden");
    document.querySelector(".six-window").classList.remove("hidden");
  });
}

const windows = [
  document.querySelector(".input-container"),
  document.querySelector(".second-window"),
  document.querySelector(".third-window"),
  document.querySelector(".fourth-window"),
  document.querySelector(".fifth-window"),
  document.querySelector(".six-window"),
];

document.querySelectorAll(".arrow").forEach((arrowButton) => {
  arrowButton.addEventListener("click", () => {
    navigateBack();
  });
});

function navigateBack() {
  const currentIndex = windows.findIndex(
    (win) => !win.classList.contains("hidden")
  );

  if (currentIndex > 0) {
    windows[currentIndex].classList.add("hidden");
    windows[currentIndex - 1].classList.remove("hidden");
  }
}
