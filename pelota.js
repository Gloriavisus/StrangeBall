'use strict';

function Pelota(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = 200;
  this.y = 20;
  this.velocity = 3;
  this.color = 'black';
  this.directionX = 1;
  this.directionY = 1;
  this.ballradius = 5;
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

 Pelota.prototype.checkPlayer = function(player){
  var distX = Math.abs(this.x - player.x - player.width/2);
  var distY = Math.abs(this.y - player.y - player.height/2);

  if(distX > (player.width/2 + this.ballradius)) {
    return false
  };
  if(distY > (player.height/2 + this.ballradius)) {
    return false;
  } 

  if(distX <= (player.width/2)) {
    this.directionX=-this.directionX;
  }
  if(distY <= (player.height/2)) {
    this.directionY= -this.directionY;
  }

  var dx=distX-player.width/2;
  var dy=distY-player.height/2;
  if (dx*dx+dy*dy<=(this.ballradius*this.ballradius)) {
    this.directionY= -this.directionY;
    this.directionX=-this.directionX;
  }
    
}

Pelota.prototype.move = function() {
  this.y = this.y + this.directionY * this.velocity;
  this.x= this.x + this.directionX * this.velocity;
  }
 

Pelota.prototype.draw = function() {
  this.ctx.beginPath();
  this.ctx.arc(this.x,this.y,this.ballradius,0,2*Math.PI,false);
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
}

Player.prototype.setDirection = function (newDirection) {
  this.direction = newDirection;
}
