const targetNumber = 78;
let totalAttempts = 3;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const attemptsElement = document.getElementById('attempts');
    
    let guess = parseInt(guessInput.value);
    
    if (isNaN(guess)) {
        message.textContent = "Please enter a valid number.";
        return;
    }

    totalAttempts--;
    attemptsElement.textContent = totalAttempts;
    
    if (guess < targetNumber) {
        message.textContent = "It's too low, try a higher number.";
    } else if (guess > targetNumber) {
        message.textContent = "It's too high, try a lower number.";
    } else {
        message.innerHTML = "<b>Congratulations! You won a 25% discount on all items.</b>";
        return;
    }
    
    if (totalAttempts === 0) {
        message.textContent = "Better luck next time!";
        guessInput.disabled = true;
        document.querySelector('button').disabled = true;
    }
}
