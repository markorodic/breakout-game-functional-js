function draw(state, canvas, ctx) {
    [drawBall,
    drawPaddle,
    drawBricks,
    drawSpace,
    drawScore,
    drawModal,
    drawLives].forEach(function(drawFunction) {
        drawFunction({ state, ctx })
    })
    return state
}

function drawSpace({state, ctx}) {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 55, 392, 15)
}

function drawScore({state, ctx}) {
    ctx.fillStyle = 'white'
    ctx.fillText(state.score, 96, 50)
    ctx.font = '42px "Press Start 2P"'
}

function drawLives({state, ctx}) {
    ctx.fillStyle = 'white'
    ctx.font = '42px "Press Start 2P"'
    ctx.fillText(state.lives, 257, 50)
}

function drawModal({state, ctx}) {
    if (state.gameMode == "gameOver") {
        ctx.fillStyle = 'white'
        ctx.font = '30px "Press Start 2P"'
        ctx.fillText("GAME OVER", 65, 300)
        ctx.fillText("SCORE: " + state.score, 65, 350)
    }
}

function drawBall({state, ctx}) {
    const { ballPosition } = state

    ctx.fillStyle = '#C6494B'
    ctx.fillRect(ballPosition.x, ballPosition.y, CONSTANTS.BALL.DIAMETER, CONSTANTS.BALL.DIAMETER)
}

function drawBricks({state, ctx}) {
    state.bricks.forEach(function(brick) {
        ctx.fillStyle = brick.colour
        ctx.fillRect(brick.x, brick.y, CONSTANTS.BRICK.SIZE.x, CONSTANTS.BRICK.SIZE.y)
    })
}

function drawPaddle({state, ctx}) {
    const { paddlePositionX } = state

    ctx.fillStyle = '#C6494B'
    ctx.fillRect(paddlePositionX, 564, CONSTANTS.PADDLE.SIZE.width, CONSTANTS.PADDLE.SIZE.height)
}
