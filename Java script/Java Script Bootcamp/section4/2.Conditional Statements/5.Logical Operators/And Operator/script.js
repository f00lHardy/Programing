// console.log("Connected")

// Example 1 and

let password = 'taco tuesday';

if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Valid Password!");
}
else {
    console.log("INVALID PASSWORD!");
}

// Example 2 and &&

let password2 = "chickenGal";

if (password2.length >= 8 && password2.indexOf(' ') === -1) {
    console.log("Valid Password");
}
else {
    console.log("Invalid Password");
}

// Example 3 or ||

let age = 30;

if (age < 6 || age >= 65) {
    console.log('You get in for free!');
}
else {
    console.log('That will be $10 please');
}

// Example 4

let color = "purple";

if (color === "purple" || color === "lilac" || color === "violet") {
    console.log("Great Choice!");
}