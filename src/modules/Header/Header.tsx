import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="bg-gray-700 h-[91.9vh] text-center pt-32 text-white">
        <h1 className="text-7xl font-semibold">I am Isoxon</h1>
        <p className="text-xl w-[650px] m-auto mt-10">
          I study web programming and prepare ads for other companies quickly
          and qualitatively, and I make them for you using the latest
          technologies.
        </p>
        <div className="flex justify-center mt-10 gap-4">
          <a href="https://github.com/isoxon7954">
            <Image src="/github.png" width={70} height={100} alt="" />
          </a>
          <a href="https://web.telegram.org/k/#@ISOXON_MIRZAYEV">
            <Image src="/telegram.png" width={70} height={100} alt="" />
          </a>
          <a href="https://www.instagram.com/mirzayev_isoxon/">
            <Image src="/instagram.png" width={70} height={100} alt="" />
          </a>
        </div>
        <button className="bg-gray-800 py-4 px-6 mt-4 rounded-b-xl active:scale-75">
          <Link href="/about">About Me</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
