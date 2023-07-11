//Data types
console.log(typeof ""); //string
console.log(typeof 1); //number
console.log(typeof undefined); //undefined
console.log(typeof NaN); //number
console.log(typeof null);//object
console.log(typeof 1.2)//number
console.log(typeof false);//boolean
console.log(typeof []);//object
console.log(typeof {});//object
console.log(typeof function(){}); //function
console.log(typeof ({}+{})); //string
console.log(typeof ([]+[])); //string


//concatination vs Addition

//1.If either of an operand is string,then operator do concatination

console.log(2+"3"); //23 (string)
console.log("3"+2); //32 (string)

//2.If the expression starts with + directly ,it treats as number if the operand is string

console.log(+""); //0 (number)
console.log(+"3"); //3 (number)
console.log(+"3"+2); //5 (number)
console.log(+"3"+2+"3"); //53 (string)

//Arithmatic and Logical operations among Datatypes

//1.returns number

console.log(5-2); // 3
console.log(5-"2"); //3
console.log("2"-5); //-3
console.log("5"*"5"); //25
console.log(5/2); //2.5 (quotient)
console.log(5/"2"); //2.5
console.log(6%2); //0(Remainder)
console.log(true+false); //1
console.log(true+true); //2
console.log(true+2); //3
console.log(+true); //1
console.log(5+-1); //4

//2.returns string

console.log(false+"2"); //false2
console.log("2"+true); //2true
console.log(+true+"6"); //16
console.log("5"+undefined); //5undefined
console.log("5"+null); //5null
console.log([]+[]); //""
console.log([1,2,3]+[4,5,6]); //1,2,34,5,6
console.log("5"+-1); //5-1


//returns boolean

console.log(true,false); //true false
console.log(0==false); //true
console.log(false==false); //true
console.log(null==undefined); //true
console.log([]==0); //true (An empty array treats as string converts to number then equation with 0 results true.)
console.log(""==0); //true
console.log(true==false); //false
console.log(null===undefined); //false
console.log(null==NaN); //false
console.log(undefined==NaN); //false
console.log(null=={}) //false
console.log([]==[]); //false
console.log([1,2,3]>=1); //false
console.log([1,2,3]==[1,2,3]); //false
console.log({}==[]); //false
console.log(NaN==NaN); //false
console.log([]=="0"); //false
console.log(NaN=="5"); //false