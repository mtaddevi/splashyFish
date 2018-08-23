function Fish() {
  this.y = height / 8;
  //height-24 gives desirable bottom spawn
  this.x = width / 2;
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
    //this.x += this.velocity;
    print(this.velocity);
  };

  this.update = function() {
    this.velocity += this.gravity;
    this.x += this.velocity;

    //right side boundary
    if (this.x > width) {
      this.x = width;
      this.velocity = 0;
    }

    //left side boundary
    if (this.x < 0) {
      this.x = 0;
      this.velocity = 0;
    }
  };
}
