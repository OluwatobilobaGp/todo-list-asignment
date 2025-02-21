let a = 5;
let b = "Oluwatobiloba";

console.log(typeof a);
console.log(typeof b);
console.log(typeof true);
console.log(typeof function(){});
console.log(typeof {});

//Short Way of Conditional Statement i.e if....else condition
let age = 29; //prompt ("What is your Age? Or How Old are you");

let danaiel = ( age >= 18 ? "You a adult" : "You are Still a Child" );

console.log(danaiel);


// Build a simple calculator

let user_input_one = prompt ("Enter your First Number");
let user_input_two = prompt ("Enter your Second Number");


console.log(Number(user_input_one) + Number(user_input_two));

console.log(user_input_one + user_input_two);



//Long Way of Conditional Statement i.e if....else condition
    if(age >= 18){
        console.log("Yes");
    }else{
        console.log("No");
    };

    if(age >= 18){
        let danaiel = "Yes";
    }else{
    let danaiel = "No";
    };

    console.log(danaiel);

// How to swap in javascript 

let ab = 5, be = 100;
console.log('before swap: ab = ${ab}, b = ${be}');

// Swapping without a third variable

ab = ab + be;
be = ab - be;
ab = ab - be;

console.log(ab = (be));


// Even or Odd Number Checker
// Prompt User for input (Works in a browser)
// let number = prompt ("Enter a Number:");
// number = Number(number); // Convert input to a number

// if (number % 2 === 0){
//     console.log("Even Number");
// }else{
//     console.log("Odd Number");
// };

// let output = (number % 2 === 0 ? "Even Number" : "Odd Number");
// console.log(output);
