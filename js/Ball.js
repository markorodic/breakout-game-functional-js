function updateBall(state) {
    const newState = {...state}
    const { ballVelocity } = state
    const ballIsStationary = ballVelocity.x == 0 

    newState.ballPosition.x += newState.ballVelocity.x
    newState.ballPosition.y += newState.ballVelocity.y

	if ( keyState == 'SPACE_KEY' && ballIsStationary ) {
        newState.ballVelocity = { x: 2, y: 2 }
        console.log(newState.ballVelocity)
    }

    return newState
}