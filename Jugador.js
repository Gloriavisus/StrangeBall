'use strict';
function Player(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.height = 20;
    this.width = 50;
    this.x = (this.canvas.width/2);
    this.y = (this.canvas.height -15);
    this.lives = 3;
    this.velocity = 2;
    this.direction = 0;
    this.color = 'red';
  }

  Player.prototype.checkScreen = function() {
    if(this.x+this.width>=this.canvas.width){
      this.setDirection(-1);
    }else if(this.x<=0){
      this.setDirection(1);
    }
  }

  Player.prototype.move = function() {
    this.x = this.x + this.direction * this.velocity;
  }
  
  Player.prototype.draw = function() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  
  Player.prototype.setDirection = function(newDirection) {
    this.direction = newDirection;
  }
  
