"use client"
import { useState,useEffect, useRef } from "react";
const FirstMiniStopWatch=function(){
    const [count,setCount]=useState(0);
    let timer=useRef(0);
    let stopFunction=()=>{
               setCount(0);
               clearInterval(timer.current)
      }
    useEffect(()=>{
       timer.current=setInterval(()=>{
        setCount(prev=>prev+1);
      },1000)

          return()=>{
        clearInterval(timer.current);
    }
    },[])
    

    return(
        <>
        <div>{count} Second
        </div>
        <button style={{border:'1px solid white',width:'6rem',height:'6rem'}} onClick={stopFunction}>Stop Sec</button>
        </>
    )
}
export default FirstMiniStopWatch;