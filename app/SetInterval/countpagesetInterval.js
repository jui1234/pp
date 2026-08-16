const { useState, useEffect } = require("react");

const SetIntervalCountFun=()=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        let timer=setInterval(()=>{
            setCount((prevCount)=>prevCount+1)
        },1000)
       
        return()=>{
            clearInterval(timer)
        }
    },[])
}
