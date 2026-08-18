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
        <div>{count}</div>
    )
}

export default CountDown;