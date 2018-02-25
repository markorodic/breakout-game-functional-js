function updatePaddle(state, canvas) {
    const { paddlePosition, paddleSize } = state
    const newState = {...state}

    const paddleCanMoveLeft = paddlePosition.x > 0
    const paddleCanMoveRight = paddlePosition.x < canvas.width - paddleSize.width
    const leftKeyPressed = keyState == 'LEFT_KEY'
    const rightKeyPressed = keyState == 'RIGHT_KEY'

    if (leftKeyPressed && paddleCanMoveLeft) {
        newState.paddlePosition.x -= 4
    }
    if (rightKeyPressed && paddleCanMoveRight) {
        newState.paddlePosition.x += 4
    }

    return newState
}