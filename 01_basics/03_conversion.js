let score = "10abc0"


// const {score} = req.body

// console.log(typeof score);
// console.log(typeof(score));


let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// "abc33" => NaN
// "10abc0" => NaN
// true => 1; false => 0
// null => 0; undefined => NaN


let isloggedIn = ""

let booleanIsLoggedIn = Boolean(isloggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// ""=> false
// "sharanyaa" => true
// null => false; undefined => false

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);




// *******************operations***********************

let value = 3
let negvalue = -value
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);


let str1 = "hello"
let str2 = "world"

let str3 = str1 + " " + str2      
// console.log(str3);   

// console.log("1" + 2);
// console.log(1 + "2");

// console.log("1" + 2 + 2);
// console.log(1 + 2 + ("2"));


// console.log((3 + 4 )* 5 % 3); bodmas

// console.log(+true);
// console.log(+"");


let num1, num2, num3

num1 = num2 = num3 = 2 + 2
console.log(num1);

let gamecounter = 100
++gamecounter;
console.log(gamecounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion



