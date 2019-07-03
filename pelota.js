'use strict';

function Pelota(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = 200;
  this.y = 20;
  this.velocityX = 2;
  this.velocityY = 2;
  this.color = 'black';
  this.direction = 3;
}

//  Pelota.prototype.checkScreen = function() {
//    if(this.y+this.height>=this.pelota.height){
//      this.setDirection(-1);
//    }else if(this.y<=0){
//      this.setDirection(1);
// }
Pelota.prototype.move = function() {

  //this.x = this.x + this.direction * this.velocityX;
  this.y = this.y + this.direction * this.velocityY;
}

Pelota.prototype.draw = function() {
  this.ctx.beginPath();
  this.ctx.arc(this.x,this.y,4,0,2*Math.PI,false);
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
}

Player.prototype.setDirection = function (newDirection) {
  this.direction = newDirection;
}
//}
