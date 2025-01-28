const nums = [1,2,3]

const total= nums.reduce( function(acc,curval) {
    console.log(`acc is ${acc} and value is ${curval}`);
    
    return acc + curval
} ,3)

console.log(total);

// with arrow 

const nums2 = [1,2,3]

const total2= nums.reduce( (acc2,curval2) => {
    console.log(`acc is ${acc2} and value is ${curval2}`);
    
    return acc2 + curval2
} ,3)

console.log(total2);
