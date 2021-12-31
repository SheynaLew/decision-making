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
    //Set icons as variables to use in an if function
let userMoveRock = document.getElementById("rock");
let userMovePaper = document.getElementById("paper");
let userMoveScissors = document.getElementById("scissors");

    //Randomly generate a computer move and set it to a variable
        //Create an arraay containing rock, paper and scissors
let moveChoices = ["rock", "paper", "scissors"];
        //math.random and math.floor to pick a random index between 0 and 2
let computerMove = moveChoices[Math.floor(Math.random() * 3)];
console.log(computerMove);
        //set value of random index to a variable





// Display the winner and the winning choice



