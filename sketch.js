var fish;
var corals = [];

function setup() {
  createCanvas(600, 400);
  fish = new Fish();
  corals.push(new Coral());
}

function draw() {
  background(0, 162, 253);
  fish.show();
  fish.update();

  if (frameCount % 50 == 0) {
    corals.push(new Coral());
  }

  for (var i = corals.length - 1; i >= 0; i--) {
    corals[i].show();
    corals[i].update();

    // if (corals[i].hits(fish)) {

    // }

    if (corals[i].offscreen()) {
      corals.splice(i, 1);
    }
  }
}

function keyPressed() {
  if (key == " ") {
    console.log("SPACE");
    fish.leftForce();
  }
}
