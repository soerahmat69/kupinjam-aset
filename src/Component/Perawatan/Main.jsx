import React, { useState } from "react";
import { MPerawatan } from "./MPerawatan";
import { CardPie } from "./CardPie";

export const Main = ({ children }) => {
  const [moreTotalitas, setmoreTotalitas] = useState(false);
  const [moreLainnya, setmoreLainnya] = useState(false);
  const [TambahData, setTambahData] = useState(false);
  const handleTambahData = () => setTambahData(!TambahData);
  const handleMoreTotalitas = () => setmoreTotalitas(!moreTotalitas);
  const handleMoreLainnya = () => setmoreLainnya(!moreLainnya);

  return (
    <React.Fragment>
      {TambahData && <MPerawatan setcloseStatus={handleTambahData} />}
      <main className="font-[poppins] black  text-[#252B48] w-full h-max ">
        <div className="flex-none w-min ">
          <h1 className=" text-[51px] font-semibold">Perawatan</h1>
        </div>
        <div className="flex  w-full gap-[30px] ">
          <div className="flex gap-[30px] w-max flex-col ">
            <div className="flex-none w-[375px] h-[240px] px-[22px] bg-[#f0f0f0] rounded-[15px] border border-solid border-[#252b4880] shadow-[0px_4px_4px_#00000040]">
              <div className="relative">
                <span
                  onClick={handleMoreTotalitas}
                  className=" cursor-pointer absolute w-[39px] h-[27px] -top-[5px] right-[0px]     font-bold text-[#252b48] text-[30px] tracking-[6.30px] leading-[normal] whitespace-nowrap"
                >
                  ...
                </span>
                <div
                  className={`${
                    !moreTotalitas && "hidden"
                  }   top-[40px] -right-[80px] z-10 absolute overflow-hidden w-[110px] rounded-md shadow-lg bg-[#F0F0F0] ring-1 ring-[#252B4880] `}
                >
                  <ul className="divide-y divide-[#252B4880]">
                    <li
                      href="#"
                      className=" block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                    >
                      Download
                    </li>
                    <li
                      href="#"
                      className="  block    text-[13px] text-gray-700 hover:bg-gray-100"
                    >
                      <select
                        className="w-full focus:border-0 aft focus:ring-0 border-0 bg-[#F0F0F0] rounded-b-md text-[13px] pl-4 "
                        name=""
                        id=""
                      >
                        <option value="1bulan ">1 Bulan</option>
                        <option value="1bulan ">3 Bulan</option>
                        <option value="1bulan">1 Tahun</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
              <h1 className=" mt-[22px] h-[45px]  font-bold text-[#252b48] text-[27px] tracking-[1.51px] leading-[normal]">
                Totalitas
              </h1>
              <ul className=" w-full h-max font-[poppins] ">
                <li className="flex justify-between items-center">
                  <h1 className="   font-medium text-[#252b48] text-[20px] tracking-[0] leading-[normal]">
                    Total Biaya
                  </h1>
                  <p className="  top-0 left-[308px]     font-bold text-[#252b48] text-[20px] tracking-[0] leading-[normal]">
                    +100k
                  </p>
                </li>
                <li className="flex justify-between items-center">
                  <h1 className="  top-[45px] left-0 font-medium text-[#252b48] text-[20px] tracking-[0] leading-[normal]">
                    Total Perawatan
                  </h1>

                  <p className="  top-[45px] left-[308px]     font-bold text-[#252b48] text-[20px] tracking-[0] leading-[normal]">
                    +6
                  </p>
                </li>
              </ul>
            </div>
            <div className="font-[poppins] flex  gap-[30px] w-full   ">
       
             <CardPie titlePie={"Top 3 Perawatan"} LabelsData={["Bmw","Bus","Kijang"]} dataArray={[11,11,11]} />
            </div>
          </div>
          <div className=" w-full h-[660px]  flex flex-col gap-[22px]">
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
                  } right-0 top-[57px] z-10 absolute overflow-hidden w-[140px] rounded-md shadow-lg bg-[#F0F0F0] ring-1 ring-[#252B4880] `}
                >
                  <ul className="divide-y divide-[#252B4880]">
                    <li
                      href="#"
                      className=" block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                    >
                      Progress tinggi
                    </li>
                    <li
                      href="#"
                      className=" block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                    >
                       Progress rendah
                    </li>
                
                  </ul>
                  {/* </div> */}
                </div>
               </div>
                
              </div>
            </div>
            <div className="w-full h-full overflow-y-auto overflow-x-hidden px-4  py-4">
              {children}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
