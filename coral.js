function Coral() {
  this.left = random(width / 2);
  this.right = random(width / 2);
  this.y = height;
  this.h = 40;
  this.speed = 5;

  //this.hitChange = false;

  //this.hits = function(fish) {
  //if (fish.x < this.left || fish.x > width - this.right) {
  //if (fish.y > this.y && fish.y < this.y + this.h) {
  //this.hitchange = true;
  //return true;
  //}
  //}
  //};

  this.show = function() {
    fill(153, 120, 198);
    //if ((this.hitChange = true)) {
    //fill(100, 100, 100);
    //}
    rect(width - this.right, this.y, this.right, this.h, 10, 1, 1, 10);
    rect(0, this.y, this.left, this.h, 1, 10, 10, 1);
  };

  this.update = function() {
    this.y -= this.speed;
  };

  this.offscreen = function() {
    if (this.y < -this.h) {
      return true;
    } else {
      return false;
    }
  };
}
