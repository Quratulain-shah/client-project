import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Choose from "../components/Choose";
import Working from "../components/Working";
import Questions from "../components/Questions";

const Home = () => {
  return (
    <div>
      <Hero />
      <Choose />
      <Working />
      <Questions />
     
    </div>
  );
};

export default Home;
