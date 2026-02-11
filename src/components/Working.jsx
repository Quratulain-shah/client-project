import React, { useEffect, useRef } from "react";
import { LuWallet, LuArrowRight, LuSparkles } from "react-icons/lu";
import { FaCoins, FaCube } from "react-icons/fa6";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { GiCrystalShine } from "react-icons/gi";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Working = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const glitchRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Premium entrance animation
      gsap.from(".section-title", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".section-title",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".section-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".section-subtitle",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Staggered card animations with 3D effect
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          rotationX: 15,
          duration: 1.2,
          delay: index * 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Animated gradient background
      gsap.to(".gradient-orb", {
        x: "random(-50, 50)",
        y: "random(-30, 30)",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      icon: <LuWallet className="w-7 h-7 text-white" />,
      title: "Connect Wallet",
      description:
        "Seamlessly connect your TON wallet via TON Connect protocol",
      features: ["Non-custodial", "Instant", "Secure"],
      gradient: "from-[#00D3F3] to-[#0066FF]",
    },
    {
      icon: <FaCoins className="w-7 h-7 text-white" />,
      title: "Stake TON",
      description:
        "Choose your stake amount and confirm with a single transaction",
      features: ["Flexible amounts", "Gas optimized", "Instant"],
      gradient: "from-[#9945FF] to-[#00D3F3]",
    },
    {
      icon: <HiOutlineArrowTrendingUp className="w-7 h-7 text-white" />,
      title: "Receive stTON",
      description: "Get liquid staking tokens immediately, ready for DeFi",
      features: ["1:1 backing", "Auto-compounding", "DeFi ready"],
      gradient: "from-[#FF6B4A] to-[#FFB800]",
    },
    {
      icon: <GiCrystalShine className="w-7 h-7 text-white" />,
      title: "Earn & Unstake",
      description:
        "Watch rewards grow exponentially. Unstake anytime with zero lockup",
      features: ["Real-time yield", "Zero lockup", "Instant withdrawal"],
      gradient: "from-[#00F5A0] to-[#00D3F3]",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center bg-[#0A0F1E] px-4 py-20 sm:py-0 overflow-hidden"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00D3F3] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#9945FF] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#00D3F3]/5 via-[#9945FF]/5 to-[#FF6B4A]/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 211, 243, 0.05) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated Orbs */}
        <div className="gradient-orb absolute top-40 right-20 w-64 h-64 bg-gradient-to-r from-[#00D3F3]/20 to-transparent rounded-full blur-3xl" />
        <div className="gradient-orb absolute bottom-40 left-20 w-64 h-64 bg-gradient-to-r from-[#9945FF]/20 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D3F3]/10 border border-[#00D3F3]/20 backdrop-blur-sm mb-6">
            <LuSparkles className="w-4 h-4 text-[#00D3F3]" />
            <span className="text-[#00D3F3] text-sm font-medium tracking-wider">
              LIQUID STAKING PROTOCOL
            </span>
          </div>

          <h1 className="section-title text-4xl md:text-6xl font-bold text-white mb-6">
            Stake. Earn.{" "}
            <span className="bg-gradient-to-r from-[#00D3F3] via-[#9945FF] to-[#FF6B4A] bg-clip-text text-transparent">
              Amplify.
            </span>
          </h1>

          <p className="section-subtitle text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Experience the future of TON staking with instant liquidity,
            competitive yields, and enterprise-grade security
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative"
            >
              {/* Premium Card Design */}
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${
                    step.gradient.split(" ")[1]
                  }20, ${step.gradient.split(" ")[3]}20)`,
                }}
              />

              <div className="relative h-full p-8 rounded-2xl bg-[#0F1425]/90 backdrop-blur-sm border border-gray-800/50 hover:border-[#00D3F3]/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-20"
                    style={{
                      background: `linear-gradient(135deg, ${
                        step.gradient.split(" ")[1]
                      }, ${step.gradient.split(" ")[3]})`,
                    }}
                  />
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00D3F3] to-[#9945FF] rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  <div
                    className={`relative w-14 h-14 flex justify-center items-center bg-gradient-to-br ${step.gradient} rounded-xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                  >
                    {step.icon}

                    {/* Shine Effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100">
                      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0F1425] border border-[#00D3F3]/30 flex items-center justify-center text-sm font-bold text-[#00D3F3]">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00D3F3] group-hover:to-[#9945FF] transition-all duration-300">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {step.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-[#00D3F3]/10 text-[#00D3F3] border border-[#00D3F3]/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Connecting Line (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="absolute top-1/2 -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-[#00D3F3]/50 to-[#9945FF]/50" />
                      <LuArrowRight className="absolute top-1/2 -translate-y-1/2 -right-1 w-4 h-4 text-[#00D3F3] animate-pulse" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 p-8 rounded-2xl bg-[#0F1425]/50 backdrop-blur-sm border border-gray-800/50">
          {[
            { label: "Total Value Locked", value: "$125M+", change: "+15%" },
            { label: "Active Stakers", value: "50K+", change: "+22%" },
            { label: "APY", value: "8-12%", change: "Variable" },
            { label: "Network", value: "TON", change: "Secure" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
              <div className="text-white text-2xl font-bold mb-1">
                {stat.value}
              </div>
              <div className="text-[#00D3F3] text-xs font-medium">
                {stat.change}
              </div>
            </div>
          ))}
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

export default Working;
