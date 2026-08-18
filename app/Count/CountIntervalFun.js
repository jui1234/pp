"use client"
import { useEffect,useState } from 'react';

const CountIntervalFun=function(){
    const [count,setCount]=useState(0);
     useEffect(()=>{
      const timer = setInterval(()=>{
            setCount(prev=>prev+1);
        },1000)

        return()=>{
        clearInterval(timer)
     }
     },[])

     

     return(
     <>
     <p>Count Down </p>
        <div>{count}</div>
     </>
     )
}

export default CountIntervalFun;