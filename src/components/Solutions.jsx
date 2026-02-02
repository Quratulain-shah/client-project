import React, { useEffect } from "react";
import { HiBuildingOffice } from "react-icons/hi2";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Solutions = () => {
  useEffect(() => {
    gsap.from(".liness", {
      opacity: 0,
      y: 70,
      duration: 1,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".liness",
        start: "top 90%",
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(".blockk", {
      opacity: 0,
      y: 70,
      duration: 1,
      delay: 0.4,
      scrollTrigger: {
        trigger: ".blockk",
        start: "top 80%",
      },
    });
  }, []);

  const data = [
    {
      icon: <HiBuildingOffice className="w-6 h-6 text-white" />,
      heading: "Exchanges & Custodians",
      desc: "Offer liquid staking to your users with our white-label solution. Earn additional revenue while maintaining custody.",
      tickIcon: <FaRegCheckCircle className="w-4 h-4 text-[#37B3FE]" />,
      p1: "White-label API",
      p2: "Revenue sharing",
      p3: "Full custody control",
    },
    {
      icon: <HiOutlineArrowTrendingUp className="w-6 h-6 text-white" />,
      heading: "Asset Managers",
      desc: "Enhance portfolio yields with secure TON staking. Access institutional-grade infrastructure and reporting.",
      tickIcon: <FaRegCheckCircle className="w-4 h-4 text-[#37B3FE]" />,
      p1: "Optimized yields",
      p2: "Risk management",
      p3: "Portfolio analytics",
    },
    {
      icon: <GoPeople className="w-6 h-6 text-white" />,
      heading: "DAOs & Treasuries",
      desc: "Put idle treasury assets to work. Maintain liquidity while earning staking rewards at scale.",
      tickIcon: <FaRegCheckCircle className="w-4 h-4 text-[#37B3FE]" />,
      p1: "Multi-sig support",
      p2: "Governance tools",
      p3: "Treasury analytics",
    },
  ];
  return (
    <div className="pt-24 bg-[#0C1639] flex flex-col justify-center pb-10">
      <div className="flex flex-col text-center gap-2 liness">
        <h1 className="text-white text-5xl">
          Tailored <span className="text-[#37B3FE]"> Solutions </span>
        </h1>
        <h1 className="text-gray-400 text-xl leading-relaxed">
          Custom solutions for every type of institutional client
        </h1>
      </div>

      <div className="flex justify-center flex-wrap gap-8 mt-10 blockk">
        {data.map((item, index) => (
          <div
            className="w-86 group bg-[#0E1734] p-6 rounded-xl flex flex-col gap-3 border border-gray-700 transition transform hover:border-[#37B3FE]"
            key={index}
          >
            <div className="w-10 h-10 bg-[#37B3FE] rounded-xl flex justify-center items-center transition-transform group-hover:scale-110">
              {item.icon}
            </div>
            <div className="text-white text-xl">{item.heading}</div>
            <div className="text-gray-400 text-sm font-semibold">
              {item.desc}
            </div>

            <div className="flex flex-row gap-2 justify-start items-center text-sm text-white">
              {item.tickIcon}
              {item.p1}
            </div>

            <div className="flex flex-row gap-2 justify-start items-center text-sm text-white">
              {item.tickIcon}
              {item.p2}
            </div>

            <div className="flex flex-row gap-2 justify-start items-center text-sm text-white">
              {item.tickIcon}
              {item.p3}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
