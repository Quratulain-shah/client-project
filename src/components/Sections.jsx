import React from "react";
import { LuWallet } from "react-icons/lu";
import { MdOutlineContentCopy } from "react-icons/md";
import { useNavigate } from "react-router";
import { IoExitOutline } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosCalculator } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { TbTimeline } from "react-icons/tb";
import { FaCoins } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";

const Sections = () => {
  const navigate = useNavigate();
  const payments = ["Visa", "Mastercard", "Apple Pay"];
  return (
    <div className="bg-gradient-to-b from-[#040f24] to-[#08244e] pb-10 pt-20 sm:pt-24 lg:pt-28">
      <div className="flex flex-col gap-6 p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto">
        <div className="bg-[#081026] flex flex-col sm:flex-row justify-between w-full min-h-20 rounded-xl p-3 pt-4 border border-gray-700 gap-3 sm:gap-0">
          <div className="flex flex-row gap-3">
            <div className="w-10 h-10 bg-[#2B7FFF] flex justify-center items-center rounded-full flex-shrink-0">
              <LuWallet className="text-white w-5 h-5" />
            </div>

            <div className="flex flex-col">
              <h1 className="text-gray-400 text-sm">Connected Wallet</h1>
              <h1 className="text-white text-shadow-md">UQD4JN...6TD8</h1>
            </div>
          </div>

          <div className="flex flex-row gap-2 mt-0 sm:mt-2">
            <div className="w-9 h-9 bg-[#2B7FFF] hover:bg-[#081026] border hover:border-gray-400 flex justify-center items-center rounded-md flex-shrink-0">
              <LuWallet className="text-white w-5 h-5" />
            </div>

            <div
              className="relative flex flex-row justify-center gap-3 items-center w-auto px-3 h-9 bg-[#2883FF] hover:bg-[#081026] border hover:border-gray-400 rounded-md cursor-pointer"
              onClick={() => navigate("/AppPage")}
            >
              <IoExitOutline className="w-6 h-6 text-white" />
              <h1 className="text-white text-sm font-semibold">Disconnect</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-6">
          <div className="flex flex-col w-full xl:w-auto xl:flex-1 p-3 sm:p-4 lg:p-6 bg-[#081026] border border-gray-600 rounded-2xl">
            <div className="w-full h-8 flex flex-row justify-center items-center gap-0.5 border border-gray-600 rounded-xl">
              <div className="w-1/2 bg-[#132957] flex text-center justify-center border border-[#2883FF] h-7.5 rounded-xl cursor-pointer">
                <h1 className="text-white">Stake</h1>
              </div>

              <div className="w-1/2 flex text-center justify-center border h-7.5 rounded-xl cursor-pointer">
                <h1 className="text-white">Unstake</h1>
              </div>
            </div>

            <div className="w-full p-3 flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
              <h1 className="text-gray-400 text-sm sm:text-md">Stake Amount</h1>
              <h1 className="text-gray-400 text-sm sm:text-md">
                Balance: 1250.45 TON
              </h1>
            </div>

            <div className="w-full p-3 h-14 flex justify-between items-center border border-gray-600 hover:border-2 hover:border-gray-400 rounded-xl">
              <input
                type="number"
                placeholder="0.00"
                className="text-gray-400 h-7 appearance-none bg-transparent border-none outline-none w-full"
              />
              <div className="flex flex-row gap-3 flex-shrink-0">
                <h1 className="text-[#00D3F3] font-semibold text-lg sm:text-xl hover:bg-blue-100 hover:border rounded-md cursor-pointer px-1">
                  MAX
                </h1>
                <h1 className="text-gray-400 font-semibold text-lg sm:text-xl">
                  TON
                </h1>
              </div>
            </div>

            <div className="p-3 w-full bg-[#081026] flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 border mt-6 sm:mt-8 rounded-xl border-gray-700">
              <div className="flex flex-col gap-2 sm:gap-3">
                <h1 className="text-gray-400 text-sm font-semibold">
                  You will receive
                </h1>
                <h1 className="text-gray-400 text-sm font-semibold">
                  Exchange rate
                </h1>
              </div>

              <div className="flex flex-col gap-2 text-left sm:text-right">
                <h1 className="text-white text-base sm:text-lg font-semibold">
                  0.0000 STAKED
                </h1>
                <h1 className="text-gray-400 text-sm font-semibold">
                  1 STAKED = 1.0420 TON
                </h1>
              </div>
            </div>

            <div className="w-full p-3 bg-[#0F2148] rounded-xl flex flex-row gap-3 sm:gap-4 border justify-center items-center border-gray-700 mt-6 sm:mt-8">
              <FaInfoCircle className="text-[#00D3F3] w-4 h-4 flex-shrink-0" />
              <p className="text-gray-400 text-sm sm:text-base">
                Your STAKED tokens will automatically earn rewards. The exchange
                rate increases as rewards accrue.
              </p>
            </div>

            <div className="w-full flex flex-row gap-4 bg-gradient-to-r from-[#16519B] to-[#067295] justify-center items-center text-center h-12 sm:h-14 mt-6 sm:mt-8 rounded-xl cursor-pointer">
              <h1 className="text-gray-300 text-sm sm:text-base">Stake TON</h1>
              <FaArrowRightLong className="text-gray-400 w-4 h-4" />
            </div>
          </div>

          <div className="w-full xl:w-[25rem] bg-[#0A122B] p-4 sm:p-5 rounded-xl flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#082F54] flex justify-center items-center flex-shrink-0">
                <IoIosCalculator className="text-[#00D3F3] w-6 h-6" />
              </div>

              <div className="flex flex-col gap-0">
                <h1 className="text-white text-base sm:text-lg">
                  Staking Calculator
                </h1>
                <h1 className="text-gray-400 text-sm">Estimate your rewards</h1>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-gray-400 text-sm font-semibold">
                Staking Amount (TON)
              </h1>
              <div className="w-full p-3 sm:p-4  rounded-xl border border-gray-700 hover:border-2 hover:border-gray-400">
                <input
                  type="number"
                  placeholder="1000"
                  className="text-white appearance-none border-none w-full focus:ring-0 outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="w-full p-3 justify-between flex flex-row">
              <h1 className="text-gray-400 text-sm font-semibold">Duration</h1>
              <h1 className="text-gray-400 text-sm font-semibold">days</h1>
            </div>

            <div className="w-full p-3 bg-[#030213] h-4 rounded-full flex justify-center items-center">
              <input
                type="range"
                className="w-full h-3 rounded-full cursor-pointer text-white"
              />
            </div>

            <div className="p-3 w-full flex flex-row justify-between">
              <h1 className="text-sm text-gray-400 font-semibold">1M</h1>
              <h1 className="text-sm text-gray-400 font-semibold">3M</h1>
              <h1 className="text-sm text-gray-400 font-semibold">6M</h1>
              <h1 className="text-sm text-gray-400 font-semibold">1Y</h1>
            </div>

            <div className="bg-[#0B2448] p-3 sm:p-4 flex flex-col gap-3 rounded-xl border border-[#00D3F3]">
              <div className="flex justify-between">
                <h1 className="text-sm font-semibold text-gray-400">
                  Current APY
                </h1>
                <h1 className="text-sm font-semibold text-[#00D3F3]">5.2%</h1>
              </div>

              <div className="flex justify-between gap-4">
                <h1 className="text-sm font-semibold text-gray-400">
                  Estimated Rewards
                </h1>
                <h1 className="text-sm font-semibold text-[#00D3F3]">
                  +0.00 TON
                </h1>
              </div>
              <div className="w-full bg-gray-700 h-0.5"></div>

              <div className="flex justify-between gap-4">
                <h1 className="text-sm sm:text-md font-semibold text-white">
                  Total Value
                </h1>
                <h1 className="text-lg sm:text-xl font-semibold text-white">
                  0.00 TON
                </h1>
              </div>
            </div>

            <div className="w-full justify-center items-center text-center mt-2">
              <h1 className="text-gray-400 text-xs sm:text-sm">
                *Estimates are based on current APY and may vary
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-6 sm:gap-8">
          <div className="flex flex-col gap-6 w-full xl:flex-1">
            <div className="flex flex-col w-full p-4 sm:p-6 bg-[#081026] border border-gray-600 rounded-2xl">
              <div className="flex flex-col justify-start mb-4">
                <h1 className="text-white text-base sm:text-lg font-semibold">
                  Your Portfolio
                </h1>
                <h1 className="text-gray-400 text-sm sm:text-md">
                  Track your staked funds and rewards
                </h1>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 lg:gap-10">
                <div className="w-full md:w-auto md:flex-1 max-w-md p-3 sm:p-4 bg-[#09112C] flex flex-col gap-2 border border-gray-600 rounded-xl">
                  <div className="flex flex-row justify-between">
                    <div className="w-8 h-8 rounded-md bg-[#102555] flex justify-center items-center">
                      <LuWallet className="w-5 h-5 text-[#00D3F3]" />
                    </div>
                    <div className="flex flex-row gap-1 justify-center items-center">
                      <MdArrowOutward className="w-3 h-3 text-[#00D3F3]" />
                      <h1 className="text-[#00D3F3] text-sm">+4.2%</h1>
                    </div>
                  </div>

                  <div>
                    <h1 className="text-gray-400 text-sm font-semibold">
                      Staked STAKED
                    </h1>
                  </div>

                  <div>
                    <h1 className="text-white text-xl font-semibold">420.78</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-400 text-sm font-semibold">
                      ≈ 438.45 TON
                    </h1>
                  </div>
                </div>

                <div className="w-full md:w-auto md:flex-1 max-w-md p-3 sm:p-4 bg-[#09112C] flex flex-col gap-2 border border-gray-600 rounded-xl">
                  <div className="flex flex-row justify-between">
                    <div className="w-8 h-8 rounded-md bg-[#102555] flex justify-center items-center">
                      <TbTimeline className="w-5 h-5 text-[#00D3F3]" />
                    </div>
                    <div className="flex flex-row gap-1 justify-center items-center">
                      <h1 className="text-[#00D3F3] text-sm">+4.2%</h1>
                    </div>
                  </div>

                  <div>
                    <h1 className="text-gray-400 text-sm font-semibold">
                      Total REWARD
                    </h1>
                  </div>

                  <div>
                    <h1 className="text-white text-xl font-semibold">
                      17.67 TON
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-gray-400 text-sm font-semibold">
                      Lifetime earnings
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full p-4 sm:p-6 bg-[#081026] border border-gray-600 rounded-2xl">
              <div className="flex flex-col justify-start mb-4">
                <h1 className="text-white text-base sm:text-lg font-semibold">
                  Transaction History
                </h1>
                <h1 className="text-gray-400 text-sm sm:text-md">
                  Recent activity on your account
                </h1>
              </div>

              <div className="bg-[#080F28] p-3 rounded-xl border border-gray-700 mt-2 w-full flex flex-col sm:flex-row justify-between gap-3 sm:gap-2">
                <div className="flex flex-row gap-2">
                  <div className="flex w-10 h-10 sm:w-12 sm:h-12 rounded-md justify-center items-center bg-[#0F2454] flex-shrink-0">
                    <FaCoins className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D3F3]" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-white font-semibold text-sm sm:text-base">
                      Stake
                    </h1>
                    <h1 className="text-gray-400 text-xs sm:text-sm font-semibold">
                      2025-11-03
                    </h1>
                  </div>
                </div>

                <div className="flex flex-col sm:text-right">
                  <h1 className="text-white font-semibold text-sm sm:text-base">
                    +100 STAKED
                  </h1>
                  <h1 className="text-gray-400 font-semibold text-xs sm:text-sm">
                    completed
                  </h1>
                </div>
              </div>

              <div className="bg-[#080F28] p-3 rounded-xl border border-gray-700 mt-4 w-full flex flex-col sm:flex-row justify-between gap-3 sm:gap-2">
                <div className="flex flex-row gap-2">
                  <div className="flex w-10 h-10 sm:w-12 sm:h-12 rounded-md justify-center items-center bg-[#0F2454] flex-shrink-0">
                    <FaCoins className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D3F3]" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-white font-semibold text-sm sm:text-base">
                      Stake
                    </h1>
                    <h1 className="text-gray-400 text-xs sm:text-sm font-semibold">
                      2025-10-28
                    </h1>
                  </div>
                </div>

                <div className="flex flex-col sm:text-right">
                  <h1 className="text-white font-semibold text-sm sm:text-base">
                    +250 STAKED
                  </h1>
                  <h1 className="text-gray-400 font-semibold text-xs sm:text-sm">
                    completed
                  </h1>
                </div>
              </div>

              <div className="bg-[#080F28] p-3 rounded-xl border border-gray-700 mt-4 w-full flex flex-col sm:flex-row justify-between gap-3 sm:gap-2">
                <div className="flex flex-row gap-2">
                  <div className="flex w-10 h-10 sm:w-12 sm:h-12 rounded-md justify-center items-center bg-[#0F2454] flex-shrink-0">
                    <FaCoins className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D3F3]" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-white font-semibold text-sm sm:text-base">
                      Reward
                    </h1>
                    <h1 className="text-gray-400 text-xs sm:text-sm font-semibold">
                      2025-10-25
                    </h1>
                  </div>
                </div>

                <div className="flex flex-col sm:text-right">
                  <h1 className="text-white font-semibold text-sm sm:text-base">
                    8.5 TON
                  </h1>
                  <h1 className="text-gray-400 font-semibold text-xs sm:text-sm">
                    completed
                  </h1>
                </div>
              </div>

              <div className="bg-[#080F28] p-3 rounded-xl border border-gray-700 mt-4 w-full flex flex-col sm:flex-row justify-between gap-3 sm:gap-2">
                <div className="flex flex-row gap-2">
                  <div className="flex w-10 h-10 sm:w-12 sm:h-12 rounded-md justify-center items-center bg-[#0F2454] flex-shrink-0">
                    <FaCoins className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D3F3]" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-white font-semibold text-sm sm:text-base">
                      Stake
                    </h1>
                    <h1 className="text-gray-400 text-xs sm:text-sm font-semibold">
                      2025-10-15
                    </h1>
                  </div>
                </div>

                <div className="flex flex-col sm:text-right">
                  <h1 className="text-white font-semibold text-sm sm:text-base">
                    +70.78 STAKED
                  </h1>
                  <h1 className="text-gray-400 font-semibold text-xs sm:text-sm">
                    completed
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[25rem] bg-[#0A122B] p-4 sm:p-5 rounded-xl flex flex-col gap-4 sm:h-[30rem]">
            <div className="flex flex-row gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#082F54] flex justify-center items-center flex-shrink-0">
                <BiWallet className="text-[#00D3F3] w-6 h-6" />
              </div>

              <div className="flex flex-col gap-0">
                <h1 className="text-white text-base sm:text-lg">Buy TON</h1>
                <h1 className="text-gray-400 text-sm">Purchase with card</h1>
              </div>
            </div>

            <div className="w-full p-3 sm:p-4 bg-[#09102B] flex flex-col gap-3 border border-gray-700 rounded-2xl">
              <h1 className="text-white text-lg sm:text-xl">Quick Purchase</h1>
              <h1 className="text-gray-400 text-sm">
                Buy TON instantly with your credit or debit card. Powered by
                trusted payment providers.
              </h1>

              <div className="flex flex-row justify-center items-center gap-3 sm:gap-4 lg:gap-8">
                <div className="flex-1 max-w-[150px] bg-[#060B21] rounded-xl border flex justify-center flex-col gap-2 py-3 text-center items-center border-gray-700">
                  <h1 className="text-gray-400 text-xs sm:text-sm">
                    Min Amount
                  </h1>
                  <h1 className="text-white font-semibold text-sm">$20</h1>
                </div>

                <div className="flex-1 max-w-[150px] bg-[#060B21] rounded-xl border flex justify-center flex-col gap-2 py-3 text-center items-center border-gray-700">
                  <h1 className="text-gray-400 text-xs sm:text-sm">
                    Max Amount
                  </h1>
                  <h1 className="text-white font-semibold text-sm">$10,000</h1>
                </div>
              </div>

              <div className="w-full p-3 bg-gradient-to-r from-[#2389FF] to-[#00CBF5] h-12 rounded-xl mt-2 flex justify-center gap-3 items-center cursor-pointer">
                <BiWallet className="text-white w-5 h-5" />
                <h1 className="text-sm font-semibold text-white">
                  Buy TON with Card
                </h1>
                <IoExitOutline className="text-white w-5 h-5" />
              </div>
              <div className="flex flex-col justify-start p-3 w-full gap-3">
                <h1 className="text-gray-400 text-sm">
                  Supported payment methods:
                </h1>

                <div className="flex flex-row flex-wrap gap-2 sm:gap-4 text-white">
                  {payments.map((pay, index) => (
                    <div
                      className="text-xs sm:text-sm text-white border bg-[#060B21] border-gray-700 px-3 py-1.5 flex justify-center items-center rounded-md"
                      key={index}
                    >
                      {pay}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
