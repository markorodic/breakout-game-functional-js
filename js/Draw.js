function draw(state, canvas, ctx) {
    [drawBall, drawPlayer, drawBricks, drawGap, drawScore, drawLives].forEach(function(f) {
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
    ctx.fillText(state.player.score, 96, 50)
    ctx.font = '42px "Press Start 2P"'
}

function drawLives({state, canvas, ctx}) {
    ctx.fillStyle = 'white'
    ctx.fillText(state.player.lives, 257, 50)
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

function drawPlayer({state, canvas, ctx}) {
    ctx.fillStyle = '#C6494B'
    ctx.fillRect(state.player.position.x, state.player.position.y, state.player.size.x, state.player.size.y)
}