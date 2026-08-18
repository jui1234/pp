"use client"
import { useEffect,useState } from 'react';
import CountDown from './CountDown';
import CountIntervalFun from './CountIntervalFun'
const CountIntervals =()=>{
    
    return(
        <div>
           <CountDown/> 
           <CountIntervalFun/>
        </div>
    )
}


export default CountIntervals;