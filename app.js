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
//console.log(allBoxes)

//create a reset button to access the button in HTML
const resetButton = document.querySelector('#reset-my-game')

//create an array of choices to be able to access
//there are 9 boxes (variables)... so an array of 9 choices
const choices = [boxes0, boxes1, boxes2, boxes3, boxes4, boxes5, boxes6, boxes7, boxes8]

//set the player and computer variable
let player = 'x'
let computer = 'o'

//NOT WORKING... :(
//const clickBox = event.target.appendChild('.box')
    //Display a message to indicate which turn is about to be played.
    //while(choices.firstChild) {
        //choices.removeChild(choices.firstChild)
        //x.innerText = player
        //choices.appendChild(x)
    //}
    //message.innerText = `turn played, computer choice${addChoiceToBox}}`
//}
//const makeSelection = () => {

//}


//add x/o to the box
//function to add choice to box...
const addChoiceToBox = (event) => {
    const addChoice = event.target.
    //loop through the choices array
     for (let i = 0; i < choices.length; i++){
        choices[i].onclick = function() {
            const addX = document.createElement('p')
            addX.innerText = 'x'
            choices[i].appendChild(addX)
            if (choices[i].firstChild) {
                choices[i].removeChild(choices[i].firstChild)
            }
        }
    }
}
//alternate to o after x played?

//create an array that stores the winning data (look at domPractice js)
//I am reading my game board top-bottom, left-right
//Starting at index 0
const winningData = [
    [0, 1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
//Write a function for the winningData array of 7 indices (0-7) or winningData.length:
let winningdataResults = () => {
    //write a for loop attached to the array of winning combinations
    for(let i = 0; i < winningData.length; i++) {
        const win = winningData[i]
        //Double check that the winningData prints to the console...it worked!
        //console.log(winningData[i])
        //Now I need to compose the winning conditions using if and else if
        //start with the first space 0 and go through the winningData array of possible win scenarios
        if (win[0] === player || computer) {
            //return true at each array winning combination to stop the loop 
            //if the condition was met
            return true
        }
        if (win[1] === player || computer) {
            return true
        }
        if (win[2] === player || computer) {
            return true
        }
        if (win[3] === player || computer) {
            return true
        }
        if (win[4] === player || computer) {
            return true
        }
        if (win[5] === player || computer) {
            return true
        }
        if (win[6] === player || computer) {
            return true
        }
        if (win[7] === player || computer) {
            return true
        }
        if (win[8] === player || computer) {
            return true
        }
    } 
    //Make a winning message alert...
    message.innerText = 'The winner is '
    }
winningdataResults()


//We want the player to be able to reset the board
//create function to input in the DOM event listener
//maybe it needs to remove body and not the div
const clearGame = () => {
    while(choices[i].firstChild) {
        choices[i].removeChild(choices[i].firstChild)
    }
}

document.addEventListener('DOMContentLoaded', () => {

//Add event listener to the reset button
//includes resetMyGame variable and clearGame function
    resetButton.addEventListener('click', clearGame)
    addChoiceToBox()
})
