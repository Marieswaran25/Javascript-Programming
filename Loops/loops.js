//For Loop

// Allows you to iterate the set of statements for specific no. of time.

for(let i=0;i<3;i++){
      console.log(i); //0 1 2 
}

// Infine Loop

// for(;;){
//       console.log('Infine Loop')
// }

// while Loop

// set of code executes as long as the specified condition gets true.

let initial=0;

while(initial<=2){
      console.log(initial);//0 1 2
      initial++;
}

// Do while

//Similar to While loop,but execute code block atleat once before checking condition.
let docount = 0;

do {
  console.log(docount); //0 1 2 3 4
  docount++;
} while (docount < 5)


// For in

// For in loop used to iterate over the enumerable properties of an object.

let Person={
      name:"Maries",
}

for (let key in Person){
      console.log(`${key} : ${Person[key]}`); //name : Maries
}

// For of

// For of loop is used for iterable objects such as array and string

const numbers=[1,2,45,788,3,3]

for (const number of numbers){
      console.log(number); //1 2 45 788 3 3
}