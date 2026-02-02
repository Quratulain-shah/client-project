import React, { useEffect } from "react";
import { RiCoinsFill } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { MdOutlineAutoGraph } from "react-icons/md";
import { LuShield } from "react-icons/lu";
import { BsLightningCharge } from "react-icons/bs";
import { SlGraph } from "react-icons/sl";
import { TbArrowCapsule } from "react-icons/tb";
import { IoLockClosedOutline } from "react-icons/io5";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Choose = () => {
  useEffect(() => {
    gsap.from(".boxes", {
      x: -160,
      // opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".boxes",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(".txt", {
      y: 60,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".txt",
        start: "top 80%",
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(".box", {
      y: 60,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".box",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="w-full">
      <div className="bg-gradient-to-b  from-[#04122E] to-[#0a2752] min-h-screen pt-16 flex flex-col  items-center justify-center gap-10">
        <div className="boxes flex flex-col md:flex-row container justify-between gap-4 sm:gap-0 items-center flex-wrap">
          <div className="bg-[#050b27] w-full sm:w-60 h-48 gap-3 border border-gray-700 hover:border-[#00D3F3] transform hover:scale-105 duration-500 hover:bg-[#081035] rounded-2xl flex flex-col justify-start items-start p-4">
            <RiCoinsFill className="text-[#00D3F3] w-10 h-10 translate-x-0 hover:translate-x-10 rotate-0 hover:rotate-360 duration-200" />
            <h2 className="text-gray-400 text-sm">Total Value Locked</h2>
            <h1 className="text-white font-semibold text-3xl">$42.5M</h1>
            <h1 className="text-[#00D3F3]">+12.3%</h1>
          </div>

          <div className="bg-[#050b27] w-full sm:w-60 h-48 gap-3 border border-gray-700 hover:border-[#00D3F3] transform hover:scale-105 duration-500 hover:bg-[#081035] rounded-2xl flex flex-col justify-start items-start p-4">
            <GoPeople className="text-[#00D3F3] w-10 h-10 translate-x-0 hover:translate-x-10 rotate-0 hover:rotate-360 duration-200" />
            <h2 className="text-gray-400 text-sm">Active Staker</h2>
            <h1 className="text-white font-semibold text-3xl">8,234</h1>
            <h1 className="text-[#00D3F3]">+8.1%</h1>
          </div>

          <div className="bg-[#050b27] w-full sm:w-60 h-48 gap-3 border border-gray-700 hover:border-[#00D3F3] transform hover:scale-105 duration-500 hover:bg-[#081035] rounded-2xl flex flex-col justify-start items-start p-4">
            <MdOutlineAutoGraph className="text-[#00D3F3] w-10 h-10 translate-x-0 hover:translate-x-10 rotate-0 hover:rotate-360 duration-200" />
            <h2 className="text-gray-400 text-sm">Current APY</h2>
            <h1 className="text-white font-semibold text-3xl">5.2%</h1>
            <h1 className="text-[#00D3F3]">stable</h1>
          </div>

          <div className="bg-[#050b27] w-full sm:w-60 h-48 gap-3 border border-gray-700 hover:border-[#00D3F3] transform hover:scale-105 duration-500 hover:bg-[#081035] rounded-2xl flex flex-col justify-start items-start p-4">
            <LuShield className="text-[#00D3F3] w-10 h-10 translate-x-0 hover:translate-x-10 rotate-0 hover:rotate-360 duration-200" />
            <h2 className="text-gray-400 text-sm">TON Staked</h2>
            <h1 className="text-white font-semibold text-3xl">2.1M</h1>
            <h1 className="text-[#00D3F3]">+15.4%</h1>
          </div>
        </div>

        <div className="txt flex-col gap-4 justify-center text-center items-center mt-14 px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
            Why Choose <span className="text-[#00D3F3]">Stakee</span>
          </h1>
          <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-400 max-w-3xl">
            The most trusted and efficient liquid staking protocol on TON
            blockchain
          </h1>
        </div>
        <div className="flex flex-col gap-10 w-full ">
          <div className="box flex flex-col md:flex-row justify-evenly items-center flex-wrap">
            <div className="w-full sm:w-80 lg:w-75 h-auto min-h-56 flex flex-col gap-3 bg-[#0F1A3A] border border-gray-700 hover:border-[#00D3F3] p-6 transform hover:scale-105 duration-500 rounded-2xl justify-start items-start">
              <div
                className="w-12 h-12 flex justify-center items-center 
                bg-[#0d1b55] rounded-xl border border-[#00D3F3]
                transform transition-transform duration-500
                hover:rotate-y-180"
              >
                <BsLightningCharge className="w-6 h-6 text-[#00D3F3]" />
              </div>

              <h1 className="text-white text-lg font-semibold">
                Instant Liquidity
              </h1>
              <h1 className="text-gray-400 font-semibold">
                Receive STAKED tokens immediately upon staking. Use them in DeFi
                while earning staking rewards.
              </h1>
            </div>

            <div className="w-full sm:w-80 lg:w-75 h-auto min-h-56 flex flex-col gap-3 bg-[#0F1A3A]  border border-gray-700 hover:border-[#00D3F3] p-6 transform hover:scale-105 duration-500 rounded-2xl justify-start items-start">
              <div
                className="w-12 h-12 flex justify-center items-center 
                bg-[#0d1b55] rounded-xl border border-[#00D3F3]
                transform transition-transform duration-500
                hover:rotate-y-180"
              >
                <LuShield className="w-6 h-6 text-[#00D3F3]" />
              </div>

              <h1 className="text-white text-lg font-semibold">
                Secure & Audited
              </h1>
              <h1 className="text-gray-400 font-semibold">
                Smart contracts audited by leading security firms. Your funds
                are protected by battle-tested code.
              </h1>
            </div>

            <div className="w-full sm:w-80 lg:w-75 h-auto min-h-56 flex flex-col gap-3 bg-[#0F1A3A]  border border-gray-700 hover:border-[#00D3F3] p-6 transform hover:scale-105 duration-500 rounded-2xl justify-start items-start">
              <div
                className="w-12 h-12 flex justify-center items-center 
                bg-[#0d1b55] rounded-xl border border-[#00D3F3]
                transform transition-transform duration-500
                hover:rotate-y-180"
              >
                <SlGraph className="w-6 h-6 text-[#00D3F3]" />
              </div>

              <h1 className="text-white text-lg font-semibold">
                Competitive APY
              </h1>
              <h1 className="text-gray-400 font-semibold">
                Earn up to 5.2% APY on your staked TON. Rewards are
                automatically compounded.
              </h1>
            </div>
          </div>

          <div className="box flex flex-col md:flex-row w-full mb-14 justify-evenly items-center flex-wrap">
            <div className="w-full sm:w-80 lg:w-75 h-auto min-h-56 flex flex-col gap-3 bg-[#0F1A3A]  border border-gray-700 hover:border-[#00D3F3] p-6 transform hover:scale-105 duration-500 rounded-2xl justify-start items-start">
              <div
                className="w-12 h-12 flex justify-center items-center 
                bg-[#0d1b55] rounded-xl border border-[#00D3F3]
                transform transition-transform duration-500
                hover:rotate-y-180"
              >
                <TbArrowCapsule className="w-6 h-6 text-[#00D3F3]" />
              </div>

              <h1 className="text-white text-lg font-semibold">
                No Lock-up Period
              </h1>
              <h1 className="text-gray-400 font-semibold">
                Unstake your TON anytime. Enjoy flexibility without sacrificing
                rewards.
              </h1>
            </div>

            <div className="w-full sm:w-80 lg:w-75 h-auto min-h-56 flex flex-col gap-3 bg-[#0F1A3A]  border border-gray-700 hover:border-[#00D3F3] p-6 transform hover:scale-105 duration-500 rounded-2xl justify-start items-start">
              <div
                className="w-12 h-12 flex justify-center items-center 
                bg-[#0d1b55] rounded-xl border border-[#00D3F3]
                transform transition-transform duration-500
                hover:rotate-y-180"
              >
                <RiCoinsFill className="w-6 h-6 text-[#00D3F3]" />
              </div>

              <h1 className="text-white text-lg font-semibold">
                DeFi Integration
              </h1>
              <h1 className="text-gray-400 font-semibold">
                Use STAKED across the TON ecosystem. Participate in lending,
                farming, and more.
              </h1>
            </div>

            <div className="w-full sm:w-80 lg:w-75 h-auto min-h-56 flex flex-col gap-3 bg-[#0F1A3A]  border border-gray-700 hover:border-[#00D3F3] p-6 transform hover:scale-105 duration-500 rounded-2xl justify-start items-start">
              <div
                className="w-12 h-12 flex justify-center items-center 
                bg-[#0d1b55] rounded-xl border border-[#00D3F3]
                transform transition-transform duration-500
                hover:rotate-y-180"
              >
                <IoLockClosedOutline className="w-6 h-6 text-[#00D3F3]" />
              </div>

              <h1 className="text-white text-lg font-semibold">
                Non-Custodial
              </h1>
              <h1 className="text-gray-400 font-semibold">
                You maintain full control. Stake and unstake directly from your
                wallet.{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
