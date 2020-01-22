const student = {
    firstName   : 'David',
    lastName    : 'Jones',
    strengths   : ['Music', 'Art'],
    exams       : {
        midterm : 92,
        final   : 88
    }
};

const avg = (student.exams.midterm + student.exams.final) / 2;

// To get the avg 
avg

const shoppingCart = [
    {
        product     : 'Jenga Classic',
        price       : 6.88,
        quantity    : 1,
    },
    {
        product     : 'Echo Dot',
        price       : 29.99,
        quantity    : 3,
    },
    {
        product     : 'Fire Stick',
        price       : 39.99,
        quantity    : 2,
    }
];

shoppingCart[1][0];


const game = {

    player1         : {
        userName    : "fool_hardy",
        playingAs   : "X"
    },

    player2         : {
        userName    : 'DiselDude',
        playingAs   : 'O'
    },

    board           : [
        [null, 'X', 'O'],
        ['O', 'X', null],
        [null, 'X', 'O'],
    ]
};