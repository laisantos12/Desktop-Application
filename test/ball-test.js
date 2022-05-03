// var chai = require('chai');
// var assert = chai.assert;

// var Ball = require("../lib");

// describe("Ball", function () {
//     var ball = new Ball({});

//     it("drawBall should be a function", function () {
//         assert.isFunction(ball.drawBall);
//     });
// });

var chai = require('chai');
var assert = chai.assert;

var Ball = require("../lib/ball");

describe("Ball", function () {
    var ball = new Ball({});

    it("Ball should be a function", function () {
        assert.isFunction(Ball);
    });

    it("drawBall should be a function", function () {
        assert.isFunction(ball.drawBall);
    });

    it("moveBall should be a function", function () {
        assert.isFunction(ball.moveBall);
    });

    it("resetBallAndPaddle should be a function", function () {
        assert.isFunction(ball.resetBallAndPaddle);
    });

    it("ball should have an x start position", function () {
        assert.equal(ball.x, 100);
    });

    it("ball should have an y start position", function () {
        assert.equal(ball.y, 100);
    });

    it("ball should have a default radius", function () {
        assert.equal(ball.radius, 10);
    });

    it("ball should have a default Y direction speed", function () {
        assert.equal(ball.speedY, -5);
    });

    it("ball should have a default X direction speed", function () {
        assert.equal(ball.speedX, 5);
    });

    it("should log the fill color of ball", function () {
        assert.equal(ball.color, "aqua");
    });

    it("spacebar should be set to false by default", function () {
        assert.equal(ball.space, false);
    });


});
