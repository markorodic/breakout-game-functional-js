const initialState = {
	score: 0,
	lives: 3,
    ballPosition: { x: 193, y: 282 },
	ballVelocity: { x: 0, y: 0 },
	ballDiameter: 6,
    paddlePosition: { x: 166, y: 564 },
	paddleSize: { width: 60, height: 6},
    brickSize: { x: 32, y: 10 },
	bricks: initBricks()
}
