import React from "react";
import logo from '../assets/logo.png'
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <header className="hidden md:flex w-full justify-between items-center px-16 py-3 shadow-md bg-white">

      <div>
        <img src={logo} alt="Logo" />
      </div>

      {/* Search Bar Section */}
      <div className="flex items-center justify-center bg-gray-100 rounded-full px-4 py-2 w-80 mx-4">
        <IoIosSearch size={20}/>
        <input
          type="text"
          placeholder="Search for your favorite groups in ATG"
          className="ml-2 bg-transparent  outline-none text-sm w-full"
        />
      </div>

      {/* Account Section */}
      <div className="flex items-center min-w-48">
        <a href="#" className="text-gray-700">
          Create Account.
        </a>
        <a href="#" className="text-blue-500 font-bold ml-1 hover:underline">
          It's Free!
        </a>
        <span className="ml-2 cursor-pointer">
          <i className="bi bi-caret-down-fill"></i>
        </span>
      </div>
    </header>
  );
};

export default Header;
