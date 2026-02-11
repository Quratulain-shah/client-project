import React from "react";
import { RiCoinsFill } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { MdOutlineAutoGraph } from "react-icons/md";
import { LuShield } from "react-icons/lu";
import { BsLightningCharge } from "react-icons/bs";
import { SlGraph } from "react-icons/sl";
import { TbArrowCapsule } from "react-icons/tb";
import { IoLockClosedOutline } from "react-icons/io5";

const Choose = () => {
  // ============ STATS CARDS - LUXURY STYLE ============
  const stats = [
    {
      icon: <RiCoinsFill />,
      label: "Total Value Locked",
      value: "$42.5M",
      change: "+12.3%",
      gradient: "from-blue-400 to-cyan-300",
      shadow: "shadow-blue-500/20",
    },
    {
      icon: <GoPeople />,
      label: "Active Staker",
      value: "8,234",
      change: "+8.1%",
      gradient: "from-emerald-400 to-teal-300",
      shadow: "shadow-emerald-500/20",
    },
    {
      icon: <MdOutlineAutoGraph />,
      label: "Current APY",
      value: "5.2%",
      change: "stable",
      gradient: "from-amber-400 to-yellow-300",
      shadow: "shadow-amber-500/20",
    },
    {
      icon: <LuShield />,
      label: "TON Staked",
      value: "2.1M",
      change: "+15.4%",
      gradient: "from-purple-400 to-pink-300",
      shadow: "shadow-purple-500/20",
    },
  ];

  // ============ FEATURE CARDS - ULTRA STYLISH ============
  const features = [
    {
      icon: <BsLightningCharge />,
      title: "Instant Liquidity",
      desc: "Receive STAKED tokens instantly. Use in DeFi while earning rewards.",
      gradient: "from-blue-500 to-cyan-400",
      bgGradient: "from-blue-600/20 to-cyan-600/20",
      borderGlow: "group-hover:border-blue-500/50",
      shadow: "shadow-blue-500/20",
      accent: "blue",
    },
    {
      icon: <LuShield />,
      title: "Secure & Audited",
      desc: "Audited by leading firms. Your funds are protected by battle-tested code.",
      gradient: "from-emerald-500 to-teal-400",
      bgGradient: "from-emerald-600/20 to-teal-600/20",
      borderGlow: "group-hover:border-emerald-500/50",
      shadow: "shadow-emerald-500/20",
      accent: "emerald",
    },
    {
      icon: <SlGraph />,
      title: "Competitive APY",
      desc: "Earn up to 5.2% APY. Rewards are automatically compounded.",
      gradient: "from-amber-500 to-yellow-400",
      bgGradient: "from-amber-600/20 to-yellow-600/20",
      borderGlow: "group-hover:border-amber-500/50",
      shadow: "shadow-amber-500/20",
      accent: "amber",
    },
    {
      icon: <TbArrowCapsule />,
      title: "No Lock-up Period",
      desc: "Unstake anytime. Enjoy flexibility without sacrificing rewards.",
      gradient: "from-orange-500 to-red-400",
      bgGradient: "from-orange-600/20 to-red-600/20",
      borderGlow: "group-hover:border-orange-500/50",
      shadow: "shadow-orange-500/20",
      accent: "orange",
    },
    {
      icon: <RiCoinsFill />,
      title: "DeFi Integration",
      desc: "Use STAKED across TON ecosystem. Participate in lending, farming.",
      gradient: "from-purple-500 to-pink-400",
      bgGradient: "from-purple-600/20 to-pink-600/20",
      borderGlow: "group-hover:border-purple-500/50",
      shadow: "shadow-purple-500/20",
      accent: "purple",
    },
    {
      icon: <IoLockClosedOutline />,
      title: "Non-Custodial",
      desc: "Full control. Stake directly from your wallet.",
      gradient: "from-pink-500 to-rose-400",
      bgGradient: "from-pink-600/20 to-rose-600/20",
      borderGlow: "group-hover:border-pink-500/50",
      shadow: "shadow-pink-500/20",
      accent: "pink",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0A0F1C] py-20 relative overflow-hidden">
      {/* ============ ANIMATED BACKGROUND ============ */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #00D3F3 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Moving particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00D3F3]/20 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* ============ TITLE SECTION - ANIMATED ============ */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 relative">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#00D3F3] via-[#8A2BE2] to-[#00D3F3] bg-clip-text text-transparent bg-size-200 animate-gradient relative">
                Stakee
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00D3F3] to-transparent animate-width"></div>
              </span>
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00D3F3]/20 via-transparent to-[#8A2BE2]/20 blur-3xl -z-10"></div>
          </div>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
            The most trusted{" "}
            <span className="text-[#00D3F3] font-semibold relative group">
              liquid staking protocol
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D3F3] group-hover:w-full transition-all duration-500"></span>
            </span>{" "}
            on TON blockchain
          </p>
        </div>

        {/* ============ STATS CARDS - 3D GLASS MORPHISM ============ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, i) => (
            <div key={i} className="group relative perspective-1000">
              {/* 3D Card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 transform-gpu transition-all duration-500 hover:scale-105 hover:rotate-y-12 hover:shadow-2xl hover:shadow-cyan-500/30 hover:border-cyan-400/50 overflow-hidden">
                {/* Animated background glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}
                ></div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-cyan-400/50 transition-colors duration-500 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-cyan-400/50 transition-colors duration-500 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-transparent group-hover:border-cyan-400/50 transition-colors duration-500 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-cyan-400/50 transition-colors duration-500 rounded-br-2xl"></div>

                {/* Icon with glow */}
                <div className="relative mb-5">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg ${stat.shadow}`}
                  >
                    <div className="text-white text-3xl">{stat.icon}</div>
                  </div>
                  <div
                    className={`absolute -inset-2 bg-gradient-to-br ${stat.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                  ></div>
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="text-gray-400 text-sm font-medium tracking-wider mb-1">
                    {stat.label}
                  </div>
                  <div className="text-white text-3xl font-bold mb-3">
                    {stat.value}
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent font-semibold`}
                    >
                      {stat.change}
                    </span>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping-slow"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping-slow delay-150"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping-slow delay-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ============ FEATURE CARDS - ULTRA STYLISH MARQUEE ============ */}
        <div className="relative">
          {/* Header with animated icon */}
          <div className="flex items-center gap-4 mb-12">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00D3F3] to-[#8A2BE2] rounded-2xl flex items-center justify-center animate-pulse-slow">
                <BsLightningCharge className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-[#00D3F3] to-[#8A2BE2] rounded-3xl blur-xl opacity-50 animate-pulse"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Next-Gen{" "}
                <span className="bg-gradient-to-r from-[#00D3F3] to-[#8A2BE2] bg-clip-text text-transparent">
                  Features
                </span>
              </h2>
              <p className="text-gray-400 text-sm tracking-wider">
                ⚡ POWERED BY TON BLOCKCHAIN ⚡
              </p>
            </div>
          </div>

          {/* Full Width Marquee - Ultra Stylish */}
          <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
            {/* Animated track */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D3F3] to-transparent opacity-30 animate-track-slow"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent opacity-30 animate-track-slow-delay"></div>

            {/* Neon glow lines */}
            <div className="absolute top-1/2 left-0 w-full h-20 bg-gradient-to-r from-transparent via-[#00D3F3]/5 to-transparent blur-3xl animate-pulse-slow"></div>

            {/* Marquee container */}
            <div className="marquee-container py-12">
              <div className="marquee-content flex gap-8">
                {/* First set */}
                {features.map((feature, i) => (
                  <FeatureCard key={`set1-${i}`} feature={feature} />
                ))}
                {/* Second set - duplicates for seamless loop */}
                {features.map((feature, i) => (
                  <FeatureCard key={`set2-${i}`} feature={feature} />
                ))}
              </div>
            </div>

            {/* Gradient edges - subtle */}
            <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-[#0A0F1C] to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-[#0A0F1C] to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Marquee Animation */
        .marquee-container {
          width: 100%;
          overflow: hidden;
        }

        .marquee-content {
          width: fit-content;
          animation: marquee 60s linear infinite;
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Track Animations */
        @keyframes trackSlow {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          20% {
            opacity: 0.5;
          }
          80% {
            opacity: 0.5;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        .animate-track-slow {
          animation: trackSlow 12s linear infinite;
        }

        .animate-track-slow-delay {
          animation: trackSlow 12s linear infinite;
          animation-delay: 6s;
        }

        /* Background Animations */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.1);
          }
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float 12s ease-in-out infinite;
          animation-delay: 2s;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes particle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
          }
        }

        .animate-particle {
          animation: particle 8s linear infinite;
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes width {
          0% {
            width: 0%;
            opacity: 0;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }

        .animate-width {
          animation: width 1.5s ease-out forwards;
        }

        .bg-size-200 {
          background-size: 200% 200%;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-y-12 {
          transform: rotateY(12deg);
        }

        .delay-150 {
          animation-delay: 0.15s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

// ============ ULTRA STYLISH FEATURE CARD COMPONENT ============
const FeatureCard = ({ feature }) => {
  return (
    <div className="flex-shrink-0 w-96 group relative perspective-1000">
      {/* 3D Card Container */}
      <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 transform-gpu transition-all duration-700 hover:scale-105 hover:rotate-y-12 hover:shadow-2xl hover:shadow-cyan-500/30 overflow-hidden">
        {/* Animated gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl`}
        ></div>

        {/* Glowing orb inside card */}
        <div
          className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`}
        ></div>

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

        {/* Circuit pattern */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${
              feature.accent === "blue"
                ? "#00D3F3"
                : feature.accent === "emerald"
                ? "#10B981"
                : feature.accent === "amber"
                ? "#F59E0B"
                : feature.accent === "orange"
                ? "#F97316"
                : feature.accent === "purple"
                ? "#A855F7"
                : "#EC4899"
            } 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Corner accents with glow */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-transparent group-hover:border-cyan-400/70 transition-all duration-500 rounded-tl-2xl"></div>
        <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-transparent group-hover:border-purple-400/70 transition-all duration-500 rounded-tr-2xl"></div>
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-transparent group-hover:border-cyan-400/70 transition-all duration-500 rounded-bl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-transparent group-hover:border-purple-400/70 transition-all duration-500 rounded-br-2xl"></div>

        {/* Icon with 3D effect */}
        <div className="relative mb-6">
          <div
            className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-lg ${feature.shadow} relative z-10`}
          >
            <div className="text-white text-3xl">{feature.icon}</div>
          </div>
          <div
            className={`absolute -inset-3 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700`}
          ></div>

          {/* Animated rings */}
          <div className="absolute -inset-2 border border-cyan-400/30 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:animate-ping-slow"></div>
        </div>

        {/* Title with animated underline */}
        <div className="relative mb-4">
          <h3 className="text-white text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all duration-500">
            {feature.title}
          </h3>
          <div
            className={`w-12 h-1 bg-gradient-to-r ${feature.gradient} rounded-full group-hover:w-24 transition-all duration-700`}
          ></div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed relative z-10 group-hover:text-white transition-colors duration-500">
          {feature.desc}
        </p>

        {/* Status badge */}
        <div className="absolute top-6 right-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping-slow"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-[10px] font-mono text-green-400/80">
              ACTIVE
            </span>
          </div>
        </div>

        {/* Hover button */}
        <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <div
            className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
          >
            <span>Explore Feature</span>
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500">
              <span className="text-white text-xs">→</span>
            </div>
          </div>
        </div>

        {/* Luxury train wheels */}
        <div className="absolute -bottom-3 -left-3 w-10 h-10">
          <div className="w-full h-full rounded-full border-2 border-gray-600/50 group-hover:border-cyan-400/50 transition-colors duration-500 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400/50 to-purple-400/50 animate-spin-slow"></div>
          </div>
        </div>

        <div className="absolute -bottom-3 -right-3 w-10 h-10">
          <div className="w-full h-full rounded-full border-2 border-gray-600/50 group-hover:border-purple-400/50 transition-colors duration-500 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-400/50 to-cyan-400/50 animate-spin-slow-reverse"></div>
          </div>
        </div>

        {/* Connection points */}
        <div className="absolute -right-2 top-1/2 w-4 h-4">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
