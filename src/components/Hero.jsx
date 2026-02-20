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
  FaChartLine,
  FaInfinity,
  FaRocket,
  FaGem,
  FaCoins,
  FaWallet,
  FaFire,
  FaCrown,
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

  // Premium blockchain links with TON focus
  const blockchainLinks = [
    {
      id: 1,
      name: "TON Scan",
      icon: <FiGlobe className="w-4 h-4" />,
      url: "https://tonscan.org",
      color: "#00D3F3",
      stats: "2.3M",
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "bg-gradient-to-r from-cyan-500/10 to-blue-500/10",
      borderHover: "hover:border-cyan-500/50",
    },
    {
      id: 2,
      name: "Tonkeeper",
      icon: <FiLock className="w-4 h-4" />,
      url: "https://tonkeeper.com",
      color: "#3B82F6",
      stats: "450K",
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10",
      borderHover: "hover:border-blue-500/50",
    },
    {
      id: 3,
      name: "STON.fi",
      icon: <FiDatabase className="w-4 h-4" />,
      url: "https://ston.fi",
      color: "#F59E0B",
      stats: "$10M",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "bg-gradient-to-r from-amber-500/10 to-orange-500/10",
      borderHover: "hover:border-amber-500/50",
    },
    {
      id: 4,
      name: "Getgems",
      icon: <FiLayers className="w-4 h-4" />,
      url: "https://getgems.io",
      color: "#EC4899",
      stats: "25K",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "bg-gradient-to-r from-pink-500/10 to-rose-500/10",
      borderHover: "hover:border-pink-500/50",
    },
    {
      id: 5,
      name: "TON Docs",
      icon: <FiCpu className="w-4 h-4" />,
      url: "https://ton.org/docs",
      color: "#A855F7",
      stats: "1.2K",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "bg-gradient-to-r from-purple-500/10 to-pink-500/10",
      borderHover: "hover:border-purple-500/50",
    },
    {
      id: 6,
      name: "TON Stat",
      icon: <FiActivity className="w-4 h-4" />,
      url: "https://tonstat.com",
      color: "#10B981",
      stats: "3.5s",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "bg-gradient-to-r from-green-500/10 to-emerald-500/10",
      borderHover: "hover:border-green-500/50",
    },
  ];

  // Premium stats with icons
  const stats = [
    {
      label: "TVL",
      value: "$4.2M",
      change: "+12.5%",
      icon: FiBarChart2,
      icon2: FaCoins,
      color: "from-emerald-400 to-teal-400",
      bgColor: "bg-emerald-500/10",
      textColor: "text-emerald-400",
    },
    {
      label: "Stakers",
      value: "12.5K",
      change: "+8.2%",
      icon: FiUsers,
      icon2: FaWallet,
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-400",
    },
    {
      label: "APY",
      value: "5.2%",
      change: "+0.3%",
      icon: FaFire,
      icon2: FaBolt,
      color: "from-amber-400 to-orange-400",
      bgColor: "bg-amber-500/10",
      textColor: "text-amber-400",
    },
    {
      label: "Blocks",
      value: "3.5M",
      change: "+2.1K",
      icon: FaCube,
      icon2: FiActivity,
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-400",
    },
  ];

  // Trust features
  const trustFeatures = [
    {
      icon: FiShield,
      text: "Audited by CertiK",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
    },
    {
      icon: FiZap,
      text: "Instant unstaking",
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
    },
    {
      icon: FiStar,
      text: "No lock-up",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: FiAward,
      text: "Non-custodial",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
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

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 h-screen flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
          {/* ========== LEFT SIDE - STYLISH WITH TIGHT SPACING ========== */}
          <div ref={leftRef} className="flex-1 space-y-3 lg:pr-6">
            {/* PREMIUM BADGE - Glass morphism style */}
            <div className="premium-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 shadow-lg">
              <div className="relative">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping absolute"></div>
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full relative"></div>
              </div>
              <span className="text-xs font-semibold text-white/90 tracking-wider">
                TON LIQUID STAKING
              </span>
              <span className="px-2 py-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-[10px] font-bold shadow-lg shadow-cyan-500/30">
                MAINNET
              </span>
              <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center">
                <FaCrown className="w-2.5 h-2.5 text-amber-400" />
              </div>
            </div>

            {/* MAIN HEADING - Premium typography */}
            <div ref={titleRef} className="leading-[1.1]">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white">
                Stake{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent relative inline-block">
                  TON
                  <span className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl rounded-lg -z-10"></span>
                </span>
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mt-0 flex items-center gap-3 flex-wrap">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Earn Rewards
                </span>
                <span className="text-base bg-gradient-to-r from-amber-400 to-orange-400 px-3 py-1 rounded-full text-white font-bold">
                  UP TO 8% APY
                </span>
              </h1>
            </div>

            {/* DESCRIPTION - Premium with gradient text */}
            <div ref={descriptionRef} className="mt-1">
              <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
                The most sophisticated liquid staking protocol on TON Blockchain
                with institutional-grade security.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-2 border-[#03050A] flex items-center justify-center text-[10px] font-bold text-white"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-gray-500">
                  Trusted by 12,500+ stakers
                </span>
              </div>
            </div>

            {/* STATS - Premium Cards with hover effects */}
            <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`
                    relative group cursor-pointer transition-all duration-500
                    ${stat.bgColor} backdrop-blur-sm rounded-xl p-3 
                    border border-white/5 hover:border-white/20
                    hover:shadow-xl hover:shadow-${
                      stat.color.split("-")[1]
                    }-500/10
                  `}
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  {/* Animated gradient background */}
                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-r ${stat.color} 
                      opacity-0 group-hover:opacity-10 transition-opacity duration-500 
                      rounded-xl blur-xl
                    `}
                  ></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <div className="relative">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <stat.icon className={`w-3 h-3 ${stat.textColor}`} />
                        <span className="text-gray-400 text-[10px] font-medium uppercase tracking-wider">
                          {stat.label}
                        </span>
                      </div>
                      <stat.icon2
                        className={`w-2.5 h-2.5 ${stat.textColor} opacity-50`}
                      />
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-base font-bold text-white">
                          {stat.value}
                        </span>
                        <span
                          className={`text-[9px] font-bold ${stat.textColor} ml-1`}
                        >
                          {stat.change}
                        </span>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full ${stat.bgColor} flex items-center justify-center`}
                      >
                        <FiTrendingUp
                          className={`w-2.5 h-2.5 ${stat.textColor}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* BLOCKCHAIN LINKS - Premium chips with animations */}
            <div className="links-grid flex flex-wrap gap-1.5 mt-2">
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
                      relative px-2.5 py-1.5 rounded-lg transition-all duration-300 
                      flex items-center gap-1.5 overflow-hidden
                      ${link.bgGradient} border border-white/5 ${
                      link.borderHover
                    }
                      ${hoveredLink === link.id ? "scale-105 shadow-lg" : ""}
                    `}
                  >
                    {/* Animated background */}
                    <div
                      className={`
                        absolute inset-0 bg-gradient-to-r ${link.gradient} 
                        opacity-0 group-hover:opacity-20 transition-opacity duration-500
                      `}
                    ></div>

                    <span className="relative text-gray-300 group-hover:text-white transition-colors duration-300">
                      {link.icon}
                    </span>
                    <span className="relative text-xs font-medium text-white/80 group-hover:text-white whitespace-nowrap">
                      {link.name}
                    </span>
                    <span
                      className={`
                        relative text-[8px] px-1.5 py-0.5 rounded-full
                        ${
                          hoveredLink === link.id
                            ? `bg-gradient-to-r ${link.gradient} text-white`
                            : "bg-white/10 text-gray-300"
                        }
                      `}
                    >
                      {link.stats}
                    </span>
                    <FiExternalLink
                      className={`
                        relative w-2.5 h-2.5 transition-all duration-300
                        ${
                          hoveredLink === link.id
                            ? "text-white translate-x-0.5 -translate-y-0.5"
                            : "text-gray-600"
                        }
                      `}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* CTA BUTTONS - Premium gradient buttons */}
            <div className="cta-group flex gap-2 mt-3">
              <button className="group relative px-5 py-2.5 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative flex items-center gap-1.5 text-white font-semibold text-sm">
                  <FaRocket className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Start Staking
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group px-5 py-2.5 rounded-lg border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center gap-1.5 text-white/90 group-hover:text-white font-semibold text-sm">
                  <FiShield className="w-4 h-4" />
                  View Docs
                </span>
              </button>
              <button className="w-10 h-10 rounded-lg border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center">
                <FiLink className="w-4 h-4 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* TRUST BADGES - Premium with icons */}
            <div className="trust-badges flex flex-wrap items-center gap-3 mt-3">
              {trustFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/5"
                >
                  <div className={`${feature.bgColor} p-1 rounded-full`}>
                    <feature.icon className={`w-2.5 h-2.5 ${feature.color}`} />
                  </div>
                  <span className="text-[10px] font-medium text-gray-400">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Network Status Bar */}
            <div className="mt-3 pt-2 border-t border-white/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="relative">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping absolute"></div>
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full relative"></div>
                    </div>
                    <span className="text-[10px] text-gray-500">Mainnet</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FiActivity className="w-3 h-3 text-gray-600" />
                    <span className="text-[10px] text-gray-500">
                      Block: 3.54M
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FiZap className="w-3 h-3 text-amber-600" />
                    <span className="text-[10px] text-gray-500">
                      Gas: 0.005 TON
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

          {/* ========== RIGHT SIDE - 3D VISUALIZATION ========== */}
          <div
            ref={rightRef}
            className="flex-1 relative h-[450px] lg:h-[550px] w-full"
          >
            {/* 3D Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Animated Rings */}
              <div className="relative w-[350px] h-[350px]">
                <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slowest"></div>
                <div className="absolute inset-[30px] rounded-full border border-white/10 animate-spin-slower"></div>
                <div className="absolute inset-[60px] rounded-full border border-white/20 animate-spin-slow"></div>
                <div className="absolute inset-[90px] rounded-full border border-cyan-400/30 animate-spin-reverse"></div>

                {/* Central Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping-slow opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <div className="absolute inset-[2px] bg-[#03050A] rounded-full"></div>
                      <FaBolt className="relative w-8 h-8 text-white animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Floating Nodes */}
                {blockchainLinks.map((link, i) => {
                  const angle = i * 60 * (Math.PI / 180);
                  const radius = 150;
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
                        relative w-10 h-10 rounded-xl transition-all duration-500
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
                            className: "w-5 h-5 text-white",
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
            transform: translate(-50%, -50%) translateY(-6px);
          }
        }
        @keyframes float-node-1 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(-3px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-9px);
          }
        }
        @keyframes float-node-2 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(3px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-3px);
          }
        }
        @keyframes float-node-3 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(-4px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }
        @keyframes float-node-4 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(4px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-2px);
          }
        }
        @keyframes float-node-5 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(-2px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-8px);
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
