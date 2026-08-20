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

    return(<>
    <h1>{totalSec}</h1>
    <button onClick={startTimer}>StartTimer</button>
    <button onClick={stopTimer}>StopTimer</button>
    </>)
}

export default StartAndStopManuallyTimer;