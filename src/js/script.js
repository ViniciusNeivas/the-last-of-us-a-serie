const carouselButtons = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");

let selectedButton = document.querySelector(".selected");
let activeImage = document.querySelector(".active");

carouselButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    disableSelectedButton();

    activateSelectedButton(button);

    hideActiveImage();

    showBackgroundImage(index);
  });
});

function showBackgroundImage(index) {
  images[index].classList.add("active");
  activeImage = images[index];
}

function activateSelectedButton(button) {
  button.classList.add("selected");
  selectedButton = button;
}

function hideActiveImage() {
  if (activeImage) {
    activeImage.classList.remove("active");
  }
}

function disableSelectedButton() {
  if (selectedButton) {
    selectedButton.classList.remove("selected");
  }
}
