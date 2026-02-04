import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import AppPage from "./pages/AppPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Dashboard from "./components/Sections.jsx";
import Institutional from "./pages/Institutional.jsx";
import News from "./pages/News.jsx";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
const App = () => {
  return (
    <TonConnectUIProvider manifestUrl="https://stakington.netlify.app/tonconnect-manifest.json">
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AppPage" element={<AppPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Institutional" element={<Institutional />} />
          <Route path="/News" element={<News />} />
        </Routes>
        <Footer />
      </>
    </TonConnectUIProvider>
  );
};

export default App;
