import React, { useState } from "react";
import { MdOutlineGroupAdd } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import AuthModal from "../../../components/AuthModal";
import Dropdown from "../../../components/Dropdown";

const HeaderTabs = ({tab,setTab,open,setOpen,login,setLogin}) => {
  const handleSelect = (option) =>{
    setTab(option);
  }
  return (
    <>
    <div className="hidden md:flex w-[80%] mx-auto justify-between items-center py-3 border-b bg-white">
      {/* Left Section: Tabs */}
      <div className="flex items-center space-x-6">
        <button
          onClick={()=>setTab("All")}
          className={` hover:text-black font-medium pb-1 min-w-24 ${tab == "All" ? "border-b-2 border-black text-black" : "text-gray-500"} `}
        >
          All Posts (32)
        </button>
        <button
          onClick={()=>setTab("Article")}
          className={`hover:text-black pb-1 transition-colors ${tab == "Article" ? " border-b-2 border-black text-black" : "text-gray-500"}`}
        >
          Article
        </button>
        <button
          onClick={()=>setTab("Education")}
          className={` hover:text-black pb-1 transition-colors ${tab == "Education" ? " border-b-2 border-black text-black" : "text-gray-500"}`}
        >
          Education
        </button>
        <button
          onClick={()=>setTab("Job")}
          className={`hover:text-black pb-1 transition-colors ${tab == "Job" ? " border-b-2 border-black text-black" : "text-gray-500"}`}
        >
          Job
        </button>
      </div>

      {/* Right Section: Buttons */}
      <div className="flex items-center space-x-2 ml-3">
        <button className="flex gap-1 justify-center items-center px-2 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition min-w-36">
          Write a Post <FaChevronDown className="mt-1 ml-1"/>
        </button>
        {login && <button className="px-4 py-2 text-white rounded-md transition flex items-center space-x-2 bg-gray-400 min-w-44" onClick={()=>setLogin(false)}>
          <MdOutlineGroupAdd/>
          <span>Leave Group</span>
        </button>}
        {!login && <button className="px-4 py-2 text-white rounded-md transition flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 min-w-40" onClick={()=>setOpen(true)}>
          <MdOutlineGroupAdd/>
          <span>Join Group</span>
        </button>}
      </div>
      {open && <AuthModal setOpen={setOpen} setLogin={setLogin}/>}
    </div>


    {/* mobile tab */}
    <div className="flex md:hidden p-3 -mb-8 justify-between items-center">
      <p className="font-semibold text-black">Posts(368)</p>
      <div className="">
      <Dropdown
        label="Filter"
        options={["All", "Article", "Education", "Job"]}
        onSelect={handleSelect}
      />
    </div>

      </div>
    </>
  );
};

export default HeaderTabs;
