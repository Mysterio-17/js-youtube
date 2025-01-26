(function chai(){
    // named iife
    console.log(`DB Connected`);
    
}) () ;

(() => {

console.log(`DB Connected 2`);

}) () ;

((name) => {

    console.log(`DB Connected 2 ${name}`);
    
    }) ("hi") 