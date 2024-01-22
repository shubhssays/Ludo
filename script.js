//html constants
const gameBoard = document.getElementById("game-board");
const blueBoard = document.getElementById("board-blue");
const redBoard = document.getElementById("board-red");
const greenBoard = document.getElementById("board-green");
const yellowBoard = document.getElementById("board-yellow");
const pathHorizontalOne = document.getElementsByClassName("path-horizontal-one");
const pathHorizontalTwo = document.getElementsByClassName("path-horizontal-two");
const pathVerticalOne = document.getElementsByClassName("path-vertical-one");
const pathVerticalTwo = document.getElementsByClassName("path-vertical-two");
// const dice = document.getElementById("dice");
const startGameButton = document.getElementById("start-game");
const restartGameButton = document.getElementById("restart-game");
const instructionText = document.getElementById("instruction");
const initModal = document.getElementById("init-modal");
const closeInitModelButton = document.getElementById("close-init-modal");
const confirmInitModelButton = document.getElementById("confirm-init-modal");
const playerOneInput = document.getElementById("player-one");
const playerTwoInput = document.getElementById("player-two");
const playerThreeInput = document.getElementById("player-three");
const playerFourInput = document.getElementById("player-four");
const diceHolder = document.getElementById("dice-holder");

// game constants
const gameStatus = {
    NOT_STARTED: "not_started",
    CONFIGURING: "configuring_game",
    RUNNING: "running",
    WINNER_DECLARED: "winner_declared",
}
const playerActions = {
    ROLL: "roll",
    MOVE: "move"
}
const defaultPlayerPrepend = "Player";
const numberMapper = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
}
const diceVal = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
}
const colorMapper = {
    blue: {
        backgroundColor: "#1a42d5",
        color: "whitesmoke",
    },
    red: {
        backgroundColor: "#D71313",
        color: "whitesmoke",
    },
    green: {
        backgroundColor: "#00DFA2",
        color: "whitesmoke",
    },
    yellow: {
        backgroundColor: "#FFF103",
        color: "#333",
    },
}
const secondsToWaitForAnotherChance = 2;
const gameRestartCommand = "restart_game";
const blockCount = 18;
const pathBlockClass = "path-block";
const idPrependHorizontal = "h_id_";
const idPrependVertical = "v_id_";
const idAppendOne = "_1";
const idAppendTwo = "_2";
const rollForSeconds = 2;
const rollIntervalLapse = 120;
const disabledClass = "disabled";
let numOfPlayers = 2;
let currentGameStatus = gameStatus.NOT_STARTED;
isDiceRollingNow = false;
const pathIds = [];
const defaultInstruction = "Game has not started yet. Click on Start Game Button";
instructionText.innerText = defaultInstruction;
let players = [];
let currentPlayer;
let currentChance;
let currentPlayerDiceScore = [];

//function to update game current status
function changeGameStatus(status) {
    currentGameStatus = status;
    switch (currentGameStatus) {
        case gameStatus.NOT_STARTED:
            startGameButton.innerText = "Start Game";
            startGameButton.classList.remove(disabledClass);
            startGameButton.style.display = "block";
            restartGameButton.style.display = "none";
            break;

        case gameStatus.CONFIGURING:
            startGameButton.innerText = "Configuring Game...";
            restartGameButton.style.display = "block";
            startGameButton.classList.add(disabledClass);
            break;

        case gameStatus.RUNNING:
            startGameButton.innerText = "Game's running...";
            restartGameButton.style.display = "block";
            startGameButton.classList.add(disabledClass);
            break;

        case gameStatus.WINNER_DECLARED:
            startGameButton.classList.remove(disabledClass);
            startGameButton.style.display = "none";
            break;
    }
}

changeGameStatus(currentGameStatus)

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

//checking for game restart command
const restartStatus = localStorage.getItem(gameRestartCommand);
if (restartStatus != null && restartStatus) {
    localStorage.removeItem(gameRestartCommand);
    startGame();
}

// Add a click event listener to all elements with the class "path-block"
document.querySelectorAll('.path-block').forEach(elem => {
    elem.addEventListener('click', event => {
        alert(event.target.id);
    });
});

//Handling roll Dice Button click handler
function handleDiceRoll(dice) {
    dice.classList.add(disabledClass);
    dice.disabled = true;
    if (isDiceRollingNow) {
        alert("dice is already rolling. Let it finish")
    }
    isDiceRollingNow = true;
    let score;
    let iteration = 0;
    const totalIteration = rollForSeconds * 1000;
    dice.classList.add('dice-rolling');
    let interval = setInterval(function () {
        score = Math.floor(Math.random() * 6) + 1;
        dice.style.backgroundImage = `url('./assets/dice-${score}-${currentPlayer.color}.png')`;
        iteration = iteration + rollIntervalLapse;
        if (iteration >= totalIteration) {
            dice.classList.remove('dice-rolling');
            clearInterval(interval);
            dice.disabled = false;
            dice.classList.remove(disabledClass);
            isDiceRollingNow = false;
            currentPlayer.score = parseInt(score);
            handlerPlayerChance();
        }
    }, rollIntervalLapse);
}

//handle player chance
function handlerPlayerChance() {
    const allCoinRotate = document.querySelectorAll(".coin-rotate");
    allCoinRotate.forEach(coinRotate => {
        coinRotate.classList.remove('coin-rotate');
    });

    const player = currentPlayer;
    const color = currentPlayer.color;
    const score = parseInt(player.score);
    const coins = `${color}-coins`;

    let action;

    //no coin is out
    if (player.coin_out.length < 1) {
        //checking if score is 6 then, highlight the coins
        if (score == diceVal.six) {
            const allCoins = document.querySelectorAll(`.${coins}`);
            allCoins.forEach(eachCoin => {
                eachCoin.classList.add('coin-rotate');
            });
            action = playerActions.MOVE;
        }
    }


    //checking if action is empty, transfer the chance to next player in players array

    setTimeout(function(){
        if (!action) {
            nextPlayerTurn()
        }
    },secondsToWaitForAnotherChance * 1000)
}

//function to change currentPlayer chance
function nextPlayerTurn() {
    console.log("nextPlayerTurn called")
    console.log("currentPlayer before *** ", currentPlayer);
    const playersLength = players.length;
    const currentPlayerIndex = players.findIndex(player => player.inputId == currentPlayer.inputId);
    if (currentPlayerIndex == -1) {
        fixError()
        return;
    }
    console.log("currentPlayerIndex *** ", currentPlayerIndex);

    if (currentPlayerIndex < playersLength - 1) {
        currentPlayer = players[currentPlayerIndex + 1];
    } else {
        currentPlayer = players[0];
    }
    setBlink();
}

//Handling start game Button click handler
startGameButton.addEventListener("click", function (event) {
    startGame();
})

//Handling restart game Button click handler
restartGameButton.addEventListener("click", function (event) {
    if (currentGameStatus != gameStatus.NOT_STARTED) {
        localStorage.setItem(gameRestartCommand, true);
        location.reload();
    } else {
        alert("Invalid action. Game cannot be restarted now")
    }
})

//Handling game basic start configuration
function startGame() {
    // instructionText.innerText = "Configure player name and their color...";
    changeGameStatus(gameStatus.CONFIGURING);
    openInitModal();
}

// Function to open the modal
function openInitModal() {
    initModal.style.display = "flex";
}

// Function to close the modal
function closeInitModal() {
    initModal.style.display = "none";
    if (currentGameStatus == gameStatus.CONFIGURING) {
        location.reload();
    }
}

// function to close init modal
closeInitModelButton.addEventListener("click", function () {
    closeInitModal();
});

// function to begin game after player configuration 
confirmInitModelButton.addEventListener("click", function () {
    beginGame();
});

//function to handle number of selected players
function handleSelectedPlayers(clickedButton) {
    let numOfSelectedCheckbox = getSelectedCheckboxColors();
    const buttons = document.querySelectorAll('.button-options');
    buttons.forEach(button => {
        button.classList.add('button-unselected');
        button.classList.remove('button-selected');
    });

    clickedButton.classList.remove('button-unselected');
    clickedButton.classList.add('button-selected');
    numOfPlayers = parseInt(clickedButton.getAttribute("data-num"));
    if (numOfSelectedCheckbox > numOfPlayers) {
        const unselectNumOfCheckbox = numOfSelectedCheckbox - numOfPlayers;
        let init = 0;
        const allCheckbox = Array.from(document.querySelectorAll('.cbp'));
        //unselecting checkbox from last
        allCheckbox.reverse();
        allCheckbox.forEach(checkbox => {
            if (checkbox.checked && init < unselectNumOfCheckbox) {
                checkbox.checked = !checkbox.checked;
                init++;
            }
        });
    } else {
        const selectNumOfCheckbox = numOfPlayers - numOfSelectedCheckbox;
        let init = 0;
        const allCheckbox = Array.from(document.querySelectorAll('.cbp'));
        allCheckbox.forEach(checkbox => {
            if (!checkbox.checked && init < selectNumOfCheckbox) {
                checkbox.checked = !checkbox.checked;
                init++;
            }
        });
    }
}

//function to handle choose colors
function handleColorSelection(clickedCheckbox) {
    let numOfSelectedCheckbox = getSelectedCheckboxColors();

    if (numOfSelectedCheckbox > numOfPlayers) {
        alert("You cannot select players more than number of players defined above.")
        clickedCheckbox.checked = !clickedCheckbox.checked;
        return;
    }
    lastSelectedColorCheckBox = clickedCheckbox;
}

//function to get count of selected players colors
function getSelectedCheckboxColors() {
    let numOfSelectedCheckbox = 0;
    const allCheckbox = document.querySelectorAll('.cbp');
    allCheckbox.forEach(checkbox => {
        if (checkbox.checked) {
            numOfSelectedCheckbox++;
        }
    });
    return numOfSelectedCheckbox;
}

//function to update instruction
function setInstruction() {
    const playerTurn = currentPlayer.inputPlayerName + "(" + currentPlayer.color + ")";
    instructionText.innerText = "It's " + playerTurn + " chance to roll dice now";
    instructionText.style.backgroundColor = colorMapper[currentPlayer.color].backgroundColor;
    instructionText.style.color = colorMapper[currentPlayer.color].color;
}

//Begin Game
function beginGame() {
    if (currentGameStatus == gameStatus.RUNNING) {
        return;
    }

    // Add a click event listener to all elements with the class 
    document.querySelectorAll('.dbb').forEach(elem => {
        elem.addEventListener('click', event => {
            if (event.target.classList[1] == "dice-box-blank") {
                return;
            }
            handleDiceRoll(event.target)
        });
    });

    diceHolder.style.display = "block";
    players = validateAndSaveConfiguration();
    if (!players || players.length < 1) {
        return;
    }
    changeGameStatus(gameStatus.RUNNING);
    closeInitModal();
    currentPlayer = players[0];
    currentChance = currentPlayer.color;
    // setInstruction();
    setBlink();
}


// validate game configuration and save it
function validateAndSaveConfiguration() {
    let numOfSelectedCheckbox = getSelectedCheckboxColors();
    let errorFound = false;

    //validating player configuration
    if (numOfPlayers != numOfSelectedCheckbox) {
        alert("Seems like you've not selected colored checkbox properly. Please select colored box or reset if you're not sure.")
        return;
    }

    const selectedPlayers = [];

    const allCheckbox = document.querySelectorAll('.cbp');
    allCheckbox.forEach((checkbox, index) => {
        if (checkbox.checked) {
            const parent = checkbox.parentNode;
            let input;

            // Get all children of the parent node (siblings)
            const siblings = Array.from(parent.children);

            // Highlight each sibling
            siblings.forEach(sibling => {
                if (sibling !== checkbox) {
                    input = sibling;
                }
            });

            if (input) {
                const inputId = input.getAttribute("id");
                const inputElement = document.getElementById(inputId);
                const inputPlayerName = inputElement.value || getPlayerAlternateName(inputId);

                const color = checkbox.classList[1].replace("cb-", "").toLowerCase()
                const playerObj = {
                    inputId,
                    inputPlayerName,
                    color,
                    coin_in: [`${color}-coins-1`, `${color}-coins-2`, `${color}-coins-3`, `${color}-coins-4`],
                    coin_out: [],
                    chance: index == 0 ? true : false,
                }
                selectedPlayers.push(playerObj);
            }
        }
    });

    for (let i = 0; i < selectedPlayers.length; i++) {
        for (let j = i + 1; j < selectedPlayers.length; j++) {
            if (selectedPlayers[i].inputPlayerName == selectedPlayers[j].inputPlayerName) {
                errorFound = true;
                alert("Players cannot have same name. Please change name");
            }
            if (errorFound) {
                break;
            }
        }
        if (errorFound) {
            break;
        }
    }

    if (errorFound) {
        return
    }

    return selectedPlayers;
}

// Function to show error and reset everything
function fixError() {
    alert("Seems like there is some issue with player configuration. Thus, restarting game");
    localStorage.clear();
    location.reload();
}

// generate default player name
function getPlayerAlternateName(inputId) {
    const playerNumber = inputId.split("-")[1].trim();
    const playerName = defaultPlayerPrepend + " " + numberMapper[playerNumber];
    return playerName;
}

// blink color board by based on player's turn
function setBlink() {
    console.log("currentPlayer ******* ", currentPlayer)
    blueBoard.classList.remove("blink-blue");
    redBoard.classList.remove("blink-red");
    greenBoard.classList.remove("blink-green");
    yellowBoard.classList.remove("blink-yellow");

    const allFingerArrow = document.querySelectorAll('.finger');
    allFingerArrow.forEach(fingerArrow => {
        fingerArrow.classList.add('hide')
    });

    const allDiceBox = document.querySelectorAll('.dbb');
    allDiceBox.forEach(diceBox => {
        diceBox.classList = 'dbb dice-box-blank';
        diceBox.style.backgroundImage = "";
    });


    const currentBoard = document.getElementById(`board-${currentPlayer.color}`)
    const currentBlinking = `blink-${currentPlayer.color}`;
    currentBoard.classList.add(currentBlinking);
    const diceOd = document.getElementById(`od-${currentPlayer.color}`);
    const fingerArrow = diceOd.querySelector(".finger");
    if (fingerArrow) {
        fingerArrow.classList.remove('hide');
    }

    const diceBoxBlank = diceOd.querySelector(".dbb");
    if (diceBoxBlank) {
        diceBoxBlank.classList.remove('dice-box-blank');
        diceBoxBlank.classList.add(`dice-box-${currentPlayer.color}`);
    }
}




// document.addEventListener('DOMContentLoaded', init);