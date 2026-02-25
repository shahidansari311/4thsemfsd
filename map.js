let arr=[12,24,31,423];

console.log("Normal loop");
for(let i=0;i<4;i++){
    console.log(arr[i]);
}

console.log("Map");
arr.map((i)=>(
    console.log(i)
))

console.log("For each loop");
arr.forEach(element => {
    console.log(element);
});


console.log("Filter");
const x=arr.filter((i)=>{
    if(i>24) return i;
})
console.log(x);