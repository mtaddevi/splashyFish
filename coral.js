function Coral() {
  this.left = random(width / 2);
  this.right = random(width / 2);
  this.y = height;
  this.h = 25;
  this.speed = 5;

  this.show = function() {
    fill(153, 120, 198);

    rect(width - this.left, this.y, this.right, this.h);
    rect(0, this.y, this.left, this.h);
  };

  this.update = function() {
    this.y -= this.speed;
  };
}
