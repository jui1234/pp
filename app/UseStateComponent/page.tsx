import {useState} from "react";
const UseStateComponent=()=>{
    const [color,setColor]=useState("red");
    const changeColor=()=>{
        setColor("blue");
    }
    return(<>
    <p style={{color}}>Hello, World!</p>
    <button style={{border:'1px solid black',cursor:'pointer'}} onClick={changeColor}>To Change Color Click Button</button>

    </>)
}
export default UseStateComponent;
//usestate it is a hook that let the component store the data and re=renmder the data wehn compoenet data change 