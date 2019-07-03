'use strict';

function Pelota(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = 200;
  this.y = 20;
  this.velocityX = 4;
  this.velocityY = 4
  this.color = 'black';
  this.direction = 3;
}

Pelota.prototype.move = function() {
  
  this.x = this.x + this.direction * this.velocityX;

}

Pelota.prototype.draw = function() {
  this.ctx.beginPath();
  this.ctx.arc(this.x,this.canvas.height-100,10,0,2*Math.PI,false);
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
}

Player.prototype.setDirection = function (newDirection) {
  this.direction = newDirection;
}
