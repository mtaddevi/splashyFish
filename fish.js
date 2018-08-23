function Fish() {
  this.y = height / 2;
  this.x = 64;
  //350
  //25 top

  this.gravity = 0.9;
  this.velocity = 0;
  this.leftForce = -15;

  this.show = function() {
    fill(255, 127, 101);
    ellipse(this.x, this.y, 30, 30);
  };

  this.leftForce = function() {
    this.velocity += -this.gravity * 10;
    this.velocity *= 0.9;
    print(this.velocity);
  };

  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    //right side boundary
    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    //left side boundary
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  };
}
