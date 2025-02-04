
// generate random number

let randomNumber = Math.floor(Math.random() * 20 + 1)
console.log(randomNumber);

// console.log(randomNumber);

// get selector
let newGamebtn = document.querySelector(".newgame")
let guessInput = document.querySelector(".input")
let checkvalue = document.querySelector(".btn2")
let remainingGuess = document.querySelector(".remaining-guess")
let result = document.querySelector(".result-guess")
let previous = document.querySelector(".Previous-guess")

let playGame = true
let numgues = 1
let prevGuess = []

if (playGame) {
    checkvalue.addEventListener("click", () => {
        let guess = parseInt(guessInput.value)
        
        validation(guess)

    })
}
function validation(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')

    } else if (guess > 100) {
        alert('Please enter a number 100 less then')

    } else if (guess < 1) {
        alert('Please enter a number 1 more then')

    } else {
        prevGuess.push(guess)
        if (numgues === 10) {
            displayGuess(guess)
            displayMessage(`Game over Random number Was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }

    }


}
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`your guessed is correct ${randomNumber}`)
        endGame();

    } else if (guess > randomNumber) {
        displayMessage('your guess is too high')

    } else if (guess < randomNumber) {
        displayMessage('your guess is too low')

    }

}
function displayGuess(guess) {
    guessInput.value = ''
    previous.innerHTML += `${guess},   `
    numgues++
    remainingGuess.innerHTML = `${11 - numgues}`


}
function displayMessage(message) {
    result.innerHTML = `${message}`

}

function endGame() {
    guessInput.value = ''
    playGame = false
    guessInput.setAttribute('disabled', '')
    newGame()
}
function newGame() {
    newGamebtn.addEventListener('click', () =>{

        randomNumber = Math.floor(Math.random() * 100 + 1)
        prevGuess = []
        previous.innerHTML = ''
        numgues = 1
        remainingGuess.innerHTML = `${11 - numgues}`
        guessInput.removeAttribute('disabled')
        result.innerHTML = ''
        playGame = true
    })
    

}





