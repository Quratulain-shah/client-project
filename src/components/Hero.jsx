import React, { useRef, useEffect, useState } from "react";
import {
  FiExternalLink,
  FiArrowRight,
  FiLink,
  FiCpu,
  FiLock,
  FiActivity,
  FiDatabase,
  FiLayers,
  FiTrendingUp,
  FiShield,
  FiZap,
  FiGlobe,
  FiStar,
} from "react-icons/fi";
import {
  FaBolt,
  FaCube,
  FaChartLine,
  FaInfinity,
  FaRocket,
  FaGem,
} from "react-icons/fa";
import { gsap } from "gsap";

const Hero = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const canvasRef = useRef(null);

  // Premium blockchain links
  const blockchainLinks = [
    {
      id: 1,
      name: "TON Explorer",
      icon: <FiGlobe className="w-5 h-5" />,
      url: "https://tonscan.org",
      color: "#00D3F3",
      stats: "2.3M daily",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      id: 2,
      name: "Smart Contracts",
      icon: <FiCpu className="w-5 h-5" />,
      url: "https://ton.org/docs",
      color: "#A855F7",
      stats: "1.2K+",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Wallet Connect",
      icon: <FiLock className="w-5 h-5" />,
      url: "https://tonkeeper.com",
      color: "#3B82F6",
      stats: "450K+",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      name: "Block Stats",
      icon: <FiActivity className="w-5 h-5" />,
      url: "https://tonstat.com",
      color: "#10B981",
      stats: "3.5s",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      name: "Token Swap",
      icon: <FiDatabase className="w-5 h-5" />,
      url: "https://ston.fi",
      color: "#F59E0B",
      stats: "$10M+",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      id: 6,
      name: "NFT Market",
      icon: <FiLayers className="w-5 h-5" />,
      url: "https://getgems.io",
      color: "#EC4899",
      stats: "25K+",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  // Premium stats
  const stats = [
    {
      label: "Total Value Locked",
      value: "$4.2M",
      change: "+12.5%",
      icon: FaChartLine,
      color: "from-emerald-400 to-teal-400",
    },
    {
      label: "Active Stakers",
      value: "12.5K+",
      change: "+8.2%",
      icon: FaInfinity,
      color: "from-blue-400 to-cyan-400",
    },
    {
      label: "Current APY",
      value: "5.2%",
      change: "+0.3%",
      icon: FaBolt,
      color: "from-amber-400 to-orange-400",
    },
    {
      label: "Blocks Produced",
      value: "3.54M",
      change: "+2.1K",
      icon: FaCube,
      color: "from-purple-400 to-pink-400",
    },
  ];

  // Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = canvas.clientWidth);
    let height = (canvas.height = canvas.clientHeight);

    let particles = [];
    let animationFrame;

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 40; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          size: Math.random() * 1.5 + 0.5,
          color: `hsl(${180 + Math.random() * 60}, 70%, 60%)`,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size + Math.sin(p.pulse) * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
      });

      ctx.shadowBlur = 0;
      animationFrame = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    const handleResize = () => {
      width = canvas.width = canvas.clientWidth;
      height = canvas.height = canvas.clientHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Simple fade in animations
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".premium-badge", { opacity: 0, y: -10, duration: 0.5 })
      .from(titleRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
      .from(
        descriptionRef.current,
        { opacity: 0, y: 15, duration: 0.5 },
        "-=0.2"
      )
      .from(".stats-grid", { opacity: 0, y: 15, duration: 0.5 }, "-=0.2")
      .from(".links-grid", { opacity: 0, y: 15, duration: 0.5 }, "-=0.2")
      .from(".cta-group", { opacity: 0, y: 15, duration: 0.5 }, "-=0.2")
      .from(".trust-badges", { opacity: 0, y: 15, duration: 0.5 }, "-=0.2");
  }, []);

  return (
    <div className="min-h-screen bg-[#03050A] relative overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Subtle Gradient Orbs */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-amber-500/5 rounded-full blur-[100px]"></div>

      {/* Main Content - NO EXTRA GAPS */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 h-screen flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          {/* ========== LEFT SIDE - TIGHT SPACING, NO EXTRA GAPS ========== */}
          <div ref={leftRef} className="flex-1 space-y-4 lg:pr-8">
            {/* BADGE - Small padding */}
            <div className="premium-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-white/90">
                TON LIQUID STAKING
              </span>
              <span className="px-2 py-0.5 bg-cyan-500/20 rounded-full text-cyan-400 text-[10px] font-bold">
                LIVE
              </span>
            </div>

            {/* MAIN HEADING - No margin, tight */}
            <div ref={titleRef} className="leading-none">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white">
                Stake{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  TON
                </span>
                ,
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mt-0">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Earn Rewards
                </span>
              </h1>
            </div>

            {/* DESCRIPTION - Directly under heading, no gap */}
            <div ref={descriptionRef} className="mt-1">
              <p className="text-base md:text-lg text-gray-400 max-w-xl leading-snug">
                The most sophisticated liquid staking protocol on TON
                Blockchain.
              </p>
              <p className="text-sm text-white/80 mt-1.5 flex items-center gap-2">
                <FaGem className="w-3.5 h-3.5 text-cyan-400" />
                Maximize yields with full liquidity • Audited by CertiK •
                Non-custodial
              </p>
            </div>

            {/* STATS - 4 Column Grid - Tight */}
            <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 rounded-lg p-3 border border-white/10"
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] mb-1">
                    <stat.icon className="w-3 h-3" />
                    <span>{stat.label}</span>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-lg font-bold text-white">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-medium text-emerald-400 mb-0.5">
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* BLOCKCHAIN LINKS - 6 Chips - Tight */}
            <div className="links-grid flex flex-wrap gap-2 mt-3">
              {blockchainLinks.map((link) => (
                <button
                  key={link.id}
                  className="group"
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={() => window.open(link.url, "_blank")}
                >
                  <div
                    className={`
                    relative px-3.5 py-1.5 rounded-full border transition-all duration-300 
                    flex items-center gap-1.5
                    ${
                      hoveredLink === link.id
                        ? `bg-gradient-to-r ${link.gradient} border-transparent shadow-lg`
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }
                  `}
                  >
                    <span
                      className={`transition-colors duration-300 text-xs ${
                        hoveredLink === link.id ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {link.icon}
                    </span>
                    <span
                      className={`text-xs font-medium whitespace-nowrap ${
                        hoveredLink === link.id ? "text-white" : "text-white/90"
                      }`}
                    >
                      {link.name}
                    </span>
                    <span
                      className={`
                      text-[10px] px-1.5 py-0.5 rounded-full
                      ${
                        hoveredLink === link.id
                          ? "bg-white/20 text-white"
                          : "bg-white/10 text-gray-300"
                      }
                    `}
                    >
                      {link.stats}
                    </span>
                    <FiExternalLink
                      className={`
                      w-3 h-3 transition-all duration-300
                      ${
                        hoveredLink === link.id
                          ? "text-white translate-x-0.5 -translate-y-0.5"
                          : "text-gray-500"
                      }
                    `}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* CTA BUTTONS - Tight */}
            <div className="cta-group flex gap-3 mt-3">
              <button className="group px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-1.5">
                  <FaRocket className="w-4 h-4" />
                  Start Staking
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group px-5 py-2.5 rounded-lg border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300">
                <span className="flex items-center gap-1.5 text-white/90 group-hover:text-white font-semibold text-sm">
                  <FiShield className="w-4 h-4" />
                  View Docs
                </span>
              </button>
            </div>

            {/* TRUST BADGES - Tight */}
            <div className="trust-badges flex items-center gap-4 mt-3">
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <FiShield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Audited by CertiK</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <FiZap className="w-3.5 h-3.5 text-amber-400" />
                <span>Instant unstaking</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <FiStar className="w-3.5 h-3.5 text-purple-400" />
                <span>No lock-up</span>
              </div>
            </div>
          </div>

          {/* ========== RIGHT SIDE - 3D VISUALIZATION ========== */}
          <div
            ref={rightRef}
            className="flex-1 relative h-[500px] lg:h-[600px] w-full"
          >
            {/* 3D Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Animated Rings */}
              <div className="relative w-[400px] h-[400px]">
                <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slowest"></div>
                <div className="absolute inset-[35px] rounded-full border border-white/10 animate-spin-slower"></div>
                <div className="absolute inset-[70px] rounded-full border border-white/20 animate-spin-slow"></div>
                <div className="absolute inset-[105px] rounded-full border border-cyan-400/30 animate-spin-reverse"></div>

                {/* Central Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-28 h-28">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping-slow opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <div className="absolute inset-[2px] bg-[#03050A] rounded-full"></div>
                      <FaBolt className="relative w-10 h-10 text-white animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Floating Nodes */}
                {blockchainLinks.map((link, i) => {
                  const angle = i * 60 * (Math.PI / 180);
                  const radius = 180;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <button
                      key={link.id}
                      className="absolute group"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                        animation: `float-node-${i} 4s ease-in-out infinite`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                      onClick={() => window.open(link.url, "_blank")}
                      onMouseEnter={() => setHoveredLink(link.id)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <div
                        className={`
                        relative w-12 h-12 rounded-xl transition-all duration-500
                        flex items-center justify-center overflow-hidden
                        ${
                          hoveredLink === link.id
                            ? "scale-125 shadow-2xl"
                            : "hover:scale-110"
                        }
                      `}
                      >
                        <div
                          className={`
                          absolute inset-0 bg-gradient-to-br ${link.gradient} 
                          transition-all duration-500
                          ${
                            hoveredLink === link.id
                              ? "opacity-100"
                              : "opacity-60"
                          }
                        `}
                        ></div>
                        <div className="absolute inset-[2px] bg-black/60 rounded-xl backdrop-blur-sm"></div>
                        <div className="relative">
                          {React.cloneElement(link.icon, {
                            className: "w-6 h-6 text-white",
                          })}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slowest {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-slower {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.1;
          }
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
        }
        @keyframes float-node-0 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-8px);
          }
        }
        @keyframes float-node-1 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(-4px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-12px);
          }
        }
        @keyframes float-node-2 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(4px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-4px);
          }
        }
        @keyframes float-node-3 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(-6px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-14px);
          }
        }
        @keyframes float-node-4 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(6px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-2px);
          }
        }
        @keyframes float-node-5 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(-3px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-11px);
          }
        }

        .animate-spin-slowest {
          animation: spin-slowest 20s linear infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 15s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 12s linear infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
