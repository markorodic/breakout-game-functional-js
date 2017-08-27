window.onload = function() {

    function gameLoop() {
        let canvas = document.getElementById("screen")
        let ctx = canvas.getContext('2d')
        setup(canvas, ctx)
    }

    function setup(canvas, ctx) {
        const initialState = {
            ball: {...setupBall},
            player: {...setupPlayer},
            bricks: {...setupBricks}
        }
        play(initialState, canvas, ctx)
    }

    function play(state, canvas, ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        draw({ state: state, canvas, ctx })
        update({ state: state, canvas, ctx })
        window.requestAnimationFrame(function(){
            play(state, canvas, ctx)
        })
    }

    const setupBall = {
        position: { x: 250, y: 450 },
        velocity: { x: 2, y: -2 },
        size: { x: 6, y: 6 }
    }

    const setupPlayer = {
        position: { x: 200, y: 480 },
        size: { x: 100, y: 5 },
    }

    const setupBricks = {
        size: { x: 20, y: 7 }
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

    window.onkeydown = (e) => {
        keyState = whichKey[e.keyCode]
    }

    window.onkeyup = (e) => keyState = null

    function updatePlayer({ state = {}, canvas = null, ctx }) {
        if (keyState == 'LEFT_KEY') {
            state.player.position.x += keys.LEFT.x
        }
        if (keyState == 'RIGHT_KEY') {
            state.player.position.x += keys.RIGHT.x
        }
    }

    function collisionDetection({ state = {}, canvas = null }) {
        if (isballHitsWall(state, canvas)) {
            state.ball.velocity.x = -state.ball.velocity.x
        }
        if (isballHitsCeiling(state, canvas)) {
            state.ball.velocity.y = -state.ball.velocity.y
        }
        if (isballHitsPlayer(state, canvas)) {
            state.ball.velocity.y = -state.ball.velocity.y
        }
        if (isBallFall(state, canvas)) {
            state.ball.position = { x: 250, y: 450 }
            state.ball.velocity = { x: 2, y: -2 }
        }
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
        const playerCenterY = state.player.position.y + state.player.size.y / 2
        return (ballCenterY + 20 >= canvas.height && playerCenterX - state.player.size.x / 2 < ballCenterX && ballCenterX < playerCenterX + state.player.size.x / 2)
    }

    function updateBall({ state = {}, canvas = null, ctx }) {
        state.ball.position.x += state.ball.velocity.x
        state.ball.position.y += state.ball.velocity.y
    }

    function draw({ state = {}, canvas = null, ctx }) {
        [drawBall, drawPlayer, drawBricks].forEach(function(f) {
            f({ state, canvas, ctx })
        })
    }

    function update({ state = {}, canvas = null, ctx }) {
        [updatePlayer, updateBall, collisionDetection].forEach(function(f) {
            f({ state, canvas, ctx })
        })
    }

    function drawBall({state, canvas, ctx}) {
        ctx.fillRect(state.ball.position.x, state.ball.position.y, state.ball.size.x, state.ball.size.y)
    }

    function drawBricks({state, canvas, ctx}) {
        var bricks = []
        for (var i = 0; i < 540; i++) {
            var x = 22 + (i % 20) * 24
            var y = 40 + (i % 27) * 10
            ctx.fillRect(x - state.bricks.size.x / 2, y - state.bricks.size.y / 2, state.bricks.size.x, state.bricks.size.y)
        }
    }

    function drawPlayer({state, canvas, ctx}) {
        ctx.fillRect(state.player.position.x, state.player.position.y, state.player.size.x, state.player.size.y)
    }

    gameLoop()
}