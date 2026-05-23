// let a = 10
// const b = 20
// var c = 30

// if(true){
//     let a = 10
//     const b = 20
//     console.log("Inner: ", a);
// }



// console.log(a)
// // console.log(b)
// // console.log(c)


//-------------------GLOBAL  Scope

function one(){
    const username = "hitesh"

    function two(){
        const webbsite = "youtube"
        console.log(username);
    }
    two()
}

one()

//===============================================

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username + website);
    }

}


//***************** INTERESTING PART  ***************/

function addone(num){
    return num+1
}
addone(5) // isko hm 45 no. line pe rakh k chala skteh hai




const addTwo = function(num){
    return num+2
}

addTwo(5) // ** isko hm 53 line of code pe nhi chala skteh hai