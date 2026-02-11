import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosHelpBuoy } from "react-icons/io";
import { LuSparkles, LuShield, LuCpu, LuCoins, LuLock } from "react-icons/lu";
import { FaCube, FaTelegramPlane } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Questions = () => {
  const containerRef = useRef(null);
  const faqItemsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Premium header animation
      gsap.from(".faq-header", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".faq-header",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".faq-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".faq-subtitle",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Staggered FAQ items with 3D effect
      faqItemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          y: 60,
          opacity: 0,
          rotationX: 10,
          duration: 1,
          delay: index * 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Animated background particles
      gsap.to(".gradient-orb-faq", {
        x: "random(-40, 40)",
        y: "random(-30, 30)",
        scale: "random(0.8, 1.2)",
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: "What is liquid staking?",
      answer:
        "Liquid staking is a revolutionary DeFi primitive that tokenizes your staked assets. When you stake TON through our protocol, you receive stTON tokens that represent your staked position. Unlike traditional staking, your capital remains liquid and can be deployed across various DeFi protocols while continuously earning staking rewards.",
      icon: <LuCoins className="w-5 h-5" />,
      category: "basics",
      gradient: "from-[#00D3F3] to-[#0066FF]",
    },
    {
      question: "How do I receive my staking rewards?",
      answer:
        "Rewards are automatically reflected in the increasing value of your stTON tokens relative to TON. The protocol's validator set performs optimally to maximize yields, and rewards compound automatically. You can track your rewards in real-time through our dashboard or any DeFi platform supporting stTON.",
      icon: <LuSparkles className="w-5 h-5" />,
      category: "rewards",
      gradient: "from-[#9945FF] to-[#00D3F3]",
    },
    {
      question: "Is there a lock-up period?",
      answer:
        "Zero lock-up. Zero waiting. Our protocol offers complete liquidity freedom - stake and unstake anytime, instantly. No unbonding periods, no withdrawal delays. Your TON is always accessible while still generating yield.",
      icon: <LuLock className="w-5 h-5" />,
      category: "flexibility",
      gradient: "from-[#FF6B4A] to-[#FFB800]",
    },
    {
      question: "What is stTON?",
      answer:
        "stTON (Staked TON) is our liquid staking token, representing your staked TON plus accumulated rewards. It's a yield-bearing asset that appreciates against TON over time. Each stTON is fully backed 1:1 by staked TON and can be used across the TON DeFi ecosystem for lending, trading, or as collateral.",
      icon: <FaCube className="w-5 h-5" />,
      category: "tokens",
      gradient: "from-[#00F5A0] to-[#00D3F3]",
    },
    {
      question: "Is my TON secure?",
      answer:
        "Security is paramount. Our protocol undergoes regular audits by top-tier firms, employs battle-tested smart contracts, and maintains a non-custodial architecture. Your assets never leave your control - we simply facilitate the staking process through transparent, verifiable on-chain transactions.",
      icon: <LuShield className="w-5 h-5" />,
      category: "security",
      gradient: "from-[#FF4D4D] to-[#FF8C42]",
    },
    {
      question: "What are the fees?",
      answer:
        "We charge a competitive 10% fee exclusively on staking rewards - not on your principal. This aligns our incentives with yours; we only earn when you earn. No hidden fees, no gas gouging, no surprise charges. All fees are transparent and visible on-chain.",
      icon: <LuCpu className="w-5 h-5" />,
      category: "fees",
      gradient: "from-[#A259FF] to-[#FF6B4A]",
    },
  ];

  const categories = [
    { id: "all", label: "All Questions", count: 6 },
    { id: "basics", label: "Basics", count: 1 },
    { id: "rewards", label: "Rewards", count: 1 },
    { id: "flexibility", label: "Flexibility", count: 1 },
    { id: "tokens", label: "Tokens", count: 1 },
    { id: "security", label: "Security", count: 1 },
    { id: "fees", label: "Fees", count: 1 },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#0A0F1E] py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="gradient-orb-faq absolute top-20 left-10 w-96 h-96 bg-[#00D3F3] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse" />
        <div className="gradient-orb-faq absolute bottom-20 right-10 w-96 h-96 bg-[#9945FF] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse animation-delay-2000" />
        <div className="gradient-orb-faq absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#00D3F3]/5 via-[#9945FF]/5 to-[#FF6B4A]/5 rounded-full blur-3xl" />

        {/* Hexagon Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 1L58.5 16V46L30 61L1.5 46V16L30 1z' stroke='%2300D3F3' stroke-width='0.5' fill='none' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient
              id="line-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#00D3F3" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#9945FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FF6B4A" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <line
            x1="0"
            y1="20%"
            x2="100%"
            y2="20%"
            stroke="url(#line-gradient)"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
          <line
            x1="0"
            y1="80%"
            x2="100%"
            y2="80%"
            stroke="url(#line-gradient)"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="faq-header text-center mb-12">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D3F3]/10 border border-[#00D3F3]/20 backdrop-blur-sm mb-6">
            <IoIosHelpBuoy className="w-4 h-4 text-[#00D3F3]" />
            <span className="text-[#00D3F3] text-sm font-medium tracking-wider">
              SUPPORT CENTER
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Knowledge{" "}
            <span className="bg-gradient-to-r from-[#00D3F3] via-[#9945FF] to-[#FF6B4A] bg-clip-text text-transparent">
              Base
            </span>
          </h1>

          <p className="faq-subtitle text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Everything you need to know about liquid staking on TON. Can't find
            what you're looking for? We're here to help.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-[#00D3F3] to-[#9945FF] text-white shadow-lg shadow-[#00D3F3]/20"
                    : "bg-[#0F1425] text-gray-400 hover:text-white border border-gray-800 hover:border-[#00D3F3]/30"
                }`}
            >
              {category.label}
              <span
                className={`ml-2 px-1.5 py-0.5 rounded-full text-xs
                ${
                  activeCategory === category.id
                    ? "bg-white/20 text-white"
                    : "bg-gray-800 text-gray-400"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (faqItemsRef.current[index] = el)}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative cursor-pointer"
            >
              {/* Glow Effect on Hover/Active */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${
                  faq.gradient
                } opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl
                ${activeIndex === index ? "opacity-20" : ""}`}
              />

              {/* Main Card */}
              <div
                className={`relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500
                ${
                  activeIndex === index
                    ? "bg-[#0F1425] border-[#00D3F3]/50 shadow-lg shadow-[#00D3F3]/10"
                    : "bg-[#0F1425]/80 border-gray-800/50 hover:border-[#00D3F3]/30 hover:bg-[#0F1425]"
                }`}
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`relative flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${
                      faq.gradient
                    } p-0.5
                    ${
                      activeIndex === index
                        ? "scale-110"
                        : "group-hover:scale-105"
                    } transition-transform duration-300`}
                  >
                    <div className="w-full h-full rounded-xl bg-[#0F1425] flex items-center justify-center">
                      <div
                        className={`${
                          activeIndex === index
                            ? "text-[#00D3F3]"
                            : "text-gray-400 group-hover:text-[#00D3F3]"
                        } transition-colors duration-300`}
                      >
                        {faq.icon}
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 overflow-hidden">
                      <div className="absolute top-0 -inset-full h-full w-1/2 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
                    </div>
                  </div>

                  {/* Question */}
                  <div className="flex-1">
                    <h3
                      className={`text-base sm:text-lg font-semibold transition-colors duration-300 pr-8
                      ${
                        activeIndex === index
                          ? "text-transparent bg-clip-text bg-gradient-to-r " +
                            faq.gradient
                          : "text-white group-hover:text-[#00D3F3]"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500
                    ${
                      activeIndex === index
                        ? "bg-gradient-to-r " + faq.gradient + " rotate-180"
                        : "bg-[#1A1F32] group-hover:bg-[#00D3F3]/20"
                    }`}
                  >
                    <IoIosArrowDown
                      className={`w-4 h-4 transition-all duration-500
                        ${
                          activeIndex === index
                            ? "text-white"
                            : "text-gray-400 group-hover:text-[#00D3F3]"
                        }`}
                    />
                  </div>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out
                  ${
                    activeIndex === index
                      ? "max-h-96 opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-14">
                    <div className="relative">
                      {/* Decorative Line */}
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b ${faq.gradient} opacity-50 rounded-full`}
                      />

                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed pl-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-[#00D3F3]/10 via-[#9945FF]/10 to-[#FF6B4A]/10 backdrop-blur-sm border border-gray-800/50 text-center">
          <div className="inline-flex justify-center items-center gap-3 mb-4">
            <HiOutlineChatBubbleLeftRight className="w-6 h-6 text-[#00D3F3]" />
            <span className="text-white font-semibold text-lg">
              Still have questions?
            </span>
          </div>

          <p className="text-gray-400 mb-6">
            Can't find the answer you're looking for? Our community and support
            team are here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-[#00D3F3] to-[#9945FF] rounded-xl text-white font-medium hover:shadow-lg hover:shadow-[#00D3F3]/30 transition-all duration-300 hover:scale-105">
              Contact Support
            </button>

            <button className="px-6 py-3 bg-[#0F1425] border border-gray-700 hover:border-[#00D3F3]/30 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105">
              <FaTelegramPlane className="w-4 h-4 text-[#00D3F3]" />
              Join Community
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          100% {
            left: 200%;
          }
        }
        .animate-shine {
          animation: shine 1.5s ease-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Questions;
