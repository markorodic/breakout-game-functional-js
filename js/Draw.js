    function draw(state, canvas, ctx) {
        [drawBall, drawPlayer, drawBricks].forEach(function(f) {
            f({ state, canvas, ctx })
        })
        return state
    }

    function drawBall({state, canvas, ctx}) {
        ctx.fillRect(state.ball.position.x, state.ball.position.y, state.ball.size.x, state.ball.size.y)
    }

    function drawBricks({state, canvas, ctx}) {
        state.bricks.allBricks.forEach(function(brick) {
            ctx.fillRect(brick.x - state.bricks.size.x / 2, brick.y - state.bricks.size.y / 2, state.bricks.size.x, state.bricks.size.y)
        })
    }

    function drawPlayer({state, canvas, ctx}) {
        ctx.fillRect(state.player.position.x, state.player.position.y, state.player.size.x, state.player.size.y)
    }