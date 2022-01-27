var ship;

function setup() {
  createCanvas(600, 600);
  ship = new Ship();
}

function draw() {
  background(0);
  ship.render();
  ship.turn();
}

function keyReleased() {
  ship.setRotation(0);
}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1);
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1);
  }
}

//creating ship and giving it a starting position
function Ship() {
  this.pos = createVector(width / 2, height / 2);
  this.r = 15;
  this.heading = 0;
  this.rotation = 0;


  this.render = function () {
    translate(this.pos.x, this.pos.y);
    rotate(this.heading);
    fill(227, 2, 2);
    stroke(255);
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r)
  }

  this.setRotation = function (a) {
    this.rotation = a;
  }
  this.turn = function () {
    this.heading += this.rotation;
  }
}