function collisionDetection(state, canvas) {
    const { ballPosition, ballVelocity, ballDiameter, paddlePosition, paddleSize, brickSize, bricks } = state
    const newState = {...state}

    if (ballHitsWall(ballPosition, ballDiameter, canvas)) {
        newState.ballVelocity.x = -ballVelocity.x
    }
    if (ballHitsCeiling(ballPosition, ballDiameter)) {
        newState.ballVelocity.y = -ballVelocity.y
    }
    if (ballHitsPaddle(ballPosition, ballDiameter, paddlePosition, paddleSize, canvas)) {
        newState.ballVelocity.y = -ballVelocity.y
    }
    if (ballFalls(ballPosition, canvas)) {
        newState.ballPosition = { x: 193, y: 282 },
        newState.ballVelocity = { x: 0, y: 0 }
    }
    if (ballHitsBrick(ballPosition, ballDiameter, brickSize, bricks)) {
        filterBricks(newState)
        newState.ballVelocity.y = -ballVelocity.y
    }
    return newState
}

function ballFalls(ballPosition, canvas) {
    return ballPosition.y >= canvas.height
}

function ballHitsWall(ballPosition, ballDiameter, canvas) {
    const ballBeyondGameSidesBounds = ballPosition.x < 0 || ballPosition.x + ballDiameter > canvas.width
    
    return ballBeyondGameSidesBounds
}

function ballHitsCeiling(ballPosition, ballDiameter) {
    return ballPosition.y < 70
}

function ballHitsPaddle(ballPosition, ballDiameter, paddlePosition, paddleSize, canvas) {
    const ballIsbetweenPaddleEdges = ballPosition.x > paddlePosition.x && ballPosition.x < paddlePosition.x + paddleSize.width
    const ballHitsPaddleTop = ballPosition.y + ballDiameter >= canvas.height

    return ballHitsPaddleTop && ballIsbetweenPaddleEdges
}

function ballHitsBrick(ballPosition, ballDiameter, brickSize, bricks) {
    let hitBrick = bricks.filter(function(brick) {
        return ballHitsABrick(ballPosition, ballDiameter, brickSize, brick)
    })
    return hitBrick[0]
}

function ballHitsABrick(ballPosition, ballDiameter, brickSize, brick) {
    const ballCenterX = ballPosition.x + ballDiameter / 2
    const ballCenterY = ballPosition.y + ballDiameter / 2
    const ballIsBeneathBrickTop = ballCenterY > brick.y
    const ballIsAboveBrickBottom = ballCenterY < brick.y + brickSize.y
    const ballIsbetweenBrickSides = ballCenterX > brick.x && ballCenterX < brick.x + brickSize.x

    return ballIsbetweenBrickSides && ballIsBeneathBrickTop && ballIsAboveBrickBottom
}