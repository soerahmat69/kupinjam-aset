import React, { useState } from "react";
import { MSesiGuna } from "./MSesiGuna";
import { useDispatch, useSelector } from "react-redux";
import { setPunchStatus } from "../../App/Store/PunchData";

export const Main = ({ children }) => {
  const [moreLainnya, setmoreLainnya] = useState(false);
  const [TambahData, setTambahData] = useState(false);
  const handleTambahData = () =>setTambahData(!TambahData)
  const handleMoreLainnya = () => setmoreLainnya(!moreLainnya);
 const dispatch = useDispatch()
 const { PunchStatus } = useSelector((state) => state.punchh);
 const handleClickSelesai =()=>dispatch(setPunchStatus(!PunchStatus))

  return (
    <React.Fragment>
      {TambahData && <MSesiGuna setcloseStatus={handleTambahData} />}
      <main className="font-[poppins] black  text-[#252B48] w-full h-max ">
        <div className="flex-none w-max ">
          <h1 className=" text-[51px] font-semibold">Sesi Penggunaan</h1>
        </div>
        <div className="   w-full   ">
       
          <div className=" w-full h-[700px]  flex flex-col gap-[22px] ">
            <div className="flex justify-between">
              <div className="w-[350px] h-max flex">
                <input
                  placeholder="Cari data"
                  className=" text-[23px] placeholder:text-[23px] w-full h-[51px] rounded-xl border-0 pr-[60px] bg-[#D9D9D9] placeholder:font-[poppins]"
                  type="search"
                />
                <div className="relative  flex  items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="58"
                    viewBox="0 0 55 58"
                    fill="none"
                    className="absolute right-2 w-[35px]"
                  >
                    <g filter="url(#filter0_d_57_561)">
                      <path
                        d="M26.5138 43.2402C36.856 43.2402 45.24 34.8562 45.24 24.514C45.24 14.1718 36.856 5.78784 26.5138 5.78784C16.1716 5.78784 7.78766 14.1718 7.78766 24.514C7.78766 34.8562 16.1716 43.2402 26.5138 43.2402Z"
                        stroke="#252B48"
                        stroke-width="6.45161"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5381 38.5109L46.8798 45.8335"
                        stroke="#252B48"
                        stroke-width="6.45161"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_57_561"
                        x="-2"
                        y="0"
                        width="58"
                        height="58"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_57_561"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_57_561"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex gap-3">
              <div className="relative h-full">
               <button onClick={handleMoreLainnya} className=" h-full px-[18px] gap-[5px] flex items-center justify-center rounded-lg bg-[#252B48]">
                  <span className="text-[#F0F0F0] text-[14px]">Lainnya</span>

                </button>
               <div
                  className={`${
                    !moreLainnya && "hidden"
                  } right-0 top-[57px] z-10  absolute overflow-hidden w-[140px] rounded-md shadow-lg bg-[#F0F0F0] ring-1 ring-[#252B4880] `}
                >
                  <ul className="divide-y divide-[#252B4880]">
                    <li
                    onClick={handleClickSelesai}
                    
                      className=" block cursor-pointer px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                    >
                      Status selesai
                    </li>
                   
                    
                  </ul>
                   
                </div>
               </div>
 
              </div>
            </div>
            <div className="  h-[670px] w-full overflow-y-auto overflow-x-hidden  py-[4px] pr-4">
            {children}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
