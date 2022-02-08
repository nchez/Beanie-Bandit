/* DOM SELECTORS -- EVENT LISTENERS */
const canvas = document.querySelector("#canvas");
const pressedKeys = {};
document.addEventListener("keydown", (e) => (pressedKeys[e.key] = true));
document.addEventListener("keyup", (e) => (pressedKeys[e.key] = false));

const movementDisplay = document.querySelector("#movement");

// document.addEventListener("keyup", movementHandler); // stretch goals might be useful

/* GAME STATE / CANVAS RENDERING STUFF */
// setup the renderer
const ctx = canvas.getContext("2d");

// set canvas size to be the same as window
// after the window computes -- set canvas to be actual size of space it takes up
canvas.setAttribute("height", getComputedStyle(canvas)["height"]);
canvas.setAttribute("width", getComputedStyle(canvas)["width"]);

// Initialize Images and Assign to Variables

let img1 = new Image();
img1.src = "./Assets/beanies/beanie1.png";
img1.onload = function () {};

let img2 = new Image();
img2.src = "./Assets/beanies/beanie2.png";
img2.onload = function () {};
let img3 = new Image();
img3.src = "./Assets/beanies/beanie3.png";
img3.onload = function () {};
let img4 = new Image();
img4.src = "./Assets/beanies/beanie4.png";
img4.onload = function () {};
let img5 = new Image();
img5.src = "./Assets/beanies/beanie5.png";
img5.onload = function () {};
let img6 = new Image();
img6.src = "./Assets/beanies/beanie6.png";
img6.onload = function () {};
let img7 = new Image();
img7.src = "./Assets/beanies/beanie7.png";
img7.onload = function () {};
let img8 = new Image();
img8.src = "./Assets/beanies/beanie8.png";
img8.onload = function () {};
let img9 = new Image();
img9.src = "./Assets/beanies/beanie9.png";
img9.onload = function () {};
let img10 = new Image();
img10.src = "./Assets/beanies/beanie10.png";
img10.onload = function () {};
let img11 = new Image();
img11.src = "./Assets/beanies/beanie11.png";
img11.onload = function () {};
let img12 = new Image();
img12.src = "./Assets/beanies/beanie12.png";
img12.onload = function () {};

let banditimg = new Image();
banditimg.src = "./Assets/bandit_right.png";
// ------------------------------------------

// Abstraction for Crawler class

class Crawler {
  constructor(x, y, width, height, image, speed) {
    (this.x = x),
      (this.y = y),
      (this.width = width),
      (this.height = height),
      (this.speed = speed);
    this.image = image;
  }
  render() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

// Create beanie and bandit classes

let beanie1 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img1,
  5
);
let beanie2 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img2,
  5
);
let beanie3 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img3,
  5
);
let beanie4 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img4,
  5
);
let beanie5 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img5,
  5
);
let beanie6 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img6,
  5
);
let beanie7 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img7,
  5
);
let beanie8 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img8,
  5
);
let beanie9 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img9,
  5
);
let beanie10 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img10,
  5
);
let beanie11 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img11,
  5
);
let beanie12 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img12,
  5
);

let bandit = new Crawler(
  canvas.width / 2 - 75,
  canvas.height - 175,
  150,
  150,
  banditimg,
  15
);
// ------------------------------------------

// Game Timer and Incrementer

let gameTime = 60;

function gameTimer() {
  gameTime--;
}

setInterval(gameTimer, 1000);

// Randomize and move beanies down

let beanieArray = [
  beanie1,
  beanie2,
  beanie3,
  beanie4,
  beanie5,
  beanie6,
  beanie7,
  beanie8,
  beanie9,
  beanie10,
  beanie11,
  beanie12,
];

function shuffle(arr) {
  let currIndex = arr.length;
  while (currIndex != 0) {
    randIndex = Math.floor(Math.random() * currIndex);
    currIndex--;
    [arr[currIndex], arr[randIndex]] = [arr[randIndex], arr[currIndex]];
  }
  return arr;
}
// Bandit Movement and Initialization

banditimg.onload = bandit.render();

function movementHandler() {
  if (pressedKeys.a) {
    bandit.x -= bandit.speed;
    bandit.image.src = "./Assets/bandit_left.png";
  }
  if (pressedKeys.d) {
    bandit.x += bandit.speed;
    bandit.image.src = "./Assets/bandit_right.png";
  }
  //   if (pressedKeys.s) hero.y += speed;
  //   if (pressedKeys.w) hero.y -= speed;
}
//

// Game Countdown Circle

function timerCircle() {
  ctx.beginPath();
  ctx.arc(canvas.width / 2, 50, 40, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "red";
  ctx.stroke();
}

function timerCountdown() {
  ctx.font = "50px serif";
  ctx.fillStyle = "chartreuse";
  ctx.fillText(gameTime, canvas.width / 2 - 25, 65);
}

// Game Loop

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  movementHandler();
  bandit.render();
  timerCircle();
  timerCountdown();
}

setInterval(gameLoop, 60);

// setInterval(() => {
//   beanie1.render();
//   beanie1.x = Math.floor(Math.random() * canvas.width);
// }, 1000);

function detectHatHit() {
  // just one conditional needed -- if hat
}
