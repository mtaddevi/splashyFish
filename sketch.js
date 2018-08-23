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

  if (frameCount % 80 == 0) {
    corals.push(new Coral());
  }

  for (var i = 0; i < corals.length; i++) {
    corals[i].show();
    corals[i].update();
  }
}

function keyPressed() {
  if (key == " ") {
    console.log("SPACE");
    fish.left();
  }
}
