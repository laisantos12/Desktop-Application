var chai = require('chai');
var assert = chai.assert;

var Ball = require("../src/app/ball");


describe("Game", function () {
    var ball = new Ball({});

    it("Ball should be a function", function () {
        assert.isFunction(Ball);
    });

    it("drawBall should be a function", function () {
        assert.isFunction(ball.drawBall);
    });

    it("drawPaddle should be a function", function () {
        assert.isFunction(ball.drawPaddle);
    });

    it("drawScore should be a function", function () {
        assert.isFunction(ball.drawScore);
    });

    it("drawBricks should be a function", function () {
        assert.isFunction(ball.drawBricks);
    });

    it("movePaddle should be a function", function () {
        assert.isFunction(ball.movePaddle);
    });

    it("moveBall should be a function", function () {
        assert.isFunction(ball.moveBall);
    });

    it("increaseScore should be a function", function () {
        assert.isFunction(ball.increaseScore);
    });

    it("showAllBricks should be a function", function () {
        assert.isFunction(ball.showAllBricks);
    });


});
