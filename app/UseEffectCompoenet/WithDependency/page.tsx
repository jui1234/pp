import React, { useEffect,useState } from "react";
const UseEffectComponentWithDependency = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
       console.log("useEffect with dependency called");
    },[])
    return (
        <>
        <p>useEffect with dependency</p>
        <button style={{color:"red",border:'1px solid green',cursor:'pointer'   }} onClick={()=>{setCount(count+1)}}>Click me</button>
        </>
    )
}

export default UseEffectComponentWithDependency;

// so this the useeffect with dependency it will only run when the component is mounted and not on every render because we have passed an empty array as a second argument to the useEffect hook.