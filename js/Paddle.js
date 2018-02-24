const move = {
    paddleLeft: -4,
    paddleRight: 4,
    ball: { x: 2, y: 2 }
}

function updatePaddle(state, canvas) {
    const newState = state
    const paddleCanMoveLeft = state.paddle.position.x > 0
    const paddleCanMoveRight = state.paddle.position.x < canvas.width - state.paddle.size.width
    const leftKeyPressed = keyState == 'LEFT_KEY'
    const rightKeyPressed = keyState == 'RIGHT_KEY'

    if (leftKeyPressed && paddleCanMoveLeft) {
        newState.paddle.position.x += move.paddleLeft
    }
    if (rightKeyPressed && paddleCanMoveRight) {
        newState.paddle.position.x += move.paddleRight
    }
    if (keyState == 'SPACE_KEY') {
        newState.ball.velocity = move.ball
    }

    return newState
}