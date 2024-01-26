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
const startGameButton = document.getElementById("start-game");
const restartGameButton = document.getElementById("restart-game");
const initModal = document.getElementById("init-modal");
const closeInitModelButton = document.getElementById("close-init-modal");
const confirmInitModelButton = document.getElementById("confirm-init-modal");
const playerOneInput = document.getElementById("player-one");
const playerTwoInput = document.getElementById("player-two");
const playerThreeInput = document.getElementById("player-three");
const playerFourInput = document.getElementById("player-four");

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
const allColors = ["blue", "red", "green", "yellow"];
const pathToTraverse = {
    blue: ['h_id_1_1', 'h_id_2_1', 'h_id_3_1', 'h_id_4_1', 'h_id_5_1', 'v_id_15_1', 'v_id_12_1', 'v_id_9_1', 'v_id_6_1', 'v_id_3_1', 'v_id_0_1', 'v_id_1_1', 'v_id_2_1', 'v_id_5_1', 'v_id_8_1', 'v_id_11_1', 'v_id_14_1', 'v_id_17_1', 'h_id_0_2', 'h_id_1_2', 'h_id_2_2', 'h_id_3_2', 'h_id_4_2', 'h_id_5_2', 'h_id_11_2', 'h_id_17_2', 'h_id_16_2', 'h_id_15_2', 'h_id_14_2', 'h_id_13_2', 'h_id_12_2', 'v_id_2_2', 'v_id_5_2', 'v_id_8_2', 'v_id_11_2', 'v_id_14_2', 'v_id_17_2', 'v_id_16_2', 'v_id_15_2', 'v_id_12_2', 'v_id_9_2', 'v_id_6_2', 'v_id_3_2', 'v_id_0_2', 'h_id_17_1', 'h_id_16_1', 'h_id_15_1', 'h_id_14_1', 'h_id_13_1', 'h_id_12_1', 'h_id_6_1', 'h_id_7_1', 'h_id_8_1', 'h_id_9_1', 'h_id_10_1', 'h_id_11_1'],
    red: ['v_id_5_1', 'v_id_8_1', 'v_id_11_1', 'v_id_14_1', 'v_id_17_1', 'h_id_0_2', 'h_id_1_2', 'h_id_2_2', 'h_id_3_2', 'h_id_4_2', 'h_id_5_2', 'h_id_11_2', 'h_id_17_2', 'h_id_16_2', 'h_id_15_2', 'h_id_14_2', 'h_id_13_2', 'h_id_12_2', 'v_id_2_2', 'v_id_5_2', 'v_id_8_2', 'v_id_11_2', 'v_id_14_2', 'v_id_17_2', 'v_id_16_2', 'v_id_15_2', 'v_id_12_2', 'v_id_9_2', 'v_id_6_2', 'v_id_3_2', 'v_id_0_2', 'h_id_17_1', 'h_id_16_1', 'h_id_15_1', 'h_id_14_1', 'h_id_13_1', 'h_id_12_1', 'h_id_6_1', 'h_id_0_1', 'h_id_1_1', 'h_id_2_1', 'h_id_3_1', 'h_id_4_1', 'h_id_5_1', 'v_id_15_1', 'v_id_12_1', 'v_id_9_1', 'v_id_6_1', 'v_id_3_1', 'v_id_0_1', 'v_id_1_1', 'v_id_4_1', 'v_id_7_1', 'v_id_10_1', 'v_id_13_1', 'v_id_16_1'],
    green: ['h_id_16_2', 'h_id_15_2', 'h_id_14_2', 'h_id_13_2', 'h_id_12_2', 'v_id_2_2', 'v_id_5_2', 'v_id_8_2', 'v_id_11_2', 'v_id_14_2', 'v_id_17_2', 'v_id_16_2', 'v_id_15_2', 'v_id_12_2', 'v_id_9_2', 'v_id_6_2', 'v_id_3_2', 'v_id_0_2', 'h_id_17_1', 'h_id_16_1', 'h_id_15_1', 'h_id_14_1', 'h_id_13_1', 'h_id_12_1', 'h_id_6_1', 'h_id_0_1', 'h_id_1_1', 'h_id_2_1', 'h_id_3_1', 'h_id_4_1', 'h_id_5_1', 'v_id_15_1', 'v_id_12_1', 'v_id_9_1', 'v_id_6_1', 'v_id_3_1', 'v_id_0_1', 'v_id_1_1', 'v_id_2_1', 'v_id_5_1', 'v_id_8_1', 'v_id_11_1', 'v_id_14_1', 'v_id_17_1', 'h_id_0_2', 'h_id_1_2', 'h_id_2_2', 'h_id_3_2', 'h_id_4_2', 'h_id_5_2', 'h_id_11_2', 'h_id_10_2', 'h_id_9_2', 'h_id_8_2', 'h_id_7_2', 'h_id_6_2'],
    yellow: ['v_id_12_2', 'v_id_9_2', 'v_id_6_2', 'v_id_3_2', 'v_id_0_2', 'h_id_17_1', 'h_id_16_1', 'h_id_15_1', 'h_id_14_1', 'h_id_13_1', 'h_id_12_1', 'h_id_6_1', 'h_id_0_1', 'h_id_1_1', 'h_id_2_1', 'h_id_3_1', 'h_id_4_1', 'h_id_5_1', 'v_id_15_1', 'v_id_12_1', 'v_id_9_1', 'v_id_6_1', 'v_id_3_1', 'v_id_0_1', 'v_id_1_1', 'v_id_2_1', 'v_id_5_1', 'v_id_8_1', 'v_id_11_1', 'v_id_14_1', 'v_id_17_1', 'h_id_0_2', 'h_id_1_2', 'h_id_2_2', 'h_id_3_2', 'h_id_4_2', 'h_id_5_2', 'h_id_11_2', 'h_id_17_2', 'h_id_16_2', 'h_id_15_2', 'h_id_14_2', 'h_id_13_2', 'h_id_12_2', 'v_id_2_2', 'v_id_5_2', 'v_id_8_2', 'v_id_11_2', 'v_id_14_2', 'v_id_17_2', 'v_id_16_2', 'v_id_13_2', 'v_id_10_2', 'v_id_7_2', 'v_id_4_2', 'v_id_1_2']
}
const blackStars = ["v_id_11_2", "h_id_3_2", "v_id_6_1", "h_id_14_1"]
const starPathBlock = ["v_id_11_2", "h_id_3_2", "v_id_6_1", "h_id_14_1", "v_id_12_2", "h_id_1_1", "v_id_5_1", "h_id_16_2"];
const secondsToWaitForAnotherChance = 0.8;
const gameRestartCommand = "restart_game";
const blockCount = 18;
const pathBlockClass = "path-block";
const idPrependHorizontal = "h_id_";
const idPrependVertical = "v_id_";
const idAppendOne = "_1";
const idAppendTwo = "_2";
const rollForSeconds = 2;
const rollIntervalLapse = 120;
const coinForwardMovementFrequency = 500;
const coinBackwardMovementFrequency = 100;
const disabledClass = "disabled";
let numOfPlayers = 2;
let currentGameStatus = gameStatus.NOT_STARTED;
isDiceRollingNow = false;
const pathIds = [];
let players = [];
let currentPlayer;
let currentChance;
let currentPlayerDiceScore = [];

hideHomeCoinsHolder();

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

//creating reversePath traverse
const reversePathTraverse = {
    blue: [...pathToTraverse.blue].reverse(),
    red: [...pathToTraverse.red].reverse(),
    green: [...pathToTraverse.green].reverse(),
    yellow: [...pathToTraverse.yellow].reverse(),
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

//creating black star
for (let blackStar of blackStars) {
    const pathBlock = document.getElementById(blackStar);
    const star = document.createElement("div");
    const dynamicBst = getBstClassName(blackStar);
    star.classList = `black-star ${dynamicBst}-bst`;
    pathBlock.appendChild(star);

    //detecting changes for black star path block using MutationObserver
    const blackStarPathBlock = document.getElementById(blackStar);
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            // Check if nodes were added
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                console.log('New inner div added!', mutation);
                const uniqueCoins = [];
                let bstClass = blackStarPathBlock.childNodes[0].classList.value;
                if (bstClass.includes("h-bst")) {
                    bstClass = "h-bst";
                } else {
                    bstClass = "v-bst";
                }
                for (let c = 1; c < blackStarPathBlock.childNodes.length; c++) {
                    const coinClass = blackStarPathBlock.childNodes[c].classList.value.replace(bstClass, "");
                    if (uniqueCoins.includes(coinClass)) {
                        // if same color coins is added twice, hide them
                        mutation.addedNodes[0].style.display = "none";
                        break;
                    }
                    uniqueCoins.push(coinClass)
                }
            }
        });
    });

    // Configure the observer to listen for changes
    const observerConfig = { childList: true };
    observer.observe(blackStarPathBlock, observerConfig);
}

//checking for game restart command
const restartStatus = localStorage.getItem(gameRestartCommand);
if (restartStatus != null && restartStatus) {
    localStorage.removeItem(gameRestartCommand);
    startGame();
}

// Add a click event listener to all elements with the class "path-block"
// document.querySelectorAll('.path-block').forEach(elem => {
//     elem.addEventListener('click', event => {
//         console.log(event.target.id);
//         elem.style.backgroundColor = "brown"
//         setTimeout(function () {
//             elem.style.backgroundColor = ""
//         }, 1000);
//     });
// });

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
        score = Math.floor(Math.random() * 2) + 5;//Math.floor(Math.random() * 6) + 5;
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
    } else {
        //checking if action is empty, transfer the chance to next player in players array
        setTimeout(function () {
            nextPlayerTurn()
        }, secondsToWaitForAnotherChance * 1000)
    }
}

//function to change currentPlayer chance
function nextPlayerTurn() {
    if (currentGameStatus == gameStatus.NOT_STARTED && initModal.style.display != "none") {
        changeGameStatus(gameStatus.RUNNING);
        closeInitModal();
        currentPlayer = players[0];
        currentChance = currentPlayer.color;
        setBlink();
        return;
    }

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

    players = validateAndSaveConfiguration();
    if (!players || players.length < 1) {
        return;
    }
    changeGameStatus(gameStatus.NOT_STARTED);
    nextPlayerTurn()
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
                const inputPlayerName = (inputElement.value || getPlayerAlternateName(inputId)).toUpperCase();

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
                };
                document.getElementById(`${color}-player-name`).innerText = inputPlayerName
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
    showHomeCoinsHolder();
    markNonParticipantsColor(selectedPlayers);
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

    // stop coin rotation
    stopCoinRotation();

    //coin is inside
    if (coin_in.includes(coinId)) {
        if (score != diceVal.six) {
            return;
        }
        // coin is inside and player scored 6
        moveCoin(coinId, 1, true, false);
        //marking this coins as out
        const player = players.find(player => player.color == color);
        const indexToRemove = player.coin_in.indexOf(coinId);
        player.coin_in.splice(indexToRemove, 1);
        player.coin_out.push(coinId);
        stopFingerBlinking();
    } else if (coin_out.includes(coinId)) {
        const coinCurrentPositionIndex = pathToTraverse[color].findIndex(coinCurrentPositionId);
        const numberOfTraverse = coinCurrentPositionIndex + score;
        // const pathBlockId = pathToTraverse[color][coinFinalPosition];
        // console.log("pathBlockId ********* ", pathBlockId);
        stopCoinRotation();

        moveCoin(coinId, numberOfTraverse, true, true);

        //iterate the coin from current position to pathBlockId

        //now, next player chance
        // nextPlayerTurn()
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
            for (let coinId in coin_position) {
                if (coin_position[coinId] == pathBlockId) {
                    return coinId;
                }
            }
        }
    }
    return null;
}

// function to check if a particular path block is safe zone i.e. marked with star
function checkIfPathIsSafe(pathBlockId) {
    if (starPathBlock.includes(pathBlockId)) {
        return true;
    }
    return false;
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
function moveCoin(coinId, numberOfTraverse, isForward = true, callNextPlayerTurn = false) {
    if (currentGameStatus != gameStatus.RUNNING) {
        alert("Game is not running");
        return;
    }
    const motionFrequency = isForward ? coinForwardMovementFrequency : coinBackwardMovementFrequency;

    // find coin color
    const color = getColorFromCoinId(coinId);

    // adding check to see if number of traverse is possible or not
    const currentPositionId = getCoinCurrentPosition(coinId);

    if (isForward) {
        const maxForwardPathTraverseValue = pathToTraverse[color].length
        if (currentPositionId == coinId) {
            if (numberOfTraverse > maxForwardPathTraverseValue) {
                alert("Impossible move forward 1")
                return;
            }
        } else {
            const currentPositionIndex = pathToTraverse[color].findIndex(elem => elem == currentPositionId);
            if (numberOfTraverse > maxForwardPathTraverseValue - currentPositionIndex) {
                alert("Impossible move forward 2")
                return;
            }
        }
    } else {
        const maxForwardPathTraverseValue = reversePathTraverse[color].length
        if (currentPositionId == coinId) {
            if (numberOfTraverse > maxForwardPathTraverseValue) {
                alert("Impossible move backward 1")
                return;
            }
        } else {
            const currentPositionIndex = reversePathTraverse[color].findIndex(elem => elem == currentPositionId);
            if (numberOfTraverse > maxForwardPathTraverseValue - currentPositionIndex) {
                alert("Impossible move backward 2")
                return;
            }
        }
    }


    // move it now
    let movementCount = 0;
    // find current position of coin

    let interval = setInterval(function () {
        console.log("movementCount **** ", movementCount)
        console.log("numberOfTraverse **** ", numberOfTraverse)
        if (movementCount + 1 >= numberOfTraverse) {
            clearInterval(interval);
            console.log("move **** ", movementCount, "completed")

            if (callNextPlayerTurn) {
                if (currentPlayer.score != diceVal.six) {
                    nextPlayerTurn();
                } else {
                    startFingerBlinking();
                }
            } else {
                setBlink(false);
            }
        }
        let pathBlockId;
        let coinCurrentPositionId = getCoinCurrentPosition(coinId);
        console.log("color **** ", color)
        console.log("coinCurrentPositionId **** ", coinCurrentPositionId)
        console.log("check 1 **** ", coinCurrentPositionId == coinId)
        if (coinCurrentPositionId == coinId) {
            positionIndex = 0;
        } else {
            console.log("check yahn ***** ", typeof positionIndex != "undefined", positionIndex)
            if (typeof positionIndex != "undefined") {
                console.log("andar yahn **** ", movementCount)
                positionIndex = pathToTraverse[color].findIndex(elem => elem == coinCurrentPositionId);
            }
        }
        movementCount++
        if (coinCurrentPositionId != coinId) {
            if (isForward) {
                positionIndex = positionIndex + 1;
            } else {
                positionIndex = positionIndex - 1;
            }
        }
        console.log("positionIndex **** ", positionIndex)
        pathBlockId = pathToTraverse[color][positionIndex];
        console.log("pathBlock **** ", pathBlockId)
        drawCoin(coinId, pathBlockId, isForward);
    }, motionFrequency);

    //update the coin details in player array
}

// function to get color from coinId
function getColorFromCoinId(coinId) {
    const color = coinId.split("-")[0];
    return color;
}

// function to draw coin on board
function drawCoin(coinId, pathBlockId, isForward) {
    console.log("drawCoin called ********* ")
    const color = getColorFromCoinId(coinId);
    const pathBlock = document.getElementById(pathBlockId);

    let coinElement;

    let isHome = 0; // 0 - just a normal movement && 1 - when won && -1 -> when coin is cut

    //get current position of coin
    let coinPosition = getCoinCurrentPosition(coinId);


    //get coin element
    coinElement = document.getElementById(coinPosition);

    console.log("CHECK ********* ", pathBlockId, " if ******* ", blackStars.includes(pathBlockId))

    const colorClass = `${color}-coins`;

    //checking if another coin is present in the same place
    if (!checkIfPathIsSafe(pathBlockId) && (checkIfCoinPathBlockIsOccupied(pathBlockId) != null)) {
        //path block is occupied by another coin, cut it
        const otherCoinId = checkIfCoinPathBlockIsOccupied(pathBlockId);
        if (otherCoinId != null) {
            //marking coin as in after cut
            const player = players.find(player => player.color == color);
            player.coin_in.push(coinId);
            const indexToRemove = player.indexOf(coinId);
            player.splice(indexToRemove, 1);
            toCutCoins(otherCoinId);
        }
    }

    // if coin sits on a black star, then remove div instead of removing just class
    if (blackStars.includes(pathBlockId)) {
        console.log("ALMIGHTY CHECK ***** ", "IF")
        const allCoinChild = coinElement.querySelectorAll(`.${colorClass}`);
        const colorClassCount = allCoinChild.length;
        console.log("colorClassCount ****** ", colorClassCount);
        if (colorClassCount == 0) {
            //remove coin from its current position
            coinElement.classList.remove(colorClass);
        } else {
            //remove coin div from its current position
            allCoinChild[0].remove();
        }

        //remove display none
        if (colorClassCount - 1 > 0) {
            coinElement.querySelectorAll(`.${colorClass}`)[colorClassCount - 1].style.display = "";
        }

        const dynamicBst = getBstClassName(pathBlockId);

        //populate coin at given pathBlockId
        const colorDiv = document.createElement("div");
        colorDiv.classList = `${color}-coins ${dynamicBst}-bst`;
        pathBlock.appendChild(colorDiv);
    } else {
        console.log("ALMIGHTY CHECK ***** ", "ELSE")
        //get same pathBlockCount
        const count = isSameColorOccupiesPathBlock(coinId, pathBlockId);
        console.log("ELSE count ****** ", count);

        console.log("ELSE DOUBLE CHECK@@@@ ****** ", count < 1);
        if (count < 1) {
            //remove coin from its current position
            coinElement.classList.remove(colorClass);
        }

        const allCoinChild = coinElement.querySelectorAll(`.${colorClass}`);
        console.log("ELSE CHECK@@@@2222 ****** ", allCoinChild.length);
        if (allCoinChild.length > 0) {
            if (allCoinChild.length - 1 > 0) {
                allCoinChild[1].style.display = "";
            }
            allCoinChild[0].remove();
        }

        // if pathBlock is null then check if the pathBlock ends
        if (pathBlock) {
            //populate coin at given pathBlockId
            pathBlock.classList.add(colorClass);
        } else {
            if (isForward) {
                const div = document.createElement("div");
                div.classList = "blue-coins";
                document.getElementById(`hch-${color}`).appendChild(div);
                isHome = 1;
            } else {
                document.getElementById(coinId).classList.add(`${color}-coins`);
                isHome = -1;
            }
        }
    }

    //updating coin position
    if (isHome == 0) {
        players.find(player => player.color == color).coin_position[coinId] = pathBlockId;
    } else if (isHome == 1) {
        const player = players.find(player => player.color == color);
        const indexToRemove = player.coin_out.indexOf(coinId);
        player.coin_out.splice(indexToRemove, 1);
        player.coin_position[coinId] = null;
        player.coin_home.push(coinId);
    } else if (isHome == -1) {
        const player = players.find(player => player.color == color);
        const indexToRemove = player.coin_out.indexOf(coinId);
        player.coin_out.splice(indexToRemove, 1);
        player.coin_position[coinId] = null;
        player.coin_in.push(coinId)
    }
    console.log("players ******* ", players)
}

// function to check if same color coins sits on same path block
function isSameColorOccupiesPathBlock(coinId, pathBlockId) {
    let count = 0;
    if (!pathBlockId || !pathBlockId.startsWith("h_id") || !pathBlockId.startsWith("v_id")) {
        return count;
    }
    console.log("same color check ***** start");
    console.log("coinId ******** ", coinId);
    const color = getColorFromCoinId(coinId);
    const allColorCoinsId = [`${color}-coins-1`, `${color}-coins-2`, `${color}-coins-3`, `${color}-coins-4`];

    const coinPosition = getCoinCurrentPosition(coinId);
    console.log("coinPosition ******** ", coinPosition);
    for (let colorCoinId of allColorCoinsId) {
        if (colorCoinId != coinId) {
            const colorCoinPosition = getCoinCurrentPosition(colorCoinId);
            console.log("inside loop ******** colorCoinId", colorCoinId, "colorCoinPosition ", colorCoinPosition, "check **** ", coinPosition, colorCoinPosition, coinPosition == colorCoinPosition);
            if (coinPosition && colorCoinPosition && coinPosition == colorCoinPosition) {
                count++;
            }
        }
    }
    console.log("count ******* ", count);
    return count;
}

//function to get current position of coin
function getCoinCurrentPosition(coinId) {
    const color = getColorFromCoinId(coinId);
    let coinPosition = players.find(player => player.color == color).coin_position[coinId];
    if (coinPosition == null) { //it means coin is inside home color block
        coinPosition = coinId;
    }
    return coinPosition;
}

//function to show all home coins holder
function showHomeCoinsHolder() {
    const homeCoinHolder = document.querySelectorAll(".hch");
    homeCoinHolder.forEach(coinHolder => {
        coinHolder.style.display = "flex";
    });
}

//function to hide all home coins holder
function hideHomeCoinsHolder() {
    const homeCoinHolder = document.querySelectorAll(".hch");
    homeCoinHolder.forEach(coinHolder => {
        coinHolder.style.display = "none";
    });
}

// function to unselect non participants color
function markNonParticipantsColor(selectedPlayers) {
    const nonParticipantsColor = allColors.filter(color => !selectedPlayers.some(player => color === player.color)) || [];
    nonParticipantsColor?.map(color => {
        //fading the color of non participants color board
        document.getElementById(`board-${color}`).style.opacity = 0.4;

        //hiding the home coins holder by making it completely transparent
        document.getElementById(`hch-${color}`).style.opacity = 0;

        //removing the dice-box holder of  non participants color board
        document.getElementsByClassName(`color-star-${color}`)[0].parentNode.innerHTML = "";

        // removing color coins from board of non participants color
        for (let i = 0; i < 4; i++) {
            const colorCoins = document.getElementById(`${color}-coins-${i + 1}`)
            colorCoins.parentNode.removeChild(colorCoins);
        }
    })
}

// get the className of bst
function getBstClassName(blackStar) {
    let dynamicBst = "h";
    if (blackStar.startsWith("h")) {
        dynamicBst = "v";
    }
    return dynamicBst;
}

//to replace coins
function toCutCoins(coinId) {
    const color = getColorFromCoinId(coinId);
    if (!players.find(player => player.color == color).coin_out.includes(coinId)) {
        throw new Error(`${coinId} coin is not out`);
    }
    const currentPositionId = players.find(player => player.color == color).coin_position[coinId];
    const currentPositionIdIndex = reversePathTraverse[color].findIndex(elem => elem == currentPositionId);
    const numberOfTraverse = reversePathTraverse[color].length - currentPositionIdIndex;
    moveCoin(coinId, numberOfTraverse, false);
}

/*
players = [
    {
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
    },
    {
        "inputId": "player-two",
        "inputPlayerName": "Player 2",
        "color": "red",
        "coin_in": [
            "red-coins-1",
            "red-coins-2",
            "red-coins-3",
            "red-coins-4"
        ],
        "coin_out": [],
        "coin_home": [],
        "coin_position": {
            "red-coins-1": null,
            "red-coins-2": null,
            "red-coins-3": null,
            "red-coins-4": null
        }
    },
    {
        "inputId": "player-three",
        "inputPlayerName": "Player 3",
        "color": "green",
        "coin_in": [
            "green-coins-1",
            "green-coins-2",
            "green-coins-3",
            "green-coins-4"
        ],
        "coin_out": [],
        "coin_home": [],
        "coin_position": {
            "green-coins-1": null,
            "green-coins-2": null,
            "green-coins-3": null,
            "green-coins-4": null
        }
    },
    {
        "inputId": "player-four",
        "inputPlayerName": "Player 4",
        "color": "yellow",
        "coin_in": [
            "yellow-coins-1",
            "yellow-coins-2",
            "yellow-coins-3",
            "yellow-coins-4"
        ],
        "coin_out": [],
        "coin_home": [],
        "coin_position": {
            "yellow-coins-1": null,
            "yellow-coins-2": null,
            "yellow-coins-3": null,
            "yellow-coins-4": null
        }
    }
]

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
*/

/*
 moveCoin("blue-coins-1", 9)
 moveCoin("blue-coins-2", 9)
 moveCoin("blue-coins-3", 9)
 moveCoin("blue-coins-4", 9)

 */







// document.addEventListener('DOMContentLoaded', init);