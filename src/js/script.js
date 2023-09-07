const carouselButtons = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");
const description = document.querySelector(".description");
const imgs = document.getElementById("img")
const imagesText = [
  " The Last of Us é uma série distópica da HBO baseada na franquia de jogos de videogame de mesmo nome criada por Neil Druckmann. O drama narra um futuro pandêmico que foi devastador para humanidade, deixando os seres humanos à beira da extinção",
  "A história segue Joel, um sobrevivente que é contratado para escoltar Ellie, uma adolescente imune à doença, por todo o país em busca de uma cura.",
  "Além dos protagonistas Joel e Ellie, a série apresenta uma variedade de personagens complexos e interessantes. Entre eles estão Tess (a direita), a parceira de Joel em missões anteriores, Marlene, líder dos Vaga-Lumes, um grupo de resistência contra a opressão do governo, e Bill, um sobrevivente solitário que vive em uma cidade abandonada.",
  "A série conta com um elenco talentoso e aclamado, incluindo Pedro Pascal (conhecido por seu papel em The Mandalorian) como Joel, Bella Ramsey (Game of Thrones) como Ellie, e Gabriel Luna (Agents of S.H.I.E.L.D) como Tommy, irmão de Joel.",
  "A série de The Last of Us é produzida pela HBO e está sendo desenvolvida por Craig Mazin, criador de Chernobyl, e Neil Druckmann, criador da franquia de jogos. A dupla tem trabalhado de perto para garantir que a adaptação seja fiel à história e aos personagens originais.",
  "A série de The Last of Us tem gerado muita expectativa entre fãs dos jogos e entusiastas de séries. A combinação do enredo envolvente, personagens cativantes e talentoso elenco sugere que a série tem tudo para ser um sucesso tanto entre os fãs como entre novos espectadores.",
];

let activeImage = document.querySelector(".active");
let selectedButton = document.querySelector(".selected");
let currentIndex = 0;

showBackgroundImage(0);

carouselButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        showBackgroundImage(index);
    });
});

function showBackgroundImage(index) {
    currentIndex = index;
    images.forEach((image,  i) => {
        if (i === index) {
            image.classList.add("active");
            carouselButtons[i].classList.add("selected");
        } else {
            image.classList.remove("active");
            carouselButtons[i].classList.remove("selected");
        }
    });
    description.textContent = imagesText[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showBackgroundImage(currentIndex);
}

setInterval(nextImage, 18000);
