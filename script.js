//html constants
const gameBoard = document.getElementById("game-board");
const blueBoard = document.getElementById("board-blue");
const pathHorizontal = document.getElementsByClassName("path-horizontal");
const pathVertical = document.getElementsByClassName("path-vertical");

// game constants
const blockCount = 18;
const pathBlockClass = "path-block"

//creating horizontal path
for(let ph of pathHorizontal){
    for(let i = 0; i < blockCount; i++){
        const div = document.createElement("div");
        div.className = pathBlockClass;
        ph.appendChild(div)
    }
}


//creating vertical path
for(let pv of pathVertical){
    for(let i = 0; i < blockCount; i++){
        const div = document.createElement("div");
        div.className = pathBlockClass;
        pv.appendChild(div)
    }
}

