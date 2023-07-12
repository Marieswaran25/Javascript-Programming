//Scope refers to visibiltiy and accessibility of variables and functions.

// 1.Global Scope

/* Variables or function that are declared outside or globally 
were accessible in any part of the code including block and function.
*/
var globalVariable=10;

function printGlobalvariable(){
      globalVariable=100;
      console.log(globalVariable); //100
}
printGlobalvariable();
console.log(globalVariable); //100


// 2.Local Scope

function PrintLocalScopeVariable(){
      var LocalVariable=100;
      console.log(LocalVariable); //100
}
// console.log(LocalVariable); LocalVariable is not defined

// 3.block

// A set of statements enclosed within curly braces {}

if (globalVariable==100) {
      // This is a block
      console.log('Inside the block');
    }

// 4.function Scope

// var keyword have function-level scope, meaning they are accessible within the entire function in which they are defined.

// This is why because var is hoisted at the top and made visibile to the entire function.

function functioncope(){
      var name="";
      console.log(newname); //undefined
      if(typeof name=="string"){
            var newname="Marieswaran"; //This variable will visibile to the entire function including all the block
            console.log(newname); //Marieswaran
      }
      if(newname.length!==0){
            console.log(newname); //Marieswaran 
      }
      console.log(newname); //Marieswaran


}
functioncope();

// 5.Block Scope

//Let and const have Block scope means its only visibile and accessible only in the current block.

function blockScope(){
      let blockScopevariable="Javascript";
      // console.log(programming);//programming is not defined
      if(blockScopevariable){
            // console.log(programming);cannot access programming before Initializtion.
            let programming="programming";
            console.log(programming);
      }
      // console.log(programming); programming is not defined.
}
blockScope();

// 6.LexicalScope

/* 1.Lexical Environment- It is created when Execution context is created.
which is nothing but its Local memory +  its lexical parent
2.It search the variable in its local memory first, if not there it search
its lexical parent and if not there ,its move to thier lexical parent continous upto 
global scope.
*/
function outer(){
      return function inner(){
            console.log(outervariable);
      }
}
var outervariable=10;
outer()() //10


/*lexical scope means that the accessibility of variables is determined by the structure of the code 
at the time of compilation or parsing, rather than at runtime. 
It is based on how functions and blocks are nested within each other. 

Lexical scoping creates a hierarchy of scopes, where each inner scope has access to variables in its outer scope. 
However, the inverse is not true: variables declared in an inner scope are not accessible in outer scopes.

Lexical scoping plays a crucial role in JavaScript's closure mechanism, where an inner function retains access to variables of its outer function 
even after the outer function has finished executing.
*/


function LexicalScope(){
            let _operand = 0;
            // Increment forms a closure with its lexical parent
            return function Increment(){
                  _operand++;
                  return _operand;
            }
}
const count=LexicalScope(); // Create a New single instance of the Increment function with its own closure
console.log(count()); //1
// It always remembers its lexical environment even after executing
// In this case, Increment always known its reference of its lexical environment (_operand)
console.log(count()); //2

const secondcount=LexicalScope(); //Create a New single instance of the Increment function with its own closure has its own private operand
console.log(secondcount()); //1
