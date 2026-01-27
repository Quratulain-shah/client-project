import React from "react";
import { BsLightningCharge } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SlGraph } from "react-icons/sl";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-[#04122E] to-[#071E41] min-h-screen pt-20 px-16">
      <div className="bg-[#092149] flex justify-center items-center gap-4 h-9 rounded-3xl w-60 border-2 border-[#10326E]">
        <BsLightningCharge className="text-[#00D3F3] w-5 h-5" />
        <h1 className="text-white text-sm">Instant Liquidity, No Lock-up</h1>
      </div>

      <div className="flex flex-col gap-2 mt-10">
        <h1 className="text-6xl text-white">Stake TON,</h1>
        <h1 className="text-6xl text-[#00D3F3]">Earn Rewards</h1>

        <h1 className="text-gray-400 font-semibold text-lg mt-6">
          The leading liquid staking protocol for TON. Stake your <br /> tokens,
          receive STAKED, and earn rewards while <br />
          maintaining full liquidity.
        </h1>

        <div className="flex flex-row gap-6 mt-6">
          <div className="cursor-pointer bg-gradient-to-r flex justify-center gap-4 items-center transform hover:scale-105 from-[#2983FF] to-[#00CEF3] h-9 w-36 rounded-xl">
            <h1 className="text-sm text-white font-semibold">Start Staking</h1>
            <FaArrowRight className="text-white w-4 h-4 mt-0.5" />
          </div>
          <div className="cursor-pointer bg-transparent border border-gray-400 hover:border-[#] flex justify-center transform hover:scale-105 gap-4 items-center h-9 w-36 rounded-xl">
            <h1 className="text-sm text-white font-semibold">Learn More</h1>
            <MdKeyboardArrowDown className="text-white w-4 h-4 mt-0.5" />
          </div>
        </div>
        <div className="flex flex-row w-[19rem] justify-between mt-10">
          <div className="flex flex-row gap-3 transform hover:scale-104">
            <div className="w-10 h-10 rounded-xl bg-blue-500 flex justify-center items-center">
              <SlGraph className="w-8 h-8 text-[#00D3F3]" />
            </div>

            <div className="flex flex-col">
              <h1 className="text-gray-400 text-md font-semibold">APY</h1>
              <h1 className="text-white font-semibold text-lg">~5.2%</h1>
            </div>
          </div>

          <div className="flex flex-row gap-3 transform hover:scale-104">
            <div className="w-10 h-10 rounded-xl bg-blue-500 flex justify-center items-center">
              <SlGraph className="w-8 h-8 text-[#00D3F3]" />
            </div>

            <div className="flex flex-col">
              <h1 className="text-gray-400 text-md font-semibold">TVL</h1>
              <h1 className="text-white font-semibold text-lg">$4.2M</h1>
            </div>
          </div>
        </div>

        <div className="bg-[#092149] mt-6 flex justify-center items-center h-10 rounded-3xl animate-bounce w-56 border border-[#00D3F3]">
          <h1 className="text-[#00D3F3] text-sm">Powered by TON Blockchain</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
