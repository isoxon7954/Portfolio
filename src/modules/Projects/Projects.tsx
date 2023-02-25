import React from "react";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-700 h-[91.9vh]">
        <h1 className="text-white text-5xl pt-4 text-center pb-8">Portfolio</h1>
        <div className="flex justify-center gap-10">
          <a href="https://quick-summer-game.netlify.app/">
            <Image
              src="/quick-summer-game.png"
              width={350}
              height={350}
              alt=""
              className="w-[500px] h-80 object-cover rounded"
            />
          </a>
          <a href="https://zesty-conkies-30ffbe.netlify.app/">
            <Image
              src="/clock.png"
              width={350}
              height={350}
              alt=""
              className="w-[500px] h-80 object-cover rounded"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
