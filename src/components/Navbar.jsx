import React, { useState, useEffect, useRef } from "react";
import { MdAccountBalanceWallet } from "react-icons/md";
import { PiWalletFill } from "react-icons/pi";
import {
  FaChevronDown,
  FaCopy,
  FaCheck,
  FaHome,
  FaNewspaper,
  FaBriefcase,
  FaCog,
} from "react-icons/fa";
import { MdOutlineLogout, MdAppShortcut } from "react-icons/md";
import { useNavigate } from "react-router";
import { useTonConnectUI } from "@tonconnect/ui-react";
// TonClient imported dynamically inside useEffect to avoid runtime crash
import { gsap } from "gsap";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("Home");
  const navigate = useNavigate();
  const [tonConnectUI] = useTonConnectUI();
  const [balance, setBalance] = useState(null);
  const [showDisconnect, setShowDisconnect] = useState(false);
  const [copied, setCopied] = useState(false);
  const [animationsStarted, setAnimationsStarted] = useState(false);

  // Refs for animations
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const walletBtnRef = useRef(null);
  const mobileNavRef = useRef(null);

  // ============ FETCH BALANCE ============
  useEffect(() => {
    if (!tonConnectUI.wallet) {
      setBalance(null);
      return;
    }

    const address = tonConnectUI.wallet.account.address;

    const fetchBalance = async () => {
      try {
        const { TonClient } = await import("ton");
        const client = new TonClient({
          endpoint: "https://toncenter.com/api/v2/jsonRPC",
        });
        const info = await client.getAccount(address);
        setBalance((Number(info.balance) / 1e9).toFixed(2));
      } catch (e) {
        console.error(e);
        setBalance("Error");
      }
    };

    fetchBalance();
    const interval = setInterval(fetchBalance, 30000);
    return () => clearInterval(interval);
  }, [tonConnectUI.wallet]);

  // ============ GSAP ANIMATIONS ============
  useEffect(() => {
    gsap.set(navRef.current, { y: 0, opacity: 1 });
    gsap.set(logoRef.current, { scale: 1, opacity: 1 });
    gsap.set(navItemsRef.current, { y: 0, opacity: 1 });
    gsap.set(walletBtnRef.current, { scale: 1, opacity: 1 });
    gsap.set(mobileNavRef.current, { y: 0, opacity: 1 });

    requestAnimationFrame(() => {
      setAnimationsStarted(true);
      const tl = gsap.timeline();

      tl.fromTo(
        logoRef.current,
        { scale: 0.9, opacity: 0.9 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.2)" }
      );

      tl.fromTo(
        navItemsRef.current,
        { y: -5, opacity: 0.9 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" },
        "-=0.3"
      );

      tl.fromTo(
        walletBtnRef.current,
        { scale: 0.95, opacity: 0.9 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "elastic.out(1, 0.5)" },
        "-=0.2"
      );
    });
  }, []);

  // ============ NAVIGATION HANDLER ============
  const handleNavClick = (item) => {
    setActiveNav(item);
    if (item === "Home") navigate("/");
    else if (item === "App") navigate("/AppPage");
    else if (item === "Institutional") navigate("/Institutional");
    else if (item === "News") navigate("/News");
    setShowDisconnect(false);
  };

  // ============ COPY ADDRESS ============
  const copyAddress = () => {
    if (tonConnectUI.wallet?.account?.address) {
      navigator.clipboard.writeText(tonConnectUI.wallet.account.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // ============ FORMAT ADDRESS ============
  const formatAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  // Get icon for mobile nav
  const getNavIcon = (item) => {
    switch (item) {
      case "Home":
        return <FaHome className="w-5 h-5" />;
      case "App":
        return <MdAppShortcut className="w-5 h-5" />;
      case "Institutional":
        return <FaBriefcase className="w-5 h-5" />;
      case "News":
        return <FaNewspaper className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const navItems = ["Home", "App", "Institutional", "News"];

  return (
    <div>
      {/* ============ DESKTOP NAVBAR (hidden on mobile) ============ */}
      <div
        ref={navRef}
        className="hidden md:block bg-[#020618]/95 backdrop-blur-md w-full h-20 border-b fixed z-50 border-gray-800/50 shadow-lg shadow-black/20"
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
          {/* Logo */}
          <div
            ref={logoRef}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick("Home")}
          >
            <div className="relative w-11 h-11 flex justify-center items-center rounded-xl bg-gradient-to-br from-[#2AA1FF] to-[#00CEF3] transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-blue-500/30">
              <MdAccountBalanceWallet className="text-white w-7 h-7" />
              <div className="absolute -inset-1 bg-gradient-to-br from-[#2AA1FF] to-[#00CEF3] rounded-xl blur opacity-30 group-hover:opacity-60 animate-pulse"></div>
            </div>
            <div className="relative">
              <h1 className="text-white font-bold text-2xl tracking-tight">
                Stakee
              </h1>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2AA1FF] to-[#00CEF3] group-hover:w-full transition-all duration-500"></div>
            </div>
            <span className="ml-1 text-[10px] font-medium text-[#2AA1FF] bg-blue-500/10 px-1.5 py-0.5 rounded-full border border-blue-500/30">
              BETA
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="flex gap-8">
            {navItems.map((item, index) => (
              <div
                key={item}
                ref={(el) => (navItemsRef.current[index] = el)}
                className="relative group"
              >
                <h1
                  onClick={() => handleNavClick(item)}
                  className={`font-semibold text-base cursor-pointer transition-all duration-300 px-2 py-1 ${
                    activeNav === item
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#2AA1FF] to-[#00CEF3] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </h1>
                {activeNav === item && (
                  <div className="absolute -bottom-[22px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#2AA1FF] to-[#00CEF3] rounded-full animate-slideIn" />
                )}
                <div className="absolute -bottom-[22px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#2AA1FF]/50 to-[#00CEF3]/50 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>

          {/* Desktop Wallet Section */}
          <div ref={walletBtnRef} className="relative">
            <div className="flex bg-gradient-to-r from-[#2AA1FF] to-[#00CEF3] gap-3 items-center rounded-xl h-11 px-5 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              <PiWalletFill className="text-white w-5 h-5" />

              {!tonConnectUI.wallet ? (
                <button
                  onClick={() => tonConnectUI.openModal()}
                  className="text-white font-semibold text-sm relative z-10"
                >
                  Connect Wallet
                </button>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setShowDisconnect(!showDisconnect)}
                    className="text-white font-semibold text-sm font-mono flex items-center gap-2"
                  >
                    <span>
                      {formatAddress(tonConnectUI.wallet?.account?.address)}
                    </span>
                    <FaChevronDown
                      className={`w-3 h-3 text-white/80 transition-transform duration-300 ${
                        showDisconnect ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {showDisconnect && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowDisconnect(false)}
                      />
                      <div className="absolute top-full right-0 mt-2 bg-[#0A0F1C] border border-gray-700/50 rounded-xl p-4 min-w-[260px] shadow-2xl shadow-black/50 z-50 backdrop-blur-xl animate-slideDown">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-gray-400 text-xs font-medium">
                            Wallet Address
                          </span>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>

                        <div className="flex items-center justify-between bg-white/5 rounded-lg p-3 mb-4">
                          <div className="text-white text-sm font-mono break-all">
                            {tonConnectUI.wallet?.account?.address || "N/A"}
                          </div>
                          <button
                            onClick={copyAddress}
                            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors ml-2"
                          >
                            {copied ? (
                              <FaCheck className="w-4 h-4 text-green-400" />
                            ) : (
                              <FaCopy className="w-4 h-4 text-gray-400 hover:text-white" />
                            )}
                          </button>
                        </div>

                        {balance && (
                          <div className="flex items-center justify-between mb-4 bg-gradient-to-r from-[#2AA1FF]/10 to-[#00CEF3]/10 rounded-lg p-3">
                            <span className="text-gray-400 text-sm">
                              Balance
                            </span>
                            <span className="text-white font-bold">
                              {balance}{" "}
                              <span className="text-xs font-normal text-gray-400">
                                TON
                              </span>
                            </span>
                          </div>
                        )}

                        <button
                          onClick={() => {
                            tonConnectUI.disconnect();
                            setShowDisconnect(false);
                          }}
                          className="w-full bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 border border-red-500/20 hover:border-red-500/50"
                        >
                          <MdOutlineLogout className="w-4 h-4" />
                          Disconnect Wallet
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* ============ MOBILE TOP BAR ============ */}
      <div className="md:hidden bg-[#020618]/95 backdrop-blur-md w-full h-16 border-b fixed top-0 z-50 border-gray-800/50">
        <div className="px-4 flex justify-between items-center h-full">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick("Home")}
          >
            <div className="relative w-9 h-9 flex justify-center items-center rounded-xl bg-gradient-to-br from-[#2AA1FF] to-[#00CEF3]">
              <MdAccountBalanceWallet className="text-white w-5 h-5" />
            </div>
            <h1 className="text-white font-bold text-xl">Stakee</h1>
            <span className="text-[8px] font-medium text-[#2AA1FF] bg-blue-500/10 px-1 py-0.5 rounded-full">
              BETA
            </span>
          </div>

          {/* Mobile Wallet Button */}
          <div
            onClick={() =>
              !tonConnectUI.wallet
                ? tonConnectUI.openModal()
                : setShowDisconnect(!showDisconnect)
            }
            className="flex bg-gradient-to-r from-[#2AA1FF] to-[#00CEF3] gap-1.5 items-center rounded-xl h-9 px-3 cursor-pointer active:scale-95 transition-all duration-300 shadow-lg shadow-blue-500/30"
          >
            <PiWalletFill className="text-white w-4 h-4" />

            {!tonConnectUI.wallet ? (
              <span className="text-white font-semibold text-xs">Connect</span>
            ) : (
              <span className="text-white font-semibold text-xs font-mono">
                {formatAddress(tonConnectUI.wallet?.account?.address)}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Disconnect Dropdown */}
        {showDisconnect && tonConnectUI.wallet && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowDisconnect(false)}
            />
            <div className="absolute top-16 right-4 left-4 bg-[#0A0F1C] border border-gray-700/50 rounded-xl p-4 shadow-2xl z-50 backdrop-blur-xl animate-slideDown">
              <div className="text-gray-400 text-xs mb-2 font-medium">
                Wallet Address
              </div>
              <div className="text-white text-xs font-mono mb-4 break-all bg-white/5 p-3 rounded-lg">
                {tonConnectUI.wallet?.account?.address || "N/A"}
              </div>

              <div className="flex items-center justify-between mb-4 bg-gradient-to-r from-[#2AA1FF]/10 to-[#00CEF3]/10 rounded-lg p-3">
                <span className="text-gray-400 text-xs">Balance</span>
                <span className="text-white font-bold text-sm">
                  {balance || "0.00"} TON
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={copyAddress}
                  className="flex-1 bg-white/5 hover:bg-white/10 text-white text-sm px-3 py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <FaCheck className="w-4 h-4 text-green-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    tonConnectUI.disconnect();
                    setShowDisconnect(false);
                  }}
                  className="flex-1 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white text-sm px-3 py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MdOutlineLogout className="w-4 h-4" />
                  Disconnect
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      {/* ============ MOBILE BOTTOM NAVIGATION (ALL BUTTONS VISIBLE) ============ */}
      <div
        ref={mobileNavRef}
        className="md:hidden fixed bottom-0 left-0 right-0 bg-[#020618]/95 backdrop-blur-md border-t border-gray-800/50 z-50 pb-safe"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 4px)" }}
      >
        <div className="grid grid-cols-4 gap-1 px-1 py-2">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all duration-300 ${
                activeNav === item
                  ? "bg-gradient-to-r from-[#2AA1FF]/20 to-[#00CEF3]/20"
                  : "active:bg-white/5"
              }`}
            >
              <div
                className={`mb-1 transition-all duration-300 ${
                  activeNav === item
                    ? "text-[#2AA1FF]"
                    : "text-gray-400"
                }`}
              >
                {getNavIcon(item)}
              </div>
              <span
                className={`text-[10px] font-medium transition-all duration-300 ${
                  activeNav === item
                    ? "text-[#2AA1FF] font-bold"
                    : "text-gray-400"
                }`}
              >
                {item === "Institutional" ? "Inst." : item}
              </span>

              {activeNav === item && (
                <div className="absolute -top-[1px] left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-[#2AA1FF] to-[#00CEF3] rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
      {/* ============ SPACER FOR FIXED NAVBAR ============ */}
      <div className="h-16 md:h-20"></div>
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scaleX(0);
          }
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
