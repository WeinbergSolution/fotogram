let pictureArray = [
  {
    pictureSrc: "./img/image1.jpeg",
    titel: "Idee in der Entwicklung",
    description: "Visualisierung meiner Idee Livepetz.",
  },
  {
    pictureSrc: "./img/image2.jpeg",
    titel: "Idee in der Entwicklung",
    description: "Visualisierung meiner Idee Livepetzl.",
  },
  {
    pictureSrc: "./img/image3.jpeg",
    titel: "Greenscren Bild für OBS ",
    description: "Greenscren Bild für OBS selbst erstellt.",
  },
  {
    pictureSrc: "./img/image4.jpeg",
    titel: "Bild Umarmende Kinder",
    description: "Bild für eine Kindergeschichte für die Idee Dreambook.",
  },
  {
    pictureSrc: "./img/image5.jpeg",
    titel: "Bild ein wesen aus eienr anderen Welt",
    description: "Ein wesen aus einer anderen Welt, sind sie schon hier?",
  },
  {
    pictureSrc: "./img/image6.jpeg",
    titel: "Mann und ein riesen Tier",
    description: "Ein Mann mit einem riesen Dingsbums.",
  },
  {
    pictureSrc: "./img/image7.jpeg",
    titel: "Bild riesen Schlange",
    description: "Snake Alert.",
  },
  {
    pictureSrc: "./img/image8.jpeg",
    titel: "Bart Simpson als Mensch",
    description: "Bart Simpson in real live.",
  },
  {
    pictureSrc: "./img/image9.jpeg",
    titel: "echt aussehender Zombie",
    description: "The Walkin Dead alive.",
  },
  {
    pictureSrc: "./img/image10.jpeg",
    titel: "Streamer Papaplatte Karikatur",
    description: "Papaplatte ript sein Cutter.",
  },
  {
    pictureSrc: "./img/image11.jpeg",
    titel: "Bild Wikki Prototyp elektrisches Gerät",
    description:
      "Wikki eine Idee von mir um Kindern zugang zu LLMS Barriererfrei zugeben.",
  },
  {
    pictureSrc: "./img/image12.jpeg",
    titel: "Bild Weinende Katze",
    description: "Cat lost Money.",
  },
  {
    pictureSrc: "./img/image13.jpeg",
    titel: "Eichhörnchen das Mountenbike färt",
    description: "Colles Hörnchen on the Road.",
  },
  {
    pictureSrc: "./img/image14.jpeg",
    titel: "Bild Pepe Wallstreet",
    description: "Pepe Wallstreet Money Money Money",
  },
  {
    pictureSrc: "./img/image15.jpeg",
    titel: "Bild Grüner Frosch Pepe",
    description: "Nie mals verkaufen hört IHR!!",
  },
  {
    pictureSrc: "./img/image16.jpeg",
    titel: "Bild Kind spielt Fußball",
    description: "Junge spielt Fußball erstellt für eine Kindergeschichte.",
  },
  {
    pictureSrc: "./img/image17.jpeg",
    titel: "Bild Putin Pokemoncard",
    description: "Putin in Pokemoncard Style",
  },
  {
    pictureSrc: "./img/image18.jpeg",
    titel: "Bild Trump Pokemoncard",
    description: "Trump in Pokemoncard Style.",
  },
  {
    pictureSrc: "./img/image19.jpeg",
    titel: "Bild",
    description: "Ich hier du Da",
  },
  {
    pictureSrc: "./img/image20.jpeg",
    titel: "Bild Gamendes Eichhörnchen",
    description: "Lets Game Bitch",
  },
];

let currentIndex = 0;

function generatePictures() {
  const container = document.getElementById("picture_container");
  container.innerHTML = "";

  for (let i = 0; i < pictureArray.length; i++) {
    let item = pictureArray[i];
    container.innerHTML += `
      <button type="button" class="pic-card" onclick="openPopup(${i})" aria-label="Bild ansehen: ${item.titel}">
        <figure>
          <img src="${item.pictureSrc}" alt="${item.titel}">
        </figure>
      </button>
    `;
  }
}

function openPopup(index) {
  currentIndex = index;
  let item = pictureArray[index];
  document.getElementById("popup_img").src = item.pictureSrc;
  document.getElementById("popup_img").alt = item.titel;
  document.getElementById("popup_title").innerText = item.titel;
  document.getElementById("popup_description").innerText = item.description;
  document.getElementById("index_number").innerText =
    currentIndex + 1 + " / " + pictureArray.length;

  document.getElementById("popup_overlay").style.display = "flex";
  document.body.style.overflow = "hidden";
  setTimeout(() => document.querySelector(".close-btn").focus(), 50);
}

function changePicture(direction) {
  currentIndex = currentIndex + direction;

  if (currentIndex >= pictureArray.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = pictureArray.length - 1;
  }

  openPopup(currentIndex);
}

function closePopup() {
  document.getElementById("popup_overlay").style.display = "none";
  document.body.style.overflow = "auto";
}
window.addEventListener("keydown", function (event) {
  if (document.getElementById("popup_overlay").style.display === "flex") {
    if (event.key === "Escape") closePopup();
    if (event.key === "ArrowRight") changePicture(1);
    if (event.key === "ArrowLeft") changePicture(-1);
  }
});
generatePictures();
