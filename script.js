
// STEP 1 - Prompt/Strings to Numbers
var rounds = prompt("How many rounds do you want to play?");
rounds = parseInt(rounds);
    
// STEP 2 - Variables outside loop
var wins = 0;
var losses = 0; 
var ties = 0;
    
// STEP 2 - LOOP for numbers of rounds
for (var i = 1; i <= rounds; i++) {
    
// STEP 2 - User input
    var userChoice = prompt("Enter r for rock, p for paper, or s for scissors");
        
// STEP 2 - Computer choices
    var computerChoice = Math.floor(Math.random() * 3);
    var choice;
        switch (computerChoice) {
            case 0:
            choice = "r";
            break;
            case 1: 
            choice = "p";
            break;
            case 2:
            choice = "s";
        }
        
// STEP 2 - Compare choices
        if (
            (userChoice === "r" && choice === "s") || 
            (userChoice === "p" && choice === "r") ||
            (userChoice === "s" && choice === "p")) {
                wins++;
                alert("You win round " + i);
            } else if (userChoice === choice) {
                ties++;
                alert("You tied round " + i);
            } else {
                losses++;
                alert("You lost round " + i);
            }
    }
    
// STEP 3 - Totals
    alert("You won " + wins + " rounds, You lost " + losses + " rounds, You tied " + ties + " rounds");