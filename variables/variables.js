//*var*

/*
1.var have function or global scope

2.var has Hoisting Support.

3.Can Reassignable and Redeclarable

4.Hoisting-During compilation time, variable declaration and function declaration moved to top of their containing scope.
only declaration moved to top not with assignment value.
*/

console.log(y); //undefined (because of Hoisting)

function increment(){
      x++;
      console.log(`The incremented value inside the function is ${x}`); //11
}
var x=10;
increment();
console.log(`The incremented value outside of the function is ${x}`); //11

var y=10;
console.log(y); //10

//Redeclarable
var red=20;
var red=25;
console.log(red); //25


//let - const

/* 
Common features:
1.ES6 feature
2.Block-scoped Variable
3.Cannot Redeclarable within ame scope.
4.Hoisted, but they are not accessible before their actual declaration.
*/

//Temporal Dead Zone (TDZ)
/* It refers to the period between the start of the scope and
 the actual declaration of the variable, during which accessing the variable results in a runtime error(ReferenceError).
  */

// let variables can Reassignable and Cannot Redeclarable within the same scope.

//console.log(a);---> ReferenceError: Cannot access 'a' before initialization

let a=5;
{
      let a=10;
      console.log(a); //10
}
console.log(a);//5

{
      //we can Reassign the value of variable which is declared outside scope
      a=100;
      if(a==100){
            a=0;
      }
      console.log(`After changing value of i  inside scope is ${a}`);
}
console.log(`After changing value of i outside scope is ${a}`);


//const

// const variables cannot Reassignable and Cannot Redeclarable within the same scope.

const c=100;
// c=1000--> TypeError: Assignment to constant variable.

{
//cannot Reassign the variable within the cope also.
      /* c=1000
      console.log(c)---> TypeError: Assignment to constant variable.*/
      const c=1000;
      console.log(c); //1000
}
console.log(c); //100

console.log(calculateAvg([1,2,3,4,5,6])); //3.5

function calculateAvg(numbers){
      let Average=calculateTotal(numbers)/numbers.length;
      return Average;
}

function calculateTotal(numbers){
      let sum=numbers.reduce((prev,curr)=>{
            return prev+curr;
      })
      return sum;
}
