import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Choose from '../components/Choose';
import Working from '../components/Working';
import Questions from '../components/Questions';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Choose />
        <Working />
        <Questions />
        <Footer />
    </div>
  )
}

export default Home;