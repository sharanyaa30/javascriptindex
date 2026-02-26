/*

*/

"use strict"; // treat all js code as newer version

// alert("hello")
// alert(3+3) will not work in node it will stored in brousr

// console.log(3 + 3)
// console.log("sharanyaa")

//

let name = "sharanyaa" // string
let age = 21
let isLoggedIn = false
let state;


// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null 
// undefined => 
// symbol => unique

// object

// console.log(typeof null);
// console.log(typeof undefined);

// summary***********************************


// Primitive

// 7 types : string, number, boolean, null, undefined, symbol, bigInt
// reference type (non primitive) :  array, objects, functions

//JavaScript is a dynamically typed language.

const score = 100
const scoreValue = 100.5

const isloggedIn = false
const outsideTemp = null
const userEmail = undefined

const id =Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId) // false

const bigNumber = 9007199254740991n
const anotherBigNumber = BigInt(9007199254740991)

const heros = ["sharanyaa", "sneha", "sneha2"]
let myObj = {
    name: "sharanyaa",
    age: 21,
    isLoggedIn: false
}
const myFunc = function() {
    console.log("hello world")
}

// console.log(typeof myFunc);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (non-primitive)

let myName = "sharanyaa"
let anotherName = myName
anotherName = "sneha"

console.log(anotherName);
console.log(myName);

let user = {
    email : "sharanyaa@gmail.com",
    upi : "sharanyaa@okaxis"
}
let anotherUser = user
anotherUser.email = "sneha@gmail.com"
console.log(user.email);
console.log(anotherUser.email);



