import React from "react";
import { FaGoogle } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center p-5 mt-6">
      <div className=" flex  flex-col items-center justify-center p-10">
        <img
          src="https://app.quizrr.in/assets/img/logo.svg"
          alt="Quizzr Logo"
        />
        <p className="text-gray-400 p-4 font-sans font-normal">
          Online Test Preparation Platform
        </p>
        <button className="flex justify-center items-center gap-4 bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 w-96 h-14 font-sans font-normal ">
          <FaGoogle />
          Login with google
        </button>
        <br />
        <div className="mb-4">
          <Link to="/login">
            <button className="flex justify-center items-center gap-4 bg-red-500 hover:bg-pink-800 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 w-96 h-14 font-sans font-normal ">
              <CiMail /> Login Using Email
            </button>
          </Link>
        </div>
        <p className="text-gray-400 p-4 font-sans font-light text-center">
          Having trouble in continuing?
          <br />
          Use{" "}
          <span className="text-blue-400 font-sans  font-light cursor-pointer">
            Google Chrome
          </span>{" "}
          or{" "}
          <span className="text-blue-400 font-sans text-center font-light cursor-pointer">
            contact us
          </span>
        </p>
      </div>
    </div>
  );
};

export default Home;
