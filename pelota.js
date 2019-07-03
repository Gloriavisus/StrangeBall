'use strict';
function Pelota(canvas,){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = this.canvas.widht;
    this.y = randomY;
    this.velocity= 4;
    this.color = 'black';
    this.width = 10;
    this.height= 10;
    this.direction = -3;
}
Pelota.prototype.move = function() {
    this.x = this.x + this.direction * this.velocity;
  }
  
Pelota.prototype.draw = function() {
    this.ctx.fillStyle = this.color;
    this.ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  }