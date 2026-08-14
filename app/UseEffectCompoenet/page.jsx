 'use client'
 import React, { useEffect,useState } from 'react'
import UseEffectComponentWithDependency from './WithDependency/page'
import UseEffectWithOutDependency from './WithoutDependency/page'

 function UseEffectComponent() {
    const [buttonClicked, setButtonClicked] = useState(false)

      useEffect(()=>{
        console.log("useEffect called")
      },[buttonClicked])
    return(<>
    hi hello page!!!!!
    <button style={{color:"pink",border:'1px solid green',pointer:'cursor'}} onClick={()=>setButtonClicked(!buttonClicked)}>Click me</button>
    <div style={{color:"blue",border:'1px solid green'}}>
        <UseEffectComponentWithDependency/>
    </div>
    <div style={{color:"red",border:'1px solid green'}}>
        <p>useEffect with dependency</p>
        <UseEffectWithOutDependency/>
    </div>
    </>)
 }
 export default UseEffectComponent;