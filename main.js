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
let userMoveRock = document.getElementById("rock").addEventListener("click", userChoosesRock, hideChoices);
let userMovePaper = document.getElementById("paper").addEventListener("click", userChoosesPaper, hideChoices);
let userMoveScissors = document.getElementById("scissors").addEventListener("click", userChoosesScissors, hideChoices);

    //functions for each icon to start the if statement below
    //Randomly generate a computer move and set it to a variable
        //Create an arraay containing rock, paper and scissors
        //math.random and math.floor to pick a random index between 0 and 2
        //set value of random index to a variable
    // Display the winner and the winning choice
        //if function to compare user's move with computer's move.
            //if user wins, display their choice 1 entry
            //if computer wins, display their choice 2 entry

//Hide choices input once rock paper or scissors is selected.
    //Store html class .choices in a variable


    //Within the if functions, change the display to "none"

function userChoosesRock () {
    let moveChoices = ["rock", "paper", "scissors"];
    let computerMove = moveChoices[Math.floor(Math.random() * 3)];
   //console.log(computerMove);
    if (computerMove === "rock") {
        alert(`Draw! Try again.`);
    } else if (computerMove === "scissors") {
        hideChoices();
        hideIcons();
        showWinningIcon();
    } else {
        hideChoices();
        hideIcons();
        showLosingIcon();
    }
}
        
function userChoosesPaper () {
    let moveChoices = ["rock", "paper", "scissors"];
    let computerMove = moveChoices[Math.floor(Math.random() * 3)];
    //console.log(computerMove);
    if (computerMove === "rock") {
        hideChoices();
        hideIcons();
        showWinningIcon();
    } else if (computerMove === "scissors") {
        hideChoices();
        hideIcons();
        showLosingIcon();
    } else {
        alert(`Draw! Try again.`);
    }      
}
        
function userChoosesScissors () {
    let moveChoices = ["rock", "paper", "scissors"];
    let computerMove = moveChoices[Math.floor(Math.random() * 3)];
    //console.log(computerMove);
    if (computerMove === "rock") {
        hideChoices();
        hideIcons();
        showLosingIcon();
    } else if (computerMove === "scissors") {
        alert(`Draw! Try again.`);
    } else {
        hideChoices();
        hideIcons();
        showWinningIcon();
    }  
}

function hideChoices() {
    let choicesContent = document.getElementsByClassName("choices");
    for (let i=0; i < choicesContent.length; i++) {
        choicesContent[i].style.display = "none";
    }
  }

function hideIcons () {
    let icons = document.getElementsByClassName("icons");
    for (let i=0; i<icons.length; i++) {
        icons[i].style.display = "none";
    }
}

function showWinningIcon () {
    document.getElementById("winningChoice").innerHTML = choiceOneInput;
    let winningIcon = document.getElementsByClassName("winningIcon");
    for (let i=0; i<winningIcon.length; i++) {
        winningIcon[i].style.display = "flex";
    }
}

function showLosingIcon () {
    document.getElementById("losingChoice").innerHTML = choiceTwoInput;
    let losingIcon = document.getElementsByClassName("losingIcon");
    for (let i=0; i<losingIcon.length; i++) {
        losingIcon[i].style.display = "flex";
    }
}
