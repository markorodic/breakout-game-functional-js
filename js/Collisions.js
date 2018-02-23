function collisionDetection(state, canvas) {
    let newState = state
    if (isballHitsWall(state, canvas)) {
        newState.ball.velocity.x = -newState.ball.velocity.x
    }
    if (isballHitsCeiling(state, canvas)) {
        newState.ball.velocity.y = -newState.ball.velocity.y
    }
    if (isballHitsPlayer(state, canvas)) {
        newState.ball.velocity.y = -newState.ball.velocity.y
    }
    if (isBallFall(state, canvas)) {
        newState.ball.position = { x: 250, y: 450 }
        newState.ball.velocity = { x: 0, y: 0 }
    }
    if (isBrickHit(state, canvas)) {
        newState.ball.velocity.y = -newState.ball.velocity.y
        filterBricks(newState)
    }
    return newState
}