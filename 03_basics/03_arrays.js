// this keyword is used to declare variables in JavaScript. It can be used to declare variables that can be reassigned later.

const user = {
    username:"sharanyaa",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} is alloting price for ${this.price} only`);
        console.log(this);
        
    }
    
}

// user.welcomeMessage()
// user.username ="shara"
// user.welcomeMessage()

console.log(this);

// in broswer the global object is window and in node js the global object is global. The this keyword refers to the global object in the global scope.


// function one(){
//     let username = "sharanyaa"
//     console.log(this.username);
    
// }

// one()

// inside function thus keyword refers to the global object and in strict mode it is undefined. In arrow functions, this keyword refers to the enclosing lexical context, which means it takes the value of this from the surrounding code where the arrow function is defined.


// const one = function(){
//     let username = "sharanyaa"
//     console.log(this.username);
// }

// one()

const one = () => {
    let username = "sharanyaa"
    console.log(this.username);
}

// one()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)


const addTwo = (num1, num2) => ({username: "sharanyaa"})

console.log(addTwo(5, 10));

// arrow functions like implicit return and lexical this are not hoisted. They are not accessible before they are defined in the code. They are also not suitable for methods in objects because they do not have their own this keyword.

// {} return is required ()not required for implicit return in arrow functions. If the function body has only one expression, we can omit the curly braces and the return keyword. The value of that expression will be returned implicitly. If we use curly braces, we need to use the return keyword to return a value from the function.

// if it is an object we need to wrap it in parentheses to avoid syntax error because the curly braces are interpreted as the start of a function body instead of an object literal. By wrapping the object in parentheses, we tell JavaScript that it is an expression and not a block of code.



    // const myArray = [1, 2, 3, 4, 5]

    // myArray.forEach() is a method that executes a provided function once for each array element. It takes a callback function as an argument and calls that function for each element in the array, passing the current element, its index, and the entire array as arguments to the callback function. The forEach method does not return a new array, it simply executes the provided function for each element in the array.