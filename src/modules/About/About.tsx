import React from "react";
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="text-white bg-gray-600 h-[91.9vh]">
        <h1 className="text-6xl font-medium text-center pt-4">About Me</h1>
        <div className="mt-5 flex justify-center gap-7">
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
      </div>
    </div>
  );
};

export default About;
