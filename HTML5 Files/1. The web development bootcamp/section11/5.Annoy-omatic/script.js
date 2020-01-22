// let answer = prompt("are we there yet?");

// while(answer !== "yes" && answer !== "yeah") {
//     let answer = prompt("are we there yet?");
// }

// alert("Yay, we made it!!!")


// Version 2

let answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1) {
    let answer = prompt("are we there yet?");
}
alert("Yay, we made it!!!");