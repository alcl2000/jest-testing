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
}

module.exports = {game , newGame};