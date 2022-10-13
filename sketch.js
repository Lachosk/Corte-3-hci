let bolas = [];
let puntaje = 0;
let letras = ["I", "E", "N", "S", "T", "F", "J", "P"]
let vidElement;
let playBtn;
let itsStop;
let screen = 1;
let placeholder;
let tipados = [{
    puntaje: 0,
    personalidad: "INTJ",
  },
  {
    puntaje: 0,
    personalidad: "INTP"
  },
  {
    puntaje: 0,
    personalidad: "ENTJ"
  },
  {
    puntaje: 0,
    personalidad: "ENTP"
  },
  {
    puntaje: 0,
    personalidad: "INFJ"
  },
  {
    puntaje: 0,
    personalidad: "INFP"
  },
  {
    puntaje: 0,
    personalidad: "ENFJ"
  },
  {
    puntaje: 0,
    personalidad: "ENFP"
  },
  {
    puntaje: 0,
    personalidad: "ISTJ"
  },
  {
    puntaje: 0,
    personalidad: "ISFJ"
  },
  {
    puntaje: 0,
    personalidad: "ESTJ"
  },
  {
    puntaje: 0,
    personalidad: "ESFJ"
  },
  {
    puntaje: 0,
    personalidad: "ISTP"
  },
  {
    puntaje: 0,
    personalidad: "ISFP"
  },
  {
    puntaje: 0,
    personalidad: "ESTP"
  },
  {
    puntaje: 0,
    personalidad: "ESFP"
  }
];

function preload() {

  placeholder = loadImage('./public/images/elplaceholder.jpg');
}

function setup() {
  createCanvas(1920, 1080);

  setupForScreen();



  itsStop = true;

}

function draw() {
  background(220);


  switch (screen) {
    case 1:
      image(placeholder, 0, 0);
      break;

    case 2:
      fill(0);
      text("presiona en el boton para empezar/pausar el video", 640, 750);
      break;
  }








}

function playVideo() {

  if (!itsStop) {
    vidElement.pause();
    itsStop = !itsStop;
    return
  }

  vidElement.play();
  itsStop = !itsStop;
  return
}


function setupForScreen() {


  switch (screen) {
    case 1:




      break;

    case 2:


      vidElement = createVideo("./public/video/16 personalities as funny out of context movie scenes (MBTI memes) (2).mp4");

      break;

    case 3:


      //checkNewScreen();
      vidElement = createVideo("./public/video/bigchungus.mp4");

      break;
  }

  if (screen > 1) {
    vidElement.position(200, 50);
    vidElement.size(1000);
    playBtn = createButton("reproducir / pausar");
    playBtn.position(700, 700);
    playBtn.mouseClicked(playVideo);
  }



}

function checkNewScreen() {

  if (vidElement != undefined) {
    playBtn.hide();
    itsStop = true;
    vidElement.hide();
    vidElement.pause();
  }
}


// esto se borra despues de hacer los cambios de pantalla correctamente
function mousePressed() {
  if (dist(mouseX, mouseY, 0, 0) < 500) {
    screen += 1;
    if (screen === 4) {
      screen = 1
    }

    checkNewScreen();
    setupForScreen();
    console.log(screen);
  }
}