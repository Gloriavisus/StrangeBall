'use strict';

function main() {

  var mainElement = document.querySelector('#site-main');

  function buildDom(html) {
    mainElement.innerHTML = html;
    return mainElement;
  };

  function createSplashScreen() {
    var splashScreen = buildDom(`
      <section>
        <h1>Strange Ball</h1>
        <button>Empezar</button>
      </section>  
    `);

    var startButton = document.querySelector('button');
    startButton.addEventListener('click', createGameScreen);
  }
  

function createGameScreen() {
    var gameScreen = buildDom(`
      <section>
        <canvas width="400" height="400"></canvas>
      </section> 
    `);
     var canvasElement = document.querySelector('canvas');
     var gameInstance = new Game(canvasElement);

    
    // gameInstance.gameOverCallback(createGameOverScreen);


     gameInstance.startGame();
    document.addEventListener('keydown', function(event) {
    if(event.key==='ArrowRight'){
        gameInstance.player.setDirection(1)
    } else if(event.key==='ArrowLeft'){
        gameInstance.player.setDirection(-1)
    }
      
    });

   // setTimeout(createGameOverScreen, 3000);
  };


  function createGameOverScreen() {
    var gameOverScreen = buildDom(`
      <section>
        <h1>Game Over</h1>
        <button>Restart</button>
      </section>
    `);

    var restartButton = document.querySelector('button');
    restartButton.addEventListener('click', createGameScreen);
    };

    createSplashScreen()
};
  window.addEventListener('load',main)