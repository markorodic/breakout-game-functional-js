        const setupBricks = {
        size: { x: 32, y: 10 },
        allBricks: makeBricks(),
    }

    function makeBricks() {
        var bricks = []
        for (var i = 0; i < 84; i++) {
            var x = 10 + (i % 13)* 31
            var y = 105 + (i % 6) * 10
            var colour = whichColour(y)
            bricks.push({ x: x, y: y, colour: colour})
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

    function whichColour(xPostion) {
        switch (xPostion) {
            case 105:
                return '#C6494B'
            case 115:
                return '#C46C40'
            case 125:
                return '#B37938'
            case 135:
                return '#A2A136'
            case 145:
            return '#4B9F4C'
            case 155:
                return '#434DC5'
            break;
        }
    }