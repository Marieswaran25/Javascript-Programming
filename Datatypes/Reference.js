// Primitive datatypes -copy by value
let a=0;

let b=a;//copy the value of a and store it in b

b=10;// changing value of b doesn't affect a.

console.log(`The value of a After assigning value to a,b is `,a,b); //0 10


// For non-Primitive Datatypes -Copy by Reference

// Arrays

let first=[1,2,3];

let second=first; //Second array points to address of first variable

second.push(4) //changing any of the array affects both array

console.log(first,second); //[ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

//object

let firstObject={name:"Maries",
address:{
      country:"India"
}
}

let secondObject=firstObject; //secondObject copied by reference means both object sharing or points one common address.

let thirdObject={...firstObject};// creates a new copy from the firstObject (spread operator can make shallow copy)

// changing any of the object affects both object
secondObject.age=22;
secondObject.name="Marieswaran"

console.log(firstObject===secondObject); //true
console.log(firstObject===thirdObject); //false

console.log(firstObject,secondObject); //{ name: 'Marieswaran', age: 22 } { name: 'Marieswaran', age: 22 }

console.log(thirdObject); //{ name: 'Maries', address: { country: 'India' } }

//changing first level property name change only in third object not change in second or first object
thirdObject.name="Venkat"
//But if we change next level of prperties (nested object address-country),it affects in all occurences.
thirdObject.address.country="Australia"

console.log(firstObject,secondObject,thirdObject)
/*{ name: 'Marieswaran', address: { country: 'Australia' }, age: 22 } 
{ name: 'Marieswaran', address: { country: 'Australia' }, age: 22 } 
{ name: 'Venkat', address: { country: 'Australia' } }*/





