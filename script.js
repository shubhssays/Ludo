//html constants
const gameBoard = document.getElementById("game-board");
const blueBoard = document.getElementById("board-blue");
const pathHorizontalOne = document.getElementsByClassName("path-horizontal-one");
const pathHorizontalTwo = document.getElementsByClassName("path-horizontal-two");
const pathVerticalOne = document.getElementsByClassName("path-vertical-one");
const pathVerticalTwo = document.getElementsByClassName("path-vertical-two");

// game constants
const blockCount = 18;
const pathBlockClass = "path-block";
const idPrependHorizontal = "h_id_";
const idPrependVertical = "v_id_";
const iAppendOne = "_1";
const iAppendTwo = "_2";

//creating horizontal path
for (let ph of pathHorizontalOne) {
    for (let i = 0; i < blockCount; i++) {
        const div = document.createElement("div");
        div.id = idPrependHorizontal + i + iAppendOne;
        div.className = pathBlockClass;
        ph.appendChild(div)
    }
}

for (let ph of pathHorizontalTwo) {
    for (let i = 0; i < blockCount; i++) {
        const div = document.createElement("div");
        div.id = idPrependHorizontal + i + iAppendTwo;
        div.className = pathBlockClass;
        ph.appendChild(div)
    }
}


//creating vertical path
for (let pv of pathVerticalOne) {
    for (let i = 0; i < blockCount; i++) {
        const div = document.createElement("div");
        div.id = idPrependVertical + i + iAppendOne;
        div.className = pathBlockClass;
        pv.appendChild(div)
    }
}

for (let pv of pathVerticalTwo) {
    for (let i = 0; i < blockCount; i++) {
        const div = document.createElement("div");
        div.id = idPrependVertical + i + iAppendTwo;
        div.className = pathBlockClass;
        pv.appendChild(div)
    }
}

// Using the spread operator
[...document.getElementsByClassName("path-block")].forEach(elem => {
    elem.addEventListener("click", (event) => {
        alert(event.target.id);
    });
});

