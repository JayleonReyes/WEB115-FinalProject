let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 0;

// Prompt user for a number between 1 and 10, or type 999 to exit.
userGuess = Number(prompt("Guess a number between 1 and 10 (or type 999 to quit):"));

// Keep looping until correct guess or user quits
while (true) {
    // If user wants to quit
    if (userGuess === 999) {
        alert("Game exited. Goodbye!");
        break;
    }

    // Increase attempt counter only for valid guesses 1-10
    if (userGuess >= 1 && userGuess <= 10) {
        attempts++;
        if (userGuess === randomNumber) {
            alert("Congratulations, you've guessed it in " + attempts + " tries!");
            break;
        } else if (userGuess < randomNumber) {
            userGuess = Number(prompt("Too low! Guess again (or type 999 to quit):"));
        } else {
            userGuess = Number(prompt("Too high! Guess again (or type 999 to quit):"));
        }
    } else { 
        // Invalid input
        userGuess = Number(prompt("Please enter a valid number between 1 and 10 (or 999 to quit):"));
    }
}