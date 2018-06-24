function updatePaddle(state, canvas) {
    const { paddlePositionX } = state
    const newState = {...state}

    const paddleCanMoveLeft = paddlePositionX > 0
    const paddleCanMoveRight = paddlePositionX < canvas.width - CONSTANTS.PADDLE.SIZE.width
    const leftKeyPressed = keyState == 'LEFT_KEY'
    const rightKeyPressed = keyState == 'RIGHT_KEY'

    if (leftKeyPressed && paddleCanMoveLeft) {
        newState.paddlePositionX -= 4
    }
    if (rightKeyPressed && paddleCanMoveRight) {
        newState.paddlePositionX += 4
    }

    return newState
}
