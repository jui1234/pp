"use client"

import { useEffect, useState } from "react";

export default function About({ count,setCount }: { count: number; setCount: React.Dispatch<React.SetStateAction<number>> }) {
    const [color, setColor] = useState("black");
    let resetRule = function(count: number){
     if(count < 0){
        setCount(0);
     }
     if(count >10){
        alert("You have clicked the button more than 10 times!")
        setCount(0);
         setColor("black");
     }
     else if(count>5){
         setColor("pink");
     }
    }
     
    useEffect(() =>{
       resetRule(count);
    },[count])
    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to our about page!</p>
            <p>You clicked the button {count} times.</p>
            <div>
               COLOR DIV 
            <div  style={{ backgroundColor: color }}className={"w-32 h-32"}></div>
            </div>
        </div>
    )

}