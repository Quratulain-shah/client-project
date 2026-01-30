import React from "react";
import { LuBuilding2 } from "react-icons/lu";
import { PiHeadphonesBold } from "react-icons/pi";

const Started = () => {
  return (
    <div className="bg-[#060F2A] flex justify-center items-center pb-10 pt-20">
      <div className="bg-[#09193B] w-full md:w-3xl rounded-2xl pb-10 pt-10">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <LuBuilding2 className="w-14 h-12 text-[#37B3FE]" />
          <h1 className="text-4xl text-white">Ready to Get Started?</h1>
          <p className="text-gray-400 text-lg font-semibold">
            Join leading institutions already staking with Stakee. Our team is
            ready to discuss <br /> your specific requirements and create a
            custom solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 w-full sm:w-auto">
            <div className="w-full sm:w-44 h-11 rounded-xl bg-gradient-to-r from-[#0A64F9] to-[#00B4DD] flex gap-2 justify-center items-center">
              <PiHeadphonesBold className="w-5 h-5 text-white" />
              <h1 className="text-white font-semibold text-sm">
                Contact Sales Team
              </h1>
            </div>

            <div className="w-full sm:w-44 h-11 rounded-xl bg-white flex gap-2 justify-center  items-center hover:border hover:border-gray-600 hover:bg-[#060F2A]">
              <h1 className="text-[#00B4DD] font-semibold text-sm  ">
                Request Documentation
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;
