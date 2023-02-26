import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white pt-8 flex justify-evenly h-[40vh]">
      <div>
        <h1 className="text-3xl">Isoxon</h1>
        <p className="w-[500px] text-lg mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          animi dolores aperiam ex veniam expedita ipsa porro amet nobis ducimus
          vero, est earum nam nisi odit! Laudantium, nam? Nostrum ullam
          accusantium harum impedit culpa dolores at voluptatibus, odio
          necessitatibus autem doloremque id natus, repellendus maxime
          quibusdam! Aspernatur molestias minus ipsa.
        </p>
      </div>
      <div>
        <ul>
          <h3 className="text-2xl pb-5">Links</h3>
          <li className="mt-2">
            <Link href="/">Home</Link>
          </li>
          <li className="mt-2">
            <Link href="/about">About</Link>
          </li>
          <li className="mt-2">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="mt-2">
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <h3 className="text-2xl pb-5">Projects</h3>
          <li className="mt-2">
            <a href="https://zesty-conkies-30ffbe.netlify.app/">The Clock</a>
          </li>
          <li className="mt-2">
            <a href="https://profound-puppy-ffa72d.netlify.app/">
              Quick-summer-game
            </a>
          </li>
          <li className="mt-2">
            <a href="https://www.tespen.uz">
              Tespen
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
