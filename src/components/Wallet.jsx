import React, { useState, useEffect, useRef } from "react";
import { LuWallet } from "react-icons/lu";
import { useNavigate } from "react-router";
const Wallet = () => {
  const [open, setOpen] = useState(null);
  const popupRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="bg-gradient-to-b from-[#040f24] to-[#08244e] min-h-screen px-4">
      <div className="flex flex-col justify-center items-center gap-10 pt-10 md:pt-32">
        <div
          className="relative flex flex-row justify-center gap-3 items-center w-36 h-10 bg-gradient-to-r from-[#2883FF] to-[#00CEF4] rounded-md cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <LuWallet className="w-6 h-6 text-white" />
          <h1 className="text-white text-sm font-semibold">Connect Wallet</h1>
          {open && (
            <div
              ref={popupRef}
              className="absolute bg-[#0F172B] w-[90vw] sm:w-[28rem] md:w-[32rem] top-0 left-1/2 -translate-x-1/2 border border-gray-600 rounded-2xl p-4 sm:p-6 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-3">
                <h1 className="text-white text-lg sm:text-xl">Connect Wallet</h1>
                <h1 className="text-gray-400 text-xs sm:text-sm">
                  Choose your preferred wallet to connect to Stakee
                </h1>
              </div>
              <div className="flex flex-col gap-4 sm:gap-6 mt-4">
                <div className="bg-white hover:bg-[#0F172B] border hover:border-[#2AA1FF] flex justify-start p-3 sm:p-4 gap-2 rounded-xl w-full cursor-pointer transition-all" onClick={() => navigate("/Dashboard")}>
                  <div className="w-8 h-8 bg-[#2B7FFF] flex justify-center items-center rounded-md flex-shrink-0">
                    <LuWallet className="text-white w-4 h-8" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-[#2AA1FF] text-sm font-semibold">
                      Tonkeeper
                    </h1>
                    <h1 className="text-gray-500 font-semibold text-xs sm:text-sm">
                      Mobile & Browser Extension
                    </h1>
                  </div>
                </div>

                <div className="bg-white hover:bg-[#0F172B] border hover:border-[#2AA1FF] flex justify-start p-3 sm:p-4 gap-2 rounded-xl w-full cursor-pointer transition-all" onClick={() => navigate("/Dashboard")}>
                  <div className="w-8 h-8 bg-[#00B8DB] flex justify-center items-center rounded-md flex-shrink-0">
                    <LuWallet className="text-white w-4 h-8" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-[#2AA1FF] text-sm font-semibold">
                      Tonhub
                    </h1>
                    <h1 className="text-gray-500 font-semibold text-xs sm:text-sm">
                      Mobile Wallet
                    </h1>
                  </div>
                </div>

                <div className="bg-white hover:bg-[#0F172B] border hover:border-[#2AA1FF] flex justify-start p-3 sm:p-4 gap-2 rounded-xl w-full cursor-pointer transition-all " onClick={() => navigate("/Dashboard")}>
                  <div className="w-8 h-8 bg-[#AD46FF] flex justify-center items-center rounded-md flex-shrink-0">
                    <LuWallet className="text-white w-4 h-8" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-[#2AA1FF] text-sm font-semibold">
                      Open Mask
                    </h1>
                    <h1 className="text-gray-500 font-semibold text-xs sm:text-sm">
                      Browser Extension
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 mt-10 justify-center items-center text-center">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl">Connect Your Wallet</h1>
          <h1 className="text-gray-400 text-base sm:text-lg max-w-md px-4">
            Connect your TON wallet to start staking and earning rewards
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Wallet;