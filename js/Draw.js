function draw(state, canvas, ctx) {
    [drawBall,
    drawPaddle,
    drawBricks,
    drawSpace,
    drawScore,
    drawLives].forEach(function(drawFunction) {
        drawFunction({ state, canvas, ctx })
    })
    return state
}

function drawSpace({state, canvas, ctx}) {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 55, 392, 15)
}

function drawScore({state, canvas, ctx}) {
    ctx.fillStyle = 'white'
    ctx.fillText(state.paddle.score, 96, 50)
    ctx.font = '42px "Press Start 2P"'
}

function drawLives({state, canvas, ctx}) {
    ctx.fillStyle = 'white'
    ctx.fillText(state.paddle.lives, 257, 50)
    ctx.font = '42px "Press Start 2P"'
}

function drawBall({state, canvas, ctx}) {
    const ball = state.ball
    ctx.fillStyle = '#C6494B'
    ctx.fillRect(ball.position.x, ball.position.y, ball.diameter, ball.diameter)
}

function drawBricks({state, canvas, ctx}) {
    state.bricks.allBricks.forEach(function(brick) {
        const bricks = state.bricks
        ctx.fillStyle = brick.colour
        ctx.fillRect(brick.x, brick.y, bricks.size.x, bricks.size.y)
    })
}

function drawPaddle({state, canvas, ctx}) {
    const paddle = state.paddle
    ctx.fillStyle = '#C6494B'
    ctx.fillRect(paddle.position.x, paddle.position.y, paddle.size.width, paddle.size.height)
}