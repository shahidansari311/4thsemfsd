// const mainContainer=document.getElementById("main");
// const button=document.getElementById("btn")
// const h2=document.createElement("h2");
// const img=document.createElement("img");
// const box=document.createElement("div");

// function showData(){

//     try {
        
//         h2.innerHTML='Welcome To world';
//         h2.style.color='red';
//         h2.style.backgroundColor="green";
//         img.src="https://static.vecteezy.com/system/resources/thumbnails/054/876/032/small/mirror-image-snow-capped-mountain-peaks-reflected-in-pristine-lake-free-photo.jpg";
//         img.setAttribute('height',200);
//         img.setAttribute('width',200);
//         box.appendChild(img);
//         box.appendChild(h2);
//         box.style.display='flex';
//         mainContainer.appendChild(box);
        
//     } catch (error) {
//         console.log("Error");    
//     } finally{
//         mainContainer.removeChild(button);
//     }
// }

// button.addEventListener("click",showData);

const container=document.getElementById("main");
console.log(container);
const root=ReactDOM.createRoot(container);

const h2=React.createElement('h2',(style(color='red')),'Welcome to webpage');
root.render(h2);