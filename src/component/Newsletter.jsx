import React from "react";

const NewsLetter = () => {
  return (
    <div className=" w-full py-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="font-bold py-2 text-2xl sm:text-3xl md:text-4xl">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex p-3 w-full  rounded-md text-black"
            />
            <button className=" text-black bg-teal-400 w-[200px] rounded-md font-medium sm:ml-4 my-6 py-3 ">
              Notify Me
            </button>
          </div>
          <p>We are about the protection of your data. Read our <span className="text-teal-400 underline cursor-pointer">Privacy Policy.</span></p>
        </div>
       
      </div>
    </div>
  );
};

export default NewsLetter;
