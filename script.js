const inputContainer = document.querySelector(".input-container");
const secondWindow = document.querySelector(".second-window");
const thirdWindow = document.querySelector(".third-window");
const fourthWindow = document.querySelector(".fourth-window");
const fifthWindow = document.querySelector(".fifth-window");
const sixWindow = document.querySelector(".six-window");

const enterButton = document.querySelector(".button");

const yesButton = document.querySelector(".yes-button");
const noButton = document.querySelector(".no-button");
const maybeButton = document.querySelector(".maybe-button");

const thirdNextButton = document.querySelector(".third-window .next-button");
const fourthNextButton = document.querySelector(".fourth-window .next-button");
const fifthNextButton = document.querySelector(".fifth-window .next-button");

const cancelButtons = document.querySelectorAll(".cancel-button");
const fourthCancelButton = document.querySelector(".fourth-cancel-button");

const inputName = document.querySelector(".input");
const inputThird = document.querySelector(".input-third");
const inputFourth = document.querySelector(".input-fourth");
const inputFifth = document.querySelector(".input-fifth");

const backButtons = document.querySelectorAll(".back-button");

const finalButton = document.querySelector(".final-button");
const finalInfo = document.querySelector(".final-info");
const loveScreen = document.querySelector(".love-screen");
const backToFinalButton = document.querySelector(".back-to-final-button");

const chosenDateType = document.getElementById("chosen-date-type");
const chosenPlaceType = document.getElementById("chosen-place-type");
const finalPlaceType = document.getElementById("final-place-type");
const chosenTimeType = document.getElementById("chosen-time-type");

// Картинка для кнопки No
const imageElement = document.createElement("img");
imageElement.src = "./img/sad-dog.png";
imageElement.classList.add("hidden");
document.body.appendChild(imageElement);

function hideAllWindows() {
  inputContainer.classList.add("hidden");
  secondWindow.classList.add("hidden");
  thirdWindow.classList.add("hidden");
  fourthWindow.classList.add("hidden");
  fifthWindow.classList.add("hidden");
  sixWindow.classList.add("hidden");
}

function showWindow(window) {
  hideAllWindows();
  window.classList.remove("hidden");
}

function checkInput() {
  const input = document.querySelector(".input").value.trim().toLowerCase();

 // Імена, які можна вводити
 const allowedNames = ["vladic", "vlad", "vladislav", "влад", "владік", "владислав"];

  if (input === "") {
    alert("Please fill in the field.");
  } else if (allowedNames.includes(input)) {
    inputContainer.classList.add("hidden");
    thirdWindow.classList.add("hidden");
    secondWindow.classList.remove("hidden");
  } else {
    alert("You are not my date, sorry((");
  }
}

if (enterButton) {
  enterButton.addEventListener("click", checkInput);
}

// Enter на клавіатурі
document.addEventListener("keydown", (event) => {
  if (!inputContainer.classList.contains("hidden") && event.key === "Enter") {
    checkInput();
  }
});

// Кнопка Yes
if (yesButton) {
  yesButton.addEventListener("click", () => {
    showWindow(thirdWindow);
  });
}

// Кнопка No
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
      imageElement.classList.remove("full-screen");
    }, 3000);

    showWindow(inputContainer);
  });
}

// Кнопка Maybe
if (maybeButton) {
  maybeButton.addEventListener("click", () => {
    alert("Incorrect answer");
    showWindow(inputContainer);
  });
}

// Кнопки Cancel
cancelButtons.forEach((cancelButton) => {
  cancelButton.addEventListener("click", () => {
    if (inputThird) inputThird.selectedIndex = 0;
    if (inputFifth) inputFifth.selectedIndex = 0;

    showWindow(inputContainer);
  });
});

// Cancel у четвертому вікні
if (fourthCancelButton) {
  fourthCancelButton.addEventListener("click", () => {
    inputFourth.value = "";
    inputFourth.focus();

    showWindow(inputContainer);
  });
}

// Стрілки назад
backButtons.forEach((backButton) => {
  backButton.addEventListener("click", () => {
    const currentWindow = backButton.closest(
      ".second-window, .third-window, .fourth-window, .fifth-window, .six-window",
    );

    if (!currentWindow) return;

    if (currentWindow.classList.contains("second-window")) {
      showWindow(inputContainer);
    } else if (currentWindow.classList.contains("third-window")) {
      showWindow(secondWindow);
    } else if (currentWindow.classList.contains("fourth-window")) {
      showWindow(thirdWindow);
    } else if (currentWindow.classList.contains("fifth-window")) {
      showWindow(fourthWindow);
    } else if (currentWindow.classList.contains("six-window")) {
      loveScreen.classList.add("hidden");
      finalInfo.classList.remove("hidden");
      sixWindow.classList.remove("white-bg");

      showWindow(fifthWindow);
    }
  });
});

// Перехід з третього вікна на четверте
if (thirdNextButton) {
  thirdNextButton.addEventListener("click", () => {
    const selectedOption = inputThird.value;

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

    chosenDateType.textContent = dateTypeText;
    showWindow(fourthWindow);
  });
}

// Перехід з четвертого вікна на пʼяте
if (fourthNextButton) {
  fourthNextButton.addEventListener("click", () => {
    const selectedPlace = inputFourth.value.trim();

    if (!selectedPlace) {
      alert("Please enter a place!");
      return;
    }

    chosenPlaceType.textContent = selectedPlace;
    showWindow(fifthWindow);
  });
}

// Перехід з пʼятого вікна на фінальне
if (fifthNextButton) {
  fifthNextButton.addEventListener("click", () => {
    const selectedTime = inputFifth.value;
    const selectedPlace = inputFourth.value.trim();

    if (!selectedTime) {
      alert("Please choose a time!");
      return;
    }

    if (!selectedPlace) {
      alert("Please enter a place!");
      showWindow(fourthWindow);
      return;
    }

    let timeTypeText = "";

    switch (selectedTime) {
      case "1":
        timeTypeText = "Morning";
        break;
      case "2":
        timeTypeText = "Afternoon";
        break;
      case "3":
        timeTypeText = "Evening";
        break;
    }

    finalPlaceType.textContent = selectedPlace;
    chosenTimeType.textContent = timeTypeText;

    finalInfo.classList.remove("hidden");
    loveScreen.classList.add("hidden");
    sixWindow.classList.remove("white-bg");

    showWindow(sixWindow);
  });
}

// Фінальна кнопка з картинкою
if (finalButton) {
  finalButton.addEventListener("click", () => {
    finalInfo.classList.add("hidden");
    loveScreen.classList.remove("hidden");
    sixWindow.classList.add("white-bg");
  });
}

// Стрілка назад з картинки на фінальний текст
if (backToFinalButton) {
  backToFinalButton.addEventListener("click", () => {
    loveScreen.classList.add("hidden");
    finalInfo.classList.remove("hidden");
    sixWindow.classList.remove("white-bg");
  });
}
