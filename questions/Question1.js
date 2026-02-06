// 1. Write a js program to add two numbers

// let a=20;
// let b=30;
// function sum(x,y){
//     return x+y;
// }
// console.log(sum(a,b));


// Ques2 2. Write a to convert the temp 
        // a from c to f
        // b from f to c

// let c=40;
// function convert_to_farenheit(c){
//     let f=((c*(9/5))+32);
//     return f;
// }
// function convert_to_celcius(f){
//     let b=(f-32)*(5/9);
//     return b;
// }

// console.log(convert_to_celcius(40));
// console.log(convert_to_farenheit(40));


// Ques3 Write js program to print fibonacci series
//  let term=6;
//  function fibonacci(x){
//     let a=0,b=1;
//     console.log(a);
//     console.log(b);
//     for(let i=0;i<x-2;i++){
//         console.log(a+b);
//         let c=a;
//         a=b;
//         b=c+b;
//     }
//  }

//  fibonacci(term);


//Ques4 Write js program to convert decimal into binary

// let num=10;
// let s="",ans="";
// function decimal_to_binary(x){
//     while(x>0){
//         if(x%2==1){
//             s+='1';
//         }
//         else{
//             s+='0';
//         }
//         x=Math.floor(x/2);
//     }
//     let n=s.length-1;
//     while(n>=0){
//         ans+=s[n--];
//     }
//     console.log(ans);
// }
// decimal_to_binary(15);



// Ques5 Write js program to check armstrong number

// let count=0;
// function armstrong(x){
//     let temp=x;
//     while(temp!=0){
//         count++;
//         temp=Math.floor(temp/10);
//     }
//     temp=x;
//     let sum=0;
//     while(temp!=0){
//         rem=temp%10;
//         sum+=Math.pow(rem,count);
//         temp=Math.floor(temp/10);
//     }
//     if(sum===x){
//         console.log("Armstrong number");
//     }
//     else{
//         console.log("Not a armstrong number");
//     }
// }
// armstrong(1634);