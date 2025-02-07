import React, { useState } from "react";
import person from '../assets/Person1.png'
import { IoEyeOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";




const ArticleCard = ({header, description, bgImg, type, PostedBy}) => {


  return (
    <div className="max-w-[550px] mt-4 border rounded-lg shadow-sm overflow-hidden bg-white">
      {/* Image Section */}
      <img
        src={bgImg}
        alt="Card Header"
        className="w-full h-48 object-cover"
      />

      {/* Content Section */}
      <div className="p-4">
        {/* Article Tag */}
        <p className="text-sm text-gray-500 flex items-center mb-2">
          <span className="mr-2 font-semibold">✍️</span> {type}
        </p>

        {/* Title */}
        <div className="flex justify-between">
        <h2 className="w-[85%] text-lg font-semibold text-gray-800 mb-2">
          {header}
        </h2>
          <BsThreeDots className="mt-1 cursor-pointer" size={20} onClick={()=>setOpen(!open)}/>
        </div>
        

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">
          {description}
        </p>

        {/* Footer Section */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          {/* Profile Section */}
          <div className="flex items-center">
            <img
              src={person}
              alt="Author"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="font-semibold text-black">{PostedBy}</span>
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
    </div>
  );
};

export default ArticleCard;
