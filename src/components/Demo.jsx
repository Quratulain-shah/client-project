import React from "react";
import { LuBuilding2 } from "react-icons/lu";
import { PiHeadphonesBold } from "react-icons/pi";

const Demo = () => {
  return (
    <div className="pt-10 md:pt-40 px-4 bg-[#0A1536] flex justify-center pb-10">
      <div className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-7xl">
        
        <div className="flex justify-center items-center gap-2 flex-row w-full max-w-xs h-10 bg-[#07173D] rounded-3xl border border-[#3da9fc]">
          <LuBuilding2 className="text-[#219bf8] w-4 h-4" />
          <h1 className="text-white text-sm text-center">
            Institutional Solutions
          </h1>
        </div>

        <div className="flex flex-col text-center px-2">
          <h1 className="text-white text-3xl sm:text-4xl md:text-7xl leading-tight">
            Institutional-Grade
          </h1>
          <h1 className="text-[#2AA1FF] text-3xl sm:text-4xl md:text-7xl leading-tight">
            Liquid Staking
          </h1>
          <h1 className="text-gray-400 text-base sm:text-lg md:text-xl mt-4 md:mt-6 font-semibold max-w-3xl">
            Enterprise solutions for exchanges, asset managers, and
            institutional investors. Secure, compliant, and scalable
            liquid staking infrastructure.
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 w-full sm:w-auto">
          <div className="w-full sm:w-40 h-11 rounded-xl bg-gradient-to-r from-[#0A64F9] to-[#00B4DD] flex gap-2 justify-center items-center">
            <PiHeadphonesBold className="w-5 h-5 text-white" />
            <h1 className="text-white font-semibold text-sm">
              Schedule a Demo
            </h1>
          </div>

          <div className="w-full sm:w-40 h-11 rounded-xl bg-white flex gap-2 justify-center items-center">
            <h1 className="text-black font-semibold text-sm">
              Download Overview
            </h1>
          </div>
        </div>

        <div className="w-full mt-12 md:mt-14 mb-4 bg-[#040A21] border-t border-b border-gray-700 
                        grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-24 h-44 justify-center items-center
                        py-8 text-center">
          
          <div className="flex flex-col">
            <h1 className="text-[#00B4DD] text-2xl sm:text-3xl md:text-4xl">$500M+</h1>
            <h1 className="text-gray-400 text-xs sm:text-sm">
              Total Value Locked
            </h1>
          </div>

          <div className="flex flex-col">
            <h1 className="text-[#00B4DD] text-2xl sm:text-3xl md:text-4xl">150+</h1>
            <h1 className="text-gray-400 text-xs sm:text-sm">
              Institutional Clients
            </h1>
          </div>

          <div className="flex flex-col">
            <h1 className="text-[#00B4DD] text-2xl sm:text-3xl md:text-4xl">99.9%</h1>
            <h1 className="text-gray-400 text-xs sm:text-sm">
              Uptime SLA
            </h1>
          </div>

          <div className="flex flex-col">
            <h1 className="text-[#00B4DD] text-2xl sm:text-3xl md:text-4xl">24/7</h1>
            <h1 className="text-gray-400 text-xs sm:text-sm">
              Support Coverage
            </h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Demo;
