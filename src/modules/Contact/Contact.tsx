import React from "react";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div className="bg-gray-700 text-white">
      <Navbar />
      <div>
        <div className="flex justify-center items-center gap-48 py-24">
          <div>
            <Image
              src="/notebook.jpg"
              alt=""
              width={500}
              height={200}
              className="rounded"
            />
          </div>
          <div>
            <h1 className="text-3xl">About my call number !!</h1>
            <h2 className="text-xl w-[500px] mt-5">
              We are enjoy met you in our sites can you give your grade for my
              own portfoliyo site.If you want bind with me you can call with
              this number. This number is mine. you can call and ask me what you
              want.
            </h2>
          </div>
        </div>
      </div>
      <div className="text-white flex justify-center gap-28 py-24">
        <div className="w-80 h-[650px] shadow-2xl p-5 shadow-white">
          <h1 className="flex items-center gap-5 text-2xl font-semibold mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>
            Location
          </h1>
          <p className="pt-4">
            Uzbekistan, Namangan shahar, Motrudiy street, Home-1
          </p>
          <h1 className="flex items-center gap-5 text-2xl font-semibold mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="fill-white"
              viewBox="0 0 24 24"
            >
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
            </svg>
            Email
          </h1>
          <p className="pt-4">isoxon9502@gmail.com</p>
          <h1 className="flex items-center gap-5 text-2xl font-semibold mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M3.59 1.322l2.844-1.322 4.041 7.89-2.725 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.861 3.591-19.101-18.258-11.384-22.281zm1.93 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398zm7.832 7.649l2.917.87c.223-.747.16-1.579-.24-2.317-.399-.739-1.062-1.247-1.808-1.469l-.869 2.916zm1.804-6.059c1.551.462 2.926 1.516 3.756 3.051.831 1.536.96 3.263.498 4.813l-1.795-.535c.325-1.091.233-2.306-.352-3.387-.583-1.081-1.551-1.822-2.643-2.146l.536-1.796zm.95-3.186c2.365.705 4.463 2.312 5.729 4.656 1.269 2.343 1.466 4.978.761 7.344l-1.84-.548c.564-1.895.406-4.006-.608-5.882-1.016-1.877-2.696-3.165-4.591-3.729l.549-1.841z" />
            </svg>
            Call
          </h1>
          <p className="pt-4">+99890 752 95 02</p>
        </div>
        <div className="w-80 h-[650px] shadow-2xl p-6 shadow-white">
          <form>
            <h2 className="text-xl">Your Name</h2>
            <input
              type="text"
              className="w-64 h-8 outline-none text-black pl-4 text-md mt-5 mb-2"
            />
            <h2 className="text-xl">Email</h2>
            <input
              type="email"
              className="w-64 h-8 outline-none text-black pl-4 text-md mt-5 mb-2"
            />
            <h2 className="text-xl">Subject</h2>
            <input
              type="text"
              className="w-64 h-8 outline-none text-black pl-4 text-md mt-5 mb-2"
            />
            <h2 className="text-xl">Message</h2>
            <textarea className="w-64 h-60 outline-none text-black pl-4 text-md mt-5 mb-2 pt-3"></textarea>
            <button className="w-36 h-9 bg-gray-800 active:scale-75" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
