//Exercise 1

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const nums2 = nums.map((currentNum) => {
    return currentNum*2;
});

console.log(nums2);

//Exercise 2

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping);
console.log(secondTopping);

//Exercise 3

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: 'Audi',
  model: 'q5',
};

const {make, model} = car;

console.log(make);
console.log(model);

//Exercise 4

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings1 = ['Pineapple', 'Olives', 'Anchovies'];

const controversialPizzaToppings = [...pizzaToppings1];

console.log(controversialPizzaToppings);

//Exercise 5

// Duplicate the following object and spread its values into a new variable `myCar`.

// Change the `model` property of `myCar` to 'q7'. Log both objects.

const car1 = {
  make: 'Audi',
  model: 'q5',
};
 const myCar = {...car1};

 myCar.model = 'q7';

 console.log(car1);
 console.log(myCar);

//Exercise 6

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

const propertyName = 'age';

const userProfile = {
  [propertyName]: 25,
}

console.log(userProfile);

//Exercise 7
//See exportingFile.js and importingFile.js

//Exercise 8

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

function makeSentence(noun='cat', adjective='white') {
  console.log(`The ${noun} is ${adjective}`);
};

makeSentence();


//Exercise 9

// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here

let taste = pizza === 'tasty' ? 'yum' : 'yuck';

console.log(taste);

//Boolean gates:

// const result1 = 'bar' && 'foo';
// const result2 = false || 243;
// const result3 = 42 && false;
// const result4 = myCar || 3000;

// console.log('result1:', result1);
// console.log('result2:', result2);
// console.log('result3:', result3);
// console.log('result4:', result4);


//Exercise 10

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = 'null';  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

const LANG = localLangConfig || 'en';

// Log the result
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

const USER_THEME = userSavedTheme || 'light';

// Log the result
console.log('User theme setting:', USER_THEME);

//Exercise 11

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: 'Alice',
};

// console.log(adventurer.cat.name);

let cat = adventurer.cat?.name;

console.log(cat);


