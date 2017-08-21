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
        draw({ state: state, canvas, ctx })
        window.requestAnimationFrame(function(){
            play(state, canvas, ctx)
        })
    }

    const setupBall = {
        position: { x: 250, y: 450 },
        velocity: { x: 2, y: 2 }
    }

    const setupPlayer = {
        position: { x: 200, y: 480 },
    }

    const setupBricks = {
        size: { x: 20, y: 7 }
    }

    function draw({ state = {}, canvas = null, ctx }) {
        [drawBall, drawPlayer, drawBricks].forEach(function(f) {
            f({ state, canvas, ctx })
        })
    }

    function drawBall({state, canvas, ctx}) {
        ctx.fillRect(state.ball.position.x, state.ball.position.y, 6, 6)
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
        ctx.fillRect(state.player.position.x, state.player.position.y, 100, 5)
    }

    gameLoop()
}