const PI2 = Math.PI*2;
const BOUNCE = 0.82;

export class Dot {
  constructor(x, y, radius, pixelSize, red, green, blue, isBlack) {
    this.x = x;
    this.y = y;
    this.radiusV = 0;
    this.targetRadius = radius;
    this.radius = 0;
    this.pixelSize = pixelSize;
    this.pixelSizeHalf = pixelSize/2;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.isBlack = isBlack;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  move(dis) {
    this.targetRadius = dis;
  }

  animate(ctx) {
    ctx.beginPath();
    ctx.fillStyle = '#000';
    ctx.fillRect(
      this.x - this.pixelSizeHalf,
      this.y - this.pixelSizeHalf,
      this.pixelSize, this.pixelSize
    );
    const accel = (this.targetRadius - this.radius) / 2;
    this.radiusV += accel;
    this.radiusV *=BOUNCE;
    this.radius += this.radiusV;

    ctx.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    if(!this.isBlack)
      ctx.arc(this.x + this.offsetX, this.y + this.offsetY, this.radius, 0, PI2, false);
    ctx.fill();
  }

  reset() {
    this.radius = 0;
    this.radiusV = 0;
  }
}