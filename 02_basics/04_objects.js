// const app = new Object(); singleton object
const app = {}; // non singleton object 

app.id = "123";
app.name = "My App";
app.isLoggedIn = false;

// console.log(app);

const regularuser = {
    email:"user@example.com",
    fullname:{
        userfullname: {
            firstname: "sharanyaa",
            lastname: "G"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = {obj1, obj2}; 

// const obj3=Object.assign({},obj1, obj2, obj4); // it will merge the two objects and return the first object

const obj3 = {...obj1, ...obj2, ...obj4}; // it will merge the two objects and return a new object
console.log(obj3);


const users = [
    {
        id: 1,
        name: "Sharanyaa",
        email: "h@gmail.com"
    },
    {
        id: 1,
        name: "Sharanyaa",
        email: "h@gmail.com"
    },

    {
        id: 1,
        name: "Sharanyaa",
        email: "h@gmail.com"
    }
]

users[1].email
console.log(app);

console.log(Object.keys(app));
console.log(Object.values(app));
console.log(Object.entries(app));
console.log(app.hasOwnProperty('isLoggedIn'));



