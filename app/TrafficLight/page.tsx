'use client'
import { useEffect, useState } from "react";
const TrafficLight=function(){
    const [Color,setColor]=useState('');
  let lights=['Red','yellow','Green'];
  let index=0;
  useEffect(()=>{
    console.log("ist running")
     let timer=setInterval(()=>{
    setColor(lights[index]);
    index++;
      if(index===lights.length){
        index=0;
      }
  },1000)

    clearInterval(timer);
  })
  




  return(
    <>
    <div style={{color:Color,width:'5px',height:'5px'}}></div>
    </>
  )
}



export default TrafficLight;