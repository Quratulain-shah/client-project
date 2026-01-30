import React from "react";
import { MdOutlineShield } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoLockClosedOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { LuGlobe } from "react-icons/lu";
import { BsLightningCharge } from "react-icons/bs";

const Builds = () => {
  const data = [
    {
      icon: <MdOutlineShield className="text-white w-5 h-5" />,
      heading: "Enterprise-Grade Security",
      para: "Multi-signature wallets, comprehensive insurance coverage, and audited smart contracts ensure institutional-level security.",
    },
    {
      icon: <BsGraphUpArrow className="text-white w-5 h-5" />,
      heading: "Optimized Returns",
      para: "Access to premium validator pools and optimized staking strategies to maximize institutional portfolio yields.",
    },
    {
      icon: <IoLockClosedOutline className="text-white w-5 h-5" />,
      heading: "Regulatory Compliance",
      para: "Full compliance documentation, KYB processes, and support for institutional reporting requirements.",
    },
    {
      icon: <GoPeople className="text-white w-5 h-5" />,
      heading: "Dedicated Support",
      para: "24/7 dedicated account management, priority support channels, and custom integration assistance.",
    },
    {
      icon: <LuGlobe className="text-white w-5 h-5" />,
      heading: "Global Infrastructure",
      para: "Distributed validator network across multiple jurisdictions with 99.9% uptime guarantee.",
    },
    {
      icon: <BsLightningCharge className="text-white w-5 h-5" />,
      heading: "Instant Liquidity",
      para: "Access deep liquidity pools for STAKED tokens, enabling flexible treasury management at scale.",
    },
  ];
  return (
    <div className="min-h-screen pt-12 md:pt-28 flex justify-center bg-[#0A1536]">
      <div className="flex flex-col">
        <div className="flex flex-col text-center gap-2">
          <h1 className="text-white text-5xl">
            Built for <span className="text-[#37B3FE]"> Institutions </span>
          </h1>
          <h1 className="text-gray-400 text-xl leading-relaxed">
            Enterprise-grade infrastructure designed to meet the unique needs of{" "}
            <br /> institutional clients
          </h1>
        </div>

        <div className="flex justify-center flex-wrap gap-8 pt-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-86 group bg-[#0C1530] p-6 rounded-xl flex flex-col gap-3 border border-gray-700 transition hover:border-[#37B3FE] "
            >
              <div
                className="w-12 h-12 bg-[#37B3FE] rounded-xl flex justify-center items-center  transition-transform duration-300 
                      group-hover:scale-110"
              >
                {item.icon}
              </div>

              <h2 className="text-white text-lg font-semibold transition-transform group-hover:text-[#37B3FE]">
                {item.heading}
              </h2>

              <p className="text-gray-400 text-md font-semibold">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Builds;
