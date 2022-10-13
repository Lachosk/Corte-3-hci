let bolas = [];
let cantBolas = 30;
let puntaje = 0;
let letras = ["I","E","N","S","T","F","J","P"]
let vidElement;
let playBtn;
let stopBtn;
let t;

//funciones del juego
let presionado = "";
let message = "";
let nivel;



var balls = [];
var total = 30;
var quizs = ["HELLO", "SUNDAY", "ONE", "TWO", "NO", "YES"];
var words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "BS", "BS", "BS", "BS"];
var selected = "";
var mesg = "";
var quiz;










const tipados = [{
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




  for (var i=0; i<total; i++) {
		balls[i] = new Ball();
	}
  let objec = tipados[Math.floor(Math.random() * tipados.length)];
	 quiz = objec.personalidad;


  
/*  for (let i = 0; i < cantBolas; i++) {
    bolas[i] = new Bola();
    
  }
  let objec = tipados.length;
  nivel = random(objec.personalidad)*/
}

function draw() {
  background(220);

  fill(0);
  text("presiona en los botones para" + " "+ "empezar/pausar el video",20,100);



  for (var i=0; i<balls.length; i++) {
		balls[i].update();
		balls[i].render();
	}
 fill(255);
  textSize(18);
  textStyle(BOLD);
  textFont("Helvetica");
  fill(random(255),0,0)
  text("Quiz : " + quiz, 20, 150);
  text("Selected: " + selected, 20, 180);
  text(""+mesg, 20, 220);






  /*
  for (let i = 0; i < bolas.length; i++) {
     bolas[i].render();
     bolas[i].update();
    
  }
  text("Presionada:"+ presionado,20,150);
  text(""+message,20,50);3

  //ellipse(50,50,100);
*/
}
/*
function Bola(){
  this.size = 20;
  this.speed = 1;
  this.r = random(255);
  this.g = random(255);
  this.b = random (255);
    this.posy = random(-height,-20);
    this.posx = random(20,width-20);
    this.t = random(letras)
  

  this.render = function () {
    fill(color(this.r,this.g,this.b));
    noStroke();
    ellipse(this.posx,this.posy,this.size);
    textSize(22);
    text(this.t, this.x+5, this.y-10);
    
    
  }
 
  this.update = function () {
    this.x = this.x + random(-1,1);
    this.y += this.speed;
    
  }

}

function mousePressed() {
  for(let j=0; j<cantBolas; j++) {
    let d = dist(mouseX, mouseY, bolas[j].x, bolas[j].y);
    if (d <= bolas[j].size+1) {
        if ( bolas[j].t=="BS") {
          presionado = presionado.substring(0,presionado.length-1);
        }
        else {
          presionado += bolas[j].t;
        }
    }
  }
  if (presionado == nivel) {
    presionado = "";
    mesg = 
      "Congratulation!!!";
    nivel = random(objec.personalidad);
  }

}


*/

function Ball() {
	this.size = 20;
	this.speed = 1;
  this.r = random(255);
	this.g = random(255);
	this.b = random(255);
	
	this.init = function() {
		this.y = random(-height, -20);
		this.x =random(20,width-20);
		this.t = random(letras);
};

this.render = function() {
  fill(color(this.r, this.g, this.b));
  noStroke();
  ellipse (this.x, this.y, this.size, this.size);
  textSize(22);
  text(this.t, this.x+5, this.y-10);
};

this.update = function() {
  this.x = this.x + random(-1,1); // Jiggling
  this.y += this.speed;
  if (this.y- this.size>height) { 
    this.init();
  }
};
this.init();
}
function mousePressed() {
for(var j=0; j<total; j++) {
  var d = dist(mouseX, mouseY, balls[j].x, balls[j].y);
  if (d <= balls[j].size+1) {
      if ( balls[j].t=="BS") {
        selected = selected.substring(0,selected.length-1);
      }
      else {
        selected += balls[j].t;
      }
  }
}
if (selected == quiz) {
  selected = "";
  mesg = 
    "Congratulation!!!";
    let objec = tipados[Math.floor(Math.random() * tipados.length)];
    quiz = objec.personalidad;
}

}

function playVideo(){
  vidElement.play();
}


function pauseVideo(){
  vidElement.pause();
}
