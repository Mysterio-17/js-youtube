// const mynums=[1,2,3,4,5,6,7,8,9,10]

// const num = mynums.map( (n) => n+10  )

// console.log(num);

// or with return 

// const mynums2=[1,2,3,4,5,6,7,8,9,10]

// const num2 = mynums.map( (n) => {return n+10}  )

// console.log(num2);

const mynums=[1,2,3,4,5,6,7,8,9,10]

const num = mynums.map( (n) => n*10 ).map ( (n)=> n+1 ).filter ( (n) =>n >=40 )

console.log(num);


 