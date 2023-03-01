import React from "react";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="text-white bg-gray-600">
        <div>
          <div className="items-center gap-48 py-24 lg:flex lg:justify-center">
            <div>
              <Image src="/Hacker.png" alt="" width={500} height={250} className="rounded hidden lg:block" />
            </div>
            <div>
              <h1 className="text-3xl">Hello! My name is Mirzayev Isoxon</h1>
              <h2 className="text-xl w-[500px] mt-5">
                I am 12 and I am in school. In IT, I understand better than in
                school lessons. I am interested in cool designs, I try to create
                the perfect website, I live in Namangan, I will be perfect
                programmer
              </h2>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-medium text-center pt-4 md:text-6xl">About Me</h1>
        <div className="mt-5 gap-7 text-center pb-6 md:flex md:text-left md:justify-center">
          <div>
            <h3 className="text-xl font-medium">
              Birthday:{" "}
              <span className="text-gray-500 ml-3">15-october 2011</span>
            </h3>
            <h3 className="text-xl font-medium">
              Phone:{" "}
              <span className="text-gray-500 ml-3">+998 90 752 95 02</span>
            </h3>
            <h3 className="text-xl font-medium">
              City: <span className="text-gray-500 ml-3">Namangan, UZB</span>
            </h3>
          </div>
          <div>
            <h3 className="text-xl font-medium">
              Age: <span className="text-gray-500 ml-3">12</span>
            </h3>
            <h3 className="text-xl font-medium">
              Degree: <span className="text-gray-500 ml-3">Junior</span>
            </h3>
            <h3 className="text-xl font-medium">
              Studied: <span className="text-gray-500 ml-3">ITpayTI</span>
            </h3>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default About;
