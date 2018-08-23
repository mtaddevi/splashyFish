function Fish() {
  this.x = width / 2;
  this.y = 25;
  //350

  this.gravity = 0.2;
  this.velocity = 1;
  this.leftForce = 100;

  this.show = function() {
    fill(255, 127, 101);
    ellipse(this.x, this.y, 30, 30);
  };
  //believe were not hitting this
  this.left = function() {
    this.velocity += this.leftForce;
    this.velocity *= 150;
    print(this.velocity);
  };

  this.update = function() {
    this.velocity += this.gravity;
    this.x -= this.velocity;

    //right side boundary
    if (this.x > width) {
      this.x = width;
      this.velocity = 0;
    }

    //left side boundary
    if (this.x < width) {
      this.x = width;
      this.velocity = 0;
    }
  };
}
