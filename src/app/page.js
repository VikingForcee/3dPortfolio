"use client";
import './globals.css';

import Image from "next/image";
import bg from "../../public/background/home-background.jpg"
import RenderModel from "./components/RenderModel";
import Wizard from "./components/models/Wizard";
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">



      <Image src={bg} alt="bg image" fill className="w-full h-screen object-cover object-center -z-20 opacity-40" />
    
    <div className="w-full h-screen">
      {/* Navigation and 3D model */}

      <Navigation/>
      <RenderModel >
        <Wizard />
      </RenderModel>

    </div>

    
    </main>
  );
}
