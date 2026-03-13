const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
    
// } )


// coding.forEach( (item) => {
//     console.log(item);
    
// } )


// function printme(item){
//     console.log(item);
    
// }

// coding.forEach(printme)

coding.forEach ((item, i, a) => {
    console.log(item, i, a);
    
})


const myCoding = [
    {
        languageName: "javascript",
        languagefilename: "js"
    },
    {
        languageName: "java",
        languagefilename: "java"
    },
    {
        languageName: "python",
        languagefilename: "py"
    }

]


myCoding.forEach((item,i,a) => {
    console.log(item.languageName,i,a);
    

})