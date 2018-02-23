const setupPlayer = {
    position: { x: 166, y: 564 },
    size: { x: 60, y: 6},
    score: 0,
    lives: 3
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
        if (state.player.position.x < 0) {
            newState.player.position.x
        } else {
            newState.player.position.x += keys.LEFT.x
        }       
    }
    if (keyState == 'RIGHT_KEY') {
        if (state.player.position.x > 400) {
            newState.player.position.x
        } else {
            newState.player.position.x += keys.RIGHT.x
        }        
    }
    if (keyState == 'SPACE_KEY') {
        newState.ball.velocity = { x: 2, y: -2 }
    }
    return newState
}
