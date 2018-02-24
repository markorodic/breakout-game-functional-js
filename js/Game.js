function updateGameSystems(state, canvas) {
    const newState = state

    if (ballFalls(state.ball, canvas)) {
        newState.game.lives -= 1
    }
    if (ballHitsBrick(state.bricks, state.ball)) {
        newState.game.score += 1
    }

    return newState
}