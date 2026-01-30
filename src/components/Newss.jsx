import React from "react";
import { LuBuilding2 } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";

const Newss = () => {
  const data = [
    {
      img: "./public/coin.PNG",
      head: "TON Liquid Reaches $50M TVL Milestone",
      desc: "We are thrilled to announce that TON Liquid has surpassed $50 million in Total Value Locked, marking a significant milestone in our journey to...",
      date: "Nov 4, 2025",
      time: "3 min read",
    },
    {
      img: "/t3.PNG",
      head: "How to Maximize Your TON Staking Rewards",
      desc: "Learn the best strategies to optimize your liquid staking returns with TON Liquid. This comprehensive guide covers everything from...",
      date: "Nov 1, 2025",
      time: "7 min read",
    },
    {
      img: "/light.PNG",
      head: "Protocol Update: Reduced Fees & Improved UX",
      desc: "We're excited to announce a major protocol update that reduces staking fees and introduces a completely redesigned user interface for better...",
      date: "Oct 27, 2025",
      time: "4 min read",
    },
    {
      img: "/coin.PNG",
      head: "Understanding Liquid Staking on TON",
      desc: "New to liquid staking? This beginner-friendly guide explains how liquid staking works on TON blockchain and why it's revolutionizing the way...",
      date: "Oct 24, 2025",
      time: "5 min read",
    },
    {
      img: "/t3.PNG",
      head: "Partnership Announcement: Integration with Major DEX",
      desc: "TON Liquid partners with leading decentralized exchanges to enable seamless trading and liquidity provision using stTON tokens.",
      date: "Oct 19, 2025",
      time: "3 min read",
    },
    {
      img: "/light.PNG",
      head: "Q4 2024 Roadmap Released",
      desc: "Check out our ambitious roadmap for Q4 2024, featuring new features, partnerships, and exciting developments for the TON Liquid...",
      date: "Oct 14, 2025",
      time: "6 min read",
    },
    {
      img: "/coin.PNG",
      head: "Security Audit Results Published",
      desc: "Independent security audit confirms TON Liquid smart contracts are secure and follow best practices. Read the full report and learn about...",
      date: "Oct 9, 2025",
      time: "4 min read",
    },
    {
      img: "/t3.PNG",
      head: "DeFi Strategies: Using stTON in Lending Protocols",
      desc: "Discover advanced DeFi strategies that leverage stTON tokens for lending, borrowing, and yield farming to maximize your crypto returns.",
      date: "Oct 4, 2025",
      time: "8 min read",
    },
  ];
  return (
    <div className="flex justify-center bg-gradient-to-b pt-30 from-[#020511] to-[#0F1B42]">
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex justify-center items-center gap-2 flex-row w-full md:w-36  h-9 bg-[#071535] rounded-3xl border border-[#3da9fc]">
          <LuBuilding2 className="text-[#219bf8] w-4 h-4" />
          <h1 className="text-white text-sm text-center">Latest Updates</h1>
        </div>

        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-5xl text-[#219bf8] ">News & Updates</h1>
          <h1 className="text-gray-400 font-semibold text-xl">
            Stay informed about the latest developments and announcements
          </h1>
        </div>

        <div className="flex flex-row w-full md:w-4xl h-14 border hover:border-[#219bf8] focus:border-2 focus:border-gray-500 active:border-2 active:border-gray-500 gap-4 border-gray-700 justify-start items-center p-2 rounded-xl">
          <IoIosSearch className="w-6 h-6 text-gray-300" />
          <input
            type="text"
            placeholder="Search articles..."
            className="text-sm w-full text-gray-300 appearance-none outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-6 justify-start p-6">
          {data.map((item, index) => (
            <div
              className="w-96 h-72 bg-[#0C1531] rounded-xl border border-gray-600"
              key={index}
            >
              <div className="w-full h-44">{item.img}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newss;
