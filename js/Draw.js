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
    ctx.fillText(state.score, 96, 50)
    ctx.font = '42px "Press Start 2P"'
}

function drawLives({state, canvas, ctx}) {
    ctx.fillStyle = 'white'
    ctx.fillText(state.lives, 257, 50)
    ctx.font = '42px "Press Start 2P"'
}

function drawBall({state, canvas, ctx}) {
    const { ballPosition } = state

    ctx.fillStyle = '#C6494B'
    ctx.fillRect(ballPosition.x, ballPosition.y, CONSTANTS.BALL.DIAMETER, CONSTANTS.BALL.DIAMETER)
}

function drawBricks({state, canvas, ctx}) {
    state.bricks.forEach(function(brick) {
        ctx.fillStyle = brick.colour
        ctx.fillRect(brick.x, brick.y, CONSTANTS.BRICK.SIZE.x, CONSTANTS.BRICK.SIZE.y)
    })
}

function drawPaddle({state, canvas, ctx}) {
    const { paddlePosition } = state

    ctx.fillStyle = '#C6494B'
    ctx.fillRect(paddlePosition.x, paddlePosition.y, CONSTANTS.PADDLE.SIZE.width, CONSTANTS.PADDLE.SIZE.height)
}

function drawLives({state, canvas, ctx}) {
    ctx.fillStyle = 'white'
    ctx.fillText(state.lives, 257, 50)
    ctx.font = '42px "Press Start 2P"'
}