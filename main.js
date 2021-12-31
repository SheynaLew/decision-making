// Save choice in the input field to variables on click of submit button
    //Create function to be called by eventListener
    //Event listener, onclick
        //access element using getElementById
            //choiceOne and choiceTwo
let choiceOneInput = "";
let choiceTwoInput = "";

document.getElementById("rockPaperScissorsSubmitBtn").addEventListener("click", storeInput);

function storeInput(){
    let inputValueOne = document.getElementById("rockPaperScissorsChoiceOne");
    let inputValueTwo = document.getElementById("rockPaperScissorsChoiceTwo");
    choiceOneInput = inputValueOne.value;
    choiceTwoInput = inputValueTwo.value;
    //console.log(choiceOneInput, choiceTwoInput);
}


// On click of one the icons, randomly generate a computer move and select a winner
    //Set icons as variables to use in an if function with event listeners for a click
let userMoveRock = document.getElementById("rock").addEventListener("click", userChoosesRock);
let userMovePaper = document.getElementById("paper").addEventListener("click", userChoosesPaper);
let userMoveScissors = document.getElementById("scissors").addEventListener("click", userChoosesScissors);
    //functions for each icon to start the if statement below


    //Randomly generate a computer move and set it to a variable
        //Create an arraay containing rock, paper and scissors

        //math.random and math.floor to pick a random index between 0 and 2

        //set value of random index to a variable


// Display the winner and the winning choice
    //if function to compare user's move with computer's move.
        //if user wins, display their choice 1 entry
        //if computer wins, display their choice 2 entry
function userChoosesRock () {
    let moveChoices = ["rock", "paper", "scissors"];
    let computerMove = moveChoices[Math.floor(Math.random() * 3)];
    console.log(computerMove);
    if (computerMove === "rock") {
        alert("Draw! Try again.");
    } else if (computerMove === "scissors") {
        alert("You win!", choiceOneInput);
    } else {
        alert("You lose!", choiceTwoInput);
    }
}
        
function userChoosesPaper () {
    let moveChoices = ["rock", "paper", "scissors"];
    let computerMove = moveChoices[Math.floor(Math.random() * 3)];
    console.log(computerMove);
    if (computerMove === "rock") {
        alert("You win!", choiceOneInput);
    } else if (computerMove === "scissors") {
        alert("You lose!", choiceTwoInput);
    } else {
        alert("Draw! Try again.");
    }      
}
        
function userChoosesScissors () {
    let moveChoices = ["rock", "paper", "scissors"];
    let computerMove = moveChoices[Math.floor(Math.random() * 3)];
    console.log(computerMove);
    if (computerMove === "rock") {
        alert("You lose!", choiceTwoInput);
    } else if (computerMove === "scissors") {
        alert("Draw! Try again.");
    } else {
        alert("You win!", choiceOneInput);
    }  
}


