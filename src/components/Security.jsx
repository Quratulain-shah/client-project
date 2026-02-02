import React, { useEffect } from "react";
import { MdOutlineShield } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoLockClosedOutline } from "react-icons/io5";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Security = () => {
  useEffect(() => {
    gsap.from(".heads", {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".heads",
        start: "top 90%",
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(".blook", {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".blook",
        start: "top 90%",
      },
    });
  }, []);

  const data = [
    {
      icon: <MdOutlineShield className="w-6 h-6 text-white" />,
      head: "Security Measures",
      points: [
        "Multi-signature wallets with configurable thresholds",
        "Regular security audits by top firms (CertiK, Trail of Bits)",
        "Comprehensive insurance coverage for staked assets",
        "24/7 monitoring and incident response team",
      ],
    },
    {
      icon: <IoLockClosedOutline className="w-6 h-6 text-white" />,
      head: "Compliance Support",
      points: [
        "KYB/KYC processes for institutional onboarding",
        "Automated tax reporting and documentation",
        "Audit trail and transaction history exports",
        "Regulatory compliance documentation and support",
      ],
    },
  ];

  return (
    <div className=" bg-[#091331] flex justify-center pt-12 md:pt-24 px-4 pb-10">
      <div className="flex flex-col gap-6 max-w-6xl w-full">
        <div className="flex flex-col text-center gap-2 heads">
          <h1 className="text-white text-3xl md:text-5xl">
            Security & <span className="text-[#37B3FE]"> Compliance </span>
          </h1>
          <p className="text-gray-400 text-base md:text-xl leading-relaxed">
            Institutional-grade security with comprehensive compliance coverage
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center blook">
          {data.map((item, index) => (
            <div
              className="w-full sm:w-[420px] p-6 bg-[#0B132D] rounded-xl flex flex-col gap-4 border border-gray-700"
              key={index}
            >
              <div className="w-10 h-10 bg-[#00CE73] rounded-xl flex justify-center items-center">
                {item.icon}
              </div>

              <div className="text-white text-md font-semibold">
                {item.head}
              </div>

              {item.points.map((text, i) => (
                <div
                  key={i}
                  className="flex flex-row gap-2 items-start text-sm text-gray-400 font-semibold"
                >
                  <GoDotFill className="w-3 h-3 text-[#37B3FE] mt-1" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Security;
