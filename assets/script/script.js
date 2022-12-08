let game = {
    score : 0,
    currentGame : ['button1', 'button4'],
    playerMoves : ['button1', 'button3'],
    choices :['button1','button2', 'button3','button4'],
};

function newGame(){
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
    addTurn();
}

function showScore(){
    document.getElementById('score').innerText = game.score;
};

function addTurn(){
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))])
    //showTurns();
    lightsOn(game.currentGame)
}

function lightsOn(circ){
    document.getElementById(circ).classList.add('light');
    setTimeout(() => {
        document.getElementById(circ).classList.remove('light');
    }, 400);
}

module.exports = {game , newGame, showScore, addTurn, lightsOn};
