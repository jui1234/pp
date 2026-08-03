import ChildComponent from "../ChildComponent/page"

const ParentComponent =()=>{
    return(

        <ChildComponent name="Alice" age={30}></ChildComponent>
    )
}
export default ParentComponent;