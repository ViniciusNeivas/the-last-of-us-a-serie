const carouselButtons = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");
const imagesText = [
  " The Last of Us é uma série distópica da HBO baseada na franquia de jogos de videogame de mesmo nome criada por Neil Druckmann. O drama narra um futuro pandêmico que foi devastador para humanidade, deixando os seres humanos à beira da extinção", 
"ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd", 
"jjjjj", 
"hhhhhh", 
"kkkkk",
"llllll"
]

let selectedButton = document.querySelector(".selected");
let activeImage = document.querySelector(".active");

showBackgroundImage(0);

carouselButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    disableSelectedButton();
    
    activateSelectedButton(button);
    
    showBackgroundImage(index);
   
    hideActiveImage();
    
  });
});

function showBackgroundImage(index) {
  images[index].classList.add("active");
  activeImage = images[index];
  const description = document.querySelector(".description");
  description.textContent = imagesText[index];
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
