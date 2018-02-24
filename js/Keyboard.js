let keyState = null

const whichKey = {
    37: 'LEFT_KEY',
    39: 'RIGHT_KEY',
    32: 'SPACE_KEY'
}

window.onkeydown = (e) => keyState = whichKey[e.keyCode]
window.onkeyup = (e) => keyState = null