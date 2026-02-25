let obj1={
    "name":"Shahid",
    "age":12,
    "address":{
        "city":"Delhi",
        "pincode":1234
    }
}
let {name,age,address} = obj1;
console.log(name,age,address);
console.log(name,age,address.city , address.pincode);