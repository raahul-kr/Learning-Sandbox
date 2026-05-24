// Immediately Invoked Function Expressions (IIFE)


// Note : isme do ()() use ho rha hai . pehla () -> jisme function ki definition and dusra () -> execution call
// hence global scope se problem hoti hai kaie baar like pollution so we use iife


(function chai(){  // named iife
    console.log(`DB Connected`)
})(); // ** Yaha pe semicolon lagana compulsary hai taaki agla code chale



(()=> { // unnamed iife
    console.log(`DB Connected Two`)
})();


((name)=> {  // parameter pass iife
    console.log(`DB Connected Two ${name}`)
})('Ramu');

