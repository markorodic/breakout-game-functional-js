        const setupBricks = {
        size: { x: 20, y: 7 },
        allBricks: makeBricks()
    }

    function makeBricks() {
        var bricks = []
        for (var i = 0; i < 540; i++) {
            var x = 22 + (i % 20) * 24
            var y = 40 + (i % 27) * 10
            bricks.push({ x: x, y: y})
        }
        return bricks
    }

    function isBrickHit(state, canvas) {
        var bool = false
        state.bricks.allBricks.forEach(function(brick) {
            var brickX = brick.x - state.bricks.size.x / 2
            var brickY = brick.y - state.bricks.size.y / 2
            const ballRadius = state.ball.size.x / 2
            const ballCenterX = state.ball.position.x + ballRadius
            const ballCenterY = state.ball.position.y + ballRadius
            if (ballCenterX > brickX && ballCenterX < brickX + state.bricks.size.x && ballCenterY > brickY && ballCenterY < brickY + state.bricks.size.y) {
                bool = true
            }
        })
        return bool
    }

    function filterBricks(state) {
        let newState = state
        newState.bricks.allBricks = state.bricks.allBricks.filter(function(brick) {
            var brickX = brick.x - state.bricks.size.x / 2
            var brickY = brick.y - state.bricks.size.y / 2
            const ballRadius = state.ball.size.x / 2
            const ballCenterX = state.ball.position.x + ballRadius
            const ballCenterY = state.ball.position.y + ballRadius
            return !(ballCenterX > brickX && ballCenterX < brickX + state.bricks.size.x && ballCenterY > brickY && ballCenterY < brickY + state.bricks.size.y)
        })
    }