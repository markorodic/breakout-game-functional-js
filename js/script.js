window.onload = function() {

    function gameLoop() {
        let canvas = document.getElementById("screen")
        let ctx = canvas.getContext('2d')
        setup(canvas, ctx)
    }

    function setup(canvas, ctx) {
        const initialState = {
            ...setupBall
        }
        play(initialState, canvas, ctx)
    }

    function play(state, canvas, ctx) {

        console.log('game loop')

        window.requestAnimationFrame(function(){
            play(state, canvas, ctx)
        })
    }

    const setupBall = {
        position: { x: 250, y: 450 },
        velocity: { x: 2, y: 2 }
    }

    gameLoop()
}