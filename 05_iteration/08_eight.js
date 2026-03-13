const nums =[1,2,3]

// const total = nums.reduce(function(acc, curval) {

//     console.log(`acc: ${acc} and curval: ${curval}`);
    
//     return acc + curval
// }, 0)


const total = nums.reduce ((acc, curval) => acc+curval, 0)
console.log(total);


const shop = [
    {
        item: "js",
        price: 200
    },
    {
        item: "full stack",
        price: 100
    },
    {
        item: "python",
        price: 300
    },
    {
        item: "java",
        price: 400
    }
]

const price=shop.reduce((acc,i) => acc+i.price, 0)
console.log(price);

