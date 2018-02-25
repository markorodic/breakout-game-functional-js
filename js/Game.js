function updateGameSystems(state, canvas) {
    const { lives, score, ball, bricks, ballPosition, ballDiameter, brickSize } = state
    let newState = {...state}

    if (lives < 0) {
        newState = initialState
    }
    if (ballFalls(ballPosition, canvas)) {
        newState.lives -= 1
    }
    if (ballHitsBrick(ballPosition, ballDiameter, brickSize, bricks)) {
        newState.score += 1
    }

    return newState
}