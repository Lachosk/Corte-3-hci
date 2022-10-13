let bolas = [];
let puntaje = 0;
let letras = ["I","E","N","S","T","F","J","P"]
let vidElement;
let playBtn;
let stopBtn;
let tipados = [{
  puntaje: 0,
  personalidad: "INTJ",
},
{
  puntaje: 0,
  personalidad: "INTP"
},
{
  puntaje:0,
  personalidad: "ENTJ"
},
{
  puntaje:0,
  personalidad: "ENTP"
},
{
  puntaje:0,
  personalidad: "INFJ"
},
{
  puntaje:0,
  personalidad: "INFP"
},
{
  puntaje:0,
  personalidad: "ENFJ"
},
{
  puntaje:0,
  personalidad: "ENFP"
},
{
  puntaje:0,
  personalidad: "ISTJ"
},
{
  puntaje:0,
  personalidad: "ISFJ"
},
{
  puntaje:0,
  personalidad: "ESTJ"
},
{
  puntaje:0,
  personalidad: "ESFJ"
},
{
  puntaje:0,
  personalidad: "ISTP"
},
{
  puntaje:0,
  personalidad: "ISFP"
},
{
  puntaje:0,
  personalidad: "ESTP"
},
{
  puntaje:0,
  personalidad: "ESFP"
}
];


function setup() {
  createCanvas(1920, 1080);
  vidElement = createVideo("videos/video1.mp4");
  vidElement.position(200,50);
  vidElement.size(1000);

  playBtn = createButton("playvideo");
  playBtn.position(30,40);
  playBtn.mouseClicked(playVideo);

  stopBtn = createButton("pausevideo");
  stopBtn.position(150,40);
  stopBtn.mouseClicked(pauseVideo);
  
  
 
}

function draw() {
  background(220);

  fill(0);
  text("presiona en los botones para" + " "+ "empezar/pausar el video",20,100);
  //ellipse(50,50,100);

}

function playVideo(){
  vidElement.play();
}


function pauseVideo(){
  vidElement.pause();
}