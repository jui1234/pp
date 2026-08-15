"use client";

import FunctionalComponent from "./functionalComponent/page";
import Welcome from "./ClassComponent/page";
import ParentComponent from "./PropsAndState/ParentComponent/page";
import StateComponent from "./StateComponent/page";
import ConditionRendering from "./ConditionRendering/page";
import Age from "./ConditionRendering/Age/page";
import ListExample from "./ListExample/Page";
import KeyIdenti from "./ListExample/KeyIdenty";
import UseStateComponent from "./UseStateComponent/page";
import UseEffectComponent from "./UseEffectCompoenet/page";
import setIntervalPage from "./SetInterval/page";
import SetIntervalPage from "./SetInterval/page";


export default function Home() {
  return (
    <div>
      <FunctionalComponent />
      <Welcome />
      <ParentComponent />
      <StateComponent />  
      <ConditionRendering/>
      <Age age={50} />
      <ListExample />
      <KeyIdenti />
      <UseStateComponent/>
      <UseEffectComponent />
      <SetIntervalPage />
    </div>
  );
}