//const coding = ["js", "ruby", "java", "python", "cpp" ]

// const values = coding.forEach((item)=> {
//     //console.log(item);
//     return item
// })

// console.log(values);


// foreach will not return any value


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnums = nums.filter((num) => {
//     return num > 5
// })
// console.log(newnums);

//

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnums = nums.filter((num) => (num > 5))
// console.log(newnums);


// const newnums =[]

// nums.forEach((num) => {
//     if (num > 4){
//         newnums.push(num)
//     }
// })

// console.log(newnums);


const books =[
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book two', genre: 'AFiction', publish: 1982, edition: 2005},
    { title: 'Book three', genre: 'BFiction', publish: 1983, edition: 2006},
    { title: 'Book four', genre: 'CFiction', publish: 1984, edition: 2007},
    { title: 'Book five', genre: 'DFiction', publish: 1985, edition: 2008},
    { title: 'Book six', genre: 'EFiction', publish: 1986, edition: 2009},
    { title: 'Book seven', genre: 'AFiction', publish: 1987, edition: 2002},
    { title: 'Book eight', genre: 'GFiction', publish: 1988, edition: 2003},
    { title: 'Book nine', genre: 'HFiction', publish: 1989, edition: 2005},
    { title: 'Book ten', genre: 'IFiction', publish: 1990, edition: 2007}
];

let userbooks = books.filter((bk) =>bk.genre === "AFiction" )
 userbooks = books.filter((bk) => {
    return bk.publish >= 1980 && bk.genre === "AFiction"
} )
console.log(userbooks);
