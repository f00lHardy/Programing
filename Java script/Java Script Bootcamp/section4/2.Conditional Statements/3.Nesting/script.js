let password = "cat dog";
if (password.length >= 6) {
    if (password.indexOf(' ') !== -1) {
        console.log("Password cannot include spaces");
    }
    else {
        console.log("Valid password!!");
    }
}
else {
    console.log("Password too short!");
}

// Example 2
let password;

if (password.length >= 6) {

}
else {
    console.log("Password must be longer!");
}