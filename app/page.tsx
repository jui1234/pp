"use client";

import FunctionalComponent from "./functionalComponent/page";
import Welcome from "./ClassComponent/page";
import ParentComponent from "./PropsAndState/ParentComponent/page";


export default function Home() {
  return (
    <div>
      <FunctionalComponent />
      <Welcome />
      <ParentComponent />
    </div>
  );
}