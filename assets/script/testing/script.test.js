/**
 * @jest-environment jsdom
 */
const { test } = require('picomatch');
const {game, newGame} = require('../script')

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
        document.getElementById('score').innerText = '20';
    });
    test('newGame should set score to 0', () =>{
        expect(game.score).toEqual(0);
    });
    test('newGame should clear the playerMoves array', () =>{
        expect(game.playerMoves.length).toEqual(0);
    });
    test('newGame should clear the computerSequence array',() =>{
        expect(game.currentGame.length).toEqual(0);
    });
    test('newGame should display score = 0 ', () =>{
        expect(document.getElementById('score').innerText).toEqual(0);
    });
});