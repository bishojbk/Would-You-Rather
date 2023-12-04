"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const router = useRouter();

  const handlePlay = () => {
    router.push("/game");
  };

  return (
    <main className="flex flex-col items-center justify-center gap-8 h-screen bg-black">
      <div className={"flex items-center justify-center gap-8"}>
        <div className="bg-[#55bfe7] h-52 w-96 text-white flex items-center justify-center text-7xl text-shadow">
          WOULD
        </div>
        <div className="absolute text-white text-5xl h-32 w-32 rounded-full bg-black flex items-center justify-center text-shadow">
          YOU
        </div>
        <div className="bg-[#e02c2d] h-52 w-96 text-white flex items-center justify-center text-7xl text-shadow">
          <span className="ml-12">RATHER? </span>
        </div>
      </div>

      <button className="pushable" onClick={handlePlay}>
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front">PLAY</span>
      </button>
    </main>
  );
};

export default Home;
