const setupBall = {
    position: { x: 193, y: 282 },
    velocity: { x: 0, y: 0 },
    diameter: 6
}

function updateBall(state) {
    const newState = state

    newState.ball.position.x += newState.ball.velocity.x
    newState.ball.position.y += newState.ball.velocity.y

    return newState
}