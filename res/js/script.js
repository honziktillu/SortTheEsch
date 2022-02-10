import { Cursor, Background, Stats } from "./ui/basic-ui.js";
import { Entity } from "./logic/entity.js";

const cursor = new Cursor();
const background = new Background();
const stats = new Stats("2.Ai");
const collisionObjects = [];

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const times = [];
let fps;

const keys = {};
let mouseX;
let mouseY;

document.addEventListener("keydown", (e) => {
  keys[e.code] = true;
});
document.addEventListener("keyup", (e) => {
  keys[e.code] = false;
});

canvas.addEventListener("mousemove", (e) => {
  const canvasPos = canvas.getBoundingClientRect();
  mouseX = Math.round(e.clientX - canvasPos.left);
  mouseY = Math.round(e.clientY - canvasPos.top);
});

const resizeCanvas = () => {
  canvas.width = 1280;
  canvas.height = 720;
};

const gameLoop = () => {
  //0. Zmena velikosti canvasu
  resizeCanvas();

  //1. premalovani platna
  clearCanvas();

  //2. update logiky
  updateGame();

  checkCursorCollision();

  //3. renderovani objektu
  renderGame();

  calculateFps();

  //4. Dalsi snimek
  window.requestAnimationFrame(gameLoop);
};

const clearCanvas = () => {
  background.draw(ctx, canvas);
};

const updateGame = () => {};

const renderGame = () => {
  stats.draw(ctx, canvas);
  renderEntities();
  renderCursor();
};

const renderCursor = () => {
  cursor.draw(ctx, mouseX, mouseY);
};

const calculateFps = () => {
  const now = performance.now();
  while (times.length > 0 && times[0] <= now - 1000) {
    times.shift();
  }
  times.push(now);
  fps = times.length;
  ctx.fillStyle = "black";
  ctx.font = "50px serif";
  ctx.fillText(fps, 50, 50);
};

const checkCursorCollision = () => {
  collisionObjects.forEach((object) => {
    if (
      object.x < cursor.x + 10 &&
      object.x + object.size.width > cursor.x &&
      object.y < cursor.y + 10 &&
      object.y + object.size.height > cursor.y
    ) {
      // collision
      object.c = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    } else {
      // its fine
    }
  });
};

const rn = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const spawnEntities = (numberOfEntities) => {
  for (let i = 0; i < numberOfEntities; i++) {
    collisionObjects.push(new Entity(rn(0, canvas.width), rn(0, canvas.height), rn(10, 50), rn(10, 50), `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`));
  }
}

const renderEntities = () => {
  collisionObjects.forEach((object) => {
    object.draw(ctx);
  });
}

window.onload = () => {
  resizeCanvas();
  //spawnEntities(10);
  window.requestAnimationFrame(gameLoop);
};
