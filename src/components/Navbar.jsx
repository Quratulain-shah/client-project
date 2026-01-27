import React from "react";
import { MdAccountBalanceWallet } from "react-icons/md";
import { PiWalletFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="bg-[#020618] flex justify-center items-center gap-90 w-full h-16 border-b border-gray-400">
      <div className="flex justify-center items-center flex-row gap-3">
        <div className="flex justify-center items-center w-10 h-10 rounded-xl transform bg-[#2AA1FF]">
          <MdAccountBalanceWallet className="text-white w-7 h-7" />
        </div>
        <h1 className="text-white font-semibold text-xl ">Stakee</h1>
      </div>

      <div className="flex flex-row gap-10">
        <h1 className="text-gray-300 font-semibold text-md hover:text-[#2AA1FF] cursor-pointer hover:underline underline-offset-8">
          Home
        </h1>
        <h1 className="text-gray-300 font-semibold text-md hover:text-[#2AA1FF] cursor-pointer hover:underline underline-offset-8">
          App
        </h1>
        <h1 className="text-gray-300 font-semibold text-md hover:text-[#2AA1FF] cursor-pointer hover:underline underline-offset-8">
          Institutional
        </h1>
        <h1 className="text-gray-300 font-semibold text-md hover:text-[#2AA1FF] cursor-pointer hover:underline underline-offset-8">
          News
        </h1>
      </div>

      <div className="bg-[#2AA1FF] flex flex-row gap-3 justify-center items-center rounded-xl h-10 w-32 transform hover:scale-105">
        <PiWalletFill className="text-white w-6 h-6" />

        <h1 className="text-white font-semibold text-sm">Launch App</h1>
      </div>
    </div>
  );
};

export default Navbar;
