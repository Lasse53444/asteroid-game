let ship;
let asteroids = [];
let lasers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
  for (let i = 0; i < 10; i++) {
    asteroids.push(new Asteroid());
  }
}

function draw() {
  background(0);

  for (let i = 0; i < asteroids.length; i++) {
    if (ship.hits(asteroids[i])) {
      console.log('DEAD')
      push()
      fill(255)
      text("you dead", windowWidth / 2, windowHeight / 2)
      pop()
    }
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }

  for (let i = lasers.length - 1; i >= 0; i--) {
    lasers[i].render();
    lasers[i].update();
    for (let j = asteroids.length - 1; j >= 0; j--) {
      if (lasers[i].hits(asteroids[j])) {
        if (asteroids[j].r > 15) {
          var newAsteroids = asteroids[j].breakup();
          asteroids = asteroids.concat(newAsteroids);
        }
        asteroids.splice(j, 1);
        lasers.splice(i, 1);
        break;
      }
    }

  }

  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
}

function keyPressed() {
  if (key == ' ') {
    lasers.push(new Laser(ship.pos, ship.heading));
  }
  if (keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1);
  }
  if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1);
  }
  if (keyCode == UP_ARROW) {
    ship.boosting(true);
  }
}

function keyReleased() {
  if (keyCode == UP_ARROW) {
    ship.boosting(false);
  }
  ship.setRotation(0);
}