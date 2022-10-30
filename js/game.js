// Those are global variables, they stay alive and reflect the state of the game
var elPreviousCard = null;
var flippedCouplesCount = 0;
var elResetBtn = document.querySelector('.reset-btn')
var elLogin = document.querySelector('.user-name')
var elbestTime = document.querySelector('.best-time')
var isProcessing = false
var gameStartTime
var seconds = 00;
var tens = 00;
var elTens = document.querySelector(".tens")
var elSeconds = document.querySelector(".seconds")
var Interval

// This is a constant that we dont change during the game (we mark those with CAPITAL letters)
const TOTAL_COUPLES_COUNT = 6;

// Load an audio file
var audioWin = new Audio('sound/win.mp3');
var audioWrong = new Audio('sound/wrong.mp3')
var audioRight = new Audio('sound/right.mp3')

// onclick events
elResetBtn.onclick = reset
elLogin.onclick = login

if (localStorage.getItem('userName') !== null) {
    elLogin.textContent = localStorage.getItem('userName')
}

shuffleBoard()
setBestGameTime()


// This function is called whenever the user click a card
function cardClicked(elCard) {

    if (isProcessing) {
        return
    }

    // If the user clicked an already flipped card - do nothing and return from the function
    if (elCard.classList.contains('flipped')) {
        return;
    }

    // Flip it
    elCard.classList.add('flipped');

    // This is a first card, only keep it in the global variable
    if (elPreviousCard === null) {
        gameStartTime = Date.now()
        startTimer()
        elPreviousCard = elCard;
    } else {
        // get the data-card attribute's value from both cards
        var card1 = elPreviousCard.getAttribute('data-card');
        var card2 = elCard.getAttribute('data-card');

        // No match, schedule to flip them back in 1 second
        if (card1 !== card2) {
            isProcessing = !isProcessing
            audioWrong.play();
            setTimeout(function () {
                elCard.classList.remove('flipped');
                elPreviousCard.classList.remove('flipped');
                elPreviousCard = null;
                isProcessing = !isProcessing
            }, 1000)


        } else {
            // Yes! a match!
            isProcessing = !isProcessing
            audioRight.play();
            flippedCouplesCount++;
            elPreviousCard = null;
            isProcessing = !isProcessing

            // All cards flipped!
            if (TOTAL_COUPLES_COUNT === flippedCouplesCount) {
                saveBestGameTime(calcGameTime())
                stopTimer()
                audioWin.play();
                elResetBtn.style.visibility = 'visible'
            }

        }

    }
}

function calcGameTime() {
    var gameEndTime = Date.now()
    var gameTime = gameEndTime - gameStartTime
    return gameTime
}

function saveBestGameTime(gameTime) {
    if (localStorage.getItem('betGameTime') > gameTime || localStorage.getItem('betGameTime') === null) {
        elbestTime.textContent = 'Best Time: ' + gameTime
        localStorage.setItem('betGameTime', gameTime)
    }
}

function setBestGameTime() {
    if (localStorage.getItem('betGameTime') !== null) {
        elbestTime.textContent = 'Best Time: ' + localStorage.getItem('betGameTime')
    }
}


/**
 * 
 * @returns All the cards in the game
 */
function getCards() {
    var elCards = document.querySelectorAll('.card')
    return elCards
}

/**
 * Restart the game
 */
function reset() {
    elPreviousCard = null;
    flippedCouplesCount = 0;
    var elCards = getCards();

    for (let i = 0; i < elCards.length; i++) {
        var elCard = elCards[i]
        elCard.classList.remove('flipped');
    }
    shuffleBoard()
    resetTimer()
    elResetBtn.style.visibility = 'hidden'
}

function login() {
    var userName = prompt('What is your name?')
    if (userName !== null && userName.length > 0) {
        localStorage.setItem('userName', userName)
        elLogin.textContent = userName
    }
}

function shuffleBoard() {
    var board = document.querySelector('.board');
    for (var i = board.children.length; i >= 0; i--) {
        board.appendChild(board.children[Math.random() * i | 0]);
    }
}


//Timer functions
function startTimer() {
    clearInterval(Interval);
    Interval = setInterval(timerGo, 10);
}

function stopTimer() {
    clearInterval(Interval);
}

function resetTimer() {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    elTens.innerHTML = tens;
    elSeconds.innerHTML = seconds;
}

function timerGo() {
    tens++;

    if (tens <= 9) {
        elTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        elTens.innerHTML = tens;

    }

    if (tens > 99) {
        seconds++;
        elSeconds.innerHTML = "0" + seconds;
        tens = 0;
        elTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        elSeconds.innerHTML = seconds;
    }

}
