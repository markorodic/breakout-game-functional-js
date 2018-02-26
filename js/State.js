const initialState = {
	score: 0,
	lives: 3,
    ballPosition: { x: 193, y: 282 },
	ballVelocity: { x: 0, y: 0 },
    paddlePosition: { x: 166, y: 564 },
	bricks: initBricks(),
	gameMode: "start"
}
