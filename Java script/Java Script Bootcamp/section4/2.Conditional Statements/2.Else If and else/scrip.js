// Performance Review
// 3 - Supperstar
// 2 - Meets expectations
// 1 - Needs Improvements
// Anything else - wtf?

let rating  = 2;

if (rating === 3) {
    console.log("YOU ARE A SUPPERSTAR!");
}

else if(rating === 2) {
    console.log("MEETS EXPECTATIONS!");
}
else if(rating === 1) {
    console.log("NEEDS IMPROVEMENT!");
}
else {
    console.log("WTF!");
}

// Example 2

let highScore = 1430;
let userScore = 1400;

if (userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else {
    console.log(`Good Game, Your score of ${userScore} did not beat the high score of ${highScore}`);
}