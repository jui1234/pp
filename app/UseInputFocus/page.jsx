"use client"
import { useRef } from "react";
const userefInterval=function(){
    const UserFocus=useRef(null);

    function focusFunction(){
        UserFocus.current.focus();
    }

    return(
        <>
        <button onClick={focusFunction}>focus</button>
        <input style={{border:'1px solid pink'}} ref={UserFocus}></input>
        </>
    )
}

export default userefInterval;