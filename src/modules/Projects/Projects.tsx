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
          <h1 className="text-white text-xl md:text-5xl pt-4">These are my projects</h1>
          <p className="text-white text-lg md:text-xl md:w-[500px] m-auto mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            cum iste optio, reprehenderit exercitationem voluptatum doloremque
            voluptatem similique commodi voluptate velit vitae tenetur officiis?
            Placeat unde quos iure veniam asperiores!
          </p>
        </div>
        <h1 className="text-white text-5xl pt-4 text-center pb-8">Projects</h1>
        <div className="flex justify-center gap-10">
          <a href="https://quick-summer-game.netlify.app/" className="bg-[url('/quick-summer-game.png')] w-96 h-52 bg-cover text-center">
            <h1 className="text-xl text-white mt-20">Quick-summer-game</h1>
          </a>
          <a href="https://zesty-conkies-30ffbe.netlify.app/" className="bg-[url('/clock.png')] w-96 h-52 bg-cover text-center">
            <h1 className="text-xl text-white mt-20">The Clock</h1>
          </a>
        </div>
        <div className="flex justify-center gap-10 mt-4 pb-8">
          <a href="https://unique-sherbet-a17d07.netlify.app/" className="bg-[url('/slider.png')] w-96 h-52 bg-cover text-center">
            <h1 className="text-xl text-white mt-20">Image Slider</h1>
          </a>
          <a href="https://inspiring-moonbeam-710149.netlify.app/" className="bg-[url('/calculator.png')] w-96 h-52 bg-cover text-center">
            <h1 className="text-xl text-white mt-20">Calculator</h1>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
