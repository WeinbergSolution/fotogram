let pictureArray = [
  {
    pictureSrc: "./img/image1.jpeg",
    titel: "Sonnenuntergang",
    description: "Visualisierung meiner Idee Livepetz.",
  },
  {
    pictureSrc: "./img/image2.jpeg",
    titel: "Sonnenuntergang",
    description: "Visualisierung meiner Idee Livepetzl.",
  },
  {
    pictureSrc: "./img/image3.jpeg",
    titel: "Sonnenuntergang",
    description: "Greenscren Bild für OBS selbst erstellt.",
  },
  {
    pictureSrc: "./img/image4.jpeg",
    titel: "Sonnenuntergang",
    description: "Bild für eine Kindergeschichte für die Idee Dreambook.",
  },
  {
    pictureSrc: "./img/image5.jpeg",
    titel: "Sonnenuntergang",
    description: "Ein wesen aus einer anderen Welt, sind sie schon hier?",
  },
  {
    pictureSrc: "./img/image6.jpeg",
    titel: "Sonnenuntergang",
    description: "Ein Mann mit einem riesen Dingsbums.",
  },
  {
    pictureSrc: "./img/image7.jpeg",
    titel: "Sonnenuntergang",
    description: "Snake Alert.",
  },
  {
    pictureSrc: "./img/image8.jpeg",
    titel: "Sonnenuntergang",
    description: "Bart Simpson in real live.",
  },
  {
    pictureSrc: "./img/image9.jpeg",
    titel: "Sonnenuntergang",
    description: "The Walkin Dead alive.",
  },
  {
    pictureSrc: "./img/image10.jpeg",
    titel: "Sonnenuntergang",
    description: "Papaplatte ript sein Cutter.",
  },
  {
    pictureSrc: "./img/image11.jpeg",
    titel: "Sonnenuntergang",
    description:
      "Wikki eine Idee von mir um Kindern zugang zu LLMS Barriererfrei zugeben.",
  },
  {
    pictureSrc: "./img/image12.jpeg",
    titel: "Sonnenuntergang",
    description: "Cat lost Money.",
  },
  {
    pictureSrc: "./img/image13.jpeg",
    titel: "Sonnenuntergang",
    description: "Colles Hörnchen on the Road.",
  },
  {
    pictureSrc: "./img/image14.jpeg",
    titel: "Sonnenuntergang",
    description: "Pepe Wallstreet Money Money Money",
  },
  {
    pictureSrc: "./img/image15.jpeg",
    titel: "Sonnenuntergang",
    description: "Nie mals verkaufen hört IHR!!",
  },
  {
    pictureSrc: "./img/image16.jpeg",
    titel: "Sonnenuntergang",
    description: "Junge spielt Fußball erstellt für eine Kindergeschichte.",
  },
  {
    pictureSrc: "./img/image17.jpeg",
    titel: "Sonnenuntergang",
    description: "Putin in Pokemoncard Style",
  },
  {
    pictureSrc: "./img/image18.jpeg",
    titel: "Sonnenuntergang",
    description: "Trump in Pokemoncard Style.",
  },
  {
    pictureSrc: "./img/image19.jpeg",
    titel: "Sonnenuntergang",
    description: "Ich hier du Da",
  },
  {
    pictureSrc: "./img/image20.jpeg",
    titel: "Sonnenuntergang",
    description: "Lets Game Bitch",
  },
];

let currentIndex = 0; // Speichert, welches Bild gerade im Popup ist

function generatePictures() {
  const container = document.getElementById("picture_container");
  container.innerHTML = "";

  for (let i = 0; i < pictureArray.length; i++) {
    let item = pictureArray[i];
    container.innerHTML += `
      <div class="pic-card" onclick="openPopup(${i})">
        <img src="${item.pictureSrc}" alt="${item.titel}">
      </div>
    `;
  }
}

function openPopup(index) {
  currentIndex = index; // Globalen Index setzen
  let item = pictureArray[index];

  // Inhalte befüllen
  document.getElementById("popup_img").src = item.pictureSrc;
  document.getElementById("popup_title").innerText = item.titel;
  document.getElementById("popup_description").innerText = item.description;

  // Zähler aktualisieren (z.B. 1/12)
  document.getElementById("index_number").innerText =
    currentIndex + 1 + " / " + pictureArray.length;

  document.getElementById("popup_overlay").style.display = "flex";
  document.body.style.overflow = "hidden";
}

// Funktion für die Pfeile (-1 für zurück, 1 für vor)
function changePicture(direction) {
  currentIndex = currentIndex + direction;

  // Endlos-Schleife: Wenn man beim letzten Bild "vor" drückt, kommt man zum ersten
  if (currentIndex >= pictureArray.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = pictureArray.length - 1;
  }

  openPopup(currentIndex); // Popup mit neuem Index neu befüllen
}

function closePopup() {
  document.getElementById("popup_overlay").style.display = "none";
  document.body.style.overflow = "auto";
}

generatePictures();
