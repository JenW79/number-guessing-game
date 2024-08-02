function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let secretNumber;
let minNumber;
let maxNumber;

function checkGuess(num) {
    if (num < secretNumber) {
        return "Too low!";
    } else if (num > secretNumber) {
        return "Too high!";
    } else {
        return "Correct!";
    }
}

function startGame() {
    minNumber = Number(document.getElementById("minNumber").value);
    maxNumber = Number(document.getElementById("maxNumber").value);

    if (isNaN(minNumber) || isNaN(maxNumber) || maxNumber <= minNumber) {
        alert("Please enter valid numbers with the maximum greater than the minimum.");
        return;
    }

    secretNumber = randomInRange(minNumber, maxNumber);
    document.getElementById("setup").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("message").innerText = `Secret number generated between ${minNumber} and ${maxNumber}. Start guessing!`;
}

function handleGuess() {
    const guess = Number(document.getElementById("guess").value);
    if (isNaN(guess)) {
        alert("Please enter a valid number.");
        return;
    }

    if (guess < minNumber || guess > maxNumber) {
        alert(`Please enter a number between ${minNumber} and ${maxNumber}.`);
        return;
    }

    const result = checkGuess(guess);
    document.getElementById("message").innerText = result;

    if (result === "Correct!") {
        alert("You win!");
        quitGame();
    }
}

function quitGame() {
    document.getElementById("setup").style.display = "block";
    document.getElementById("game").style.display = "none";
    document.getElementById("minNumber").value = '';
    document.getElementById("maxNumber").value = '';
    document.getElementById("guess").value = '';
    document.getElementById("message").innerText = '';
}
