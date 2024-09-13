// Type Assignment
// When creating a variable, there are two main ways TypeScript assigns a type:
// Explicit
// Implicit
// TS SIMPLE TYPES ---------------------------------------------------------------------------------------------------------------------------------------
// Explicit - writing out the type:
// let firstName : string = "Davit";
// console.log(firstName);
// firstName = "Mher";
// console.log(firstName);
// Error In Type Assignment
// index.ts:9:1 - error TS2322: Type 'number' is not assignable to type 'string'.
// firstName = 14;
// console.log(firstName);
//Implicit - TypeScript will "guess" the type, based on the assigned value:
// Having TypeScript "guess" the type of a value is called infer.
// let firstName = "Davit";
// console.log(firstName);
// Error In Type Assignment
// index.ts:30:1 - error TS2322: Type 'number' is not assignable to type 'string'.
// firstName = 12;
// console.log(firstName);
// Best Practice:
// In general, TypeScript encourages a balanced approach:
// Use implicit typing for straightforward cases where the type is obvious.
// Use explicit typing in more complex scenarios or when you want to enforce a specific type, especially in function signatures, object shapes, or when working with any complex structures.
// TS SPECIAL TYPES ---------------------------------------------------------------------------------------------------------------------------------------
// let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'
// let v: any = true;
// v = "string"; // no error as it can be "any" type
// Math.round(v); // no error as it can be "any" type
//TS Arrays//
// const names: string[] = [];
// names.push("Dylan"); // no error
// // names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// Readonly
// The readonly keyword can prevent arrays from being changed.
// Example
// const names: readonly string[] = ["Dylan"];
// names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// // try removing the readonly modifier and see if it works?
//TS TUPPLES -----------------------------------------------------------------------------------------------------------------------------------------------
// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array:
// let ourTuple : [boolean, string,number];
// ourTuple  = [true,"Hello",false];
// console.log(ourTuple);
// Readonly Tuple
// A good practice is to make your tuple readonly.
// Tuples only have strongly defined types for the initial values:
// Example
// define our tuple
// let ourTuple: [number, boolean, string];
// initialize correctly
// ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
// ourTuple.push('Something new and wrong');
// console.log(ourTuple);
// define our readonly tuple
// const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// // throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');
//EXERCCIES//
// Exercise 1: Type Assignment
// Explicit Typing Exercise:
// Create a variable userName of type string and assign your name to it.
// Change the value of userName to a different string.
// Try assigning a number to userName and observe the TypeScript error.
// let userName : string = "David";
// userName = "Mher";
// userName = 10;
// console.log(userName);
// Implicit Typing Exercise:
// Create a variable age and assign your age to it.
// Change the value of age to a different number.
// Try assigning a string to age and observe the TypeScript error.
// let age = 10;
// age = 23;
// age  = "hola!";
// console.log(age);
// Exercise 2: Special Types
// Boolean Type Exercise:
// Create a variable isLoggedIn of type boolean and set it to true.
// Try assigning a string value to isLoggedIn and observe the TypeScript error.
// Any Type Exercise:
// Create a variable data of type any and assign a string to it.
// Reassign data to a number and an object. Print the data variable after each assignment.
// let isLoggedIn : boolean = true;
// isLoggedin = "Hello";
// let isLoggedIn : any = "Succesfully Logged In";
// isLoggedIn = 312;
// console.log(isLoggedIn);
// Exercise 3: Arrays
// Basic Array Exercise:
// Create an array colors of type string[] and initialize it with a few color names.
// Add another color to the array.
// Try adding a number to the colors array and observe the TypeScript error.
// Readonly Array Exercise:
// Create a readonly array piDigits of type readonly number[] and initialize it with the first few digits of Pi.
// Attempt to modify the array (e.g., push a new number) and observe the TypeScript error.
// let colors : string [] = ["blue","yellow","red"];
// colors.push("black");
// colors.push(21);
// console.log(colors);
// let piDigits :readonly number [] =[3,1,4,0,1,2];
// // piDigits.push(21);
// console.log(piDigits);
// Exercise 4: Tuples
// Basic Tuple Exercise:
// Define a tuple person with types [string, number, boolean].
// Assign values to the person tuple (e.g., a name, age, and a boolean indicating whether they are active).
// Print the tuple.
// Readonly Tuple Exercise:
// Define a readonly tuple config with types [string, number, string].
// Initialize it with a configuration setting (e.g., an environment name, a port number, and a file path).
// Attempt to modify the tuple (e.g., add a new element) and observe the TypeScript error.
// let person : [string,number,boolean];
// person = ["Davit",211,true];
// console.log(person);
// const person: readonly [string, number, string] = ["TypeScript", 15.3, "index"];
// console.log(person);
// person.push("hail!");
// TypeScript Object Types
// TypeScript has a specific syntax for typing objects.
// Read more about objects in our JavaScript Objects chapter.
// ExampleGet your own TypeScript Server
// const car: { type: string, model: string, year: number } = {
//   type: "Toyota",
//   model: "Corolla",
//   year: 2009
// };
// const person :{name:string,surname:string,age:number} ={
//     name:"Davit",
//     surname:"Harutyunyan",
//     age : 12
// }
// console.log(person);
// let x : number = 10;
// let y : number = 23;
// let sum :number  = x + y ;
// console.log(sum);
// enum direction {
//     Up,
//     Down,
//     Left ,
//     Right 
// }
// console.log(direction.Up)
// Union Typees
// let userName: string = "David";
// console.log(userName);
// let userAge : number = 21;
// console.log(userAge);
// function statusCode(code: number | number[]) {
//     // Determine the type of 'code'
//     let typeOfCode: string;
//     if (Array.isArray(code)) {
//         typeOfCode = 'array';
//         console.log(`My Status code is ${code.join(', ')}, type is ${typeOfCode}`);
//     } else {
//         typeOfCode = 'number';
//         console.log(`My Status code is ${code}, type is ${typeOfCode}`);
//     }
// }
// // Test the function
// statusCode(300);          // Output: My Status code is 300, type is number
// statusCode([210]);        // Output: My Status code is 210, type is array
// FUNCTIONS//
// function getTime(): number {
//     return new Date().getTime();
// }
// console.log(getTime())
// function printHello(): void {
//     console.log('Hello!');
//   }
//   printHello()
//   function multiply (a:number,b:number){
//     return a + b;
//   }
//   console.log(multiply(10,30))
// the `?` operator here marks parameter `c` as optional
// function add(a: number, b: number, c?: number) {
//     return a + b + (c || 5);
//   }
//   console.log(add(10,20))
// function pow(value: number, powvalue: number = 5): number {
//     return value * powvalue;
// }
// console.log(pow(40));
// let num : number = 20;
// let num2 : number = 42;
// let sum : number = num + num2 ;
// console.log(sum);
// console.log(typeof sum);
// let x  : unknown = "hello";
// console.log((x as string).length);
// let x: unknown = 'hello';
// console.log((<string>x).length);
// let str : string = "Davit";
// let num : number = 21;
// let bool : boolean = true;
// // let arrNum : number[] = [10,20,30,40];
// let arrStr : string[] = ["Davit","Mher","Armen"]
// let arrMix: (number | string)[] = [10, 20, "Sahak"];
// let mix : (number | string | object | (number | string )[])= [
//     "Davit",
//     20,
//   [20,30,40,],
//   {name:"Davit",
//     surname:"Harutyunyan"
//   }
// ]
// console.log(mix)
// alert("Hello")
// function sum(firstNumber: number, secondNumber: number): number {
//     return firstNumber + secondNumber;
// }
// alert(sum(num, num));
// alert("Jeeero!")
// let arrNum  : number[] = [10,20,30,40,50];
// arrNum.forEach(function(e){
//     console.log(e)
// })
// alert("BB")
// let newArray = arrNum.map(function(e){
//     return e + 10
// })
// console.log(newArray)
// let a: number = 1;
// let b: number = 2;
// let nama: string = "Davit";
// let surname: string = "Jordano";
// function values(q: number, w: number, e: string, r: string): number | string {
//     // Check if q and w are numbers
//     if (typeof q === 'number' && typeof w === 'number') {
//         return q + w;
//     }
//     if (typeof e === 'string' && typeof r === 'string') {
//         return e + r;
//     }
//     return 'Invalid input types';
// }
// console.log(values(a, b, nama, surname));
// Type Assignment
// When creating a variable, there are two main ways TypeScript assigns a type:
// Explicit
// Implicit
// TS SIMPLE TYPES ---------------------------------------------------------------------------------------------------------------------------------------
// Explicit - writing out the type:
// let firstName : string = "Davit";
// console.log(firstName);
// firstName = "Mher";
// console.log(firstName);
// Error In Type Assignment
// index.ts:9:1 - error TS2322: Type 'number' is not assignable to type 'string'.
// firstName = 14;
// console.log(firstName);
//Implicit - TypeScript will "guess" the type, based on the assigned value:
// Having TypeScript "guess" the type of a value is called infer.
// let firstName = "Davit";
// console.log(firstName);
// Error In Type Assignment
// index.ts:30:1 - error TS2322: Type 'number' is not assignable to type 'string'.
// firstName = 12;
// console.log(firstName);
// Best Practice:
// In general, TypeScript encourages a balanced approach:
// Use implicit typing for straightforward cases where the type is obvious.
// Use explicit typing in more complex scenarios or when you want to enforce a specific type, especially in function signatures, object shapes, or when working with any complex structures.
// TS SPECIAL TYPES ---------------------------------------------------------------------------------------------------------------------------------------
// let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'
// let v: any = true;
// v = "string"; // no error as it can be "any" type
// Math.round(v); // no error as it can be "any" type
//TS Arrays//
// const names: string[] = [];
// names.push("Dylan"); // no error
// // names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// Readonly
// The readonly keyword can prevent arrays from being changed.
// Example
// const names: readonly string[] = ["Dylan"];
// names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// // try removing the readonly modifier and see if it works?
//TS TUPPLES -----------------------------------------------------------------------------------------------------------------------------------------------
// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array:
// let ourTuple : [boolean, string,number];
// ourTuple  = [true,"Hello",false];
// console.log(ourTuple);
// Readonly Tuple
// A good practice is to make your tuple readonly.
// Tuples only have strongly defined types for the initial values:
// Example
// define our tuple
// let ourTuple: [number, boolean, string];
// initialize correctly
// ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
// ourTuple.push('Something new and wrong');
// console.log(ourTuple);
// define our readonly tuple
// const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// // throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');
//EXERCCIES//
// Exercise 1: Type Assignment
// Explicit Typing Exercise:
// Create a variable userName of type string and assign your name to it.
// Change the value of userName to a different string.
// Try assigning a number to userName and observe the TypeScript error.
// let userName : string = "David";
// userName = "Mher";
// userName = 10;
// console.log(userName);
// Implicit Typing Exercise:
// Create a variable age and assign your age to it.
// Change the value of age to a different number.
// Try assigning a string to age and observe the TypeScript error.
// let age = 10;
// age = 23;
// age  = "hola!";
// console.log(age);
// Exercise 2: Special Types
// Boolean Type Exercise:
// Create a variable isLoggedIn of type boolean and set it to true.
// Try assigning a string value to isLoggedIn and observe the TypeScript error.
// Any Type Exercise:
// Create a variable data of type any and assign a string to it.
// Reassign data to a number and an object. Print the data variable after each assignment.
// let isLoggedIn : boolean = true;
// isLoggedin = "Hello";
// let isLoggedIn : any = "Succesfully Logged In";
// isLoggedIn = 312;
// console.log(isLoggedIn);
// Exercise 3: Arrays
// Basic Array Exercise:
// Create an array colors of type string[] and initialize it with a few color names.
// Add another color to the array.
// Try adding a number to the colors array and observe the TypeScript error.
// Readonly Array Exercise:
// Create a readonly array piDigits of type readonly number[] and initialize it with the first few digits of Pi.
// Attempt to modify the array (e.g., push a new number) and observe the TypeScript error.
// let colors : string [] = ["blue","yellow","red"];
// colors.push("black");
// colors.push(21);
// console.log(colors);
// let piDigits :readonly number [] =[3,1,4,0,1,2];
// // piDigits.push(21);
// console.log(piDigits);
// Exercise 4: Tuples
// Basic Tuple Exercise:
// Define a tuple person with types [string, number, boolean].
// Assign values to the person tuple (e.g., a name, age, and a boolean indicating whether they are active).
// Print the tuple.
// Readonly Tuple Exercise:
// Define a readonly tuple config with types [string, number, string].
// Initialize it with a configuration setting (e.g., an environment name, a port number, and a file path).
// Attempt to modify the tuple (e.g., add a new element) and observe the TypeScript error.
// let person : [string,number,boolean];
// person = ["Davit",211,true];
// console.log(person);
// const person: readonly [string, number, string] = ["TypeScript", 15.3, "index"];
// console.log(person);
// person.push("hail!");
// TypeScript Object Types
// TypeScript has a specific syntax for typing objects.
// Read more about objects in our JavaScript Objects chapter.
// ExampleGet your own TypeScript Server
// const car: { type: string, model: string, year: number } = {
//   type: "Toyota",
//   model: "Corolla",
//   year: 2009
// };
// const person :{name:string,surname:string,age:number} ={
//     name:"Davit",
//     surname:"Harutyunyan",
//     age : 12
// }
// console.log(person);
// let x : number = 10;
// let y : number = 23;
// let sum :number  = x + y ;
// console.log(sum);
// enum direction {
//     Up,
//     Down,
//     Left ,
//     Right 
// }
// console.log(direction.Up)
// Union Typees
// let userName: string = "David";
// console.log(userName);
// let userAge : number = 21;
// console.log(userAge);
// function statusCode(code: number | number[]) {
//     // Determine the type of 'code'
//     let typeOfCode: string;
//     if (Array.isArray(code)) {
//         typeOfCode = 'array';
//         console.log(`My Status code is ${code.join(', ')}, type is ${typeOfCode}`);
//     } else {
//         typeOfCode = 'number';
//         console.log(`My Status code is ${code}, type is ${typeOfCode}`);
//     }
// }
// // Test the function
// statusCode(300);          // Output: My Status code is 300, type is number
// statusCode([210]);        // Output: My Status code is 210, type is array
// FUNCTIONS//
// function getTime(): number {
//     return new Date().getTime();
// }
// console.log(getTime())
// function printHello(): void {
//     console.log('Hello!');
//   }
//   printHello()
//   function multiply (a:number,b:number){
//     return a + b;
//   }
//   console.log(multiply(10,30))
// the `?` operator here marks parameter `c` as optional
// function add(a: number, b: number, c?: number) {
//     return a + b + (c || 5);
//   }
//   console.log(add(10,20))
// function pow(value: number, powvalue: number = 5): number {
//     return value * powvalue;
// }
// console.log(pow(40));
// let num : number = 20;
// let num2 : number = 42;
// let sum : number = num + num2 ;
// console.log(sum);
// console.log(typeof sum);
// let x  : unknown = "hello";
// console.log((x as string).length);
// let x: unknown = 'hello';
// console.log((<string>x).length);
// let str : string = "Davit";
// let num : number = 21;
// let bool : boolean = true;
// // let arrNum : number[] = [10,20,30,40];
// let arrStr : string[] = ["Davit","Mher","Armen"]
// let arrMix: (number | string)[] = [10, 20, "Sahak"];
// let mix : (number | string | object | (number | string )[])= [
//     "Davit",
//     20,
//   [20,30,40,],
//   {name:"Davit",
//     surname:"Harutyunyan"
//   }
// ]
// console.log(mix)
// alert("Hello")
// function sum(firstNumber: number, secondNumber: number): number {
//     return firstNumber + secondNumber;
// }
// alert(sum(num, num));
// alert("Jeeero!")
// let arrNum  : number[] = [10,20,30,40,50];
// arrNum.forEach(function(e){
//     console.log(e)
// })
// alert("BB")
// let newArray = arrNum.map(function(e){
//     return e + 10
// })
// console.log(newArray)
// let a: number = 1;
// let b: number = 2;
// let nama: string = "Davit";
// let surname: string = "Jordano";
// function values(q: number, w: number, e: string, r: string): number | string {
//     // Check if q and w are numbers
//     if (typeof q === 'number' && typeof w === 'number') {
//         return q + w;
//     }
//     if (typeof e === 'string' && typeof r === 'string') {
//         return e + r;
//     }
//     return 'Invalid input types';
// }
// console.log(values(a, b, nama, surname));
// interface Person {
//     name: string;
//     age: number;
//     isStudent: boolean;
// }
// let person = {
//     name: "Davit",
//     age: 21,
//     surname: "harut",  
//     isStudent: true
// } as Person;
// let person2 : Person =  {
//     name : "Josh",
//     age:21,
//     isStudent: false
// }
// let usersArray : object[]=[
//     person,
//     person2
// ]
// usersArray.forEach(function(e){
//     console.log(`Hello Objects `,e)
// })
var button = document.querySelector(".btn");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(function (response) { return response.json(); })
        .then(function (json) { return console.log(json); });
});
