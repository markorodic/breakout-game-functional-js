window.onload = function() {

    function gameLoop() {
        let canvas = document.getElementById("screen")
        let ctx = canvas.getContext('2d')
        const initialState = {
            ball: {...setupBall},
            player: {...setupPlayer},
            bricks: {...setupBricks}
        }
        play(initialState, canvas, ctx)
    }

    function play(state, canvas, ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        newState = draw(collisionDetection(updatePlayer(updateBall(state)), canvas), canvas, ctx)
        window.requestAnimationFrame(function(){
            play(newState, canvas, ctx)
        })
    }

    const setupBall = {
        position: { x: 250, y: 450 },
        velocity: { x: 0, y: 0 },
        size: { x: 6, y: 6 }
    }

    const setupPlayer = {
        position: { x: 200, y: 493 },
        size: { x: 100, y: 7 },
    }

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

    const keys = {
        LEFT: { x: -4 },
        RIGHT: { x: +4 },
        SPACE: { x: 0, y: 0 }
    }

    const whichKey = {
        37: 'LEFT_KEY',
        39: 'RIGHT_KEY',
        32: 'SPACE_KEY'
    }

    let keyState = null

    window.onkeydown = (e) => keyState = whichKey[e.keyCode]

    window.onkeyup = (e) => keyState = null

    function updatePlayer(state) {
        let newState = state
        if (keyState == 'LEFT_KEY') {
            newState.player.position.x += keys.LEFT.x
        }
        if (keyState == 'RIGHT_KEY') {
            newState.player.position.x += keys.RIGHT.x
        }
        if (keyState == 'SPACE_KEY') {
            newState.ball.velocity = { x: 2, y: -2 }
        }
        return newState
    }

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
        state.bricks.allBricks = state.bricks.allBricks.filter(function(brick) {
            var brickX = brick.x - state.bricks.size.x / 2
            var brickY = brick.y - state.bricks.size.y / 2
            const ballRadius = state.ball.size.x / 2
            const ballCenterX = state.ball.position.x + ballRadius
            const ballCenterY = state.ball.position.y + ballRadius
            return !(ballCenterX > brickX && ballCenterX < brickX + state.bricks.size.x && ballCenterY > brickY && ballCenterY < brickY + state.bricks.size.y)
        })
    }

    function isBallFall(state, canvas) {
        const ballRadius = state.ball.size.x / 2
        const ballCenterY = state.ball.position.y + ballRadius
        return (ballCenterY >= canvas.height)
    }

    function isballHitsWall(state, canvas) {
        const ballRadius = state.ball.size.x / 2
        const ballCenterX = state.ball.position.x + ballRadius
        return (ballCenterX > canvas.width - ballRadius || ballCenterX < ballRadius)
    }

    function isballHitsCeiling(state) {
        const ballRadius = state.ball.size.x / 2
        const ballCenterY = state.ball.position.y + ballRadius
        return (ballCenterY < ballRadius)
    }

    function isballHitsPlayer(state, canvas) {
        const ballRadius = state.ball.size.x / 2
        const ballCenterX = state.ball.position.x + ballRadius
        const ballCenterY = state.ball.position.y + ballRadius
        const playerCenterX = state.player.position.x + state.player.size.x / 2
        return (ballCenterY >= canvas.height - state.player.size.y && playerCenterX - state.player.size.x / 2 < ballCenterX && ballCenterX < playerCenterX + state.player.size.x / 2)
    }

    function updateBall(state) {
        let newState = state
        newState.ball.position.x += newState.ball.velocity.x
        newState.ball.position.y += newState.ball.velocity.y
        return newState
    }

    function draw(state, canvas, ctx) {
        [drawBall, drawPlayer, drawBricks].forEach(function(f) {
            f({ state, canvas, ctx })
        })
        return state
    }

    function drawBall({state, canvas, ctx}) {
        ctx.fillRect(state.ball.position.x, state.ball.position.y, state.ball.size.x, state.ball.size.y)
    }

    function drawBricks({state, canvas, ctx}) {
        state.bricks.allBricks.forEach(function(brick) {
            ctx.fillRect(brick.x - state.bricks.size.x / 2, brick.y - state.bricks.size.y / 2, state.bricks.size.x, state.bricks.size.y)
        })
    }

    function drawPlayer({state, canvas, ctx}) {
        ctx.fillRect(state.player.position.x, state.player.position.y, state.player.size.x, state.player.size.y)
    }

    gameLoop()
}