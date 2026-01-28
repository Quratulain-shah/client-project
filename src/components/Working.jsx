import React from "react";
import { LuWallet } from "react-icons/lu";
import { FaCoins } from "react-icons/fa6";
import { MdArrowForward } from "react-icons/md";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

const Working = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-[#111D42] px-4 pt-10 sm:pt-0 pb-5 sm:pb-0 md:px-0">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-white text-3xl md:text-5xl">
          How it <span className="text-[#00D3F3]">Work</span>
        </h1>
        <h1 className="text-gray-400 font-semibold text-base md:text-xl mt-4">
          Start earning rewards in just a few simple steps
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 px-2 md:px-10 mt-14">
        <div className="flex flex-row gap-0 justify-center items-center">
          <div className="w-full md:w-72 h-56 p-6 flex flex-col gap-3 bg-[#0F1835] border border-gray-700 rounded-2xl hover:border-[#00D3F3] transform hover:scale-105 duration-500">
            <div className="w-12 h-12 flex justify-center items-center bg-[#00D3F3] rounded-xl rotate-0 transform hover:rotate-y-90 duration-500">
              <LuWallet className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-white text-lg md:text-xl font-semibold">
              Connect Wallet
            </h1>
            <h1 className="text-gray-400 font-semibold text-sm md:text-base">
              Connect your TON wallet to <br /> the platform using TON <br />{" "}
              Connect.
            </h1>
          </div>
          <div className="hidden md:block">
            <MdArrowForward className="w-6 h-6 text-[#00D3F3] animate-pulse" />
          </div>
        </div>

        <div className="flex flex-row gap-0 justify-center items-center">
          <div className="w-full md:w-72 h-56 p-6 flex flex-col gap-3 bg-[#0F1835] border border-gray-700 rounded-2xl hover:border-[#00D3F3] transform hover:scale-105 duration-500">
            <div className="w-12 h-12 flex justify-center items-center bg-[#00D3F3] rounded-xl rotate-0 transform hover:rotate-y-90 duration-500">
              <FaCoins className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-white text-lg md:text-xl font-semibold">
              Stake TON
            </h1>
            <h1 className="text-gray-400 font-semibold text-sm md:text-base">
              Choose the amount of TON <br /> you want to stake and confirm{" "}
              <br /> the transaction.
            </h1>
          </div>
          <div className="hidden md:block">
            <MdArrowForward className="w-6 h-6 text-[#00D3F3] animate-pulse" />
          </div>
        </div>

        <div className="flex flex-row gap-0 justify-center items-center">
          <div className="w-full md:w-72 h-56 p-6 flex flex-col gap-3 bg-[#0F1835] border border-gray-700 rounded-2xl hover:border-[#00D3F3] transform hover:scale-105 duration-500">
            <div className="w-12 h-12 flex justify-center items-center bg-[#00D3F3] rounded-xl rotate-0 transform hover:rotate-y-90 duration-500">
              <HiOutlineArrowTrendingUp className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-white text-lg md:text-xl font-semibold">
              Received STAKED
            </h1>
            <h1 className="text-gray-400 font-semibold text-sm md:text-base">
              Get STAKED tokens instantly. <br /> Use them in DeFi while earning{" "}
              <br /> rewards.
            </h1>
          </div>
          <div className="hidden md:block">
            <MdArrowForward className="w-6 h-6 text-[#00D3F3] animate-pulse" />
          </div>
        </div>

        <div className="w-full md:w-72 h-56 p-6 flex flex-col gap-3 bg-[#0F1835] border border-gray-700 rounded-2xl hover:border-[#00D3F3] transform hover:scale-105 duration-500">
          <div className="w-12 h-12 flex justify-center items-center bg-[#00D3F3] rounded-xl rotate-0 transform hover:rotate-y-90 duration-500">
            <MdArrowForward className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-white text-lg md:text-xl font-semibold">
            Earn & Unstaked
          </h1>
          <h1 className="text-gray-400 font-semibold text-sm md:text-base">
            Watch your rewards grow. <br /> Unstake anytime to get your <br />{" "}
            TON back.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Working;
