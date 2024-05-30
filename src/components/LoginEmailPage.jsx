import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const LoginEmailPage = () => {
  return (
    <div className=" flex  flex-col items-center justify-center p-12">
      <h1 className="font-semibold font-sans text-4xl">Sign in</h1>
      <p className="text-gray-400 p-4 font-sans font-normal">
        Login to your Quizrr account
      </p>
      <div className="flex flex-col gap-2 p-5">
        <label>Email Address</label>
        <input
          type="email"
          required
          placeholder="name@addrress.com"
          className="p-4 border w-96 rounded py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="pb-5 gap-2">
        <div className="flex justify-between pb-4">
          <label>Password</label>
          <Link to="/reset">
            <p className="text-gray-400 font-sans font-normal">
              Forgot Password?
            </p>
          </Link>
        </div>
        <div className="relative">
          <input
            type="password"
            placeholder="Enter your password"
            required
            className=" p-4 border w-96 rounded py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <IoEyeOutline className=" top-3 right-2 absolute text-gray-400" />
        </div>
      </div>
      <button className="mt-5 flex justify-center items-center gap-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 w-96 h-14 font-sans font-normal ">
        Sign in
      </button>
    </div>
  );
};

export default LoginEmailPage;
