function collisionDetection(state, canvas) {
    const newState = state
    const ball = state.ball
    const player = state.player
    const bricks = state.bricks

    if (ballHitsWall(ball, canvas)) {
        newState.ball.velocity.x = -newState.ball.velocity.x
    }
    if (ballHitsCeiling(ball, canvas)) {
        newState.ball.velocity.y = -newState.ball.velocity.y
    }
    if (ballHitsPaddle(ball, player, canvas)) {
        newState.ball.velocity.y = -newState.ball.velocity.y
    }
    if (ballFalls(ball, canvas)) {
        newState.ball.position = { x: 193, y: 282 },
        newState.ball.velocity = { x: 0, y: 0 }
    }
    if (ballHitsBrick(bricks, ball)) {
        newState.ball.velocity.y = -newState.ball.velocity.y
        filterBricks(newState)
    }
    return newState
}

function ballFalls(ball, canvas) {
    return ball.position.y >= canvas.height
}

function ballHitsWall(ball, canvas) {
    const ballBeyondGameSidesBounds = ball.position.x < 0 || ball.position.x + ball.diameter > canvas.width
    
    return ballBeyondGameSidesBounds
}

function ballHitsCeiling(ball) {
    return ball.position.y < 0
}

function ballHitsPaddle(ball, player, canvas) {
    const ballIsbetweenPaddleEdges = ball.position.x > player.position.x && ball.position.x < player.position.x + player.size.x
    const ballHitsPaddleTop = ball.position.y + ball.diameter >= canvas.height

    return ballHitsPaddleTop && ballIsbetweenPaddleEdges
}

function ballHitsBrick(bricks, ball) {
    let hitBrick = bricks.allBricks.filter(function(brick) {
        return ballHitsABrick(brick, bricks, ball)
    })
    return hitBrick[0]
}

function ballHitsABrick(brick, bricks, ball) {
    const ballCenterX = ball.position.x + ball.diameter / 2
    const ballCenterY = ball.position.y + ball.diameter / 2

    const ballIsBeneathBrickTop = ballCenterY > brick.y
    const ballIsAboveBrickBottom = ballCenterY < brick.y + bricks.size.y
    const ballIsbetweenBrickSides = ballCenterX > brick.x && ballCenterX < brick.x + bricks.size.x

    return ballIsbetweenBrickSides && ballIsBeneathBrickTop && ballIsAboveBrickBottom
}