import React, { useState } from "react";

import { MDashboardPergi } from "./MDashboardPergi";
import { MDashboardBBM } from "./MDashboardBBM";
import { MDashboardKembali } from "./MDashboardKembali";

export const CardPerjalanan = () => {
  const [pergi, setPergi] = useState(false);
  const [bbm, setBbm] = useState(false);
  const [kembali, setKembali] = useState(false);
  const handleTogglePergi = () => setPergi(!pergi);
  const handleToggleBBM = () => setBbm(!bbm);
  const handleToggleKembali = () => setKembali(!kembali);
  return (
    <>
      {pergi && <MDashboardPergi setcloseStatus={handleTogglePergi} />}
      {bbm && <MDashboardBBM setcloseStatus={handleToggleBBM} />}
      {kembali && <MDashboardKembali setcloseStatus={handleToggleKembali} />}
      <div className=" flex-col flex  w-full px-5  py-5   font-[poppins] h-[394px] rounded-[15px]  border-2 border-dashed border-[#252b4880] ">
        <div className="w-full min-h-max flex items-center justify-between gap-3">
          <div className="flex items-center h-min w-min gap-3">
            <div className="flex-none w-[75px] h-[75px] bg-[#D9D9D9] rounded-md" />
            <div className="flex  flex-col w-max h-max">
              <span className="text-[25px] text-[#252B48] font-semibold">
                Bus Hitler
              </span>
              <span className="text-[25px] text-[#252B48] font-semibold">
                PX12434B
              </span>
            </div>
          </div>
        </div>
        <div className="mt-3 border-l-4 border-[#252B48] px-2 h-max">
          <p className="">123 Main Street, apt 4B San Diego CA, 91911</p>
        </div>
        <div className="h-full w-full flex items-center gap-2  ">
          <div>
            <button
              onClick={handleTogglePergi}
              className="px-[10px] py-[9px] bg-[#252B48] rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="26"
                viewBox="0 0 23 26"
                fill="none"
              >
                <path
                  d="M15.5392 18.2668H6.7663"
                  stroke="#F0F0F0"
                  stroke-width="1.82263"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.5392 13.1799H6.7663"
                  stroke="#F0F0F0"
                  stroke-width="1.82263"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.114 8.10474H6.76648"
                  stroke="#F0F0F0"
                  stroke-width="1.82263"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.773 1.89526C15.773 1.89526 6.4448 1.90012 6.43021 1.90012C3.07658 1.92078 1 4.12737 1 7.49316V18.6671C1 22.0499 3.09238 24.265 6.47517 24.265C6.47517 24.265 15.8022 24.2613 15.818 24.2613C19.1716 24.2407 21.2494 22.0329 21.2494 18.6671V7.49316C21.2494 4.11036 19.1558 1.89526 15.773 1.89526Z"
                  stroke="#F0F0F0"
                  stroke-width="1.82263"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div className="relative">
              <h3 className=" absolute text-[17px] font-semibold font-['poppins']">
                09:08
              </h3>
            </div>
          </div>
          <div className="rounded-full w-full h-[10px] bg-[#252B48] " />
          <div>
            <button onClick={handleToggleBBM} className="px-[10px] py-[9px] bg-[#252B48] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="26"
                viewBox="0 0 23 26"
                fill="none"
              >
                <path
                  d="M15.5392 18.2668H6.7663"
                  stroke="#F0F0F0"
                  stroke-width="1.82263"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.5392 13.1799H6.7663"
                  stroke="#F0F0F0"
                  stroke-width="1.82263"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.114 8.10474H6.76648"
                  stroke="#F0F0F0"
                  stroke-width="1.82263"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.773 1.89526C15.773 1.89526 6.4448 1.90012 6.43021 1.90012C3.07658 1.92078 1 4.12737 1 7.49316V18.6671C1 22.0499 3.09238 24.265 6.47517 24.265C6.47517 24.265 15.8022 24.2613 15.818 24.2613C19.1716 24.2407 21.2494 22.0329 21.2494 18.6671V7.49316C21.2494 4.11036 19.1558 1.89526 15.773 1.89526Z"
                  stroke="#F0F0F0"
                  stroke-width="1.82263"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div className="relative w-min ">
              <h3 className=" -left-6 whitespace-nowrap absolute text-[17px] font-semibold font-['poppins']">
                Rp 15.000
              </h3>
            </div>
          </div>

          <div className="rounded-full w-full h-[10px] bg-[#252B48] " />
          <div>
            <button onClick={handleToggleKembali} className="px-[10px] py-[9px] bg-[#252B48] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="26"
                viewBox="0 0 23 26"
                fill="none"
              >
                <path
                  d="M15.5392 18.2668H6.7663"
                  stroke="#F0F0F0"
                  stroke-width="1.82263"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.5392 13.1799H6.7663"
                  stroke="#F0F0F0"
                  stroke-width="1.82263"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.114 8.10474H6.76648"
                  stroke="#F0F0F0"
                  stroke-width="1.82263"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.773 1.89526C15.773 1.89526 6.4448 1.90012 6.43021 1.90012C3.07658 1.92078 1 4.12737 1 7.49316V18.6671C1 22.0499 3.09238 24.265 6.47517 24.265C6.47517 24.265 15.8022 24.2613 15.818 24.2613C19.1716 24.2407 21.2494 22.0329 21.2494 18.6671V7.49316C21.2494 4.11036 19.1558 1.89526 15.773 1.89526Z"
                  stroke="#F0F0F0"
                  stroke-width="1.82263"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div className="relative  ">
              <h3 className="   absolute text-[17px] font-semibold font-['poppins']">
                11:20
              </h3>
            </div>{" "}
          </div>
        </div>
        <div className=" flex justify-end ">
          <h3 className="  -mb-[14px] text-[20px] font-['poppins']  flex-none font-semibold">
            09:10 - 09/09/2009
          </h3>
        </div>
      </div>
    </>
  );
};
