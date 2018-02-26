function updateBall(state) {
    let newState = {...state}
    const { ballPosition, ballVelocity, gameMode } = state
    const ballIsStationary = ballVelocity.x == 0 

    newState.ballPosition.x = ballPosition.x + ballVelocity.x
    newState.ballPosition.y = ballPosition.y + ballVelocity.y

	if ( keyState == 'SPACE_KEY' && ballIsStationary ) {
		if ( gameMode == "start" ) {
        	newState.ballVelocity = {...CONSTANTS.BALL.LAUNCH}
		}
		if ( gameMode == "gameOver" ) {
        	newState = initialState
            newState.gameMode = "start"
		}
    }

    return newState
}