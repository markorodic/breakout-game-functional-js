    const setupBall = {
        position: { x: 193, y: 282 },
        velocity: { x: 0, y: 0 },
        size: { x: 6, y: 6 }
    }

function isBallFall(state, canvas) {
        const ballRadius = state.ball.size.x / 2
        const ballCenterY = state.ball.position.y + ballRadius
        return (ballCenterY >= canvas.height)
    }

    function isballHitsWall(state, canvas) {
        const ballRadius = state.ball.size.x / 2
        const ballCenterX = state.ball.position.x + ballRadius
        return (ballCenterX > canvas.width - ballRadius || ballCenterX < ballRadius)
    }

    function isballHitsCeiling(state) {
        const ballRadius = state.ball.size.x / 2
        const ballCenterY = state.ball.position.y + ballRadius
        return (ballCenterY < ballRadius)
    }

    function isballHitsPlayer(state, canvas) {
        const ballRadius = state.ball.size.x / 2
        const ballCenterX = state.ball.position.x + ballRadius
        const ballCenterY = state.ball.position.y + ballRadius
        const playerCenterX = state.player.position.x + state.player.size.x / 2
        return (ballCenterY >= canvas.height - state.player.size.y && playerCenterX - state.player.size.x / 2 < ballCenterX && ballCenterX < playerCenterX + state.player.size.x / 2)
    }

    function updateBall(state) {
        let newState = state
        newState.ball.position.x += newState.ball.velocity.x
        newState.ball.position.y += newState.ball.velocity.y
        return newState
    }