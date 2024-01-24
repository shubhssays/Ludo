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
const pathToTraverse = {
    blue: ['h_id_1_1', 'h_id_2_1', 'h_id_3_1', 'h_id_4_1', 'h_id_5_1', 'v_id_15_1', 'v_id_12_1', 'v_id_9_1', 'v_id_6_1', 'v_id_3_1', 'v_id_0_1', 'v_id_1_1', 'v_id_2_1', 'v_id_5_1', 'v_id_8_1', 'v_id_11_1', 'v_id_14_1', 'v_id_17_1', 'h_id_0_2', 'h_id_1_2', 'h_id_2_2', 'h_id_3_2', 'h_id_4_2', 'h_id_5_2', 'h_id_11_2', 'h_id_17_2', 'h_id_16_2', 'h_id_15_2', 'h_id_14_2', 'h_id_13_2', 'h_id_12_2', 'v_id_2_2', 'v_id_5_2', 'v_id_8_2', 'v_id_11_2', 'v_id_14_2', 'v_id_17_2', 'v_id_16_2', 'v_id_15_2', 'v_id_12_2', 'v_id_9_2', 'v_id_6_2', 'v_id_3_2', 'v_id_0_2', 'h_id_17_1', 'h_id_16_1', 'h_id_15_1', 'h_id_14_1', 'h_id_13_1', 'h_id_12_1', 'h_id_6_1', 'h_id_7_1', 'h_id_8_1', 'h_id_9_1', 'h_id_10_1', 'h_id_11_1'],
    red: ['v_id_5_1', 'v_id_8_1', 'v_id_11_1', 'v_id_14_1', 'v_id_17_1', 'h_id_0_2', 'h_id_1_2', 'h_id_2_2', 'h_id_3_2', 'h_id_4_2', 'h_id_5_2', 'h_id_11_2', 'h_id_17_2', 'h_id_16_2', 'h_id_15_2', 'h_id_14_2', 'h_id_13_2', 'h_id_12_2', 'v_id_2_2', 'v_id_5_2', 'v_id_8_2', 'v_id_11_2', 'v_id_14_2', 'v_id_17_2', 'v_id_16_2', 'v_id_15_2', 'v_id_12_2', 'v_id_9_2', 'v_id_6_2', 'v_id_3_2', 'v_id_0_2', 'h_id_17_1', 'h_id_16_1', 'h_id_15_1', 'h_id_14_1', 'h_id_13_1', 'h_id_12_1', 'h_id_6_1', 'h_id_0_1', 'h_id_1_1', 'h_id_2_1', 'h_id_3_1', 'h_id_4_1', 'h_id_5_1', 'v_id_15_1', 'v_id_12_1', 'v_id_9_1', 'v_id_6_1', 'v_id_3_1', 'v_id_0_1', 'v_id_1_1', 'v_id_4_1', 'v_id_7_1', 'v_id_10_1', 'v_id_13_1', 'v_id_16_1'],
    green: ['h_id_16_2', 'h_id_15_2', 'h_id_14_2', 'h_id_13_2', 'h_id_12_2', 'v_id_2_2', 'v_id_5_2', 'v_id_8_2', 'v_id_11_2', 'v_id_14_2', 'v_id_17_2', 'v_id_16_2', 'v_id_15_2', 'v_id_12_2', 'v_id_9_2', 'v_id_6_2', 'v_id_3_2', 'v_id_0_2', 'h_id_17_1', 'h_id_16_1', 'h_id_15_1', 'h_id_14_1', 'h_id_13_1', 'h_id_12_1', 'h_id_6_1', 'h_id_0_1', 'h_id_1_1', 'h_id_2_1', 'h_id_3_1', 'h_id_4_1', 'h_id_5_1', 'v_id_15_1', 'v_id_12_1', 'v_id_9_1', 'v_id_6_1', 'v_id_3_1', 'v_id_0_1', 'v_id_1_1', 'v_id_2_1', 'v_id_5_1', 'v_id_8_1', 'v_id_11_1', 'v_id_14_1', 'v_id_17_1', 'h_id_0_2', 'h_id_1_2', 'h_id_2_2', 'h_id_3_2', 'h_id_4_2', 'h_id_5_2', 'h_id_11_2', 'h_id_10_2', 'h_id_9_2', 'h_id_8_2', 'h_id_7_2', 'h_id_6_2'],
    yellow: ['v_id_12_2', 'v_id_9_2', 'v_id_6_2', 'v_id_3_2', 'v_id_0_2', 'h_id_17_1', 'h_id_16_1', 'h_id_15_1', 'h_id_14_1', 'h_id_13_1', 'h_id_12_1', 'h_id_6_1', 'h_id_0_1', 'h_id_1_1', 'h_id_2_1', 'h_id_3_1', 'h_id_4_1', 'h_id_5_1', 'v_id_15_1', 'v_id_12_1', 'v_id_9_1', 'v_id_6_1', 'v_id_3_1', 'v_id_0_1', 'v_id_1_1', 'v_id_2_1', 'v_id_5_1', 'v_id_8_1', 'v_id_11_1', 'v_id_14_1', 'v_id_17_1', 'h_id_0_2', 'h_id_1_2', 'h_id_2_2', 'h_id_3_2', 'h_id_4_2', 'h_id_5_2', 'h_id_11_2', 'h_id_17_2', 'h_id_16_2', 'h_id_15_2', 'h_id_14_2', 'h_id_13_2', 'h_id_12_2', 'v_id_2_2', 'v_id_5_2', 'v_id_8_2', 'v_id_11_2', 'v_id_14_2', 'v_id_17_2', 'v_id_16_2', 'v_id_13_2', 'v_id_10_2', 'v_id_7_2', 'v_id_4_2', 'v_id_1_2']
}
const starPathBlock = ["v_id_11_2", "h_id_3_2", "v_id_6_1", "h_id_14_1", "v_id_12_2", "h_id_1_1", "v_id_5_1", "h_id_16_2"];
const secondsToWaitForAnotherChance = 1;
const gameRestartCommand = "restart_game";
const blockCount = 18;
const pathBlockClass = "path-block";
const idPrependHorizontal = "h_id_";
const idPrependVertical = "v_id_";
const idAppendOne = "_1";
const idAppendTwo = "_2";
const rollForSeconds = 2;
const rollIntervalLapse = 120;
const coinMovementFrequency = 180;
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
        console.log(event.target.id);
        elem.style.backgroundColor = "brown"
        setTimeout(function () {
            elem.style.backgroundColor = ""
        }, 1000);
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
    const player = currentPlayer;
    const color = currentPlayer.color;
    const score = parseInt(player.score);
    const coins = `${color}-coins`;

    let action;

    //no coin is out
    if (player.coin_out.length < 1) {
        //checking if score is 6 then, highlight the coins
        if (score == diceVal.six) {
            startCoinRotation(coins);
            action = playerActions.MOVE;
        }
    } else if (player.coin_out.length > 0) {
        startCoinRotation(coins);
    }

    //checking if action is empty, transfer the chance to next player in players array
    if (!action) {
        setTimeout(function () {
            nextPlayerTurn()
        }, secondsToWaitForAnotherChance * 1000)
    }
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
                    coin_home: [],
                    coin_position: {
                        [`${color}-coins-1`]: null,
                        [`${color}-coins-2`]: null,
                        [`${color}-coins-3`]: null,
                        [`${color}-coins-4`]: null,
                    },
                    // chance: index == 0 ? true : false,
                }
                selectedPlayers.push(playerObj);

                // click listener on color-coins
                document.querySelectorAll(`.${color}-coins`).forEach(elem => {
                    elem.addEventListener('click', event => {
                        const score = currentPlayer.score || 0;
                        if (score < 1) {
                            console.log("score is less than 1")
                            return;
                        }
                        const coinId = event.target.id;
                        const coin_home = currentPlayer.coin_home || [];
                        if (coin_home.includes(coinId)) {
                            alert("This coin is already home. Please click another coin.")
                            return;
                        }
                        const coin_in = currentPlayer.coin_in || [];
                        const coin_out = currentPlayer.coin_out || [];

                        if (!coin_out.includes(coinId) && !(score == diceVal.six && coin_in.includes(coinId))) {
                            console.log("not your chance or coin is inside")
                            return;
                        }
                        executeCoinMovement(coinId)
                    });
                });
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
    console.log(selectedPlayers)
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
    console.log("currentPlayer ******* ", currentPlayer);
    stopColorBoxBlinking();

    stopFingerBlinking();

    emptyDiceBox();

    startColorBoxBlinking();

    startFingerBlinking();

    addDiceToDiceBox();
}

// function to make coins move
function executeCoinMovement(coinId) {
    console.log("executeCoinMovement ******* ", coinId);
    const score = currentPlayer.score;
    currentPlayer.score = 0;
    const coin_in = currentPlayer.coin_in;
    const coin_out = currentPlayer.coin_out;
    const color = currentPlayer.color;
    const coinCurrentPositionId = currentPlayer.coin_position[coinId];

    //coin is inside
    if (coin_in.includes(coinId)) {
        if (score != diceVal.six) {
            return;
        }

        // coin is inside and player scored 6
        stopCoinRotation();
    } else if (coin_out.includes(coinId)) {
        const coinCurrentPositionIndex = pathToTraverse[color].findIndex(coinCurrentPositionId);
        const coinFinalPosition = coinCurrentPositionIndex + score;
        const pathBlockId = pathToTraverse[color][coinFinalPosition];
        console.log("pathBlockId ********* ", pathBlockId);
        stopCoinRotation();
        if (!checkIfPathIsSafe(pathBlockId) && (checkIfCoinPathBlockIsOccupied(pathBlockId) != null)) {
            //path block is occupied by another coin, cut it

            //now, iterate the cut-coin from current position back to inside color block

            //give current player another chance
        }

        //iterate the coin from current position to pathBlockId

        //now, next player chance
        nextPlayerTurn()
    } else {
        fixError()
        return;
    }
}

// function to check how many coins are present at any given path block
function checkIfCoinPathBlockIsOccupied(pathBlockId) {
    for (let player of players) {
        if (player.inputId != currentPlayer.inputId) {
            const coin_position = player.coin_position;
            for (let coin in coin_position) {
                if (coin_position[coin] == pathBlockId) {
                    return coin;
                }
            }
        }
    }
    return null;
}

// function to stop current coin rotation
function stopCoinRotation() {
    const allCoinRotate = document.querySelectorAll(".coin-rotate");
    allCoinRotate.forEach(coinRotate => {
        coinRotate.classList.remove('coin-rotate');
    });
}

// function to start current coin rotation
function startCoinRotation(coins) {
    const allCoins = document.querySelectorAll(`.${coins}`);
    allCoins.forEach(eachCoin => {
        eachCoin.classList.add('coin-rotate');
    });
}

// function to check if a particular path block is safe zone i.e. marked with star
function checkIfPathIsSafe(pathBlockId) {
    if (starPathBlock.includes(pathBlockId)) {
        return true;
    }
    return false;
}

// function to start current player finger blinking
function startFingerBlinking() {
    const diceOd = document.getElementById(`od-${currentPlayer.color}`);
    const fingerArrow = diceOd.querySelector(".finger");
    if (fingerArrow) {
        fingerArrow.classList.remove('hide');
    }
}

// function to stop finger blinking
function stopFingerBlinking() {
    const allFingerArrow = document.querySelectorAll('.finger');
    allFingerArrow.forEach(fingerArrow => {
        fingerArrow.classList.add('hide')
    });
}

// function to make dice box blank
function emptyDiceBox() {
    const allDiceBox = document.querySelectorAll('.dbb');
    allDiceBox.forEach(diceBox => {
        diceBox.classList = 'dbb dice-box-blank';
        diceBox.style.backgroundImage = "";
    });
}

// function to add dice to current player dice box
function addDiceToDiceBox() {
    const diceOd = document.getElementById(`od-${currentPlayer.color}`);
    const diceBoxBlank = diceOd.querySelector(".dbb");
    if (diceBoxBlank) {
        diceBoxBlank.classList.remove('dice-box-blank');
        diceBoxBlank.classList.add(`dice-box-${currentPlayer.color}`);
    }
}

// function to start blink current player color box
function startColorBoxBlinking() {
    const currentBoard = document.getElementById(`board-${currentPlayer.color}`)
    const currentBlinking = `blink-${currentPlayer.color}`;
    currentBoard.classList.add(currentBlinking);
}

// function to stop blink current player color box
function stopColorBoxBlinking() {
    blueBoard.classList.remove("blink-blue");
    redBoard.classList.remove("blink-red");
    greenBoard.classList.remove("blink-green");
    yellowBoard.classList.remove("blink-yellow");
}

// function to move coin from one position to another
function moveCoin(coinId, startIndex, endIndex) {
    let isForwardMovement = true;

    // find coin color
    const color = getColorFromCoinId(coinId);

    // find current position of coin
    const coinCurrentPositionId = players.find(player => player.color == color).coin_position[coinId];

    //check for forward or backward movement
    if (startIndex > endIndex) {
        isForwardMovement = false;
    }

    //move it now
    for (let i = 0; i < Math.abs(startIndex - endIndex); i++) {
        // const pathBlockId = pathToTraverse[color][]
        setTimeout(function () {
            drawCoin(coinId, pathBlockId);
        }, coinMovementFrequency);
    }

    //update the coin details in player array
}

// function to get color from coinId
function getColorFromCoinId(coinId) {
    const color = coinId.split("-")[0];
    return color;
}

// function to draw coin on board
function drawCoin(coinId, pathBlockId) {
    const color = getColorFromCoinId(coinId);
    let coinElement;

    //get current position of coin
    let coinPosition = currentPlayer.coin_position[coinId];
    if (coinPosition == null) { //it means coin is inside home color block
        coinPosition = coinId;
    }
    //get coin element
    coinElement = document.getElementById(coinPosition);
    const colorClass = `${color}-coins`;

    //remove coin from its current position
    coinElement.classList.remove(colorClass);

    //populate coin at given pathBlockId
    const pathBlock = document.getElementById(pathBlockId);
    pathBlock.classList.add(colorClass);

    //updating coin position
    currentPlayer.coin_position[coinId] = pathBlockId;
}

currentPlayer = {
    "inputId": "player-one",
    "inputPlayerName": "Player 1",
    "color": "blue",
    "coin_in": [
        "blue-coins-1",
        "blue-coins-2",
        "blue-coins-3",
        "blue-coins-4"
    ],
    "coin_out": [],
    "coin_home": [],
    "coin_position": {
        "blue-coins-1": null,
        "blue-coins-2": null,
        "blue-coins-3": null,
        "blue-coins-4": null
    }
}

drawCoin("blue-coins-1", "h_id_3_1")

// document.addEventListener('DOMContentLoaded', init);