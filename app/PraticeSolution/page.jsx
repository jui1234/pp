"use client"

import { useEffect, useState } from "react";

const PraticeSolution=function(){
   const [count,setCount]=useState(10);
   useEffect(()=>{
   let timer=setInterval(()=>{
    setCount(prev=>{
        if(prev===0){
            clearInterval(timer);
            return 0;
        }
        return prev-1;
    })
   },1000)

    return()=>{
        clearInterval(timer);
    }
   },[])

   return(
    <>
    {/* <div>{count}</div> */}
    {count===0?<p>Done</p>:<>{count}</>}
    </>
   )
}

export default PraticeSolution;