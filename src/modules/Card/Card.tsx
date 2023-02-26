import React from "react";

const Card = () => {
  return (
    <div className="bg-gray-600 text-white h-[500px]">
      <div className="flex justify-center pt-10 gap-5">
        <div className="w-96 h-52 p-5 bg-gray-800 rounded-tl-[20px] rounded-bl-[20px]">
          <h1 className="text-2xl">Making a design system from scratch</h1>
          <p className="mt-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="w-96 h-52 p-5 bg-gray-800 rounded-tr-[20px] rounded-br-[20px]">
          <h1 className="text-2xl">Making a design system from scratch</h1>
          <p className="mt-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <div className="w-96 h-52 m-auto mt-5 p-5 bg-gray-800 rounded-bl-[20px] rounded-br-[20px]">
        <h1 className="text-2xl">Making a design system from scratch</h1>
        <p className="mt-3">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  );
};

export default Card;
