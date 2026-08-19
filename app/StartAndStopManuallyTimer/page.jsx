"use client"
const StartAndStopManuallyTimer=function(){
    let totalsec=0;
    let timer;
    let startTimer=function(){
        timer=setInterval(()=>{
            totalsec++;

        },1000)
    };

    let stopTimer=function(){
        clearInterval(timer);
    }

    return(<>
    <h1>{timer}</h1>
    <button onClick={startTimer}>StartTimer</button>
    <button onClick={stopTimer}>StopTimer</button>
    </>)
}

export default StartAndStopManuallyTimer;