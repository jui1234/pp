import React, { useEffect, useState } from 'react';
const   UseEffectWithOutDependency = () => {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("useEffect without dependency called");
    })

    return (
        <>
        <p>useEffect without dependency</p>
        <button style={{color:'blue',border:'1px solid green',cursor:'pointer'}} onClick={()=>setCount(count+1)}>Click me</button>
        </>
    )
}

export default UseEffectWithOutDependency;

// useEffect without dependency will run on every render of the component. This means that whenever the component re-renders, the useEffect hook will be executed again. In this case, since we have not provided any dependencies to the useEffect hook, it will run after every render, regardless of whether the state or props have changed.