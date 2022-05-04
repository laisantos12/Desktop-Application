function Game(options) {
    this.paddle = options.gamePaddle;
    this.x = options.x || 100;
    this.y = options.y || 100;
    this.radius = options.radius || 10;
    this.color = options.color || "aqua";
    this.context = options.context;
    this.canvas = options.canvas;
    this.speedX = options.speedX || 5;
    this.speedY = options.speedY || -5;
    this.space = options.space || false;
}

Game.prototype.drawBall = function () {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.context.closePath();
    this.context.fillStyle = this.color;
    this.context.fill();
    return this;
};



Game.prototype.drawPaddle = function () {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
    this.contextfillStyle = this.color;
    // ctx.fillStyle = '#0095dd';
    ctx.fill();
    ctx.closePath();
};

Game.prototype.drawScore = function () {
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
};

Game.prototype.drawBricks = function () {
    bricks.forEach(column => {
        column.forEach(brick => {
            ctx.beginPath();
            ctx.rect(brick.x, brick.y, brick.w, brick.h);
            ctx.fillStyle = brick.visible ? '#0095dd' : 'transparent';
            ctx.fill();
            ctx.closePath();
        });
    });
}

Game.prototype.movePaddle = function () {
    paddle.x += paddle.dx;
    if (paddle.x + paddle.w > canvas.width) {
        paddle.x = canvas.width - paddle.w;
    }

    if (paddle.x < 0) {
        paddle.x = 0;
    }
}
Game.prototype.showAllBricks = function () {
    bricks.forEach(column => {
        column.forEach(brick => (brick.visible = true));
    });
}


Game.prototype.moveBall = function () {
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Wall collision (right/left)
    if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
        ball.dx *= -1; // ball.dx = ball.dx * -1
    }

    // Wall collision (top/bottom)
    if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
        ball.dy *= -1;
    }


    // Paddle collision
    if (
        ball.x - ball.size > paddle.x &&
        ball.x + ball.size < paddle.x + paddle.w &&
        ball.y + ball.size > paddle.y
    ) {
        ball.dy = -ball.speed;
    }

    // Brick collision
    bricks.forEach(column => {
        column.forEach(brick => {
            if (brick.visible) {
                if (
                    ball.x - ball.size > brick.x && // left brick side check
                    ball.x + ball.size < brick.x + brick.w && // right brick side check
                    ball.y + ball.size > brick.y && // top brick side check
                    ball.y - ball.size < brick.y + brick.h // bottom brick side check
                ) {
                    ball.dy *= -1;
                    brick.visible = false;

                    increaseScore();
                }
            }
        });
    });

    // Hit bottom wall - Lose
    if (ball.y + ball.size > canvas.height) {
        showAllBricks();
        score = 0;
    }
}

Game.prototype.increaseScore = function () {
    score++;

    if (score % (brickRowCount * brickRowCount) === 0) {
        showAllBricks();
    }
}

module.exports = Game;
