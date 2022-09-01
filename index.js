
const player = "You"
let chips = 20
const winAndLosePoints = 10
let cards = []
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
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    document.getElementById("updateMsg").textContent = ""
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        
        
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        if(hasBlackJack === true){
        addPoints() 
        }
        

    } else {
        message = "You've lost this round!"
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
        cards.push(card)
        renderGame()
        gameOver ()        
    }
}


function losePoints() {
          chips -= winAndLosePoints
          playerEl.textContent = player + ": $" + chips  
          document.getElementById("updateMsg").textContent = "You Lost 10 Chips 😇😇😇"
          document.getElementById("updateMsg").style.color = "red"
          document.getElementById("updateMsg").style.textShadow = '1px 1px blue'
}

function addPoints() {
        chips += winAndLosePoints
        playerEl.textContent = player + ": $" + chips  
        document.getElementById("updateMsg").textContent = "You Won 10 Chips 😎🙌🤩"
        document.getElementById("updateMsg").style.color = "blue"
        document.getElementById("updateMsg").style.textShadow = '1px 1px red'
        cards = []
        sum = 0
}
function gameOver () {
    if (chips <= 0){
     document.body.innerHTML = ` <div><br><br><br><br>
                                        <h1>GAME OVER</h1>
                                        <button><a id="game-over-link-eng" href="index.html">PLAY AGAIN<a/></button>
                                        </div>
                                        `
    }else if (chips >= 20) {
    document.body.innerHTML = ` <div><br><br><br><br>
                                        <h1>🙌 🙌 🙌 🙌 🙌 YOU WON THE GAME 
                                        😎 😎 😎 😎 😎
                                        SEE YOU IN VERSION 2.1</h1>
                                        </div>
                                        <button><a id="game-over-link-eng" href="index.html">PLAY AGAIN<a/></button>
                                        <br><br>
                                        <h6>Thanks for playing</h6>
                                        <h6> student project of scrimba.com </h6>
                                        `
    }
}
