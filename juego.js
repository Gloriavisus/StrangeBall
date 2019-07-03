'use strict';

function Game(canvas) {
  this.player = null;
  this.enemies = null;
  this.isGameOver = false;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.onGameOver = null;
}
Game.prototype.startGame = function() {
  this.player = new Player(this.canvas);
  var loop = () => {
    console.log('loop');
      this.update();
      this.clear();
      this.draw();
      this.checkCollisions()
      if(!this.isGameOver) {
        requestAnimationFrame(loop)
      } else {
        this.onGameOver();
      }
    };
    loop();
  }
  
  Game.prototype.update = function() {
    this.player.move();
  }
  
  Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  
  Game.prototype.draw = function() {
    this.player.draw();
  }
  
  Game.prototype.checkCollisions = function() {
    
  }
  
  Game.prototype.gameOverCallback = function(callback) {
    this.onGameOver = callback;
  }