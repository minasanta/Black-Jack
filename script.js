let firstCard = getRandomIntInclusive(2,11)
let secondCard = getRandomIntInclusive(2,11)
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''
const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById('sum-el')
const cardsEl = document.getElementById('cards-el')

function startGame() 
{
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

function renderGame() {startGame()}

function newCard()
{
    let card = getRandomIntInclusive(2,11)
    sum += card
    cards.push(card)
    renderGame()
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  