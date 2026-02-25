const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);


const user = { name: "Shahid", age: 20 };
const updatedUser = { ...user, city: "Ghaziabad" };
console.log(updatedUser);


function sum(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
sum(...nums);