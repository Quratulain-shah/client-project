import React, { useEffect } from "react";
import { MdAccountBalanceWallet } from "react-icons/md";
import { TbBrandTwitter } from "react-icons/tb";
import { PiTelegramLogo } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  useEffect(() => {
    gsap.from(".footer", {
      opacity: 0,
      x: -60,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".footer",
        start: "top 90%",
      },
    });
  }, []);
  return (
    <footer className="bg-[#02071B] pt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="footer flex flex-col">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex justify-center items-center rounded-xl bg-[#2AA1FF] transition-transform duration-500 hover:rotate-360 cursor-pointer">
                <MdAccountBalanceWallet className="text-white w-7 h-7" />
              </div>
              <h1 className="text-white font-semibold text-xl">Stakee</h1>
            </div>

            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Liquid staking protocol for TON blockchain. Stake your TON and
              receive STAKED while earning rewards.
            </p>
          </div>

          <div className="footer">
            <h1 className="text-white text-lg font-semibold mb-3">Product</h1>
            <ul className="space-y-2">
              {[
                "Stake TON",
                "Buy Crypto",
                "Institutional",
                "Documentation",
              ].map((item) => (
                <li
                  key={item}
                  className="text-gray-400 hover:text-[#00D3F3] cursor-pointer text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer">
            <h1 className="text-white text-lg font-semibold mb-3">Community</h1>
            <ul className="space-y-2">
              {["News", "Support"].map((item) => (
                <li
                  key={item}
                  className="text-gray-400 hover:text-[#00D3F3] cursor-pointer text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer">
            <h1 className="text-white text-lg font-semibold mb-3">Follow Us</h1>
            <div className="flex gap-4">
              <TbBrandTwitter className="w-6 h-6 text-gray-400 hover:text-[#00D3F3] hover:scale-110 transition cursor-pointer" />
              <PiTelegramLogo className="w-6 h-6 text-gray-400 hover:text-[#00D3F3] hover:scale-110 transition cursor-pointer" />
              <FiGithub className="w-6 h-6 text-gray-400 hover:text-[#00D3F3] hover:scale-110 transition cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="footer border-t border-gray-700 mt-12 py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Stakee. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
