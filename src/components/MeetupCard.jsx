import React from "react";
import img from '../assets/carImg.png'
import person from '../assets/Person2.png'
import { BsThreeDots } from "react-icons/bs";
import { IoEyeOutline, IoShareSocialOutline } from "react-icons/io5";
import { IoMdCalendar } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

const MeetupCard = () => {
  return (
    <div className="max-w-[550px] mt-4 border rounded-lg shadow-sm overflow-hidden bg-white">
      {/* Image Section */}
      <img
        src={img}
        alt="Car"
        className="w-full h-48 object-cover"
      />

      {/* Content Section */}
      <div className="p-4">
        {/* Meetup Tag */}
        <p className="text-sm text-gray-500 flex items-center mb-2">
          <span className="mr-2 font-semibold">📅</span> Meetup
        </p>

        {/* Title */}
        <div className="flex justify-between">
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          Finance & Investment Elite Social Mixer @Lujiazui
        </h2>
          <BsThreeDots className="mt-1 cursor-pointer" size={20}/>
        </div>
        

        {/* Date and Location */}
        <div className="text-sm text-gray-600 flex items-center space-x-4 mb-3">
          <div className="flex items-center font-semibold">
            
          <IoMdCalendar/> Fri, 12 Oct, 2018
          </div>
          <div className="flex items-center font-semibold">
            <MdLocationPin/>
            Ahmedabad, India
          </div>
        </div>

        {/* Visit Website Button */}
        <button className="w-full text-center bg-white text-orange-500 font-medium py-2 rounded-md hover:bg-orange-600 border">
          Visit Website
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
          <span className="font-semibold text-black">Ronal Jones</span>
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

export default MeetupCard;
