// html component
const gameBoard = document.getElementById("game-board");
const borderType = {
    TOP: "t",
    BOTTOM: "b",
    LEFT: "l",
    RIGHT: "r"
}
const allSideBorder = [borderType.TOP, borderType.BOTTOM, borderType.LEFT, borderType.RIGHT];

const borderTypeStyleMapper = {
    "t": "inner-border-top",
    "b": "inner-border-bottom",
    "l": "inner-border-left",
    "r": "inner-border-right",
}

const segmentType = {
    BLUE: {
        color: "blue",
        coordinates: {
            square: [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 6, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 2, y: 7, b: allSideBorder }, { x: 2, y: 8, b: allSideBorder }, { x: 3, y: 8, b: allSideBorder }, { x: 4, y: 8, b: allSideBorder }, { x: 5, y: 8, b: allSideBorder }, { x: 6, y: 8, b: allSideBorder }],
            triangle: []
        }
    },

    // RED: {
    //     color: "red",
    // },
    // GREEN: {
    //     color: "green",
    // },
    // YELLOW: {
    //     color: "yellow",
    // },
}

// function to add colourful blocks on game board
function addColorBlock(color, coordinates) {
    const div = document.createElement("div");
    div.classList = color;
    div.style.gridColumn = coordinates.x;
    div.style.gridRow = coordinates.y;
    const border = coordinates?.b || [];
    for (let b of border) {
        const borderKeyVal = borderTypeStyleMapper[b] || "";
        if (borderKeyVal.length > 0) {
            div.classList = div.classList + " " + borderKeyVal
        }
    }
    gameBoard.appendChild(div)
}




function start() {
    // looping through all the segments and draw
    for (let s in segmentType) {
        const segmentVal = segmentType[s];
        const color = segmentVal.color;
        const square = segmentVal.coordinates.square;
        for (s of square) {
            addColorBlock(color, s)
        }
    }
}
start()


// addSegment("blue", { x: 1, y: 1 })

