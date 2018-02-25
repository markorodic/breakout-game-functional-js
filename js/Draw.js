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
    const { ballPosition, ballDiameter } = state

    ctx.fillStyle = '#C6494B'
    ctx.fillRect(ballPosition.x, ballPosition.y, ballDiameter, ballDiameter)
}

function drawBricks({state, canvas, ctx}) {
    state.bricks.forEach(function(brick) {
        const { brickSize } = state
        ctx.fillStyle = brick.colour
        ctx.fillRect(brick.x, brick.y, brickSize.x, brickSize.y)
    })
}

function drawPaddle({state, canvas, ctx}) {
    const { paddlePosition, paddleSize } = state

    ctx.fillStyle = '#C6494B'
    ctx.fillRect(paddlePosition.x, paddlePosition.y, paddleSize.width, paddleSize.height)
}