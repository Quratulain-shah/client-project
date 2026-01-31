import React, { useState } from "react";
import { MdAccountBalanceWallet } from "react-icons/md";
import { PiWalletFill } from "react-icons/pi";
import { useNavigate } from "react-router";
const Navbar = () => {
  const [activeNav, setActiveNav] = useState("Home");
  const navigate = useNavigate();

  const handleNavClick = (item) => {
    setActiveNav(item);

    if (item === "Home") navigate("/");
    else if (item === "App") navigate("/AppPage");
    else if (item === "Institutional") navigate("/Institutional");
    else if (item === "News") navigate("/News");
  };

  return (
    <div>
      <div className="hidden md:block bg-[#020618] w-full h-16 border-b fixed z-50 border-gray-400">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full cursor-pointer">
          <div
            className="flex items-center gap-3"
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 flex justify-center items-center rounded-xl transition-transform duration-500 hover:rotate-360 bg-[#2AA1FF]">
              <MdAccountBalanceWallet className="text-white w-7 h-7" />
            </div>
            <h1 className="text-white font-semibold text-xl">Stakee</h1>
          </div>

          <div className="flex gap-10">
            {["Home", "App", "Institutional", "News"].map((item) => (
              <div key={item} className="relative">
                <h1
                  onClick={() => handleNavClick(item)}
                  className={`font-semibold text-md cursor-pointer transition-colors ${
                    activeNav === item
                      ? "text-[#2AA1FF]"
                      : "text-gray-300 hover:text-[#2AA1FF]"
                  }`}
                >
                  {item}
                </h1>

                {activeNav === item && (
                  <div className="absolute -bottom-[20px] left-0 right-0 h-0.5 bg-[#2AA1FF]" />
                )}
              </div>
            ))}
          </div>

          <div className="flex bg-[#2AA1FF] gap-3 items-center rounded-xl h-10 px-4 hover:scale-105 transition cursor-pointer">
            <PiWalletFill className="text-white w-6 h-6" />
            <h1 className="text-white font-semibold text-sm">Launch App</h1>
          </div>
        </div>
      </div>

      <div className="md:hidden bg-[#020618] w-full h-16 border-b border-gray-400">
        <div className="px-4 flex justify-between items-center h-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex justify-center items-center rounded-xl bg-[#2AA1FF]">
              <MdAccountBalanceWallet className="text-white w-7 h-7" />
            </div>
            <h1 className="text-white font-semibold text-xl">Stakee</h1>
          </div>

          <div
            onClick={() => navigate("/app")}
            className="flex bg-[#2AA1FF] gap-2 items-center rounded-xl h-10 px-3 cursor-pointer active:scale-95 transition"
          >
            <PiWalletFill className="text-white w-5 h-5" />
            <h1 className="text-white font-semibold text-xs">Launch App</h1>
          </div>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#020618] border-t border-gray-400 z-50">
        <div className="grid grid-cols-4 gap-2 px-4 py-4">
          {["Home", "App", "Institutional", "News"].map((item) => (
            <div
              key={item}
              onClick={() => handleNavClick(item)}
              className="flex flex-col items-center justify-center cursor-pointer group relative"
            >
              <div
                className={`w-2 h-2 rounded-full bg-[#2AA1FF] transition-opacity mb-1 ${
                  activeNav === item
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />

              <h1
                className={`font-semibold text-xs transition-colors text-center ${
                  activeNav === item
                    ? "text-[#2AA1FF]"
                    : "text-gray-300 group-hover:text-[#2AA1FF]"
                }`}
              >
                {item}
              </h1>

              {activeNav === item && (
                <div className="absolute -top-[17px] left-0 right-0 h-0.5 bg-[#2AA1FF]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
