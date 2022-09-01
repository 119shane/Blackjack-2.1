
const player = "ඔබ "
let chips = 100
const winAndLosePoints = 10
let කාඩ් = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player + ": $" + chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    hasBlackJack = false
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    කාඩ්  = [firstCard, secondCard]
    sum = firstCard + secondCard
    document.getElementById("updateMsg").textContent = ""
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "කාඩ්: "
    for (let i = 0; i < කාඩ්.length; i++) {
        cardsEl.textContent += කාඩ්[i] + " "
    }
    
    sumEl.textContent = "එකතුව: " + sum
    if (sum <= 20) {
        message = "අලුත් කාඩ් එකක් ලබා ගන්න"
        
        
    } else if (sum === 21) {
        message = "ඔබ දිනුම් !"
        hasBlackJack = true
        if(hasBlackJack === true){
            addPoints() 
        }
        
    } else {
        message = "ඔබ පරාදයි !"
        isAlive = false
        if(isAlive === false){
        losePoints()
        gameOver ()
        }
    }
    messageEl.textContent = message
    
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        කාඩ්.push(card)
        renderGame()
        gameOver ()        
    }
}


function losePoints() {
          chips -= winAndLosePoints
          playerEl.textContent = player + ": $" + chips  
          document.getElementById("updateMsg").textContent = "ඔබ $10 ක් පරාදයි 😇😇😇"
          document.getElementById("updateMsg").style.color = "red"
          document.getElementById("updateMsg").style.textShadow = '1px 1px blue'
}

function addPoints() {
        chips += winAndLosePoints
        playerEl.textContent = player + ": $" + chips  
        document.getElementById("updateMsg").textContent = "ඔබ $10 ක් දිනුම්   😎🙌🤩"
        document.getElementById("updateMsg").style.color = "goldenrod"
        document.getElementById("updateMsg").style.textShadow = '2px 1px red'
        කාඩ් = []
        sum = 0
}
function gameOver () {
    if (chips <= 0){
     document.body.innerHTML = ` <div><br><br><br><br>
                                        <h1>ඔබ මේ වටය පරාදයි </h1>
                                        </div>
                                        <button> <a id="game-over-link" href="sinhala-game.html">නැවත සෙල්ලම් කරමු </a>  </button>
                                        `
    }else if (chips >= 150) {
    document.body.innerHTML = ` <div><br><br><br><br>
                                        <h1> 🙌 🙌 🙌 🙌 🙌 ඔබ වටය දිනුම් 😎 😎 😎 😎 😎  VERSION 2.1 එකෙන් හමුවෙමු </h1>
                                        </div>
                                        <br>
                                        <h6>ස්තුතියි</h6>
                                        <button> <a id="game-over-link" href="sinhala-game.html">නැවත සෙල්ලම් කරමු </a>  </button>
                                        `
    }
}
