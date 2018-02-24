function gameLoop() {
    let canvas = document.getElementById("screen")
    let ctx = canvas.getContext('2d')
    const initialState = {
        ball: {...setupBall},
        paddle: {...setupPaddle},
        bricks: {...setupBricks}
    }
    play(initialState, canvas, ctx)
}

function play(state, canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let newState = update(state, canvas, ctx)
    window.requestAnimationFrame(function(){
        play(newState, canvas, ctx)
    })
}

function update(state, canvas, ctx) {
    let newState = [
        state,
        draw,
        updateBall,
        updatePaddle,
        collisionDetection
    ].reduce(function(currentState, updateFunction) {
        return updateFunction(currentState, canvas, ctx)
    })
    return newState
}