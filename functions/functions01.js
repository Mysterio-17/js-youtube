// function add(n,m) {
//     console.log(n+m);
// }

// add(3,4)

function add(n,m) {
   let result = n + m
   return result
}

const x =add(3,6)
console.log(x);


function loggin(username) {
    if (username === undefined) {
        console.log("invalid name");
        return
    }
    return `${username} just logged in`
}

console.log(loggin("mradul"));

