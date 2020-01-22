// Testing the js script

let guessesTaken = 0;

console.log("Hello! what is your name?");
let myName = prompt();

let number = RandomSource(1, 20);
console.log("Well, " + myName + ", I am thinking of a number between 1 and 20.");

while(guessesTaken < 6){
    console.log("Take a guess.");
    let guess = prompt();

    guessesTaken++;

    if(guess < number){
        prompt("Your guess is to low.");
    }
    if(guess > number){
        prompt("Your guess is to high");
    }
    if(guess == number){
        break
    }
}

if(guess == number){
    prompt("Good job, " + name + "! You guessed my number in " + guessesTaken + " guesses!");
}

if(guess != number){
    prompt("Nope. The number I was thinking of was " + number)
}