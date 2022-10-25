var ball
var btnShape
var measure = 'px'

init()

function init() {
    if (ball === undefined) {
        ball = document.querySelector('.ball')
    }

    if (btnShape === undefined) {
        btnShape = document.querySelector('.ball-shape-btn')
    }
}

function changeTextColor() {
    init()
    ball.style.color = '#00600f'
}

function changeTextSize() {
    init()
    var maxSize = 50
    var size = prompt('Enter text size')

    if (size <= maxSize) {
        ball.style.fontSize = size + measure
    } else {
        console.log('Too big!')
    }
}

var isRound = true

function toggleBallShape() {
    init()
    if (isRound) {
        ball.style.borderRadius = '0%'
        btnShape.innerText = 'square'
        ball.innerText = 'I am a square'
        isRound = !isRound
    } else {
        ball.style.borderRadius = '50%'
        btnShape.innerText = 'round'
        ball.innerText = 'I am a ball'
        isRound = !isRound
    }
}

var ballMargin = 35

function moveDown() {
    init()
    ball.style.marginTop = ballMargin + measure
    ballMargin += 5
}