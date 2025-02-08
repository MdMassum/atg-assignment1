import React from "react";
import person from '../assets/Person3.png'
import { BsThreeDots } from "react-icons/bs";
import { IoEyeOutline, IoShareSocialOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const JobCard = () => {
  return (
    <div className="max-w-[550px] mt-4 border rounded-lg shadow-sm overflow-hidden bg-white">
      {/* Card Content */}
      <div className="p-4 w-full">
        {/* Job Tag */}
        <p className="text-sm text-gray-500 flex items-center mb-2 font-semibold">
          <span className="mr-2">💼</span> Job
        </p>

        {/* Job Title */}
        
        <div className="flex justify-between">
        <h2 className="text-lg font-bold text-black mb-2">
        software Developer
        </h2>
          <BsThreeDots className="mt-1 cursor-pointer" size={20}/>
        </div>

        {/* Company Name and Location */}
        <div className="text-sm font-semibold text-gray-600 flex items-center space-x-4 mb-4">
          <div className="flex gap-1 min-w-4">
            <FaHome className="mt-1"/>
            Innovaccer Analytics Private Ltd.
          </div>
          <div className="flex items-center min-w-28">
          <MdLocationPin/>4
            Noida, India
          </div>
        </div>

        {/* Apply Button */}
        <button className="w-full text-center border border-green-500 text-green-500 font-medium py-2 rounded-md hover:bg-green-500 hover:text-white transition">
          Apply on Timesjobs
        </button>
      </div>

      {/* Footer Section */}
      <div className="p-4 text-sm text-gray-500 flex items-center justify-between">
        {/* Author Info */}
        <div className="flex items-center">
          <img
            src={person}
            alt="Author"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="font-semibold text-black">Joseph Gray</span>
        </div>

        {/* Views and Share */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
          <IoEyeOutline/>
            <span>1.4k views</span>
          </div>
          <button className="text-gray-500 hover:text-gray-800">
          <IoShareSocialOutline size={36} className="bg-gray-200 p-2"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
