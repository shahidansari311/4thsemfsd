let num;
num=5;
// const a;
// {
//     const  b=6;
// }
// console.log(b);
if(num==1){
    console.log("Not prime nor composite");
    return;
}
for(let i=0;i*i<=num;i++){
    if(num%i==0){
        console.log("Not a prime");
        return;
    } 
}
console.log("Prime number");


