import React, { useState } from 'react';
import banner from '../../../assets/banner.png';
import { LuArrowLeft } from "react-icons/lu";
import MobileLoginModal from '../../../components/MobileLoginModal';


function HeroSection({login,setLogin}) {

  const [open, setOpen] = useState(false)

  return (
    <div className="relative w-full md:h-96 h-72">
      
      <div className='w-full flex md:hidden justify-between items-center absolute top-3 font-bold px-4'>
        <LuArrowLeft color='white' size={28}/>
        {
        !login && <button className='bg-transparent py-2 px-3 border border-white text-white font-bold rounded-lg' onClick={()=>setOpen(true)}>Join Group</button>
        }
        {
          login && <button className='bg-transparent py-2 px-3 border border-white text-white font-bold rounded-lg' onClick={()=>setLogin(false)}>Leave Group</button>
        }
      </div>


      {/* Image Section */}
      <img src={banner} alt="Hero Image" className="w-full h-full object-cover" />

      {/* Text Section */}
      <div className="absolute inset-0 flex flex-col left-5 top-44 md:left-12 md:top-60 text-white">
        <h1 className="font-bold text-2xl md:text-4xl">Computer Engineering</h1>
        <p className="text-gray-300 mt-2 text-sm md:text-base">142,765 Computer Engineers follow this</p>
      </div>

      {
        open && <MobileLoginModal setOpen={setOpen} setLogin={setLogin}/>
      }
    </div>
  );
}

export default HeroSection;
