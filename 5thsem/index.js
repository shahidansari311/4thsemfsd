var a=20;
var b=30;
const add=(a,b)=>{
    return a+b;
}
console.log(add(a,b));

arr=[1,2,3,4,5,6,7,8,9]
sum=0
arr.map((i)=>{
    sum+=i;
})
console.log(sum)

arr.filter((e)=>e%2==0)