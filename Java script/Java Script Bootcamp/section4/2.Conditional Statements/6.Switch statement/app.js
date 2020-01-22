console.log("I are working");

let day = 5;

if (day === 1) {
    console.log('MONDAY');
}
else if (day === 2) {
    console.log('TUESDAY');
}
else if (day == 3) {
    console.log('WEDNESDAY');
}
else if (day === 4) {
    console.log('THURSDAY');
}
else if (day === 5) {
    console.log('FRIDAY');
}
else if (day === 6) {
    console.log('SATURDAY');
}
else if (day === 7) {
    console.log('SUNDAY');
}
else {
    console.log('Invalid Day');
}

// -------------------------------------

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day")
}

// -------------------------------------

let emoji = 'happy face'
switch (emoji) {
    case 'sad face':
    case 'happy face':
        console.log('yellow');
        break;
    case 'eggplant':
        console.log('purple');
        break;
    case 'heart':
    case 'lips':
        console.log('red');
        break;
    default:
        console.log('Not a emoji')
}