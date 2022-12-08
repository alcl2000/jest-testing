/**
 * @jest-environment jsdom
 */


const {game, newGame, showScore, addTurn, lightsOn} = require('../script')

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test('playerMoves key exists', () =>{
        expect('playerMoves' in game).toBe(true);
    });
    test('choices key exists', () => {
        expect('choices' in game).toBe(true);
    });
    test('Choices contains the correct ids', () =>{
        expect(game.choices).toEqual(['button1','button2', 'button3','button4']);
    });
});

describe('newGame function works correctly', () =>{
    beforeAll(() =>{
        game.score = 20;
        newGame();
        document.getElementById('score').innerText = game.score;
    });
    test('newGame should set score to 0', () =>{
        expect(game.score).toEqual(0);
    });
    test('newGame should clear the playerMoves array', () =>{
        expect(game.playerMoves.length).toEqual(0);
    });
    test('should be one element in the computer choices array',() =>{
        expect(game.currentGame.length).toBe(1);
    });
    test('newGame should display score = 0 ', () =>{
        expect(document.getElementById('score').innerText).toEqual(0);
    });
});

describe('game play works correctly', ()=>{
    beforeEach(() =>{
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
        addTurn();
    });
    afterEach(() =>{
        game.score = 0; 
        game.currentGame = [];
        game.playerMoves = [];
    });
    test('addTurn adds a new turn to the game', () =>{
        addTurn();
        expect(game.currentGame.length).toBe(2);
    });
    test('should add correct class to light up the buttons',() => {
        let button = document.getElementById(game.currentGame[0]);
        expect(button.classList).toContain('light');
    });
});