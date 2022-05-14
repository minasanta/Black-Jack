let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let player = {
    name: 'Mina',
    chips: 145
}
const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById('sum-el')
const cardsEl = document.getElementById('cards-el')
const playerEl = document.getElementById('player-el')
// playerEl.textContent = `${player.name}: $${player.chips}`

function startGame() 
{
    hasBlackJack = false
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = `Cards:`
    for (let i=0; i < cards.length;i++)
    {
        cardsEl.textContent += ` ${cards[i]} `
    }
    sumEl.textContent = `sum: ${sum}`
    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = 'Wohoo! You\'ve got Blackjack!'
        hasBlackJack = true
    } else {
        message = 'You\'re out of the game!'
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard()
{
    if (hasBlackJack || !isAlive)
        return
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}

function getRandomCard() {
    let randomCard =  Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {return 11}
    else if (randomCard > 10) {return 10}
    else return randomCard
  }
  