let splash = document.querySelector(".splash-container");
let play = document.querySelector(".play-container");
let gameover = document.querySelector(".gameover-container");

startBttn.addEventListener("click", () => {
  play.style.display = "flex";
  splash.style.display = "none";
  gameover.style.display = "none";
});
