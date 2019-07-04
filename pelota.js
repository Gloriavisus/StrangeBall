'use strict';

function Pelota(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = 200;
  this.y = 20;
  this.velocity = 2;
  this.color = 'black';
  this.directionX = 1;
  this.directionY = 1;
  this.ballradius = 4;
}

Pelota.prototype.checkScreen = function() {
  if(this.y+ this.ballradius>this.canvas.height){
    this.directionY= -this.directionY;
  }else if (this.y-this.ballradius<0){
    this.directionY= -this.directionY;
  }else if(this.x-this.ballradius<0){
    this.directionX=-this.directionX;
  }else if(this.x + this.ballradius>this.canvas.width){
    this.directionX=-this.directionX;
  }
 };

 Pelota.prototype.checkPlayer = function(){
  if(this.y +this.ballradius>this.player){
    this.directionY = -this.directionY;
  }
}

Pelota.prototype.move = function() {
  this.y = this.y + this.directionY * this.velocity;
  this.x= this.x + this.directionX * this.velocity;
  }
 

Pelota.prototype.draw = function() {
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  this.ctx.beginPath();
  this.ctx.arc(this.x,this.y,4,0,2*Math.PI,false);
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
}

Player.prototype.setDirection = function (newDirection) {
  this.direction = newDirection;
}
