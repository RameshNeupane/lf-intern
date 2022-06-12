// boundary box class with fix width and height
class BoundaryBox {
  constructor() {
    this.width = BOX_WIDTH;
    this.height = BOX_HEIGHT;
  }

  // method to create the box with styles
  create() {
    const box = document.createElement("div");
    const container = document.querySelector(".container");
    container.appendChild(box);
    box.classList.add("box");
    box.style.width = toPx(this.width);
    box.style.height = toPx(this.height);
    box.style.margin = "0 auto";
    box.style.border = `${toPx(BOX_BORDER)} solid rgba(0, 0, 50, 0.8)`;
    box.style.borderRadius = toPx(BOX_BORDER_RADIUS);
    box.style.position = "relative";
  }
}

// class ball
class Ball {
  constructor(x, y, w = BALL_WIDTH, h = BALL_HEIGHT) {
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = y;
  }

  // create method to create ball inside boundary box
  create() {
    const point = document.createElement("div");
    const box = document.querySelector(".box");
    box.appendChild(point);
    point.classList.add("point");
    point.style.width = toPx(this.width);
    point.style.height = toPx(this.height);
    point.style.backgroundColor = "rgba(0, 0, 50, 0.6)";
    point.style.borderRadius = "50%";
    point.style.position = "absolute";
    point.style.left = toPx(this.x);
    point.style.top = toPx(this.y);

    point.addEventListener("click", () => {
      box.removeChild(point);
    });
  }
}
