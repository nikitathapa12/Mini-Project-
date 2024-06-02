
// // Assignment 1 
// // 1) Create two variables, one for your name and another for your age. Print a sentence
// // combining those variables.

// let fullName = "Nikita Thapa";
// let age = 22;
// console.log(`My name is ${fullName} and I am ${age} years old.`)


// // 2)Assign the value 10 to a variable. Then multiply that variable by itself and store the
// // result in another variable. Print the final value.

// let a= 10;
// multiple = a*a;
// console.log(`The Final value is ${multiple}`);

// // 3) Write code to check if the character stored in a variable is uppercase or lowercase.
// // Print &quot;uppercase&quot; or &quot;lowercase&quot; accordingly. (Hint: Use character codes)

// let char = 'A';
// if (char >= 'A' && char <= 'Z'){
//   console.log("Uppercase");
// }
// else if (char >= 'a' && char<='z'){
//   console.log("Lowercase");
// }
// else {
//   console.log("Not a Letter");
// }


// //4) Declare two variables with numeric values. Add them together and print the sum. Then,
// // subtract the smaller number from the larger number and store the difference in a new
// // variable. Print the difference.

// var num1= 10;
// var num2=4;
// var sum = num1+num2;
// console.log(`The sum is ${sum}`);

// var smaller = 4;
// var larger = 10;
// var sub = larger- smaller;
// console.log(`The difference is ${sub}`);


// // 5) Imagine you have a variable storing a product price. Write code to apply a 10%
// // discount and print the discounted price.

// let price = 65;
// let discount = 0.1;
// let discountPrice = price * discount ;

//  console.log(`The discounted price is ${discountPrice}`);



//Assignment 2
//1) Password Strength Checker: Write code using if/else statements to check the
// strength of a password based on its length. Print messages like &quot;Strong password,&quot;
// &quot;Medium password,&quot; or &quot;Weak password&quot; depending on the length criteria (e.g., strong:
// &gt; 12 characters, medium: 8-12 characters, weak: less than 8 characters).

// let password ="Nikita12345";
// if (password.length>=12){
// console.log("Strong password");
// }
// else if (password.length>=8 && password.length<=12){
//   console.log("Medium password");
// }
// else {
//   console.log("Weak Password");
// }

// //2) Consonant: Write a program using if/else to determine if a character entered
// // by the user is a vowel (a, e, i, o, u) or a consonant. Consider uppercase and lowercase
// // letters.

// let char='U';
// char=char.toLowerCase();
// if (char === 'a' || char =='e' || char=='i' || char=='o'|| char=='u'){
//   console.log("The Character is vowel");

// } else if ( char >= 'a' && char<='z'){
//   console.log("The character is consonant");
// } else{
//   console.log("The character is not a letter");
// }



// //3) Create a simple guessing game using if/else statements.
// // Generate a random number between 1 and 10 and allow the user to guess it. Print
// // messages like &quot;Correct!&quot; or &quot;Guess higher/lower&quot; based on their input.



// let randomNumber = 10;
// let userGuess= 15;
// if (userGuess == randomNumber){
//   console.log("Correct");
// } else if(userGuess< randomNumber){
//   console.log(" Guess Higher");
// } else{
//   console.log("Guess Lower");
// }




// //4) Write code using if/else to calculate the final price of a
// // product considering a sales tax rate (e.g., 8%). Take the product price and tax rate as
// // inputs and print the final price with tax.

// let Price= 740;
// let tax = 0.08;
// if(finalPrice = Price + (Price*tax)){
//   console.log(finalPrice);
// } else{
//   console.log("price without tax");
// }

// //5)Develop a basic calculator using if/else statements. Allow the user
// // to enter two numbers and an operator (+, -, *, /). Based on the operator, perform the
// // calculation and print the result.
// let num1=3;
// let num2=8;
// let o1 = '+';
// let o2 = '-';
// let o3 = '*';
// let o4 = '/';
// if ( o3=='*'){
// console.log(num1 * num2);

// } else if (o2 == '-'){
//   console.log(num2-num1);

// } else if ( o1 == '+'){
//   console.log(num1+ num2);
// } else if ( o4 =='/' ){
//   console.log(num2/num1);
// } else {
//   console.log("Invalid");
// }


// //6) Write code using switch/case to recommend a
// // movie genre based on a user&#39;s age. Use different cases for age ranges (e.g., children,
// //   teenagers, adults) and suggest appropriate genres (e.g., animation, action, drama).


// let age = 11;
// let genre;
// switch(true){
//   case (age>0 && age <=14):
//   console.log("Animation");
//   break;
//   case (age>15 && age<=18):
//     console.log("Drama ");
//     break;
//   case  (age>18 && age <=21):
//     console.log("Action movie");
//     break;
//     default:
//       console.log("Not recommended")
//       break;

// }


// //7)Create a program using if/else to determine if a
// // given date (e.g., stored in a variable) falls on a weekend (Saturday or Sunday).

// let date = new Date("2024-05-28");
// let dayOfWeek = date.getDay();
// if (dayOfWeek === 6 || dayOfWeek === 0) {
//     console.log("The date falls on a weekend (Saturday or Sunday).");
// } else {
//     console.log("The date falls on a weekday.");
// }

  //8) Write code using if/else statements to check if a number
// is positive, zero, or negative. Print the corresponding message.
// let x= -6;
// if (x>0){
//   console.log("The number is positive");
// }
// else if (x==0){
//   console.log("The number is zero");

// }
// else {
//   console.log("The number is negative");
// }




//9) 5: Create a program using if/else to determine if a number is divisible
// by 3, 5, or both. Print a message indicating divisibility or non-divisibility.

// let num = 15;
// if ( num%3 ==0 && num%5==0){
//   console.log(" The number is divisible by both");}
//   else if ( num %3 ==0){
//     console.log("Divisible by 3");

// } else if (num %5 ==0){
//   console.log("Divisible by 5");
// }
// else{
//   console.log("Not divisible by both");
// }






// //   //10) Write code using if/else to check if the sum of two user-entered
// // numbers is even or odd. Print the result.

// // let a = 8;
// // let b=9;
// // let sum = a+b;
// // if (sum%2== 0){
// //   console.log("The number is even");

// // }else{
// //   console.log("The number is odd");
// // }



// //Assignment 3

// //Question 1:
// // **Q: Write a for loop that prints numbers from 1 to 5 in the console.**

// for (let count = 1; count<=5; count ++){
//   console.log(count);
// }



// //Question 2:
// // **Q: Using a while loop, print even numbers from 2 to 10 (inclusive) in the
// // console.**

// let number = 2;
// while (number<= 10) {
// console.log(number);
// number += 2;
// }


// //Question 3:
// // **Q: Write a for loop to calculate the sum of numbers from 1 to 10.**

// let sum = 0;
// for(let i =1; i<=10; i++){
//   sum= sum+i ;
// }
// console.log(sum)

// //Question 4:
// // **Q: Using a while loop, find the factorial of a given number (e.g., 5).**

// let a = 5;
// let factorial = 1;
// while (a > 1) {
// factorial *= a;
// a--;
// }
// console.log('Factorial:', factorial);


// //Question 5:
// // **Q: Write a for loop that prints the square of numbers from 1 to 5.**
// for (let i=1; i<=5; i++){
//   console.log(i*i);
// }

// //Question 6:
// // **Q: Using a while loop, print the cube of numbers from 1 to 5.**

// let s=1;
// while(s<=5){
//   console.log(s*s*s);
//   s++;
// }


// //Question 7:
// // **Q: Write a for loop to iterate through an array of names and print each name
// // in the console.**

// const names= ["Nikita", "Niki", "Nikitaa","Nik"];
// for(let i=0; i<names.length; i++){
//   console.log(names[i]);
// }


//Question 8:
// **Q: Using a while loop, find the sum of elements in an array of numbers.**

// const numbers = [10,20,30]



//Assignment 5
// 1)
// function add(a, b) {
//     return a + b;
// }
// console.log(add(3, 5)); 

// 2)
// function getFirstElement(arr) {
//     return arr[0];
// }
// console.log(getFirstElement([1, 2, 3, 4])); 


// 3)
// const person = { name: "John", age: 30, city: "New York" };

// function getPersonInfo(p) {
//     return `Name: ${p.name}, Age: ${p.age}, City: ${p.city}`;
// }

// console.log(getPersonInfo(person)); 

// 4)
// function toUpperCase(str) {
//     return str.toUpperCase();
// }
// console.log(toUpperCase("hello world")); 

// 5)
// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(4, 5)); 

// 6)
// function getLastElement(arr) {
//     return arr[arr.length - 1];
// }
// console.log(getLastElement([1, 2, 3, 4])); 

// 7)
// const book = { title: "Till the end", author: "F. Scott Fitzgerald", year: 2021 };

// function getBookTitle(b) {
//     return b.title;
// }
// console.log(getBookTitle(book)); 

// 8)
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("hello")); 

// 9)
// function isEven(num) {
//     return num % 2 === 0;
// }
// console.log(isEven(4)); 

// 10)
// function sumArray(arr) {
//     return arr.reduce((sum, num) => sum + num, 0);
// }
// console.log(sumArray([1, 2, 3, 4])); 

// 11)
// const car = { make: "Toyota", model: "Camry", year: 2021 };

// function getCarModel(c) {
//     return c.model;
// }
// console.log(getCarModel(car)); 

// 12)
// const car = { make: "Toyota", model: "Camry", year: 2021 };

// function getCarModel(c) {
//     return c.model;
// }
// console.log(getCarModel(car)); 

// 13)
// function square(num) {
//     return num * num;
// }
// console.log(square(5)); 

// 14)

// function findMax(arr) {
//     return Math.max(...arr);
// }
// console.log(findMax([1, 2, 3, 4, 5])); 

// 15)
// const student = { firstName: "John", lastName: "Doe", grade: "A" };

// function getFullName(s) {
//     return `${s.firstName} ${s.lastName}`;
// }
// console.log(getFullName(student)); 
// 16)
// function greet(name) {
//     return `Hello, ${name}!`;
// }
// console.log(greet("Sushan")); 

// 17)

// function doubleArray(array) {
//     return array.map(num => num * 2);
// }
// console.log(doubleArray([1, 2, 3])); 

// 18)

// const movie = {
//     title: "Inception",
//     director: "Christopher Nolan",
//     releaseYear: 2010
// };

// function getMovieTitle(movie) {
//     return movie.title;
// }

// console.log(getMovieTitle(movie)); 

// 19)
// function getLength(str) {
//     return str.length;
// }
// console.log(getLength("Hello, World!")); 

// 20)

// function subtract(a, b) {
//     return a - b;
// }
// console.log(subtract(10, 4)); 

// 21)

// function mergeArrays(arr1, arr2) {
//     return arr1.concat(arr2);
// }

// console.log(mergeArrays([1, 2], [3, 4])); 


// 22)
// const recipe = {
//     name: "Pancakes",
//     ingredients: ["flour", "eggs", "milk", "sugar", "butter"],
//     servings: 4
// };

// function getIngredientList(recipe) {
//     return recipe.ingredients;
// }
// console.log(getIngredientList(recipe)); 

// 23)
// function endsWith(str, char) {
//     return str.endsWith(char);
// }
// console.log(endsWith("Hello", "o")); 
// console.log(endsWith("Hello", "a")); 

// 24)
// function divide(a, b) {
//     return a / b;
// }

// console.log(divide(10, 2)); 

// 25)
// function removeFirstElement(array) {
//     return array.slice(1);
// }
// console.log(removeFirstElement([1, 2, 3, 4])); 

// 26)

// const album = {
//     title: "The Dark Side of the Moon",
//     artist: "Pink Floyd",
//     tracks: ["Speak to Me", "Breathe", "On the Run", "Time"]
// };

// function getTrackCount(album) {
//     return album.tracks.length;
// }
// console.log(getTrackCount(album)); 

// 27)
// function startsWith(str, char) {
//     return str.startsWith(char);
// }
// console.log(startsWith("Hello", "H")); 
// console.log(startsWith("Hello", "h"));

// 28)
// function isPositive(num) {
//     return num > 0;
// }
// console.log(isPositive(5)); 
// console.log(isPositive(-3)); 
// console.log(isPositive(0));

// 29)

// function countElements(array) {
//     return array.length;
// }
// console.log(countElements([1, 2, 3, 4, 5])); 


// 30)

// const game = {
//     name: "The Legend of Zelda: Breath of the Wild",
//     genre: "Action-adventure",
//     platforms: ["Nintendo Switch", "Wii U"]
// };

// function getPlatformList(game) {
//     return game.platforms;
// }
// console.log(getPlatformList(game)); 








//Mini Project Assignment 5




//1. Promises
// Create a function fetchData that simulates fetching data from an API. The function should return a promise that resolves with a hardcoded array of objects after 2 seconds. Each objectshould represent a user with properties id, name, and age.

// function fetchData(){
//   return new Promise((resolve)=>{
//       setTimeout(() =>{
//           const user=[
//               {id:1, name:"Nikita", age:22},
//               {id:2, name:"Sushan", age:21},
//               {id:3, name:"Trixie", age:5}
//           ];
//           resolve(user);
//       },2000);
//   });
// }

// fetchData()
// .then((user)=>{
//   console.log(user);
// }).catch((error)=>{
//   console.error(error);
// });

//2. Closures
// Create a function createCounter that returns an object with two methods: increment and getCount. The increment method should increase the internal count by 1, and the getCount method should return the current count. Use a closure to maintain the internal count variable.

// function createCounter() {
//   let count = 2;
//   return {
//     increment: function() {
//       count += 1;
//     },
//     getCount: function() {
//       return count;
//     }
//   };
// }


// const counter = createCounter();
// console.log(counter.getCount()); 
// counter.increment();
// console.log(counter.getCount()); 
// counter.increment();
// console.log(counter.getCount()); 


//3. Callbacks
// Create a function processData that accepts an array of numbers and a callback function. The function should process each number in the array using the callback function and return a new array of processed numbers.

// function processData(numbers, callback) {
//   return numbers.map(callback);
// }

// function double(num) {
//   return num * 2;
// }

// function square(num) {
//   return num * num;
// }

// let originalArray = [1, 2, 3, 4, 5];

// let doubleArray = processData(originalArray, double);
// console.log(doubleArray); 
// const squaredArray = processData(originalArray, square);
// console.log(squaredArray); 


  //4 Async/Await  Rewrite the fetchData function from Question 1 using async and await.
  // function fetchData(){
    //   return new Promise((resolve)=>{
    //     setTimeout(()=>{
    //       const user=[
    //         {id:1, name:"Nikita", age:22},
    //         {id:2, name:"Sushan", age:21},
    //         {id:3, name:"Nikesh", age:19}
    //       ];
    //       resolve(user);
    //     },2000);
    //   }
    //   );
    // }
    
    // async function getData(){
    //   const user=await fetchData();
    //   console.log(user);
    // }
    // getData();

    //5. Array Manipulation: Map
// Given an array of numbers, create a function that doubles each number using map.
// const doubleNumbers = numbers => numbers.map(num=> num*2); 
// const orgArray=[1,2,3,4,5];
// const doubleArray= doubleNumbers(orgArray);
// console.log(doubleArray);

//6) Given an array of numbers, create a function that filters out numbers less than 10 using filter.
// const filteredNumbers = numbers => numbers.filter(num=>num<10);
// const orginalArray=[1,2,3,6,9,10,15,11];
// const filteredArray= filteredNumbers(orginalArray);
// console.log(filteredArray);

//7) Array Manipulation: Find
// Given an array of numbers, create a function that finds the first number greater than 15 using find.
const numbers =[1,2,9,4,5,16,18]
const findNumber= numbers.find(num=>num>15); 
console.log(findNumber);

//8. Array Manipulation: Reduce
// Given an array of numbers, create a function that sums all numbers using reduce.

function sumNumbers(numbers) {
  return numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
}

const originalArray = [1, 2, 3, 4, 5];
const sum = sumNumbers(originalArray);

console.log(sum); 

//9. Object Manipulation
// Given an array of user objects, write a function to transform this array into an object where the keys are user IDs  and the values are the corresponding user objects.

function transformUsersArrayToObject(users) {

  return users.reduce((accu, user) => {
  
    accu[user.id] = user;
    return accu;
  }, {});
}

const usersArray = [
  { id: 1, name: 'Nikita', age: 22 },
  { id: 2, name: 'Sushan', age: 21 },
  { id: 3, name: 'Nikesh', age: 19 },
];

const usersObject = transformUsersArrayToObject(usersArray);

console.log(usersObject);


//10) Classes and Objects
// Create a Person class with a constructor that accepts name and age parameters. Add a method describe that returns a string describing the person.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   describe() {
//     return `Person named ${this.name} is ${this.age} years old.`;
//   }
// }


// const person1 = new Person('Nikita', 22);
// console.log(person1.describe()); 

// const person2 = new Person('Sushan', 21);
// console.log(person2.describe()); 


//11. Inheritance
// Create a Student class that extends Person and adds a grade property.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `Person named ${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); 
    this.grade = grade;
  }
  
  describe() {
    return `Student named ${this.name} is ${this.age} years old and in grade ${this.grade}.`;
  }
}

const student1 = new Student('Nikita', 22, 'A');
console.log(student1.describe()); 
const student2 = new Student('Sushan', 21, 'B');
console.log(student2.describe()); 


//12) Error Handling with Promises
// Modify the fetchData function to randomly reject the promise with an error message &quot;Failed to
// fetch data&quot;. Handle this error using .catch when calling the function.

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//        const success = Math.random() > 0.5;

//       if (success) {
//         resolve("Data fetched successfully!");
//       } else {
//         reject(new Error("Failed to fetch data"));
//       }
//     }, 1000); 
//   });
// }

// fetchData()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error.message);
//   });


  // 13) 13. Error Handling with Async/Await
// Modify the fetchData function with async/await to handle errors using try/catch blocks.


async function fetchData() {
  
  const success = Math.random() > 0.5;
  
  
  await new Promise(resolve => setTimeout(resolve, 1000)); 

  if (success) {
    return "Data fetched successfully!";
  } else {
    throw new Error("Failed to fetch data");
  }
}

async function fetchDataWithHandling() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error.message); 
  }
}

fetchDataWithHandling();


// 14) Complex Array Manipulation
// Given an array of users, where each user has a name and an array of hobbies, create a function that returns an array of all unique hobbies using reduce.

function getUniqueHobbies(users) {
  return users
    .reduce((accumulator, user) => {
      
      return accumulator.concat(user.hobbies);
    }, [])
    .filter((hobby, index, array) => array.indexOf(hobby) === index);
}

const users = [
  { name: 'Nikita', hobbies: ['Reading', 'Hiking', 'Swimming'] },
  { name: 'Sushan', hobbies: ['Hiking', 'Cycling', 'Running'] },
  { name: 'Nik', hobbies: ['Running', 'Swimming', 'Painting'] }
];

const uniqueHobbies = getUniqueHobbies(users);

console.log(uniqueHobbies);

