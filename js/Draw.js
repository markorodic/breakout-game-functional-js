function draw(state, canvas, ctx) {
    [drawBall, drawPaddle, drawBricks, drawGap, drawScore, drawLives].forEach(function(f) {
        f({ state, canvas, ctx })
    })
    return state
}

function drawGap({state, canvas, ctx}) {
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
    ctx.fillStyle = '#C6494B'
    ctx.fillRect(state.ball.position.x, state.ball.position.y, state.ball.diameter, state.ball.diameter)
}

function drawBricks({state, canvas, ctx}) {
    state.bricks.allBricks.forEach(function(brick) {
        ctx.fillStyle = brick.colour
        ctx.fillRect(brick.x, brick.y, state.bricks.size.x, state.bricks.size.y)
    })
}

function drawPaddle({state, canvas, ctx}) {
    ctx.fillStyle = '#C6494B'
    ctx.fillRect(state.paddle.position.x, state.paddle.position.y, state.paddle.size.width, state.paddle.size.height)
}