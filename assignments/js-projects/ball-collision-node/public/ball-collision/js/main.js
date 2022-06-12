// main driver script

// create new instance of ball
const balls = []; // collection of balls
for (let i = 1; i <= BALL_COUNT; i++) {
  const dimension = createRandomInt(10, 60); // value for width and height
  const x = createRandomInt(CONTAINER_WIDTH - dimension); // x-ordinate
  const y = createRandomInt(CONTAINER_HEIGHT - dimension); // y-ordinate
  const sx = createRandomInt(-5, 5); // speed in x axis
  const sy = createRandomInt(-5, 5); // speed in y axis
  const mass = Math.round(dimension * 0.6); // mass of the object: bigger the object, larger the mass
  const ball = new Ball(x, y, dimension, dimension, sx, sy, mass); // new ball instance
  ball.create();
  balls.push(ball);
}

// animate ball inside the container with the default fps
const play = () => {
  balls.forEach((ball) => {
    ball.checkCollisionWithBox();
    ball.checkCollisionWithBall();
    ball.move();
  });
  window.requestAnimationFrame(play);
};
play();
