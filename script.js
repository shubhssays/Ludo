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
const colorSafeStars = ["h_id_1_1", "v_id_12_2", "v_id_5_1", "h_id_16_2"]
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
const rollForSeconds = 1;
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
let isCoinCut = 0;
let playerWhoseIsCuttingAnother = null;

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
}


//detecting changes for star path block using MutationObserver
for (let star of [...blackStars, ...colorSafeStars]) {
    const blackStarPathBlock = document.getElementById(star);
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            // Check if nodes were added
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                let bstClass = blackStarPathBlock.childNodes[0].classList.value;
                if (bstClass.includes("h-bst")) {
                    bstClass = "h-bst";
                } else {
                    bstClass = "v-bst";
                }
                let colorCount = {};
                for (let c = 0; c < blackStarPathBlock.childNodes.length; c++) {
                    const childNode = blackStarPathBlock.childNodes[c];
                    const childNodeClassList = childNode.classList.value.toString().
                        split(" ");
                    for (let cl of childNodeClassList) {
                        if (cl.includes("-coins") && !cl.includes("-star")) {
                            if (colorCount.hasOwnProperty(cl)) {
                                childNode.style.display = "none";
                            } else {
                                colorCount[cl] = 1;
                            }
                        }
                    }
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
document.querySelectorAll('.path-block').forEach(elem => {
    elem.addEventListener('click', event => {
        if (!currentPlayer) {
            return;
        }
        const color = currentPlayer.color;
        if (elem.classList.toString().includes(`${color}-coins`) || elem.querySelectorAll(`.${color}-coins`).length > 0) {
            const coin_position = currentPlayer.coin_position;
            for (let coinId in coin_position) {
                if (coin_position[coinId] == elem.id) {
                    document.getElementById(coinId).click();
                    break;
                }
            }
        }
    });
});

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//Handling roll Dice Button click handler
function handleDiceRoll(dice) {
    if (Number(currentPlayer?.score || 0) > 0) {
        return;
    }
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
        score = getRandomNumber(1, 6);
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

    if (score != 0) {
        console.log("handlerPlayerChance ERRORRRRRRRRRRRRRRRRRRRRRRR")
        return;
    }

    //no coin is out
    if (player.coin_out.length < 1) {
        //checking if score is 6 then, highlight the coins
        if (score == diceVal.six) {
            startCoinRotation(coins);
        } else {
            setTimeout(function () {
                nextPlayerTurn()
            }, secondsToWaitForAnotherChance * 1000)
        }
    } else if (player.coin_out.length > 0) {
        if (score == diceVal.six) {
            startCoinRotation(coins);
        } else {
            startCoinRotation(coins, true);
        }
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

    const playersLength = players.length;
    const currentPlayerIndex = players.findIndex(player => player.inputId == currentPlayer.inputId);
    if (currentPlayerIndex == -1) {
        fixError()
        return;
    }

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
                    rank: null,
                };
                document.getElementById(`${color}-player-name`).innerText = inputPlayerName
                selectedPlayers.push(playerObj);

                // click listener on color-coins
                document.querySelectorAll(`.${color}-coins`).forEach(elem => {
                    elem.addEventListener('click', async event => {
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
                        await executeCoinMovement(coinId)
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
    stopColorBoxBlinking();

    stopFingerBlinking();

    emptyDiceBox();

    startColorBoxBlinking();

    startFingerBlinking();

    addDiceToDiceBox();
}

// function to make coins move
async function executeCoinMovement(coinId) {
    const score = currentPlayer.score;
    currentPlayer.score = 0;
    const coin_in = currentPlayer.coin_in;
    const coin_out = currentPlayer.coin_out;
    const color = currentPlayer.color;

    // stop coin rotation
    stopCoinRotation();

    //coin is inside
    if (coin_in.includes(coinId)) {
        if (score != diceVal.six) {
            return;
        }

        //marking this coins as out
        const player = players.find(player => player.color == color);
        const indexToRemove = player.coin_in.indexOf(coinId);
        player.coin_in.splice(indexToRemove, 1);
        player.coin_out.push(coinId);

        stopFingerBlinking();
        // coin is inside and player scored 6
        await moveCoin(coinId, 1, true, false);
    } else if (coin_out.includes(coinId)) {
        const numberOfTraverse = score;
        await moveCoin(coinId, numberOfTraverse, true, true);
    } else {
        fixError()
        return;
    }
}

// function to check how many coins are present at any given path block
function checkIfCoinPathBlockIsOccupied(pathBlockId, _coinId) {
    if(!pathBlockId){
        return
    }
    const _color = getColorFromCoinId(_coinId);
    for (let player of players) {
        // if (player.inputId != currentPlayer.inputId) {
        const coin_position = player.coin_position;
        for (let coinId in coin_position) {
            if (getColorFromCoinId(coinId) != _color && coin_position[coinId] == pathBlockId) {
                return coinId;
            }
        }
        // }
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
function startCoinRotation(coins, rotateOutsideCoinsOnly = false) {
    stopFingerBlinking();
    const allCoins = document.querySelectorAll(`.${coins}`);
    if (rotateOutsideCoinsOnly) {
        for (let i = 0; i < 4; i++) {
            const coinId = `${coins}-${parseInt(i + 1)}`;
            if (currentPlayer.coin_out.includes(coinId)) {
                const coinPositionId = currentPlayer.coin_position[coinId];
                document.getElementById(coinPositionId).classList.add('coin-rotate');
            }
        }
    } else {
        allCoins.forEach(eachCoin => {
            eachCoin.classList.add('coin-rotate');
        });
    }
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
async function moveCoin(coinId, numberOfTraverse, isForward = true, callNextPlayerTurn = false) {
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
        }
        else {
            const currentPositionIndex = pathToTraverse[color].findIndex(elem => elem == currentPositionId);
            if (numberOfTraverse > maxForwardPathTraverseValue - currentPositionIndex) {
                alert("Impossible move forward 2")
                return;
            }
        }
    }

    // move it now
    let movementCount = 0;

    for (let i = 0; i < numberOfTraverse; i++) {
        let pathBlockId;
        // find current position of coin
        let coinCurrentPositionId = getCoinCurrentPosition(coinId);
        if (coinCurrentPositionId == coinId) {
            positionIndex = 0;
        } else {
            if (typeof positionIndex != "undefined") {
                positionIndex = pathToTraverse[color].findIndex(elem => elem == coinCurrentPositionId);
            }
        }
        if (coinCurrentPositionId != coinId) {
            if (isForward) {
                positionIndex = positionIndex + 1;
            } else {
                positionIndex = positionIndex - 1;
            }
        }
        pathBlockId = pathToTraverse[color][positionIndex];
        console.log("isLastMovement **** ", movementCount, numberOfTraverse, i, i == numberOfTraverse - 1)
        await drawCoin(coinId, pathBlockId, isForward, i == numberOfTraverse - 1);
        await sleep(motionFrequency);
    }

    if (movementCount >= numberOfTraverse) {
        if (callNextPlayerTurn) {
            if (numberOfTraverse != diceVal.six) {
                nextPlayerTurn();
            } else {
                startFingerBlinking();
            }
        } else {
            if (playerWhoseIsCuttingAnother != null) {
                currentPlayer = playerWhoseIsCuttingAnother;
                playerWhoseIsCuttingAnother = null;
            }
            setBlink();
        }
    }
}

// function to get color from coinId
function getColorFromCoinId(coinId) {
    const color = coinId.split("-")[0];
    return color;
}

// function to draw coin on board
async function drawCoin(coinId, pathBlockId, isForward, isLastMovement = false) {
    const color = getColorFromCoinId(coinId);
    const pathBlock = document.getElementById(pathBlockId);

    let coinElement;

    let isHome = 0; // 0 - just a normal movement && 1 - when won && -1 -> when coin is cut

    //get current position of coin
    let coinPosition = getCoinCurrentPosition(coinId);


    //get coin element
    coinElement = document.getElementById(coinPosition);

    const colorClass = `${color}-coins`;

    // if coin sits on a black star, then remove div instead of removing just class
    if ([...blackStars, ...colorSafeStars].includes(pathBlockId)) {
        const allCoinChild = coinElement.querySelectorAll(`.${colorClass}`);
        const colorClassCount = allCoinChild.length;
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
        //remove coin from its current position
        coinElement.classList.remove(colorClass);

        //get same pathBlockCount
        const count = isSameColorOccupiesSamePathBlock(coinId, coinPosition);
        const countN = isSameColorOccupiesSamePathBlock(coinId, pathBlock);
        if (count > 0 || countN > 0) {
            coinElement.classList.add(colorClass);
        }

        const allCoinChild = coinElement.querySelectorAll(`.${colorClass}`);
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
                isHome = 1;
            } else {
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
        const div = document.createElement("div");
        div.classList = `${color}-coins`;
        document.getElementById(`hch-${color}`).appendChild(div);
        isGameCompleted();
    } else if (isHome == -1) {
        const player = players.find(player => player.color == color);
        const indexToRemove = player.coin_out.indexOf(coinId);
        player.coin_out.splice(indexToRemove, 1);
        player.coin_position[coinId] = null;
        player.coin_in.push(coinId)
        document.getElementById(coinId).classList.add(`${color}-coins`);
    }

    const otherCoinId = checkIfCoinPathBlockIsOccupied(pathBlockId, coinId);
    console.log("coinCutCheck ********* ", isCoinCut == 0, isLastMovement, !checkIfPathIsSafe(pathBlockId), otherCoinId != null, !isSameColor(coinId, otherCoinId))
    //checking if another coin is present in the same place
    if (isLastMovement && !checkIfPathIsSafe(pathBlockId) && otherCoinId != null && !isSameColor(coinId, otherCoinId)) {
        //path block is occupied by another coin, cut it
        if (isCoinCut == 0) {
            playerWhoseIsCuttingAnother = players.find(player => player.color == color);
            isCoinCut = 1
            await toCutCoins(otherCoinId, coinId);
        } else {
            isCoinCut = 0;
        }
    }
}

// function to check if same color coins sits on previous path block
function isSameColorOccupiesSamePathBlock(coinId, coinPosition) {
    let count = 0;
    const color = getColorFromCoinId(coinId);
    const allColorCoinsId = [`${color}-coins-1`, `${color}-coins-2`, `${color}-coins-3`, `${color}-coins-4`];

    for (let colorCoinId of allColorCoinsId) {
        if (colorCoinId != coinId) {
            const colorCoinPosition = getCoinCurrentPosition(colorCoinId);
            if (coinPosition == colorCoinPosition) {
                count++;
            }
        }
    }
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
async function toCutCoins(coinId, _coinId) {
    console.log("toCutCoins ******** ", coinId, currentPlayer, "\n ","_coinId &******** ",_coinId)
    if (isCoinCut == 0) {
        console.log("coin_cut error");
        return;
    }
    const color = getColorFromCoinId(coinId);
    const currentPositionId = players.find(player => player.color == color).coin_position[coinId];
    const currentPositionIdIndex = reversePathTraverse[color].findIndex(elem => elem == currentPositionId);
    const numberOfTraverse = reversePathTraverse[color].length - currentPositionIdIndex;
    await moveCoin(coinId, numberOfTraverse, false, false);
}

//function to check if two coinId belongs to same color
function isSameColor(coinId, otherCoinId) {
    return coinId.split("-").splice(0, 2).join("-") == otherCoinId?.split("-").splice(0, 2).join("-")
}

//function to check if game is completed
function isGameCompleted() {
    let msg = ""
    let numOfPlayerWhoseGameIsCompleted = 0;
    let completed = false;

    for (let player of players) {
        if (player.rank != null && player.coin_home.length == 4) {
            const maxAvailableRank = findNextRank();
            player.rank = maxAvailableRank;
            numOfPlayerWhoseGameIsCompleted++;
        }

        if (numOfPlayerWhoseGameIsCompleted >= 3) {
            completed = true
            break
        }
    }

    if (completed) {
        players = players.sort((a, b) => a.rank - b.rank);
        for (let player of players) {
            msg += `Rank ${player.rank || 0} ==> ${player.inputPlayerName} \n`
        }
        alert(msg);
        location.reload();
    }
}

//function to find next rank
function findNextRank() {
    let rank = 1;
    for (let player of players) {
        if (player.rank != null && rank <= Number(player.rank)) {
            rank = Number(player.rank) + 1;
        }
    }
    return rank;
}

//function to pause the code execution
async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}


