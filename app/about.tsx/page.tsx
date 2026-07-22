"use client"

import { useEffect, useState } from "react";

export default function About({ count,setCount }: { count: number; setCount: React.Dispatch<React.SetStateAction<number>> }) {

    useEffect(() =>{
        if(count >10){
            alert("You have clicked the button more than 10 times!")
            setCount(0);
        }
    },[count])
    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to our about page!</p>
            <p>You clicked the button {count} times.</p>
        </div>
    )
}