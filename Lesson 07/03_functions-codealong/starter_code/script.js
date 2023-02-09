// Let's create 4 functions!

// 1. Square of a number

// Create a function called `squared` that takes one argument
// The function will return the argument times itself (the square of the number)

// function squared(namingStuff) {
// let mySquare = namingStuff * namingStuff;
// return mySquare;
// }


function squared(numberToBeSquared) {
    return numberToBeSquared * numberToBeSquared;
    }
    
    console.log(squared(2));
    console.log(squared(5));
    console.log(squared(-3));


// BONUS: Check if the argument is a number first! (Hint: conditionals - if statements)

// 2. Get string length!

// Create a function called `stringLength` that returns the length of a string (how many characters?)
// So: stringLength("hello") would return 5

console.log("LENGTH!");

function stringLength(toBeMeasured){
    return toBeMeasured.length;
}


console.log(stringLength("testing"))
console.log(stringLength("This is a longer string."))

// 3. Add two numbers together

console.log("ADDED!");

function addNumbers(ichi, ni){
    const addedTogether = ichi + ni;
    return addedTogether;
}

function multiplyNumbers (ichi, ni){

}

console.log(addNumbers(4, 2));
console.log(addNumbers(6, 3));

// Create a function called addNumbers
// Takes two arguments and returns the sum of those arguments

// console.log(addNumbers(4, 2));
// console.log(addNumbers(6, 3));

// 4. Create a function called sayHello
// Takes one argument
// Returns a string that is the combination of "Hello, " + the argument passed into the function
// So sayHello("Paul") would return "Hello, Paul";

console.log("SAY HELLO!");

function sayHello(personName){
    let theLength = stringLength(personName);

    console.log("Person's Name is " + theLength + " character(s) long");

    if(typeof personName == "string"){
        return "Hello, " + personName;
    }else{
            return "Goodbye";
        }
    }


console.log(sayHello("Paul"));

// console.log(sayHello("Paul"));



