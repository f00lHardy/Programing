let loggedInUser;
let flavor = "Watermellon";

// If there isn't a logged in user

if (!loggedInUser) {
    console.log("GET OUT OF HERE!")
}

// If we only have grape and cherry

if(flavor !== "grape" && flavor !== "cherry") {
    console.log('WE DONT HAVE THAT FLAVOR!');
}

if(!(flavor === 'grape' || flavor === 'cherry')) {
    console.log('WE ONLY HAVE GRAPE OR CHERRY!');
}