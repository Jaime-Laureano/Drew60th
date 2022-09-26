let splash = document.querySelector(".splash-container");
let play = document.querySelector(".play-container");
let gameover = document.querySelector(".gameover-container");

let ballHeight = 75;
let ballWidth = 75;

let drewHeight = 150;
let drewWidth = 200;

let golfArr = [];
let drewFaves = [];

function preload() {
  bg = loadImage("/images/game-play-bg.jpg");
  ball = loadImage("/images/golfball.png");
  mausie = loadImage("/images/mausie.png");
  drew = loadImage("/images/drew-cart.png");
  rolex = loadImage("/images/rolex.png");
  balvenie = loadImage("/images/balvenie.png");
  tesla = loadImage("/images/tesla.png");
  flyingV = loadImage("/images/flyingV.png");
  curry = loadImage("/images/curry.png");
  safari = loadImage("/images/safari.png");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bg);
  image(
    drew,
    mouseX - drewWidth / 2,
    mouseY - drewHeight / 2,
    drewWidth,
    drewHeight
  );

  image(ball, 0, 0, ballWidth, ballHeight);

  image(mausie, 100, 100, 100, 150);
  image(rolex, 350, 350, 100, 150);
  image(balvenie, 500, 500, 100, 150);
  image(tesla, 600, 600, 200, 150);
  image(flyingV, 700, 400, 150, 150);
  image(curry, 800, 300, 100, 100);
  image(safari, 800, 100, 125, 125);
}

startBttn.addEventListener("click", () => {
  play.style.display = "flex";
  splash.style.display = "none";
  gameover.style.display = "none";
});
