const initialState = {
	game: {
		score: 0,
		lives: 3
	},
    ball: {
	    position: { x: 193, y: 282 },
	    velocity: { x: 0, y: 0 },
	    diameter: 6
	},
    paddle: {
	    position: { x: 166, y: 564 },
	    size: { width: 60, height: 6}
	},
    bricks: {
	    size: { x: 32, y: 10 },
	    allBricks: makeBricks(),
	}
}