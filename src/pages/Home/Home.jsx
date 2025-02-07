import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import HeaderTabs from './components/HeaderTabs';
import MainSection from './components/MainSection';
const Home = () => {

  const [tab,setTab] = useState("All");
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <>
    <HeroSection login={login} setLogin={setLogin}/>
    <HeaderTabs tab={tab} setTab={setTab} open={open} setOpen={setOpen} login={login} setLogin={setLogin}/>
    <MainSection tab={tab} login={login}/>
    </>
  );
};

export default Home