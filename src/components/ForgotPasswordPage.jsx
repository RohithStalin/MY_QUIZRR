import React from "react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  return (
    <div className=" flex  flex-col items-center justify-center p-12 mt-5">
      <h1 className="font-semibold font-sans text-4xl">Forgot Password</h1>
      <p className="text-gray-400 p-4 font-sans font-normal">
        Enter your registered email to get the password over email.
      </p>
      <div className="flex flex-col gap-2 p-5">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="name@addrress.com"
          className="p-4 border w-96 rounded py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button className="mt-5 flex justify-center items-center gap-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 w-96 h-14 font-sans font-normal ">
        Recieve Password on Email
      </button>
      <p className="text-gray-400 font-sans  font-light mt-7">
        Remember your password?{" "}
        <Link to="/login">
          <span className="text-blue-400 font-sans  font-light">Log in.</span>
        </Link>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;
