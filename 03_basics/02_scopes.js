//scope let and const are block scoped and var is function scoped

// var c = 300

let a = 300
if (true) {
    let a = 10 
    const b = 20
    c = 30
    // console.log("INNER:", a);
    
}

for (let i = 0; i < Array.length; i++) {
    const element = Array[i];
}

// scopes for for loop is not accessible outside the loop because it is block scoped

// console.log(a);
// console.log(b);
// console.log(c);

//only var is accessible outside the block because it is function scoped and let and const are not accessible outside the block because they are block scoped

//local is the variable that is declared inside the function and global is the variable that is declared outside the function

// global is accessible anywhere in the code and local is only accessible inside the function

//nested scope is the scope that is created inside another scope

function one(){
    const username ="sharanyaa"

    function two(){
        const website ="youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}
// one()


if (true) {
    const username = "sharanyaa"
    if (username === "sharanyaa") {
        const websites = ["youtube", "facebook", "twitter"]
        //console.log(username + websites)
    }
    // console.log(websites);
    
}
// console.log(username);


//

console.log(addone(5));


function addone(value){
    return value + 1
}


// console.log(addtwo(5));


const addtwo = function(value){
    return value + 2
}

//hosting is the process of moving the declaration of functions, variables or classes to the top of their scope before code execution. In JavaScript, function declarations are hoisted, but function expressions and variable declarations using let and const are not hoisted.

