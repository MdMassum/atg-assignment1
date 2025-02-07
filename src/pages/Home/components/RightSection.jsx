import { FaMapMarkerAlt } from "react-icons/fa";
import person1 from '../../../assets/Person1.png'
import person2 from '../../../assets/Person2.png'
import person3 from '../../../assets/Person3.png'
import person4 from '../../../assets/Person4.png'
import { AiTwotoneLike } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";



export default function RightSection({login}) {
  const groups = [
    { name: "Leisure", image: person1 },
    { name: "Activism", image: person2 },
    { name: "MBA", image: person3 },
    { name: "Philosophy", image: person4 },
  ];

  const [val, setValue] = useState("");

  return (
    <div className="hidden md:block p-4 bg-white rounded-xl w-96">
      {/* Location Input */}
      <div className="flex items-center gap-2 mb-4">
        <FaMapMarkerAlt className="text-gray-500" />
        <input
          type="text"
          value={val}
          onChange={(e)=>setValue(e.target.value)}
          placeholder="Enter your location"
          className="bg-transparent flex-1 pb-1 border-b border-gray-300 focus:outline-none focus:border-black"
        />
        <button className="text-black" onClick={()=>setValue("")}><RxCross2/></button>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        Your location will help us serve better and extend a personalised
        experience.
      </p>

      {/* Recommended Groups */}
      {
        login && <div>
      <h2 className="text-lg font-semibold mb-4 flex gap-1 items-center"><span><AiTwotoneLike/></span> Recommended Groups</h2>
      <div className="space-y-4">
        {groups.map((group, index) => (
          <div key={index} className="flex items-center gap-4">
            <img
              src={group.image}
              alt={group.name}
              className="w-10 h-10 rounded-full"
            />
            <span className="flex-1">{group.name}</span>
            <button className="px-4 py-1 text-sm bg-gray-300 text-black rounded-full hover:bg-blue-500 hover:text-white">
              Follow
            </button>
          </div>
        ))}
      </div>

      {/* See More */}
      <button className="mt-6 text-sm text-blue-500 hover:underline">
        See More...
      </button>
      </div>
    }
    </div>
  );
}
