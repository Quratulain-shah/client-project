import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const Enterprise = () => {
  const data = [
    { text: "Customizable staking solutions for institutional portfolios" },
    { text: "White-label integration options for exchanges and custodians" },
    { text: "API access with dedicated rate limits and priority support" },
    { text: "Real-time analytics dashboard and comprehensive reporting" },
    { text: "Multi-signature wallet support and role-based access control" },
    { text: "Automated compliance reporting and tax documentation" },
    { text: "Integration with major custody providers" },
    { text: "Flexible withdrawal options with priority processing" },
  ];

  return (
    <div className="bg-[#13214F] flex justify-center pt-24 px-4 pb-10">
      <div className="flex flex-col w-full max-w-4xl gap-10">
        <div className="flex flex-col text-center gap-2">
          <h1 className="text-white text-3xl md:text-5xl">
            Enterprise <span className="text-[#37B3FE]"> Features </span>
          </h1>
          <p className="text-gray-400 text-base md:text-xl leading-relaxed">
            Custom solutions for every type of institutional client
          </p>
        </div>

        <div className="bg-[#0F1A3A] group rounded-2xl border transform border-gray-700 p-6 grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 text-sm font-semibold text-gray-400 "
            >
              <BsCheckCircle className="w-4 h-4 text-[#37B3FE] mt-1 shrink-0 transition-transform group-hover:scale-110" />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
