//==========Exercise #1 ===========//
/*
Write a function that passes through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
function Person(name, age) {
    this.name = name;
    this.age = age;

  this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };

 this.addAge = (years) => {
        this.age += years;
    };
}
const person1 = new Person("Shoha", 30);
const person2 = new Person("Maseeh", 21);

person1.addAge(1);
person2.addAge(3);

person1.printInfo();
person2.printInfo();

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function checkStringLength(str) {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
}
const inputString = "now thats a big word ";
checkStringLength(inputString)
    .then((message) => {
        console.log(message); 
    })
    .catch((message) => {
        console.log(message); 
    });

//code wars
//codewars :1 url https://www.codewars.com/kata/55685cd7ad70877c23000102/solutions/javascript
function makeNegative(num) {
    return -Math.abs(num);
  }

//codewars : 2 url https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
function squareSum(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i] ** 2; 
    }
  
    return sum;
  }