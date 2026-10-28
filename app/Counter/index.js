import {useState} from 'react';

function Counter(){
    const [count,setCount]=useState(0);

    const Inrement=()=>{
         setCount(prev=>prev+1)
    }
    const Decrement=()=>{
      setCount(prev=>prev-1)
    }
    return(
        <div>
        <button onClick={()=>{
            Inrement()
        }}>+</button>
        <button onClick={()=>{
            Decrement()
        }}>-</button>
         <div>{count}</div>
        </div>
    )
}

export default Counter;