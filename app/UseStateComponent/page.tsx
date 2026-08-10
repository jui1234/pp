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

// ### How `useState()` works

// → First, React renders the component and initializes the state with the initial value.

// → When we update the state using the state setter, React changes the stored state value.

// → React then re-renders the component.

// → During the re-render, `useState()` gives us the updated state value, and React updates the UI with the new value.

