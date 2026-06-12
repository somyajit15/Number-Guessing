let randomNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 0;

function checkGuess() {

    const guess = Number(
        document.getElementById("guessInput").value
    );

    const message =
        document.getElementById("message");

    const attemptsText =
        document.getElementById("attempts");

    if (!guess || guess < 1 || guess > 50) {
        message.innerText =
            "❌ Enter a number between 1 and 50";
        return;
    }

    attempts++;
    attemptsText.innerText = attempts;

    if (guess === randomNumber) {
        message.innerText =
            `🎉 Correct! The number was ${randomNumber}`;
    }

    else if (guess > randomNumber) {
        message.innerText =
            "📉 Too High! Try again";
    }

    else {
        message.innerText =
            "📈 Too Low! Try again";
    }

    document.getElementById("guessInput").value = "";
}

function restartGame() {

    randomNumber =
        Math.floor(Math.random() * 50) + 1;

    attempts = 0;

    document.getElementById("attempts")
        .innerText = 0;

    document.getElementById("message")
        .innerText = "Start guessing...";

    document.getElementById("guessInput")
        .value = "";
}