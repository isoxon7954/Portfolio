import React from "react";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-700">
        <div className="text-center">
          <h1 className="text-white text-5xl pt-4">These are my projects</h1>
          <p className="text-white text-xl w-[500px] m-auto mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            cum iste optio, reprehenderit exercitationem voluptatum doloremque
            voluptatem similique commodi voluptate velit vitae tenetur officiis?
            Placeat unde quos iure veniam asperiores!
          </p>
        </div>
        <h1 className="text-white text-5xl pt-4 text-center pb-8">Projects</h1>
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
        <div className="flex justify-center gap-10 mt-4 pb-8">
          <a href="https://codepen.io/FlorinPop17/full/jOOPdbE">
            <Image
              src="/random.png"
              width={350}
              height={350}
              alt=""
              className="w-[500px] h-80 object-cover rounded"
            />
          </a>
          <a href="https://codepen.io/FlorinPop17/full/QWWarqd">
            <Image
              src="/image.png"
              width={350}
              height={350}
              alt=""
              className="w-[500px] h-80 object-cover rounded"
            />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
