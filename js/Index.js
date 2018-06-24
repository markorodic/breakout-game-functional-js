function gameLoop() {
    const canvas = document.getElementById("screen")
    const ctx = canvas.getContext('2d')
    const state = {...initialState}

    play(state, canvas, ctx)
}

function play(state, canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const newState = update(state, canvas, ctx)

    window.requestAnimationFrame(function(){
        play(newState, canvas, ctx)
    })
}

function update(state, canvas, ctx) {
    const newState = [
        state,
        draw,
        updateBall,
        updatePaddle,
        updateGame,
        collisionDetection
    ].reduce(function(currentState, updateFunction) {
        return updateFunction(currentState, canvas, ctx)
    })
    
    return newState
}
