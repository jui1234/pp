"use client"
import {useState} from 'react';
const FunctionalComponent = () =>{
const [count,setCount]=useState(0);
    return(
        <div>
        <button onClick={()=>setCount(count+1)}>Count: {count}</button>
        <h1>this is functional component</h1>
        </div>
    )
}
export default FunctionalComponent;

//functional componenet is the function that returns the jsx . and its a modern way to create compoenet using state and usestate