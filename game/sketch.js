var ship;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
}

function draw() {
  background(0);
  ship.render();
}
//creating ship and giving it a starting position
function Ship() {
  this.pos = createVector(width/2, height/2);
  this.r = 10;
  this.render = function() {
   triangle(-this.r, this.r, this.r, this.r, 0, -this.r )
  }

}