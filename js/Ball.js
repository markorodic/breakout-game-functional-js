function updateBall(state) {
    const newState = {...state}

    newState.ballPosition.x += newState.ballVelocity.x
    newState.ballPosition.y += newState.ballVelocity.y

    return newState
}