"use client"
import { useEffect, useState } from "react";
const CountDownCount=function(){
 const [Count,setCount]=useState(10);
 useEffect(()=>{
     let timer=setInterval(()=>{
        setCount(prev=>{
            if(prev===0){
                clearInterval(timer);
                return 0;
            }
            return prev-1;
        });
        if(Count===0){
            setCount(10)
        }
     },1000)

      return()=>{
    clearInterval(timer)
 }
 },[])


 return(
    <>
    <div>Count:{Count}</div>
    </>
 )
}

export default CountDownCount;