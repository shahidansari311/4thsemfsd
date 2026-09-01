// alert("Hii")
const root=document.getElementById("main");
const button=document.getElementById("btn");
const student=document.getElementById("student")
const loader=document.getElementById("loader")
// https://fakestoreapi.com/products


async function fetchApi(){
    // alert("Hii");
    try {
        const Data=await fetch("https://fakestoreapi.com/products");
        const jsonData=await Data.json();
        // console.log(jsonData[0].title);

        // "id": 0,
        // "title": "string",
        // "price": 0.1,
        // "description": "string",
        // "category": "string",
        // "image": "http://example.com
        student.innerHTML=jsonData.map((i)=>(
        `<div 
            style="display:flex; flex-direction:row; align-items:center; gap:20px; 
                padding:20px; margin:15px; border:1px solid #ddd; border-radius:10px;"
        >
            <img 
                src="${i.image}" 
                alt="${i.title}"
                style="width:120px; height:140px; object-fit:contain;"
            />

            <div>
                <h1 style="font-size:20px; margin:0 0 10px;">
                    ${i.id}. ${i.title}
                </h1>

                <h3 style="color:green; margin:0 0 10px;">
                    $${i.price}
                </h3>

                <p style="line-height:1.5;">
                    ${i.description}
                </p>
            </div>
        </div>`
        ))

    }catch (error) {

        console.log("Error found:", error);

        student.innerHTML = `
            <div>
                <h2>Something went wrong!</h2>
                <p>Unable to load products.</p>
            </div>
        `;

    } finally {
        loader.innerHTML = "";
    }
}

button.addEventListener('click', fetchApi);