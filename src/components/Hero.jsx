import React, { useRef, useEffect } from "react";
import { BsLightningCharge } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import { gsap } from "gsap/dist/gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
gsap.registerPlugin(TextPlugin);
const Hero = () => {
  const textRef = useRef(null);
  const textRef1 = useRef(null);
  useEffect(() => {
    gsap.to(textRef.current, {
      text: "Stake TON,",
      duration: 2,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    gsap.to(textRef1.current, {
      text: "Earn Rewards",
      duration: 3,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    gsap.from(".para", {
      x: "-180",
      duration: 2,
      ease: "power3.inOut",
    });
  });

  return (
    <div className="bg-[#092149] pt-20 md:pt-32 px-4 md:px-20">
      <div className="bg-[#092149] flex justify-center items-center gap-4 h-9 rounded-3xl w-60 border-2 border-[#10326E] mx-auto md:mx-0">
        <BsLightningCharge className="text-[#00D3F3] w-5 h-5" />
        <h1 className="text-white text-sm">Instant Liquidity, No Lock-up</h1>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start pb-4">
        <div className="flex flex-col gap-2 mt-10 text-center md:text-left">
          <h1 ref={textRef} className="text-4xl md:text-6xl text-white"></h1>
          <h1
            ref={textRef1}
            className="text-4xl md:text-6xl text-[#00D3F3]"
          ></h1>

          <h1 className="text-gray-400 font-semibold text-base md:text-lg mt-6 para">
            The leading liquid staking protocol for TON. Stake your{" "}
            <br className="hidden md:block" />
            tokens, receive STAKED, and earn rewards while{" "}
            <br className="hidden md:block" />
            maintaining full liquidity.
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 mt-6 justify-center md:justify-start">
            <div className="cursor-pointer bg-gradient-to-r flex justify-center gap-4 items-center transform hover:scale-105 from-[#2983FF] to-[#00CEF3] h-9 w-36 rounded-xl">
              <h1 className="text-sm text-white font-semibold">
                Start Staking
              </h1>
              <FaArrowRight className="text-white w-4 h-4 mt-0.5" />
            </div>

            <div className="cursor-pointer bg-transparent border border-gray-400 flex justify-center transform hover:scale-105 gap-4 items-center h-9 w-36 rounded-xl">
              <h1 className="text-sm text-white font-semibold">Learn More</h1>
              <MdKeyboardArrowDown className="text-white w-4 h-4 mt-0.5" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full sm:w-[19rem] justify-between mt-10 gap-6 sm:gap-0 mx-auto md:mx-0">
            <div className="flex flex-row gap-3 transform hover:scale-104 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-xl bg-blue-500 flex justify-center items-center">
                <SlGraph className="w-8 h-8 text-[#00D3F3]" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-gray-400 text-md font-semibold">APY</h1>
                <h1 className="text-white font-semibold text-lg">~5.2%</h1>
              </div>
            </div>

            <div className="flex flex-row gap-3 transform hover:scale-104 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-xl bg-blue-500 flex justify-center items-center">
                <SlGraph className="w-8 h-8 text-[#00D3F3]" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-gray-400 text-md font-semibold">TVL</h1>
                <h1 className="text-white font-semibold text-lg">$4.2M</h1>
              </div>
            </div>
          </div>

          <div className="bg-[#092149] mt-6 mb-14 flex justify-center items-center h-10 rounded-3xl animate-bounce w-56 border border-[#00D3F3] mx-auto md:mx-0">
            <h1 className="text-[#00D3F3] text-sm">
              Powered by TON Blockchain
            </h1>
          </div>
        </div>

        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden bg-[#092149] shadow-lg shadow-cyan-200 border-2 hover:border-pink-300 border-cyan-500 transform rotate-0 hover:rotate-360 duration-1000">
          <video
            src="/vid.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
