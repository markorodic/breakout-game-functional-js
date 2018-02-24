function makeBricks() {
    const emptyBrickList = Array(84).fill({ x: 0, y: 0, colour: ''})
    return assignBrickPositions(emptyBrickList)
}

function assignBrickPositions(emptyBrickList) {
    const assignedBrickList = emptyBrickList.map(function(brick, index) {
        var x = (index % 13)* 31
        var y = 105 + (index % 6) * 10
        var colour = whichColour(y)
        return { x: x, y: y, colour: colour}
    })
    return assignedBrickList
}

function filterBricks(state) {
    const newState = state
    newState.bricks.allBricks = state.bricks.allBricks.filter(function(brick) {
        return !ballHitsABrick(brick, state.bricks, state.ball)
    })
}

function whichColour(xPostion) {
    switch (xPostion) {
        case 105:
            return '#C6494B'
        case 115:
            return '#C46C40'
        case 125:
            return '#B37938'
        case 135:
            return '#A2A136'
        case 145:
        return '#4B9F4C'
        case 155:
            return '#434DC5'
        break;
    }
}