"use client";

import FunctionalComponent from "./functionalComponent/page";
import Welcome from "./ClassComponent/page";
import ParentComponent from "./PropsAndState/ParentComponent/page";
import StateComponent from "./StateComponent/page";
import ConditionRendering from "./ConditionRendering/page";
import Age from "./ConditionRendering/Age/page";


export default function Home() {
  return (
    <div>
      <FunctionalComponent />
      <Welcome />
      <ParentComponent />
      <StateComponent />  
      <ConditionRendering/>
      <Age age={50} />
    </div>
  );
}