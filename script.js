function init() {
    //html constants
    const gameBoard = document.getElementById("game-board");
    const blueBoard = document.getElementById("board-blue");
    const pathHorizontalOne = document.getElementsByClassName("path-horizontal-one");
    const pathHorizontalTwo = document.getElementsByClassName("path-horizontal-two");
    const pathVerticalOne = document.getElementsByClassName("path-vertical-one");
    const pathVerticalTwo = document.getElementsByClassName("path-vertical-two");
    const rollDiceButton = document.getElementById("roll-dice");
    const dice = document.getElementById("dice");

    // game constants
    const blockCount = 18;
    const pathBlockClass = "path-block";
    const idPrependHorizontal = "h_id_";
    const idPrependVertical = "v_id_";
    const idAppendOne = "_1";
    const idAppendTwo = "_2";
    const rollForSeconds = 2;
    const rollIntervalLapse = 120;



    isDiceRollingNow = false;
    const pathIds = [];

    //creating horizontal path
    for (let ph of pathHorizontalOne) {
        for (let i = 0; i < blockCount; i++) {
            const div = document.createElement("div");
            const id = idPrependHorizontal + i + idAppendOne;
            div.id = id;
            pathIds.push(id);
            div.className = pathBlockClass;
            ph.appendChild(div)
        }
    }

    for (let ph of pathHorizontalTwo) {
        for (let i = 0; i < blockCount; i++) {
            const div = document.createElement("div");
            const id = idPrependHorizontal + i + idAppendTwo;
            div.id = id;
            pathIds.push(id);
            div.className = pathBlockClass;
            ph.appendChild(div)
        }
    }


    //creating vertical path
    for (let pv of pathVerticalOne) {
        for (let i = 0; i < blockCount; i++) {
            const div = document.createElement("div");
            const id = idPrependVertical + i + idAppendOne;;
            div.id = id;
            pathIds.push(id);
            div.className = pathBlockClass;
            pv.appendChild(div)
        }
    }

    for (let pv of pathVerticalTwo) {
        for (let i = 0; i < blockCount; i++) {
            const div = document.createElement("div");
            const id = idPrependVertical + i + idAppendTwo;
            div.id = id;
            pathIds.push(id);
            div.className = pathBlockClass;
            pv.appendChild(div)
        }
    }

    // Add a click event listener to all elements with the class "path-block"
    document.querySelectorAll('.path-block').forEach(elem => {
        elem.addEventListener('click', event => {
            alert(event.target.id);
        });
    });


    //Handling roll Dice Button click handler
    rollDiceButton.addEventListener("click", function (event) {
        if (isDiceRollingNow) {
            alert("dice is already rolling. Let it finish")
        }
        isDiceRollingNow = true;
        let number;
        let iteration = 0;
        const totalIteration = rollForSeconds * 1000;
        dice.classList.add('dice-rolling');
        let interval = setInterval(function () {
            number = Math.floor(Math.random() * 6) + 1;
            dice.style.backgroundImage = `url('./assets/dice-${number}.png')`;
            iteration = iteration + rollIntervalLapse;
            if (iteration >= totalIteration) {
                dice.classList.remove('dice-rolling');
                clearInterval(interval);
                isDiceRollingNow = false;
            }
        }, rollIntervalLapse);
    })
}

document.addEventListener('DOMContentLoaded', init);