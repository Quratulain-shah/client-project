import React, { useEffect, useRef } from "react";
import {
  MdAccountBalanceWallet,
  MdRocketLaunch,
  MdOutlineSecurity,
} from "react-icons/md";
import {
  TbBrandTwitter,
  TbBrandDiscord,
  TbBrandTelegram,
} from "react-icons/tb";
import { PiTelegramLogo } from "react-icons/pi";
import { FiGithub, FiGlobe } from "react-icons/fi";
import { FaHeart, FaArrowUp, FaCube, FaCoins, FaShield } from "react-icons/fa6";
import { BsLightningCharge, BsGraphUp } from "react-icons/bs";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const glowRef = useRef(null);
  const particlesRef = useRef([]);
  const statsRef = useRef([]);
  const linksRef = useRef([]);
  const socialRef = useRef([]);

  useEffect(() => {
    // ============ CINEMATIC ENTRANCE ANIMATIONS ============
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 85%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });

    // Footer container entrance
    tl.from(footerRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    // Glow effect animation
    gsap.to(glowRef.current, {
      opacity: 0.8,
      scale: 1.2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Animated background particles
    gsap.to(particlesRef.current, {
      y: -30,
      x: (i) => (i % 2 === 0 ? 20 : -20),
      duration: 4 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2,
    });

    // Logo section with 3D effect
    tl.from(
      ".footer-logo",
      {
        scale: 0.5,
        rotation: -15,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      },
      "-=0.6"
    );

    // Stats cards stagger
    tl.from(
      statsRef.current,
      {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Footer sections stagger from left
    tl.from(
      ".footer-section",
      {
        x: -80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Links stagger
    tl.from(
      linksRef.current,
      {
        x: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "back.out(1.2)",
      },
      "-=0.4"
    );

    // Social icons stagger with bounce
    tl.from(
      socialRef.current,
      {
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.2"
    ).to(socialRef.current, { opacity: 1, duration: 0.01 }); // Ensure final opacity is 1

    // Copyright with fade up
    tl.from(
      ".copyright",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.2"
    );

    // ============ PARALLAX EFFECT ============
    ScrollTrigger.create({
      trigger: footerRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        gsap.to(".parallax-bg", {
          y: -50 * self.progress,
          duration: 0.5,
          overwrite: true,
        });
      },
    });

    // ============ HOVER ANIMATIONS SETUP ============
    const setupHoverAnimations = () => {
      // Logo hover
      const logo = document.querySelector(".footer-logo");
      if (logo) {
        logo.addEventListener("mouseenter", () => {
          gsap.to(".logo-icon", {
            scale: 1.2,
            rotate: 15,
            duration: 0.4,
            ease: "back.out(1.7)",
          });
          gsap.to(".logo-glow", {
            opacity: 0.8,
            scale: 1.5,
            duration: 0.4,
          });
        });

        logo.addEventListener("mouseleave", () => {
          gsap.to(".logo-icon", {
            scale: 1,
            rotate: 0,
            duration: 0.4,
            ease: "power3.out",
          });
          gsap.to(".logo-glow", {
            opacity: 0.3,
            scale: 1,
            duration: 0.4,
          });
        });
      }
    };

    setupHoverAnimations();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // ============ ADD TO REFS ============
  const addToParticlesRef = (el) => {
    if (el && !particlesRef.current.includes(el)) {
      particlesRef.current.push(el);
    }
  };

  const addToStatsRef = (el) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  const addToLinksRef = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  const addToSocialRef = (el) => {
    if (el && !socialRef.current.includes(el)) {
      socialRef.current.push(el);
    }
  };

  // Stats data
  const stats = [
    {
      icon: <FaCube />,
      value: "2.1M+",
      label: "TON Staked",
      color: "from-blue-400 to-cyan-300",
    },
    {
      icon: <BsLightningCharge />,
      value: "5.2%",
      label: "APY",
      color: "from-amber-400 to-yellow-300",
    },
    {
      icon: <FaShield />,
      value: "8,234",
      label: "Validators",
      color: "from-emerald-400 to-teal-300",
    },
    {
      icon: <BsGraphUp />,
      value: "$42.5M",
      label: "TVL",
      color: "from-purple-400 to-pink-300",
    },
  ];

  // Quick links
  const productLinks = [
    "Stake TON",
    "Buy Crypto",
    "Institutional",
    "Documentation",
    "Audit Reports",
  ];
  const communityLinks = ["News", "Support", "Blog", "Events", "Governance"];
  const resourcesLinks = ["About Us", "Careers", "Legal", "Privacy", "Terms"];

  // Social links
  const socialLinks = [
    {
      icon: <TbBrandTwitter />,
      name: "Twitter",
      color: "hover:bg-blue-400/20",
      textColor: "hover:text-blue-400",
    },
    {
      icon: <PiTelegramLogo />,
      name: "Telegram",
      color: "hover:bg-blue-500/20",
      textColor: "hover:text-blue-500",
    },
    {
      icon: <FiGithub />,
      name: "GitHub",
      color: "hover:bg-gray-500/20",
      textColor: "hover:text-gray-300",
    },
    {
      icon: <TbBrandDiscord />,
      name: "Discord",
      color: "hover:bg-indigo-500/20",
      textColor: "hover:text-indigo-400",
    },
    {
      icon: <FiGlobe />,
      name: "Website",
      color: "hover:bg-purple-500/20",
      textColor: "hover:text-purple-400",
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-b from-[#02071B] via-[#030a24] to-[#04102e] pt-20 pb-8 overflow-hidden"
    >
      {/* ============ PREMIUM ANIMATED BACKGROUND ============ */}

      {/* Floating gradient orbs */}
      <div
        ref={glowRef}
        className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-40"
      ></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#2AA1FF]/5 to-[#00CEF3]/5 rounded-full blur-3xl"></div>

      {/* Animated particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          ref={addToParticlesRef}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 5}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Blockchain grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2AA1FF 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Animated gradient line at top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2AA1FF] to-transparent opacity-30 animate-track"></div>

      {/* Parallax background elements */}
      <div className="parallax-bg absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 border border-blue-500/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 border border-purple-500/10 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ============ STATS SECTION - PREMIUM CARDS ============ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={addToStatsRef}
              className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 rounded-2xl p-5 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden"
            >
              {/* Animated gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}
              ></div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="relative flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                >
                  <div className="text-white text-lg">{stat.icon}</div>
                </div>
                <div>
                  <div className="text-white font-bold text-xl">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ============ MAIN FOOTER CONTENT ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 mb-16">
          {/* ============ BRAND SECTION - PREMIUM ============ */}
          <div className="lg:col-span-2">
            <div className="footer-logo group cursor-pointer">
              <div className="flex items-center gap-3 mb-5 relative">
                {/* Logo with 3D effect */}
                <div className="relative">
                  <div className="logo-glow absolute inset-0 bg-gradient-to-r from-[#2AA1FF] to-[#00CEF3] rounded-xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="logo-icon relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#2AA1FF] to-[#00CEF3] rounded-2xl transform transition-all duration-500 shadow-2xl">
                    <MdAccountBalanceWallet className="text-white w-7 h-7" />
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#2AA1FF] to-[#00CEF3] rounded-2xl blur opacity-30 group-hover:opacity-60 animate-pulse-slow"></div>
                  </div>
                </div>

                <div className="relative">
                  <h1 className="text-white font-black text-2xl tracking-tight">
                    Stakee
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2AA1FF] to-[#00CEF3] group-hover:w-full transition-all duration-700"></span>
                  </h1>
                  <span className="absolute -top-2 -right-8 text-[10px] font-bold text-white bg-gradient-to-r from-[#2AA1FF] to-[#00CEF3] px-2 py-0.5 rounded-full shadow-lg">
                    BETA
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Liquid staking protocol for TON blockchain. Stake your TON and
                receive STAKED tokens while earning competitive rewards with
                institutional-grade security.
              </p>

              {/* Trust badges */}
              <div className="flex items-center gap-3 mt-4">
                <div className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-xs text-gray-300">Audited by</span>
                  <span className="text-xs font-bold text-white ml-1">
                    CertiK
                  </span>
                </div>
                <div className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-xs text-gray-300">TON</span>
                  <span className="text-xs font-bold text-white ml-1">
                    Mainnet
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ============ PRODUCT LINKS ============ */}
          <div className="footer-section">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-[#010f1a] to-[#061417] rounded-full"></div>
              <h1 className="text-white font-bold text-lg">Product</h1>
            </div>
            <ul className="space-y-3">
              {productLinks.map((item, i) => (
                <li
                  key={item}
                  ref={(el) => addToLinksRef(el)}
                  className="group relative flex items-center gap-2 text-gray-400 hover:text-[#00D3F3] cursor-pointer text-sm transition-all duration-300 transform hover:translate-x-2"
                >
                  <span className="w-1 h-1 bg-[#00D3F3] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ============ COMMUNITY LINKS ============ */}
          <div className="footer-section">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              <h1 className="text-white font-bold text-lg">Community</h1>
            </div>
            <ul className="space-y-3">
              {communityLinks.map((item, i) => (
                <li
                  key={item}
                  ref={(el) => addToLinksRef(el)}
                  className="group relative flex items-center gap-2 text-gray-400 hover:text-purple-400 cursor-pointer text-sm transition-all duration-300 transform hover:translate-x-2"
                >
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ============ RESOURCES LINKS ============ */}
          <div className="footer-section">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
              <h1 className="text-white font-bold text-lg">Resources</h1>
            </div>
            <ul className="space-y-3">
              {resourcesLinks.map((item, i) => (
                <li
                  key={item}
                  ref={(el) => addToLinksRef(el)}
                  className="group relative flex items-center gap-2 text-gray-400 hover:text-emerald-400 cursor-pointer text-sm transition-all duration-300 transform hover:translate-x-2"
                >
                  <span className="w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ============ BOTTOM SECTION ============ */}
        <div className="relative">
          {/* Gradient separator */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2AA1FF]/50 to-transparent"></div>

          <div className="pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright with heart */}
            <div className="copyright flex items-center gap-2 text-gray-500 text-sm">
              <span>© {new Date().getFullYear()} Stakee.</span>
              <span className="flex items-center gap-1">
                Made with{" "}
                <FaHeart className="w-3.5 h-3.5 text-red-500 animate-pulse" />{" "}
                on
              </span>
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#2AA1FF] to-[#00CEF3]">
                TON Blockchain
              </span>
            </div>

            {/* Premium social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <div key={i} ref={addToSocialRef} className="group relative">
                  <div
                    className={`absolute inset-0 ${social.color} rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`relative w-10 h-10 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:scale-110 transition-all duration-300 ${social.textColor} cursor-pointer`}
                  >
                    <div className="text-gray-400 group-hover:text-white transition-colors duration-300 text-xl">
                      {social.icon}
                    </div>
                  </div>

                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Back to top button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group relative w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#2AA1FF] to-[#00CEF3] rounded-xl hover:scale-110 transition-all duration-500 shadow-lg shadow-blue-500/30"
            >
              <FaArrowUp className="w-4 h-4 text-white" />
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2AA1FF] to-[#00CEF3] rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
            </button>
          </div>

          {/* Blockchain verification */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs text-gray-400">Mainnet</span>
              </div>
              <span className="text-gray-600">|</span>
              <span className="text-xs font-mono text-gray-400">
                Contract: <span className="text-[#00D3F3]">EQD...x3F8</span>
              </span>
              <span className="text-gray-600">|</span>
              <span className="text-xs text-gray-400">v2.1.0</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          75% {
            transform: translateY(20px) translateX(-10px);
          }
        }

        @keyframes track {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-track {
          animation: track 8s linear infinite;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
