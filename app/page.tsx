"use client";

import FunctionalComponent from "./functionalComponent/page";
import Welcome from "./ClassComponent/page";
import ParentComponent from "./PropsAndState/ParentComponent/page";
import StateComponent from "./StateComponent/page";
import ConditionRendering from "./ConditionRendering/page";


export default function Home() {
  return (
    <div>
      <FunctionalComponent />
      <Welcome />
      <ParentComponent />
      <StateComponent />
      <ConditionRendering/>
    </div>
  );
}