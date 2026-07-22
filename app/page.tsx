"use client";
import Button from "@/src/components/Button/page";
import Image from "next/image";
import { useState } from "react";
import About from "./about.tsx/page";


export default function Home() {
  const [count, setCount] = useState
  (0);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <Button onClick={()=>{
      setCount(count + 1)
    }} />

    <About count={count} setCount={setCount} />
    </div>
  );
}
