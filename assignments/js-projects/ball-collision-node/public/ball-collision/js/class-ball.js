// container that bounds the box within
const container = document.createElement("div");
document.body.appendChild(container);
container.style.width = toPx(CONTAINER_WIDTH);
container.style.height = toPx(CONTAINER_HEIGHT);
container.style.border = "1px solid black";
container.style.margin = "10px auto 0 auto";
container.style.position = "relative";

// class ball
class Ball {
  constructor(
    x = BALL_X,
    y = BALL_Y,
    w = BALL_WIDTH,
    h = BALL_HEIGHT,
    sx = BALL_SPEED_X,
    sy = BALL_SPEED_Y,
    mass = BALL_MASS
  ) {
    this.x = x; // x coordinate
    this.y = y; // y coordinate
    this.width = w; // width
    this.height = h; // height
    this.speedX = sx; //speed in x direction
    this.speedY = sy; // speed in y direction
    this.mass = mass; // mass of the ball
  }

  // create ball
  create() {
    this.ball = document.createElement("div");
    this.ball.style.width = toPx(this.width);
    this.ball.style.height = toPx(this.height);

    // generate random r, g, b values for color
    const r = createRandomInt(0, 255); // red
    const g = createRandomInt(0, 255); // green
    const b = createRandomInt(0, 255); //blue
    this.ball.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    this.ball.style.borderRadius = "50%";
    this.ball.style.position = "absolute";
    this.ball.style.top = toPx(this.y);
    this.ball.style.left = toPx(this.x);
    container.appendChild(this.ball);
  }

  // check collision the container wall
  checkCollisionWithBox() {
    // check collision in top and bottom wall of the container
    if (this.y + this.height >= CONTAINER_HEIGHT || this.y <= 0) {
      this.speedY *= -1;
    }

    // check collision in the left and right wall of the container
    if (this.x + this.width >= CONTAINER_WIDTH || this.x <= 0) {
      this.speedX *= -1;
    }
  }

  // check collision between the balls
  checkCollisionWithBall(ball) {
    for (let i = 0; i < BALL_COUNT; i++) {
      const ball = balls[i];
      // if the ball is not the same object, do check collision
      if (ball !== this) {
        const r1 = this.width / 2; //radius of the current object
        const r2 = ball.width / 2; // radius of the other object
        const r = r1 + r2; // sum of radius
        const rSquared = r * r;

        const c1 = { x: this.x + r1, y: this.y + r1 }; // center of the current ball
        const c2 = { x: ball.x + r2, y: ball.y + r2 }; // center of the other ball

        const dx = c1.x - c2.x; // x2 - x1
        const dy = c1.y - c2.y; // y2 - y1
        const distanceBetweenCenters = dx * dx + dy * dy; // distance between two balls

        // if the distance between centers of the two ball is less than the sum of radius,
        // then collision between the balls is detected
        if (distanceBetweenCenters <= rSquared) {
          // collision vector to find out speed and direction of collision
          const vectorCollision = {
            x: c2.x - c1.x,
            y: c2.y - c1.y,
          };

          // distance factor to calculate vector normalization
          const distanceBetCollidedCircles = Math.sqrt(
            vectorCollision.x * vectorCollision.x +
              vectorCollision.y * vectorCollision.y
          );

          // normalized vector
          const vectorCollisionNorm = {
            x: vectorCollision.x / distanceBetCollidedCircles,
            y: vectorCollision.y / distanceBetCollidedCircles,
          };

          // relative velocity of the vector to calculate collision speed
          const vectorRelativeVelocity = {
            x: this.speedX - ball.speedX,
            y: this.speedY - ball.speedY,
          };

          // collision speed
          const collisionSpeed =
            vectorRelativeVelocity.x * vectorCollisionNorm.x +
            vectorRelativeVelocity.y * vectorCollisionNorm.y;

          // when collision speed is negative, balls are moving away
          // so do nothing
          if (collisionSpeed < 0) return;

          // impulse implementation as the larger mass can create more impact during collision
          const impulse = (2 * collisionSpeed) / (this.mass + ball.mass);
          this.speedX -= impulse * ball.mass * vectorCollisionNorm.x;
          this.speedY -= impulse * ball.mass * vectorCollisionNorm.y;
          ball.speedX += impulse * this.mass * vectorCollisionNorm.x;
          ball.speedY += impulse * this.mass * vectorCollisionNorm.y;
        }
      }
    }
  }

  // move inside the container
  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    this.ball.style.top = toPx(this.y);
    this.ball.style.left = toPx(this.x);
  }
}
