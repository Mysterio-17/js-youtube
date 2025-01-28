const coding = ["js" , "ruby", "java", "python", "cp"]
 
coding.forEach( (item)=> {
    console.log(item);
    
})

const value = coding.filter ( (name)=> name.length > 2 )
console.log(value);

const naya=[]

coding.forEach( (item) => {
    if (item.length > 2) {
        naya.push(item)
    }
} )
console.log(naya);
