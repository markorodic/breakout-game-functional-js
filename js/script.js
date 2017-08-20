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
        draw({ state: state, canvas, ctx })
        window.requestAnimationFrame(function(){
            play(state, canvas, ctx)
        })
    }

    const setupBall = {
        position: { x: 250, y: 450 },
        velocity: { x: 2, y: 2 }
    }

    function draw({ state = {}, canvas = null, ctx }) {
        [drawBall].forEach(function(f) {
            f({ state, canvas, ctx })
        })
    }

    function drawBall({state, canvas, ctx}) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillRect(state.position.x, state.position.y, 6, 6)
    }

    gameLoop()
}