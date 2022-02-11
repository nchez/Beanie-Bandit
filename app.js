/* Oliver Tree Audio */
let myAudio = document.getElementById("myAudio");

function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
}

/* DOM SELECTORS -- EVENT LISTENERS */
const startScreen = document.querySelector("#start-screen");
const startButton = document.querySelector("#start-button");
const highScoreLabel = document.querySelector("#score");
const highScoreDiv = document.querySelector("#high-score");

const canvas = document.querySelector("#canvas");
const pressedKeys = {};
document.addEventListener("keydown", (e) => (pressedKeys[e.key] = true));
document.addEventListener("keyup", (e) => (pressedKeys[e.key] = false));
const resetButton = document.getElementById("btm-right");

// set canvas size to be the same as window
// after the window computes -- set canvas to be actual size of space it takes up
setTimeout(() => {
  canvas.setAttribute("height", getComputedStyle(canvas)["height"]);
  canvas.setAttribute("width", getComputedStyle(canvas)["width"]);
}, 50);

// document.addEventListener("keyup", movementHandler); // stretch goals might be useful

/* GAME STATE / CANVAS RENDERING STUFF */
// setup the renderer
const ctx = canvas.getContext("2d");

function setBackgroundSize() {
  document.getElementById("canvas").style.backgroundSize =
    canvas.width + "px " + canvas.height + "px";
}

// Initialize Images and Assign to Variables

let img1 = new Image();
img1.src = "./Assets/beanies/beanie1.png";
img1.onload = function () {};

//  Beanie Images
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

// Visor and Bandit Image
let img13 = new Image();
img13.src = "./Assets/visors/visor1.png";
img13.onload = function () {};
let img14 = new Image();
img14.src = "./Assets/visors/visor2.png";
img14.onload = function () {};
let img15 = new Image();
img15.src = "./Assets/visors/visor3.png";
img15.onload = function () {};
let img16 = new Image();
img16.src = "./Assets/visors/visor4.png";
img16.onload = function () {};
let img17 = new Image();
img17.src = "./Assets/visors/visor5.png";
img17.onload = function () {};
let img18 = new Image();
img18.src = "./Assets/visors/visor6.png";
img18.onload = function () {};
let img19 = new Image();
img19.src = "./Assets/visors/visor7.png";
img19.onload = function () {};

let rainbowBeanieImg = new Image();
rainbowBeanieImg.src = "./Assets/beanies/rainbowbeanie.png";
rainbowBeanieImg.onload = function () {};

let methaneImg = new Image();
methaneImg.src = "./Assets/methane.png";
methaneImg.onload = function () {};

let carbonDioxideImg = new Image();
carbonDioxideImg.src = "./Assets/carbondioxide.png";
carbonDioxideImg.onload = function () {};

let banditimg = new Image();
banditimg.src = "./Assets/bandit_right.png";
// ------------------------------------------

// "higher" functions
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function drawBox(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

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

class Visor extends Crawler {
  constructor(x, y, width, height, image, speed) {
    super(x, y, width, height, image, speed);
  }
}

// Create beanie, visor and bandit objects

let beanie1 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img1,
  getRandomInt(5, 10)
);
let beanie2 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img2,
  getRandomInt(5, 10)
);
let beanie3 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img3,
  getRandomInt(5, 10)
);
let beanie4 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img4,
  getRandomInt(5, 10)
);
let beanie5 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img5,
  getRandomInt(5, 10)
);
let beanie6 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img6,
  getRandomInt(5, 10)
);
let beanie7 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img7,
  getRandomInt(5, 10)
);
let beanie8 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img8,
  getRandomInt(5, 10)
);
let beanie9 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img9,
  getRandomInt(5, 10)
);
let beanie10 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img10,
  getRandomInt(5, 10)
);
let beanie11 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img11,
  getRandomInt(5, 10)
);
let beanie12 = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img12,
  getRandomInt(5, 10)
);

let visor1 = new Visor(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img13,
  getRandomInt(5, 10)
);
let visor2 = new Visor(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img14,
  getRandomInt(5, 10)
);
let visor3 = new Visor(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img15,
  getRandomInt(5, 10)
);
let visor4 = new Visor(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img16,
  getRandomInt(5, 10)
);
let visor5 = new Visor(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img17,
  getRandomInt(5, 10)
);
let visor6 = new Visor(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img18,
  getRandomInt(5, 10)
);
let visor7 = new Visor(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  img19,
  getRandomInt(5, 10)
);

let rainbowBeanie = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  rainbowBeanieImg,
  10
);

let carbonDioxide = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  carbonDioxideImg,
  10
);
let methane = new Crawler(
  Math.floor(Math.random() * (canvas.width - 50)),
  0,
  50,
  50,
  methaneImg,
  10
);

let bandit = new Crawler("", "", 100, 100, banditimg, 15);
// ------------------------------------------

// Beanie and Visor Arrays

const beanieArray = [
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

const powerUps = [rainbowBeanie];

const greenhouseGases = [methane, carbonDioxide];

const visorArray = [visor1, visor2, visor3, visor4, visor5, visor6, visor7];

// Game Timer, Incrementer, High Score Checker
let gameScore = 0;
let spawnedHats = [];
let gameTime = 60;
let visorCount = 0;
let currentGameTime = 0;
let scores = [];
let highScore;

function highScoreCheck() {
  highScore = scores[0];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highScore) {
      highScore = scores[i];
    }
  }
  return highScore;
}

function gameTimer() {
  gameTime--;
  if (gameTime < 0) {
    gameTime = 0;
    timesUp();
  }
}

// Create Beanies, Hats, PowerUp/Down

function createBeanies() {
  let randBeanieNum = Math.floor(Math.random() * 12);
  beanieArray[randBeanieNum].render();
  spawnedHats.push(beanieArray[randBeanieNum]);
}

function createVisors() {
  let randVisorNum = Math.floor(Math.random() * 7);
  visorArray[randVisorNum].render();
  spawnedHats.push(visorArray[randVisorNum]);
}

function createPowerUps() {
  powerUps[0].render();
  spawnedHats.push(powerUps[0]);
}
function createPowerDowns() {
  let randPowerDownNum = Math.floor(Math.random() * 2);
  greenhouseGases[randPowerDownNum].render();
  spawnedHats.push(greenhouseGases[randPowerDownNum]);
}

// create Beanies, reset Beanie function

function moveBeanies() {
  if (spawnedHats.length != 0) {
    for (let i = 0; i < spawnedHats.length; i++) {
      if (spawnedHats[i].y <= canvas.height - 80) {
        spawnedHats[i].y += spawnedHats[i].speed;
        spawnedHats[i].render();
      } else if (spawnedHats[i].y > canvas.height - 80) {
        spawnedHats[i].y = 0;
        spawnedHats[i].x = Math.floor(Math.random() * (canvas.width - 50));
        spawnedHats[i].speed = getRandomInt(5, 10);
        spawnedHats.splice(i, 1);
        i--;
      }
    }
  }
}

// Bandit Movement and Initialization
banditimg.onload = function () {};

function movementHandler() {
  if (bandit.x >= 10) {
    if (pressedKeys.a || pressedKeys.ArrowLeft) {
      bandit.x -= bandit.speed;
      bandit.image.src = "./Assets/bandit_left.png";
    }
  }
  if (bandit.x <= canvas.width - 120)
    if (pressedKeys.d || pressedKeys.ArrowRight) {
      bandit.x += bandit.speed;
      bandit.image.src = "./Assets/bandit_right.png";
    }
}

// PowerUps, PowerDowns

function speedUpTimer() {
  setTimeout(() => {
    bandit.speed = 15;
  }, 5000);
}

function speedDownTimer() {
  setTimeout(() => {
    bandit.speed = 15;
  }, 5000);
}

// Collision Detection
function detectHatHit() {
  for (let i = 0; i < spawnedHats.length; i++) {
    const hatsLeft = bandit.x + bandit.width >= spawnedHats[i].x;
    const hatsRight = bandit.x <= spawnedHats[i].x + spawnedHats[i].width;
    const hatsBottom = bandit.y <= spawnedHats[i].y + spawnedHats[i].height;
    if (hatsLeft && hatsRight && hatsBottom) {
      currentGameTime = gameTime;
      if (spawnedHats[i] instanceof Visor) {
        visorCount++;
      } else if (powerUps.includes(spawnedHats[i])) {
        bandit.speed = 25;
        speedUpTimer();
      } else if (greenhouseGases.includes(spawnedHats[i])) {
        bandit.speed = 8.5;
        speedDownTimer();
      } else {
        gameScore++;
      }
      spawnedHats[i].y = 0;
      spawnedHats[i].x = Math.floor(Math.random() * (canvas.width - 50));
      spawnedHats[i].speed = getRandomInt(5, 10);
      spawnedHats.splice(i, 1);
      i--;
    }
  }
}

// Game Labels and Timer
function timerCountdown() {
  ctx.font = "50px serif";
  ctx.fillStyle = "chartreuse";

  // Align timecount if double digits or single digits
  if (gameTime >= 10) {
    ctx.fillText(gameTime, canvas.width / 2 - 25, 65);
  } else {
    ctx.fillText(gameTime, canvas.width / 2 - 13, 65);
  }
}

function timerCircle() {
  ctx.beginPath();
  ctx.arc(canvas.width / 2, 50, 40, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
}

function scoreSquare() {
  drawBox(25, 15, 100, 75, "black");
  ctx.font = "50px serif";
  ctx.fillStyle = "chartreuse";
  // position gamescore if single digits or double digits
  if (gameScore < 10) {
    ctx.fillText(gameScore, 60, 80);
  } else {
    ctx.fillText(gameScore, 50, 80);
  }
}

function scoreLabels() {
  ctx.font = "30px serif";
  ctx.fillStyle = "chartreuse";
  ctx.fillText("SCORE", 26, 40);
}

//  Visor Count and X's
function visorSquare() {
  drawBox(canvas.width - 150, 15, 125, 75, "black");
  drawBox(canvas.width - 145, 50, 30, 30, "white");
  drawBox(canvas.width - 102, 50, 30, 30, "white");
  drawBox(canvas.width - 60, 50, 30, 30, "white");
  ctx.font = "18px serif";
  ctx.fillStyle = "chartreuse";
  ctx.fillText("VISOR COUNT", canvas.width - 148, 40);
}

function checkVisors() {
  if (visorCount === 1) {
    ctx.font = "30px serif";
    ctx.fillStyle = "red";
    ctx.fillText("X", canvas.width - 141, 75);
  } else if (visorCount === 2) {
    ctx.font = "30px serif";
    ctx.fillStyle = "red";
    ctx.fillText("X", canvas.width - 141, 75);
    ctx.fillText("X", canvas.width - 98, 75);
  } else if (visorCount === 3) {
    ctx.font = "30px serif";
    ctx.fillStyle = "red";
    ctx.fillText("X", canvas.width - 141, 75);
    ctx.fillText("X", canvas.width - 98, 75);
  }
}

// Times up and Visor Condition -- Game Over Conditions
function timesUp() {
  if (visorCount < 3) {
    drawBox(canvas.width / 2 - 200, canvas.height / 2 - 50, 400, 200, "black");
    clearInterval(intervalId);
    clearInterval(beanieInterval);
    clearInterval(visorInterval);
    clearInterval(powerUpInterval);
    clearInterval(greenhouseGasesInterval);
    ctx.font = "30px serif";
    ctx.fillStyle = "red";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    // Need to fix x, y positions so they are relative (screen size changes things), not absolute
    ctx.fillText("TIME EXPIRED! ", canvas.width / 2, canvas.height / 2 - 30);
    ctx.fillText("EARTH HAS MELTED!", canvas.width / 2, canvas.height / 2);
    ctx.fillText("YOUR SCORE:", canvas.width / 2, canvas.height / 2 + 30);
    ctx.font = "100px serif";
    ctx.fillStyle = "chartreuse";
    ctx.fillText(gameScore, canvas.width / 2, canvas.height / 2 + 100);
    scores.push(gameScore);
    highScoreCheck();
    highScoreLabel.innerText = highScore;
  }
}

function threeVisors() {
  if (visorCount === 3) {
    ctx.font = "30px serif";
    ctx.fillStyle = "red";
    ctx.fillText("X", canvas.width - 56, 75);
    drawBox(canvas.width / 2 - 200, canvas.height / 2 - 50, 400, 150, "black");
    clearIntervals();
    ctx.font = "30px serif";
    ctx.fillStyle = "red";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(
      "EW, THREE VISORS HIT!",
      canvas.width / 2,
      canvas.height / 2 - 30
    );
    ctx.fillText("YOUR SCORE:", canvas.width / 2, canvas.height / 2);
    ctx.font = "100px serif";
    ctx.fillStyle = "chartreuse";
    ctx.fillText(gameScore, canvas.width / 2, canvas.height / 2 + 60);
    scores.push(gameScore);
    highScoreCheck();
    highScoreLabel.innerText = highScore;
  }
}

// Dynamic Background and Growing Sun
let alpha = 0.0;
function backgroundTransition() {
  // target alpha => 0.8
  let increment = 0.8 / 1000;
  canvas.style.backgroundColor = "rgba(255, 17, 0, " + alpha + ")";
  alpha += increment;
}

// Function Grouping, clearIntervals

function createObjects() {
  beanieInterval = setInterval(createBeanies, getRandomInt(500, 1000));
  visorInterval = setInterval(createVisors, getRandomInt(850, 1100));
  greenhouseGasesInterval = setInterval(
    createPowerDowns,
    getRandomInt(3800, 5200)
  );
  powerUpInterval = setInterval(createPowerUps, getRandomInt(3800, 5200));
}

function onScreenDisplay() {
  timerCircle();
  timerCountdown();
  scoreSquare();
  visorSquare();
  scoreLabels();
  checkVisors();
}

function clearIntervals() {
  clearInterval(intervalId);
  clearInterval(beanieInterval);
  clearInterval(visorInterval);
  clearInterval(powerUpInterval);
  clearInterval(gameTimerInterval);
  clearInterval(greenhouseGasesInterval);
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  setBackgroundSize();
  backgroundTransition();
  movementHandler();
  bandit.render();
  moveBeanies();
  detectHatHit();
  onScreenDisplay();
  threeVisors();
}
//  Declare Interval Ids for Clear Interval
let intervalId;
let beanieInterval;
let visorInterval;
let gameTimerInterval;
let powerUpInterval;
let greenhouseGasesInterval;

// Reset / Start Game Button
function reset() {
  canvas.setAttribute("height", getComputedStyle(canvas)["height"]);
  canvas.setAttribute("width", getComputedStyle(canvas)["width"]);
  clearIntervals();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  setBackgroundSize();
  canvas.style.backgroundColor = "rgba(255, 17, 0, 0)";
  alpha = 0;
  gameScore = 0;
  spawnedHats = [];
  gameTime = 60;
  visorCount = 0;
  for (let i = 0; i < beanieArray.length; i++) {
    beanieArray[i].speed = getRandomInt(5, 10);
    beanieArray[i].y = 0;
  }
  for (let i = 0; i < visorArray.length; i++) {
    visorArray[i].speed = getRandomInt(5, 10);
    visorArray[i].y = 0;
  }
  createObjects();
  intervalId = setInterval(gameLoop, 40);
  gameTimerInterval = setInterval(gameTimer, 1000);
}

startButton.addEventListener("click", () => {
  startScreen.remove();
  // Recalculate object positions
  for (let i = 0; i < beanieArray.length; i++) {
    beanieArray[i].x = Math.floor(Math.random() * (canvas.width - 50));
  }
  for (let i = 0; i < visorArray.length; i++) {
    visorArray[i].x = Math.floor(Math.random() * (canvas.width - 50));
  }
  bandit.x = canvas.width / 2 - 75;
  bandit.y = canvas.height - 125;
  // initiate gameloops
  // beanieInterval = setInterval(createBeanies, getRandomInt(500, 1000));
  // visorInterval = setInterval(createVisors, getRandomInt(800, 1200));
  // greenhouseGasesInterval = setInterval(createPowerDowns, 5000);
  // powerUpInterval = setInterval(createPowerUps, 1000);
  createObjects();
  gameTimerInterval = setInterval(gameTimer, 1000);
  intervalId = setInterval(gameLoop, 40);
  resetButton.addEventListener("click", reset);
});

// resetButton.addEventListener("click", reset);
