'use strict';

function Game(canvas) {
  this.player = null;
  this.pelota = null;
  this.isGameOver = false;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.onGameOver = null;
  this.gameSong = new Audio('008702013_prev.mp3');
}
Game.prototype.startGame = function () {
  this.player = new Player(this.canvas);
  this.pelota = new Pelota(this.canvas);
  var loop = () => {
    this.player.checkScreen();
    this.isGameOver = this.pelota.checkScreen();
    this.pelota.checkPlayer(this.player);
    this.update();
    this.clear();
    this.draw();
    this.checkCollisions()
    if (!this.isGameOver) {
      this.gameSong.play();
      requestAnimationFrame(loop)
    } else {
      this.onGameOver();
      this.gameSong.pause();
    }
  };
  loop();
}

Game.prototype.update = function () {
  this.player.move();
  this.pelota.move();
}

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.draw = function () {
  this.player.draw();
  this.pelota.draw();
  console.log(this.pelota.x);
}

Game.prototype.checkCollisions = function () {
}

Game.prototype.gameOverCallback = function (callback) {
  this.onGameOver = callback;
}