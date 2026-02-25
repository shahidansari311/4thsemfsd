// function sum(...numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }
// sum(1, 2, 3, 4);

// const [first, ...others] = [1, 2, 3, 4];
// console.log(first);  
// console.log(others);

const user = { 
    name: "Shahid", 
    age: 20, 
    city: "Delhi",
    address:{
        "pincode":123
    } 
};

// let {sname,sage,scity}=user;
let {name,age,city}=user;

// let sname=user.name;
// let sage=user.age;
// let scity=user.city;

// console.log(name,age,city);
console.log(user.address  );