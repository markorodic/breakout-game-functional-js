window.onload = function() {

    let ball = { x: 250, y: 450 }

    let update = function(state) {
        let x = ball.x
        let y = ball.y
        return Object.assign(ball, { x: x + 2, y: y - 2 } )
    }

    let draw = function(ball, ctx, canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillRect(ball.x, ball.y, 6, 6)
    }

    let gameLoop = function() {
        let canvas = document.getElementById("screen")
        let ctx = canvas.getContext('2d')
        ball = update(ball)
        draw(ball, ctx, canvas)
    }

setInterval(gameLoop, 10)

}