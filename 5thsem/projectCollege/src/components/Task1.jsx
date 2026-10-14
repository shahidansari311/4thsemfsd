import React, { useState } from 'react'

const Task1 = () => {
  const [name,setName]=useState('Name');
  const [college,setCollege]=useState('College');
  const [newValue,setnewValue]=useState("")

  const updateDetail=()=>{
    setCollege("Abes Engineering College");
    setName("Shahid Ansari");
  }
  const resetDetails=()=>{
    setName("Name removed");
    setCollege("College removed");
  }
  return (
    <div>
      <p>{name}</p>
      <input
        type="text"
        value={newValue}
        onChange={(event) => setnewValue(event.target.value)}
      />
      <button onClick={()=>setName(newValue)}>Name Change</button>
      <p>{college}</p>
      <button onClick={()=>setCollege("Single College Changed")}>College Change</button>
      <br />
      <br />
      <button onClick={updateDetail}>Click here to change value(both)</button>
      <button onClick={resetDetails}>Reset Details</button>
    </div>
  )
}

export default Task1