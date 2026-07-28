var a=25;
var b=36;
const add=(a,b)=>{
    a=Math.sqrt(a);
    b=Math.sqrt(b);
    return a+b;
}
console.log(add(a,b));



c=10;

var c;
console.log(c);


var a=23;
if(a<40){
    var a=20;
    console.log("Value inside a function ",a);
}
console.log("Value outside a function ",a);

// arr=[1,2,3,4,5,6,7,8,9]
// sum=0
// arr.map((i)=>{
//     sum+=i;
// })
// console.log(sum)

// arr.filter((e)=>e%2==0)

function login(error,msg){
    if(error==null){
        console.log(msg);
    }else{
        console.log(error);
    }
}

function loginHandler(username,password,clbf){
    if(username=="Shahid" && password=="1234"){
        clbf(null,"Login Successful");
    }
    else{
        clbf("Invalid credential",null);
    }
}
loginHandler("Shahid","123",login);