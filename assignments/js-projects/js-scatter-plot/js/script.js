// main js file

// create box instance
const box = new BoundaryBox();
box.create();

// create 10 balls scattered randomly inside the box container
for (let i = 0; i < 10; i++) {
  const x = createRandomInt(BOX_WIDTH - (BALL_WIDTH + BOX_BORDER));
  const y = createRandomInt(BOX_HEIGHT - (BALL_HEIGHT + BOX_BORDER));
  const ball = new Ball(x, y);
  ball.create();
}
