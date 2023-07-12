// function 

//1.A function is a specific piece of program that must be invoked to perform specific task.

//2. Function in JS called as First class citizens
      // 1.Functions can be assigned to variables
      // 2.Functions can be passed as arguments to other functions
      // 3.Functions can be returned as values from other functions

function addition(a,b){
      return a+b;
}
// a,b -->Parameters
// 2,3 -->Arguments

const sum=addition(2,3)
console.log(sum); //5

// Return statements

/*
The return statement stops the execution of the function and 
sends the specified value back to the caller.
 If no return statement is used, the function returns undefined by default.
 */

//function with no return

function subtraction(a,b){
      console.log(a-b); //1
}
console.log(subtraction(3,2)); //undefined


//Function with default Parameters

// If the function doesn't have no argument when invoking the function, then the default parameter is used.

function sayMyName(name="Maries"){
      console.log(name)
}
sayMyName(); //Maries
sayMyName("Venkat"); //Venkat

// Function with Rest Parameter

// Rest parameter allows you to accept variable number of arguments as an array

function TotalMarks(...numbers){
      let total=0
      for(const number of numbers){
            total+=number
      }
      return total;
}
console.log(TotalMarks(97,95,99,99,99)); //489

// Function with Named Parameters and Object Destructuring:

/*
Named parameters are a technique to pass arguments to a function using an object
and destructuring the object within the function.
This approach provides flexibility and allows passing arguments in any order.
*/

function greet({ name, age }) {
      console.log('Hello, ' + name + '! You are ' + age + ' years old.');
    }
    
const person = { name: 'Maries', age: 22 };
greet(person); // Output: Hello, Maries! You are 22 years old.

// Destructuring --> {name,age}=person