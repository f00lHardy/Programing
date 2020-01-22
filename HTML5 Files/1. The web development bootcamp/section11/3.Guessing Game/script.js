
//create secret number
let secretNumber = 4;

//ask user for the number

let guess = Number(prompt(" Guess a number"));

// check guess

if(Number(guess) === secretNumber) {
alert("You guessed it.");
}

// otherwise check if higher

else if(guess > secretNumber) {
alert("Too high. Guess again!");
}

// otherwise, check if lower

else {
    alert("Too high. Guess again!");
    }

while (guess != secretNumber) {
    
}