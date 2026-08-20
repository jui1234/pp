"use client"

import { useState,useRef } from "react";

const StartAndStopManuallyTimer=function(){
    let timer=useRef(0);
    const [totalSec,setTotalSec]=useState(0);
    let startTimer=function(){
        timer.current=setInterval(()=>{
            setTotalSec(prev=>prev+1);

        },1000)
    };

    let stopTimer=function(){
        clearInterval(timer.current);
    }

    return(<div style={{display:'flex',justifyContent:'center'}}>
    <h1 style={{}}>{totalSec}</h1>
    <button style={{cursor:'pointer',border:'1px solid black',borderRadius:'2px'}} onClick={startTimer}>StartTimer</button>
    <button style={{cursor:'pointer',border:'1px solid black',borderRadius:'2px'}} onClick={stopTimer}>StopTimer</button>
    </div>)
}

export default StartAndStopManuallyTimer;