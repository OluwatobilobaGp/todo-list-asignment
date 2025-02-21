let isLoggedIn = true;
if (isLoggedIn == true){
    console.log("Welcome back!");
}else{
    console.log("Please log in.");
}


//Ternary Operator (? :)
// A shorter way to write if...else.
let isLoggedIn2 = true;
console.log(isLoggedIn2 ? "Welcome back!" : "Please log in.");


// E. switch Statement
// Used when multiple conditions depend on a single value or one Variable.

let day = 7;

switch (day){
    case 1: 
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;         
}
// Note: Always use break; to prevent fall-through.


// Loops
// Loops help execute a block of code multiple times.


// for Loop
// Used when the number of iterations is known.
for (let i=1; i<=5; i++){
    console.log("Iteration:", i);
}


// while Loop
// Executes as long as a condition is true.
let count = 1;
while(count <= 8){
    console.log("Count:", count);
    count++;
}


let num = 2;
do {
  console.log("Number:", num);
  num++;
} while (num <= 6);


for (let a = 1; a <= 5; a++) {
    if (a === 3) continue; // Skips 3
    console.log(a);
  }

  for (let ab = 1; ab <= 15; ab++) {
    if (ab === 12) break; // Stops at 12
    console.log(ab);
  }
  
  for (let i = 0; i < 21; i+=3) {
    console.log(i);
  }


 function greet() {
      console.log("Hello, World!"); // 
    }
  greet();

//   let display = document.getElementById("display");

//   function appendToDisplay(value) {
//       display.value += value;
//   }
  

  function code() {
    console.log("Java, World!");
  }
  code();


  function add(kc, lk) {
    return kc + lk;
  }
  
  let sum = add(5, 3);
  console.log(sum);



  const multiply = function (x, y, w) {
    return x * y - w;
  };
  console.log(multiply(4, 2, 5)); // 


const subtract = (a, b) => a - b;
console.log(subtract(10, 3));


const greetUser = (name) => {
    console.log("Hello, " + name);
    console.log("Welcome!");
  };
  
  greetUser("Alice");


// IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("This runs immediately!");
  })();

 
  (function (name) {
    console.log(`Hello, ${name}!`);
  })("John");
   
  
//   Summary
// Function Type	Syntax	Hoisting
// Function Declaration	function name() {}	✅ Yes
// Function Expression	const name = function() {}	❌ No
// Arrow Function	const name = () => {}	❌ No
// IIFE	(function(){})()	✅ Yes



// JavaScript Data Structures
// Data structures store and organize data efficiently. 
// The main ones in JavaScript are Arrays, Objects, Sets, and Maps.


// 1. Arrays and Array Methods
// An array is an ordered list of values.

// Creating an Array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[2]); // Output: Apple
console.log(fruits); // Output: Apple, Banana, Cherry


// Array Methods
// .push(value)     Adds value at the end

// .pop()       Removes the last element

// .shift()     Removes the first element
// .unshift(value)   Adds value at the beginning  
// .map(fn)     Creates a new array by applying fn to each element
// .filter(fn)    Creates a new array with elements that match fn
// .forEach(fn)   Loops through array elements

fruits.push("Mango");
console.log(fruits); // Output: Apple, Banana, Cherry, Mango
fruits.pop();
console.log(fruits); // Output: Apple, Banana, Cherry
fruits.pop();
console.log(fruits); // Output: Apple, Banana


let numbers = [1, 2, 3, 4, 5];

// Multiply each number by 2
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]


// Get numbers greater than 2
let filtered = numbers.filter(num => num > 4);
console.log(filtered); // [5]


(function () {
  console.log(num * 2);
})();


numbers.forEach(num => num * 2);


// let arrayloop = numbers.forEach(num => num * 2);
// console.log(arrayloop);

// (function () { console.log(num * 2);})();

numbers.forEach( 
  num => { console.log(num * 2);}
);


// console.log(num * 3);
// console.log(num * 4);
// console.log(num * 5);


// 2. Objects and Object Manipulation
// An object is a collection of key-value pairs.


let fruits2 = ["Apple", "Banana", "Cherry"];
// An array is an ordered list of values.

let person = {
  name: "Alice",  // key-value pairs.
  age: 25,
  isStudent: false,
  city: "Abuja"
};

console.log(person.age); // Output: 25

person.age = 26; // Update Object
person.city = "Benin";
delete person.isStudent;
console.log(person.isStudent); // Output: false
console.log(person.name); // Output: Alice
console.log(person.age * 3, person.city);
console.log(person);



// JavaScript DOM Manipulation
// The Document Object Model (DOM) allows JavaScript to interact with HTML elements dynamically.

// 1. Selecting Elements
// 2. Changing Content and Attributes
// 3. Event Handling (addEventListener
// 4. Form Handling



// getElementById it select a single element by Id

let heading = document.getElementById("java_ader");
console.log(heading.innerText);

// querySelector  & querySelectorAll
// querySelector("selector") → Selects the first matching element
// querySelectorAll("selector") → Selects all matching elements 


let firstParagraph = document.querySelector("p");
// let SecondParagraph = document.querySelector('p.nth-child(2)');

let allParagraphs = document.querySelectorAll("p");

// Code 1 
console.log(firstParagraph.innerText);

// code 2
allParagraphs.forEach(allParagraphs =>{
  console.log(allParagraphs.textContent);
});

// code 3
if(allParagraphs.length > 1){
  const SecondParagraph = allParagraphs[1];
  console.log(SecondParagraph.textContent);
}

// code 4
if(allParagraphs.length > 1){
  const forthParagraph = allParagraphs[3];
  console.log(forthParagraph.textContent);
}

document.getElementById("container").innerHTML = "<h2>New Content</h2>";


function reveal (){
    console.log("Reveal Hidden Content");
}




// Event Handling (addEventListener)
// Events allow user interaction with the webpage.

// A. Click Event

let button = document.getElementById("myButton");

button.addEventListener("click", function () {
  alert("Button Clicked!");
});




let variable = document.getElementById("hoverBox");

variable.addEventListener("mouseover", function () {
  variable.style.color = "pink";

  // alert("Color Change!");
});

variable.addEventListener("mouseout", function () {
  variable.style.color = "white";
  alert("Color Change to pink Earlier!");
});


let variable2 = document.getElementById("hoverBox2");

variable2.addEventListener("mouseover", function () {
  variable2.style.color = "pink";
  // alert("Color Change!");
});

variable2.addEventListener("mouseout", function () {
  variable2.style.color = "white";
  alert("Color Change to pink Earlier!");
});


