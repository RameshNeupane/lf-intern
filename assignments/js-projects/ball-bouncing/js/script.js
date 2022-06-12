// container constants
const CONTAINER_WIDTH = 1000;
const CONTAINER_HEIGHT = 800;

// ball default values
const BALL_X = 50;
const BALL_Y = 50;
const BALL_WIDTH = 80;
const BALL_HEIGHT = 80;
const BALL_SPEED_X = 5;
const BALL_SPEED_Y = 5;
const BALL_DIRECTION_X = 1;
const BALL_DIRECTION_Y = 1;

// input: 10 into output: 10px
const toPx = (num) => {
  return `${num}px`;
};

// generate random number within the range 0 to max
const createRandomInt = (max = 1) => {
  return Math.floor(Math.random() * max);
};

// container that bounds the box within
const container = document.createElement("div");
document.body.appendChild(container);
container.style.width = toPx(CONTAINER_WIDTH);
container.style.height = toPx(CONTAINER_HEIGHT);
container.style.border = "1px solid black";
container.style.margin = "50px auto 0 auto";
container.style.position = "relative";

// class ball
class Ball {
  constructor(
    x = BALL_X,
    y = BALL_Y,
    dx = BALL_DIRECTION_X,
    dy = BALL_DIRECTION_Y,
    w = BALL_WIDTH,
    h = BALL_HEIGHT,
    sx = BALL_SPEED_X,
    sy = BALL_SPEED_Y
  ) {
    this.x = x; // x coordinate
    this.y = y; // y coordinate
    this.width = w; // width
    this.height = h; // height
    this.speedX = sx; //speed in x direction
    this.speedY = sy; // speed in y direction
    this.directionX = dx; // from left to right
    this.directionY = dy; // from top to bottom
  }

  // create ball
  create() {
    this.ball = document.createElement("div");
    this.ball.style.width = toPx(this.width);
    this.ball.style.height = toPx(this.height);
    this.ball.style.backgroundColor = "red";
    this.ball.style.borderRadius = "50%";
    this.ball.style.position = "absolute";
    this.ball.style.top = toPx(this.y);
    this.ball.style.left = toPx(this.x);
    container.appendChild(this.ball);
  }

  // check collision the container wall
  checkCollision() {
    // check collision in top and bottom wall of the container
    if (this.y >= CONTAINER_HEIGHT - this.height || this.y < 0) {
      this.directionY *= -1;
      this.ball.style.backgroundColor = `rgb(
        ${createRandomInt(255)}, 
        ${createRandomInt(255)},
        ${createRandomInt(255)})`;
    }

    // check collision in the left and right wall of the container
    if (this.x >= CONTAINER_WIDTH - this.width || this.x < 0) {
      this.directionX *= -1;
      this.ball.style.backgroundColor = `rgb(
        ${createRandomInt(255)}, 
        ${createRandomInt(255)},
        ${createRandomInt(255)})`;
    }
  }

  // move inside the container
  move() {
    this.x += this.speedX * this.directionX;
    this.y += this.speedY * this.directionY;

    this.ball.style.top = toPx(this.y);
    this.ball.style.left = toPx(this.x);
  }
}

// create new instance of ball
const x = createRandomInt(CONTAINER_WIDTH - BALL_WIDTH);
const y = createRandomInt(CONTAINER_HEIGHT - BALL_HEIGHT);
const dx = createRandomInt() < 0.33 ? -1 : 1;
const dy = createRandomInt() < 0.33 ? -1 : 1;

const ball = new Ball(x, y, dx, dy);
ball.create();

// animate ball inside the container with the default fps
const play = () => {
  ball.checkCollision();
  ball.move();
  window.requestAnimationFrame(() => {
    play();
  });
};
play();
