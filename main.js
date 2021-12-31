// Save choice in the input field to variables on click of submit button
    //Create function to be called by eventListener
    //Event listener, onclick
        //access element using getElementById
            //choiceOne and choiceTwo
// On click of one the icons, randomly generate a computer move and select a winner
// Display the winner and the winning choice

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



