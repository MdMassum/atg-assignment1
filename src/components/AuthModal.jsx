import img from '../assets/loginImg.png'

import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function AuthModal({ setOpen, setLogin }) {
  const [isSignUp, setIsSignUp] = useState(true);
  const handleClick = ()=>{
    setLogin(true)
    setOpen(false)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[600px] h-[420px] p-4 relative flex-col">
        {/* Close Button */}
        <div>
        <button
          className="absolute -top-7 right-2 text-gray-400 bg-gray-200 rounded-full hover:text-gray-600"
          onClick={() => setOpen(false)}
        >
          <IoMdClose size={20} />
        </button>

        {/* Header */}
        <div className="text-center mb-3">
            <p className="text-xs text-green-600 leading-tight">
              Let's learn, share & inspire each other with our passion for
              computer engineering.{" "}
              <span className="font-bold">Sign up now 🤘</span>
            </p>
        </div>

        </div>

        <div>

            <div className='flex justify-between items-center mb-2'>
            <h2 className="text-lg font-semibold">
                {isSignUp ? "Create Account" : "Sign In"}
            </h2>

                        {/* Footer */}
          <div className="text-center text-xs text-gray-500">
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                Don't have an account yet?{" "}
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => setIsSignUp(true)}
                >
                  Create new for free!
                </button>
              </>
            )}
          </div>
            
            </div>

        </div>

        <div className='flex'>
        {/* Left Section */}
        <div className="w-1/2 pr-4">
          <form className="">
            {isSignUp && (
              <div className="flex">
                <input
                  type="text"
                  placeholder="First Name"
                  className="flex-1 border border-gray-300  p-2 text-sm focus:outline-none focus:ring-2  bg-transparent placeholder-gray-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="flex-1 border border-gray-300  p-2 text-sm focus:outline-none focus:ring-2  bg-transparent placeholder-gray-500"
                />
              </div>
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300  p-2 text-sm focus:outline-none focus:ring-2  bg-transparent placeholder-gray-500"
            />
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300  p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent placeholder-gray-500"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
              >
                👁️
              </button>
            </div>
            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border border-gray-300  p-2 text-sm focus:outline-none focus:ring-2 bg-transparent placeholder-gray-500"
              />
            )}
            <button
              type="submit"
              className="mt-4 rounded-full w-full bg-blue-500 text-white py-1 text-sm "
              onClick={handleClick}
            >
              {isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>

          {/* Social Login */}
          <div className="text-center my-3 text-xs text-gray-500">or</div>
          <div className="space-y-2">
            <button className="w-full flex items-center justify-center border border-gray-300  py-1 text-sm hover:bg-gray-100" onClick={handleClick}>
              <FaFacebook className="text-blue-600 mr-2" />
              Sign in with Facebook
            </button>
            <button className="w-full flex items-center justify-center border border-gray-300  py-1 text-sm hover:bg-gray-100" onClick={handleClick}>
              <FaGoogle className="text-red-500 mr-2"/>
              Sign in with Google
            </button>
          </div>

          
          {!isSignUp && (
            <div className="text-center mt-2">
              <button className="text-blue-500 text-xs hover:underline">
                Forgot Password?
              </button>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex items-center justify-center bg-gray-100 rounded-r-xl">
          <img
            src={img}
            alt="Placeholder"
            className="w-full"
          />
        </div>
      </div>
      </div>
    </div>
  );
}
