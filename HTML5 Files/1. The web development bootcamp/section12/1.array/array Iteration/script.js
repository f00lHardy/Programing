let colors = ["Red", "Orange", "Yellow", 'Green'];

// ---------------------------------------

// for loop
for(let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// ---------------------------------------

// For each loop
colors.forEach(function(color){
    // color is a placeholder, cal it watever you want
    console.log("**********************");
    console.log(color);
    console.log("**********************");
});

// ---------------------------------------

// Normal functions
function printColor(color){
    console.log("**********************");
    console.log(color);
    console.log("**********************");
}

colors.forEach(printColor);

// ---------------------------------------

// While loop
let  count = 0

while(count < colors.length) {
    console.log(colors[count]);
    count++
}

// ---------------------------------------