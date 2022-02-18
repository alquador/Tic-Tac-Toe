//start like we did for colorPicker and set variables to access the DOM
const allBoxes = document.querySelector('.container')
//a variable to interact with each box 0-8
let boxes0 = document.querySelector('#box0')
let boxes1 = document.querySelector('#box1')
let boxes2 = document.querySelector('#box2')
let boxes3 = document.querySelector('#box3')
let boxes4 = document.querySelector('#box4')
let boxes5 = document.querySelector('#box5')
let boxes6 = document.querySelector('#box6')
let boxes7 = document.querySelector('#box7')
let boxes8 = document.querySelector('#box8')
let playerTurn = document.querySelector('#player-turn')
playerTurn.innerText = 'Player X turn'
let counter = 0
//create a reset button to access the button in HTML
const resetButton = document.querySelector('#reset-my-game')

//create an array of choices to be able to access
//there are 9 boxes (variables)... so an array of 9 choices
const choices = [boxes0, boxes1, boxes2, boxes3, boxes4, boxes5, boxes6, boxes7, boxes8]

//create an array that stores the winning data (look at domPractice js)
//I am reading my game board top-bottom, left-right
//Starting at index 0
const winningData = {
    first: [0, 1, 2],
    second: [0, 3, 6],
    third: [3, 4, 5],
    forth: [6, 7, 8],
    fifth: [1, 4, 7],
    sixth: [2, 5, 8],
    seventh: [0, 4, 8],
    eighth: [2, 4, 6]
}

//Write a function for the winningData array of 7 indices (0-7) or winningData.length:
const checkWin = () => {
    //let winner = false;
    if (boxes0.innerText === boxes1.innerText && boxes2.innerText === boxes1.innerText ||
        boxes0.innerText === boxes3.innerText && boxes6.innerText === boxes3.innerText ||
        boxes3.innerText === boxes4.innerText && boxes5.innerText === boxes4.innerText ||
        boxes6.innerText === boxes7.innerText && boxes8.innerText === boxes7.innerText ||
        boxes1.innerText === boxes4.innerText && boxes7.innerText === boxes4.innerText ||
        boxes2.innerText === boxes5.innerText && boxes8.innerText === boxes5.innerText ||
        boxes0.innerText === boxes4.innerText && boxes8.innerText === boxes4.innerText ||
        boxes2.innerText === boxes4.innerText && boxes6.innerText === boxes4.innerText ) {
        //return true
        //console.log(winningData.first, 'is the winner!')
        //message.innerText = ' is the winner!'
        //return currentPlayer
        } //else {
            //message.innerText = 'It is a tie!'
        //}
    }   
    //console.log(checkWin())
    
//set the player variable
let currentPlayer = 'x'
        
//add x/o to the box
//function to add choice to box...
const addChoiceToBox = (event) => {
    //console.log('click')
    let addChoice = event.target
     //console.log(addChoice)
         if (currentPlayer === 'x') {
            checkWin('X')
            playerTurn.innerText = 'Player O turn'
            currentPlayer = 'o'
            const addX = document.createElement('p')
            addX.innerText = 'x'
            addChoice.appendChild(addX)
            addChoice.removeEventListener('click', addChoiceToBox)     
    }   else if (currentPlayer === 'o'){
            checkWin('O')
            playerTurn.innerText = 'Player X turn'
            currentPlayer = 'x'
            const addO = document.createElement('p')
            addO.innerText = 'o'
            addChoice.appendChild(addO)
            addChoice.removeEventListener('click', addChoiceToBox)
            }   
    //message.innerText =  checkWin((`${currentPlayer} is the winner!`))
    }

const clearGame = () => {
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', () => {

//Add event listener to the reset button
//includes resetMyGame variable and clearGame function
    resetButton.addEventListener('click', clearGame)
    boxes0.addEventListener('click', addChoiceToBox)
    boxes1.addEventListener('click', addChoiceToBox)
    boxes2.addEventListener('click', addChoiceToBox)
    boxes3.addEventListener('click', addChoiceToBox)
    boxes4.addEventListener('click', addChoiceToBox)
    boxes5.addEventListener('click', addChoiceToBox)
    boxes6.addEventListener('click', addChoiceToBox)
    boxes7.addEventListener('click', addChoiceToBox)
    boxes8.addEventListener('click', addChoiceToBox)
    checkWin()
})
