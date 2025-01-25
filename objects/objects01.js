const obj1 = {
    1:"a" ,
    2:"b" 
}
const obj2={
    3:"a" ,
    4:"b"
}
// const obj3= Object.assign(obj1, obj2);
const obj3={...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(obj3));
// console.log(Object.values(obj3));

const course ={
    name: "js hindi",
    price: "999",
    instructor : "hitesh"
}

const {instructor}= course

console.log(instructor);

