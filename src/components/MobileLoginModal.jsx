import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const MobileLoginModal = ({ setOpen,setLogin }) => {

  const [isSignUp, setIsSignUp] = useState(true);

  const handleClick = () =>{
    setLogin(true);
    setOpen(false);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
      <div className="bg-white rounded-t-2xl shadow-lg w-screen max-w-md p-4">
        {/* Close Button */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">
            {isSignUp ? "Create Account" : "Welcome back!"}
          </h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setOpen(false)}
          >
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Form */}
        <form className="mt-2">
          {isSignUp && (
            <div className="flex">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 border border-gray-300 p-2  bg-transparent"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 border border-gray-300 p-2 bg-transparent"
              />
            </div>
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-2 bg-transparent"
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 p-2 bg-transparent"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              👁️
            </button>
          </div>
          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 p-2 bg-transparent"
            />
          )}
          <button
            type="submit"
            className="w-44 bg-blue-500 text-white py-2 rounded-full mt-3 hover:bg-blue-600"
            onClick={handleClick}
          >
            {isSignUp ? "Create Account" : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className="text-center my-2 text-sm text-gray-500">or</div>

        {/* Social Login */}
        <div className="space-y-2">
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-100">
            <FaFacebook className="text-blue-600 mr-2" onClick={handleClick} />
            {isSignUp ? "Sign up" : "Sign in"} with Facebook
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-100">
            <FaGoogle className="text-red-500 mr-2" onClick={handleClick} />
            {isSignUp ? "Sign up" : "Sign in"} with Google
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-2 text-sm text-gray-500">
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
        {!isSignUp && (
          <div className="text-center mt-2">
            <button className="text-blue-500 hover:underline">
              Forgot Password?
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileLoginModal;
