// Immediately Invoked Function Expression (IIFE)

// IIFE is a JavaScript function that runs as soon as it is defined. It is a design pattern which produces a lexical scope using JavaScript's function scoping.

// The primary reason to use an IIFE is to obtain data privacy. Because JavaScript's var scopes variables to their containing function, any variables declared within the IIFE cannot be accessed by the outside world. This allows you to create private variables and functions that cannot be accessed from outside the IIFE.

// due to global scope pollution, we can use IIFE to avoid polluting the global scope. By wrapping our code in an IIFE, we can create a new scope for our variables and functions, which helps to prevent conflicts with other code that may be running on the same page.


(function one(){

    //named iife
    console.log("This is an IIFE function");
    
})();

// (function)(execution)


((name) =>{
    console.log(`   Hello ${name}, this is an IIFE function`);
    
})("sharanyaa");

//============================call stack ===================================

//javascript execution context is single threaded, which means it can only execute one piece of code at a time. When a function is called, it is added to the call stack. The call stack is a data structure that keeps track of the function calls in the order they were made. When a function finishes executing, it is removed from the call stack and the next function in the stack is executed. This process continues until the call stack is empty. If a function calls itself recursively, it will keep adding to the call stack until it reaches a base case or exceeds the maximum call stack size, resulting in a stack overflow error.

//broswer global execution context is created when the JavaScript code is loaded and executed. It is the default execution context that is created when the JavaScript engine starts executing the code. The global execution context is created before any code is executed and it remains active until the program finishes executing. It contains all the global variables and functions that are defined in the code, as well as the this keyword, which refers to the global object (window in browsers and global in Node.js). The global execution context is also responsible for managing the call stack and handling any errors that may occur during execution.

//this keyword in the global execution context refers to the global object. In a browser, this is the window object, and in Node.js, it is the global object. When you use this in the global scope, it will refer to the global object, allowing you to access properties and methods defined on it. However, when you use this inside a function or an object method, its value can change based on how the function is called or how the method is invoked.

//functional execution context is created when a function is called. It contains all the local variables and parameters of the function, as well as the this keyword, which refers to the object that is calling the function. The functional execution context is created on top of the global execution context and it remains active until the function finishes executing. When a function is called, a new execution context is created for that function and it is added to the call stack. When the function finishes executing, its execution context is removed from the call stack and control is returned to the previous execution context.

//eval execution context is created when the eval() function is called. The eval() function evaluates a string of JavaScript code and executes it. When eval() is called, a new execution context is created for the code being evaluated, and it is added to the call stack. The eval execution context has access to the variables and functions defined in the surrounding execution context, but it does not have access to the global execution context. It is generally recommended to avoid using eval() due to security risks and performance issues.

//memory creation phase is the first phase of the execution context. During this phase, the JavaScript engine allocates memory for all the variables and functions that are defined in the code. It also initializes the variables with a default value of undefined. The memory creation phase is important because it allows the JavaScript engine to keep track of all the variables and functions that are defined in the code, and it helps to prevent errors that may occur when trying to access variables that have not been initialized yet. After the memory creation phase is complete, the execution context moves on to the next phase, which is the code execution phase.

//execution phase is the second phase of the execution context. During this phase, the JavaScript engine executes the code line by line, starting from the first line of the code. The engine evaluates each expression and statement in the code, and it updates the values of variables and functions as needed. The execution phase is important because it allows the JavaScript engine to execute the code and produce the desired output. After the execution phase is complete, the execution context is destroyed and any variables or functions that were defined in that context are no longer accessible.

let val1 = 10
let val2 = 20

function addTwoNumbers(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addTwoNumbers(val1, val2)
let result2 = addTwoNumbers(5, 10)

//1.global execution => this 
//2.memory creation phase => variables = undefined addnum = defination result = undefined ////first cycle
//3.execution phase => variables given with values // results = one more executional context is created that is new variable environment and execution thread //memory phase value undefined total undefined  // execution context operations are carried and total is executed in global execution // after done it will get deleted

// again same 
// call stack global execution functions executed one by one it works on basis of lifo


function one(){
    console.log("one");
    two()
}

function two() {
    console.log("two");
    three()
}

function three() {
    console.log("three");
    
}


one()
// two()
// three()