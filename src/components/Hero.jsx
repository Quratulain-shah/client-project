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
  FiAward,
  FiBarChart2,
  FiUsers,
} from "react-icons/fi";
import {
  FaBolt,
  FaCube,
  FaFire,
  FaRocket,
  FaCrown,
  FaCoins,
  FaWallet,
} from "react-icons/fa";
import { gsap } from "gsap";

const Hero = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const canvasRef = useRef(null);

  // Simplified blockchain links
  const blockchainLinks = [
    {
      id: 1,
      name: "TON Scan",
      icon: <FiGlobe className="w-3 h-3 sm:w-4 sm:h-4" />,
      url: "https://tonscan.org",
      color: "#00D3F3",
      bgGradient: "bg-gradient-to-r from-cyan-500/10 to-blue-500/10",
    },
    {
      id: 2,
      name: "Tonkeeper",
      icon: <FiLock className="w-3 h-3 sm:w-4 sm:h-4" />,
      url: "https://tonkeeper.com",
      color: "#3B82F6",
      bgGradient: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10",
    },
    {
      id: 3,
      name: "STON.fi",
      icon: <FiDatabase className="w-3 h-3 sm:w-4 sm:h-4" />,
      url: "https://ston.fi",
      color: "#F59E0B",
      bgGradient: "bg-gradient-to-r from-amber-500/10 to-orange-500/10",
    },
    {
      id: 4,
      name: "Getgems",
      icon: <FiLayers className="w-3 h-3 sm:w-4 sm:h-4" />,
      url: "https://getgems.io",
      color: "#EC4899",
      bgGradient: "bg-gradient-to-r from-pink-500/10 to-rose-500/10",
    },
  ];

  // Stats
  const stats = [
    {
      label: "TVL",
      value: "$4.2M",
      change: "+12.5%",
      icon: FiBarChart2,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
    },
    {
      label: "Stakers",
      value: "12.5K",
      change: "+8.2%",
      icon: FiUsers,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      label: "APY",
      value: "5.2%",
      change: "+0.3%",
      icon: FaFire,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
    },
  ];

  // Trust features
  const trustFeatures = [
    {
      icon: FiShield,
      text: "Audited",
      color: "text-emerald-400",
    },
    {
      icon: FiZap,
      text: "Instant",
      color: "text-amber-400",
    },
    {
      icon: FiStar,
      text: "No lock-up",
      color: "text-purple-400",
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
      for (let i = 0; i < 30; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          size: Math.random() * 1.5 + 0.5,
          color: `hsl(${180 + Math.random() * 60}, 70%, 60%)`,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
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

  // GSAP Animations
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
      .from(".cta-group", { opacity: 0, y: 15, duration: 0.5 }, "-=0.2");
  }, []);

  return (
    <div className="min-h-screen bg-[#03050A] relative overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
      />

      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 -right-20 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-amber-500/5 rounded-full blur-[100px]"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-6 sm:py-8 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
          {/* LEFT SIDE - FULLY RESPONSIVE */}
          <div
            ref={leftRef}
            className="flex-1 w-full space-y-4 sm:space-y-5 lg:space-y-6 lg:pr-6"
          >
            {/* Premium Badge */}
            <div className="premium-badge inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
              <div className="relative">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full animate-ping absolute"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full relative"></div>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-white/90 tracking-wider">
                TON STAKING
              </span>
              <span className="px-1.5 sm:px-2 py-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-[8px] sm:text-[10px] font-bold shadow-lg shadow-cyan-500/30">
                MAINNET
              </span>
            </div>

            {/* Main Heading */}
            <div ref={titleRef} className="leading-tight">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black text-white">
                Stake{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent relative inline-block">
                  TON
                  <span className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl rounded-lg -z-10 hidden sm:block"></span>
                </span>
              </h1>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black mt-1 sm:mt-2 flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Earn Rewards
                </span>
                <span className="text-xs sm:text-sm md:text-base bg-gradient-to-r from-amber-400 to-orange-400 px-2 sm:px-3 py-1 rounded-full text-white font-bold whitespace-nowrap">
                  8% APY
                </span>
              </h1>
            </div>

            {/* Description */}
            <div ref={descriptionRef} className="max-w-xl">
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                Liquid staking protocol on TON Blockchain with
                institutional-grade security.
              </p>
              <div className="flex items-center gap-2 mt-2 sm:mt-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-2 border-[#03050A] flex items-center justify-center text-[8px] sm:text-[10px] font-bold text-white"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500">
                  Trusted by 12.5K+ stakers
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`${stat.bgColor} backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-105`}
                >
                  <div className="flex items-center gap-1 mb-1 sm:mb-2">
                    <stat.icon
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ${stat.color}`}
                    />
                    <span className="text-gray-400 text-[8px] sm:text-[10px] md:text-xs font-medium uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white">
                      {stat.value}
                    </span>
                    <span
                      className={`text-[7px] sm:text-[9px] md:text-xs font-bold ${stat.color}`}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Links Grid */}
            <div className="links-grid grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-3 sm:mt-4">
              {blockchainLinks.map((link) => (
                <button
                  key={link.id}
                  className="group w-full"
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={() => window.open(link.url, "_blank")}
                >
                  <div
                    className={`
                      relative px-2 py-2 sm:px-3 sm:py-2.5 md:py-3 rounded-lg
                      ${link.bgGradient} border border-white/5
                      hover:border-white/20 transition-all duration-300
                      ${hoveredLink === link.id ? "scale-105 shadow-lg" : ""}
                      flex items-center justify-center
                    `}
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {link.icon}
                      </span>
                      <span className="text-[10px] sm:text-xs md:text-sm font-medium text-white/80 group-hover:text-white whitespace-nowrap">
                        {link.name}
                      </span>
                      <FiExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="cta-group flex flex-col xs:flex-row gap-2 sm:gap-3 mt-4 sm:mt-5">
              <button className="group relative flex-1 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                <span className="relative flex items-center justify-center gap-1.5 text-white font-semibold text-xs sm:text-sm md:text-base">
                  <FaRocket className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                  <span>Start Staking</span>
                  <FiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group flex-1 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center justify-center gap-1.5 text-white/90 group-hover:text-white font-semibold text-xs sm:text-sm md:text-base">
                  <FiShield className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  <span>View Docs</span>
                </span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3 sm:mt-4">
              {trustFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/5"
                >
                  <feature.icon
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${feature.color}`}
                  />
                  <span className="text-[8px] sm:text-[10px] md:text-xs text-gray-400">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Network Status */}
            <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <div className="relative">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full animate-ping absolute"></div>
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full relative"></div>
                    </div>
                    <span className="text-[8px] sm:text-[10px] md:text-xs text-gray-500">
                      Mainnet
                    </span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <FiActivity className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-600" />
                    <span className="text-[8px] sm:text-[10px] md:text-xs text-gray-500">
                      Block: 3.5M
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            ref={rightRef}
            className="flex-1 relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[500px] w-full mt-6 lg:mt-0"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]">
                <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slowest"></div>
                <div className="absolute inset-[15px] sm:inset-[20px] md:inset-[25px] lg:inset-[30px] rounded-full border border-white/10 animate-spin-slower"></div>
                <div className="absolute inset-[30px] sm:inset-[40px] md:inset-[50px] lg:inset-[60px] rounded-full border border-white/20 animate-spin-slow"></div>

                {/* Central Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping-slow opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <div className="absolute inset-[2px] bg-[#03050A] rounded-full"></div>
                      <FaBolt className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* Floating Nodes */}
                {blockchainLinks.map((link, i) => {
                  const angle = i * 90 * (Math.PI / 180);
                  const radius = 70; // Responsive radius
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
                      }}
                      onClick={() => window.open(link.url, "_blank")}
                    >
                      <div
                        className={`
                          relative w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12
                          rounded-lg transition-all duration-300
                          flex items-center justify-center
                          hover:scale-110 hover:shadow-xl
                        `}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-60 rounded-lg"></div>
                        <div className="absolute inset-[2px] bg-black/60 rounded-lg"></div>
                        <div className="relative">
                          {React.cloneElement(link.icon, {
                            className:
                              "w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white",
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
        @keyframes ping-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.1;
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
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        /* Extra small devices */
        @media (min-width: 375px) {
          .xs\\:flex-row {
            flex-direction: row;
          }
          .xs\\:text-4xl {
            font-size: 2.25rem;
          }
          .xs\\:text-5xl {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
