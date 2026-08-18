"use client"
import { useEffect,useState } from 'react';
const CountDown =()=>{
    const [count, setCount] = useState(0);
    useEffect(()=>{
         let timer =setInterval(()=>{
          setCount(prev=>{
            if(prev===10){
                clearInterval(timer)
                return prev;
            }
            return prev+1;
          })
         },1000)

         return()=>{
            clearInterval(timer);
         }
    },[])
    

    return(
        <>
        <p>Coungt Down stop after 10</p>
        <div>{count}</div>
        </>
    )
}

export default CountDown;