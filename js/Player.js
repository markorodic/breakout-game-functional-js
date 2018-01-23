    const setupPlayer = {
        position: { x: 200, y: 493 },
        size: { x: 100, y: 7 },
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