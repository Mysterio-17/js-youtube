const promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("complete");
        resolve()
    }, 2000)
})

promise1.then(function(){
    console.log("promise consumed");
    
})

 // ----------------------------------------------------------- //

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "chai", email : "jhqgw@3647"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
    
})

// // ---------------------------------------------------------- // 


const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error){
            resolve ({username: "hi", pass: "1243"})
        }
        else{
            reject("something is wrong")
        }
    }, 1000)
})

promise4.then(function(user){
    console.log(user);
    return user.username;
    
}).then(function(username){
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log("Finally it is either resolved or rejected");
    
})


// // -------------------------------------------------- //


const promise5= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error){
            resolve ({username: "hi", pass: "1243"})
        }
        else{
            reject("something is wrong")
        }
    }, 1000)
})

async function consumepromise5(){
   try {
    const response = await promise5
   console.log(response);
   }
   catch(error){
    console.log(error);
   }
}
consumepromise5();



// ------------------------------------------------ //


async function api2() {
    try {
        const response = await fetch('https://api.github.com/users/Mysterio-17')
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}

api2()

// ------------------------------------------------ //

fetch('https://api.github.com/users/Mysterio-17')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
    
})