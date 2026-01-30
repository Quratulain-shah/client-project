import React, { useState } from "react";
import { LuBuilding2 } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

const Newss = () => {
  const [search, setSearch] = useState("");

  const data = [
    {
      img: "/coin.PNG",
      head: "TON Liquid Reaches $50M TVL Milestone",
      desc: "We are thrilled to announce that TON Liquid has surpassed $50 million in Total Value Locked, marking a significant milestone in our journ...",
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
      desc: "We're excited to announce a major protocol update that reduces staking fees and introduces a completely redesigned user interface for...",
      date: "Oct 27, 2025",
      time: "4 min read",
    },
    {
      img: "/coin.PNG",
      head: "Understanding Liquid Staking on TON",
      desc: "New to liquid staking? This beginner-friendly guide explains how liquid staking works on TON blockchain and why it's revolutioniz...",
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
      desc: "Independent security audit confirms TON Liquid smart contracts are secure and follow best practices...",
      date: "Oct 9, 2025",
      time: "4 min read",
    },
    {
      img: "/t3.PNG",
      head: "DeFi Strategies: Using stTON in Lending Protocols",
      desc: "Discover advanced DeFi strategies that leverage stTON tokens for lending, borrowing, and yield farming...",
      date: "Oct 4, 2025",
      time: "8 min read",
    },
  ];

  const filteredData = data.filter((item) => {
    return (
      item.head.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      item.desc.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  });

  return (
    <div className="flex justify-center bg-gradient-to-b pt-16 md:pt-24 lg:pt-30 from-[#040b24] to-[#0F1B42] px-4">
      <div className="flex flex-col justify-center items-center gap-6 w-full max-w-7xl">
        <div className="flex justify-center items-center gap-2 flex-row w-full sm:w-40 h-9 bg-[#071535] rounded-3xl border border-[#3da9fc]">
          <LuBuilding2 className="text-[#219bf8] w-4 h-4" />
          <h1 className="text-white text-sm text-center">Latest Updates</h1>
        </div>

        <div className="flex flex-col gap-4 text-center px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#219bf8]">
            News & Updates
          </h1>
          <h1 className="text-gray-400 font-semibold text-base sm:text-lg md:text-xl">
            Stay informed about the latest developments and announcements
          </h1>
        </div>

        <div className="flex flex-row w-full max-w-4xl h-12 md:h-14 border hover:border-[#219bf8] gap-4 border-gray-700 justify-start items-center p-3 rounded-xl">
          <IoIosSearch className="w-5 h-5 md:w-6 md:h-6 text-gray-300" />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-sm w-full text-gray-300 appearance-none outline-none bg-transparent"
          />
        </div>

        <div className="flex flex-wrap gap-6 py-6 md:p-10 justify-center md:justify-start w-full">
          {filteredData.map((item, index) => (
            <div
              className="w-full sm:w-[48%] lg:w-96 group transform bg-[#0C1531] rounded-xl transition-transform hover:-translate-y-2 duration-300 border border-gray-600 hover:border-[#219bf8]"
              key={index}
            >
              <img
                src={item.img}
                className="w-full rounded-t-xl h-40 sm:h-44 object-cover"
              />

              <div className="text-lg sm:text-xl text-white px-4 mt-4 group-hover:text-[#219bf8]">
                {item.head}
              </div>

              <div className="px-4 text-sm sm:text-md font-semibold text-gray-400 mt-4">
                {item.desc}
              </div>

              <div className="flex flex-row flex-wrap gap-3 mt-4 mb-4">
                <div className="flex flex-row gap-1 px-4 text-gray-400 text-sm font-semibold items-center">
                  <CiCalendarDate className="w-5 h-5" />
                  {item.date}
                </div>

                <div className="flex flex-row gap-1 px-4 text-gray-400 text-sm font-semibold items-center">
                  <IoMdTime className="w-5 h-5" />
                  {item.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newss;
