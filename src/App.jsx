import React from 'react'
import { Route, Routes } from 'react-router';
import Home from "./pages/Home.jsx";
import AppPage from './pages/AppPage.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx'
import Dashboard from './components/Sections.jsx';
const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/AppPage' element={<AppPage />}/>
      <Route path='/Dashboard' element={<Dashboard />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App;