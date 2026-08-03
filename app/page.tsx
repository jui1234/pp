"use client";

import FunctionalComponent from "./functionalComponent/page";
import Welcome from "./ClassComponent/page";


export default function Home() {
  return (
    <div>
      <FunctionalComponent />
      <Welcome />
    </div>
  );
}