function updateBall(state) {
    const newState = state

    newState.ball.position.x += newState.ball.velocity.x
    newState.ball.position.y += newState.ball.velocity.y

    return newState
}