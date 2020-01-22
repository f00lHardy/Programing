
console.log("Print all numbers between -10 and 19")
let num1 = -10;
while(num1 < 20){
    console.log(num1);
    num1++;
}

console.log("Print all even numbers between 10 and 40")
let num2 = 12;
while(num2 <= 40){
    console.log(num2);
    num2+=2;
}

// while(num2 <= 40){
//     if(counter % 2 === 0){
//         console.log(num2);
//     }
//     num2+=1;
// }

console.log("Print all odd numbers between 300 and 333")
let num3 = 301;
while(num3 <= 333){
    console.log(num3);
    num3+=2;
}

// while(num3 <= 333){
//     if(counter % 2 !== 0){
//         console.log(num2);
//     }
//     num2+=1;
// }

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")

let num4 = 5;
while(num4 <= 50){
    if(num4 % 5 === 0 && num4 % 3 === 0){
        console.log(num2);
    }
    num4+=1;
}
