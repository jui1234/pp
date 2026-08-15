import { useEffect } from "react"

 const SetIntervalPage =()=>{
useEffect(()=>{
    const timer=setInterval(()=>{
        console.log("  thsi is that timer intercval");
    },1000)

    return ()=>{
        clearInterval(timer)
    }
},[])
    return (
        <div>
            <h1>SetInterval Page</h1>
            <p>This is the SetInterval page.</p>
        </div>
    )
 }

 export default SetIntervalPage;