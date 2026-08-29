"use client"
import { useState,useEffect } from "react";
const FirstMiniStopWatch=function(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
      let timer=setInterval(()=>{
        setCount(prev=>prev+1);
      },1000)

          return()=>{
        clearInterval(timer);
    }
    },[])
    

    return(
        <>
        <div>{count} Second
        </div>
        </>
    )
}
export default FirstMiniStopWatch;