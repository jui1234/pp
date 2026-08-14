 'use client'
 import React, { useEffect,useState } from 'react'

 function UseEffectComponent() {
    const [buttonClicked, setButtonClicked] = useState(false)

      useEffect(()=>{
        console.log("useEffect called")
      },[buttonClicked])
    return(<>
    hi hello page!!!!!
    <button style={{color:"pink",border:'1px solid green',pointer:'cursor'}} onClick={()=>setButtonClicked(!buttonClicked)}>Click me</button>
    </>)
 }
 export default UseEffectComponent;