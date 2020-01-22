// What does the following code print out?

let numbers = [1,2,3,4,5,6,7,8,9,10];
let colors = ["Red", "Orange", "Yellow", "Green"];

numbers.forEach(function(color){
    if(color % 3 === 0) {
        console.log(color)
    }
})