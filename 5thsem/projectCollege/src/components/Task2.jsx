import React, { useState } from 'react'

function Task2() {
    const [hey, setHey] = useState("90px")
    const [hey2, setHey2] = useState("")
    function ChangeHeight() {
        setHey(hey2);
    }
    function ChangeHeight2() {
        
        setHey(hey);
    }
    const [wey, setWey] = useState("90px")
    const [Wey2, setWey2] = useState("")
    function ChangeWidth() {
        setWey(hey2);
    }
    return (
        <div style={{ border: "2px solid red", height: "400px", width: "500px" }}>
            <h1 style={{ color: "red" }}>Welcome to react app development</h1>
            <div style={{ border: "2px solid red", height: "200px", width: "300px", marginLeft: "100px" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSc82zmh-KEeDgbXvVGAT0btj3oec8b9YCMItGZNZAA&s=10" alt="" height={hey} width={wey} />
            </div>
            <input type="text" placeholder='Enter height' onChange={e => setHey2(e.target.value)} />
            <button onClick={ChangeHeight}>SetHeight</button>
            <button onClick={ChangeHeight2}>IncreaseHeight</button>
            <br />
            <input type="text" placeholder='Enter Width' onChange={e => setWey2(e.target.value)} />
            <button onClick={ChangeWidth}>SetWidth</button>
        </div >
    )
}

export default Task2