import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Questions = () => {
  useEffect(() => {
    gsap.from(".words", {
      y: 60,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".words",
        start: "top 80%",
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(".ques", {
      y: 60,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".ques",
        start: "top 80%",
      },
    });
  }, []);
  const faqs = [
    {
      question: "What is liquid staking ?",
      answer:
        "Liquid staking allows you to stake your TON tokens and receive STAKED in return. Unlike traditional staking, you can use STAKED in DeFi applications while still earning staking rewards.",
    },
    {
      question: "How do i received my staking reward?",
      answer:
        "Rewards are automatically reflected in the value of your STAKED tokens.",
    },
    {
      question: "is there a Lock-up period?",
      answer:
        "No, there is no lock-up period. You can unstake your TON at any time.",
    },
    {
      question: "What is STAKED",
      answer:
        "STAKED is a liquid staking token that represents your staked TON plus rewards.",
    },
    {
      question: "Is my TON safe?",
      answer:
        "Yes, our smart contracts are audited and the protocol is non-custodial.",
    },
    {
      question: "Where are the fees?",
      answer: "We charge a 10% fee on staking rewards only.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-[#091333] flex justify-center py-16 px-4 sm:px-6">
      <div className="w-full max-w-4xl flex flex-col gap-10">
        <div className="text-center words">
          <h1 className="text-white font-semibold text-2xl sm:text-3xl md:text-5xl">
            Frequently Asked <span className="text-[#00D3F3]">Questions</span>
          </h1>

          <p className="text-gray-400 font-medium text-sm sm:text-base md:text-xl mt-3">
            Everything you need to know about Staking.
          </p>
        </div>

        <div className="flex flex-col gap-5 ques">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="bg-[#0C1632] border-t border-l border-r border-gray-700 hover:border-[#00D3F3]
                         rounded-xl p-4 sm:p-5 cursor-pointer transition-all"
            >
              <div className="flex justify-between items-center gap-4">
                <h2 className="text-white text-sm sm:text-base md:text-lg font-medium">
                  {faq.question}
                </h2>

                <IoIosArrowDown
                  className={`text-gray-400 text-lg transition-transform duration-300
                  ${activeIndex === index ? "rotate-180 text-[#00D3F3]" : ""}`}
                />
              </div>

              {activeIndex === index && (
                <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
