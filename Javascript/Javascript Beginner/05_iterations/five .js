
// Basics Callback function

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(val);
// })

function printMe(item){
    console.log(item)
}


function printMe(item){
    console.log(item)
}
coding.forEach(printMe)




// callback of arrow function
const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "Js"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "Js"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageFileName)
})