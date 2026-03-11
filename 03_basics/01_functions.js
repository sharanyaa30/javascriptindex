function sayMyName(){
    console.log("S");
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("a");
    console.log("n");
    console.log("y");
    console.log("a");
    console.log("a");
}


// sayMyName(); // function call

// function addTwoNumbers(num1, num2){ // parameters
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){ // parameters
//    let result = num1 + num2;
//    return result;

    return num1 + num2; // directly returning the result without storing in a variable  
}
const result =addTwoNumbers(3, 5); // function call with arguments

// console.log("result:", result);


function loginUserMessage(username = "Guest"){ // default parameter value
    if(!username){
        return "Please enter a username"
    }
    return `${username} just logged in`
}

console.log(loginUserMessage()); // function call with argument

// if values are not passed it will be undefined