import React, { useState } from "react";
import { MUser } from "./MUser";
import { setPunchSearch } from "../../App/Store/PunchData";
import { useDispatch } from "react-redux";

export const Main = ({ children }) => {
  const [moreTotalitas, setmoreTotalitas] = useState(false);
  const [moreLainnya, setmoreLainnya] = useState(false);
  const [TambahData, setTambahData] = useState(false);
  const dispatch = useDispatch()
  const handleTambahData = () =>setTambahData(!TambahData)
  const handleMoreTotalitas = () => setmoreTotalitas(!moreTotalitas);
  const handleMoreLainnya = () => setmoreLainnya(!moreLainnya);
 
  return (
    <React.Fragment>
      {TambahData && <MUser setcloseStatus={handleTambahData} />}
      <main className="font-[poppins] black  text-[#252B48] w-full h-max ">
        <div className="flex-none w-min ">
          <h1 className=" text-[51px] font-semibold">User</h1>
        </div>
        <div className="flex  w-full gap-[30px] ">
         
          <div className=" w-full h-[660px]  flex flex-col gap-[22px]">
            <div className="flex justify-between">
              <div className="w-[350px] h-max flex">
                <input
                onChange={(e)=>{
                  dispatch(setPunchSearch(e.target.value))
                }}
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
                <button onClick={handleTambahData} className="  px-[18px] gap-[5px] flex items-center justify-center rounded-lg bg-[#252B48]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="19"
                    viewBox="0 0 21 25"
                    fill="none"
                    className=""
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.811 1.01444H5.68453C3.14347 1.0047 1.06054 3.029 1.00067 5.57006V18.8239C0.957916 21.3283 2.95289 23.3941 5.45853 23.4381C5.53305 23.4381 5.60879 23.4381 5.68453 23.4357H15.4432C17.9708 23.41 20.0037 21.3515 20 18.8239V7.46242L13.811 1.01444Z"
                      stroke="#F0F0F0"
                      stroke-width="1.8325"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.4906 1V4.55382C13.4906 6.28858 14.8943 7.69472 16.6291 7.6996H19.9935"
                      stroke="#F0F0F0"
                      stroke-width="1.8325"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.27 13.417H7.28381"
                      stroke="#F0F0F0"
                      stroke-width="1.8325"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.2778 16.41V10.4238"
                      stroke="#F0F0F0"
                      stroke-width="1.8325"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="text-[#F0F0F0] text-[14px]">
                    Tambah data
                  </span>
                </button>
              
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
                    {/* <li
                      href="#"
                      className=" block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                    >
                      Data Disetujui
                    </li>
                    <li
                      href="#"
                      className=" block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                    >
                      Data Ditolak
                    </li>
                    <li
                      href="#"
                      className=" block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                    >
                      Data Dipending
                    </li> */}
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
                      <select className="w-full focus:border-0 aft focus:ring-0 border-0 bg-[#F0F0F0] rounded-b-md text-[13px] pl-4 " name="" id="">
                        <option value="1bulan ">1 Bulan</option>
                        <option value="1bulan ">3 Bulan</option>
                        <option value="1bulan">1 Tahun</option>
                      </select>
             
                    </li>
                  </ul>
                
                </div>
              </div>
              {/* <h1 className=" mt-[22px] h-[45px]  font-bold text-[#252b48] text-[27px] tracking-[1.51px] leading-[normal]">
                User list
              </h1>
              <ul className=" w-full h-max font-[poppins] ">
                <li className="flex justify-between items-center">
                  <h1 className="   font-medium text-[#252b48] text-[20px] tracking-[0] leading-[normal]">
                    Karyawan
                  </h1>
                  <p className="  top-0 left-[308px]     font-bold text-[#252b48] text-[20px] tracking-[0] leading-[normal]">
                    +10
                  </p>
                </li>
                <li className="flex justify-between items-center">
                  <h1 className="  top-[45px] left-0 font-medium text-[#252b48] text-[20px] tracking-[0] leading-[normal]">
                    Satpam
                  </h1>

                  <p className="  top-[45px] left-[308px]     font-bold text-[#252b48] text-[20px] tracking-[0] leading-[normal]">
                    +6
                  </p>
                </li>
                <li className="flex justify-between items-center">
                  <h1 className="  top-[45px] left-0 font-medium text-[#252b48] text-[20px] tracking-[0] leading-[normal]">
                    Pengemudi
                  </h1>

                  <p className="  top-[90px] left-[356px]     font-bold text-[#252b48] text-[20px] tracking-[0] leading-[normal]">
                    +1
                  </p>
                </li>
                <li className="flex justify-between items-center">
                  <h1 className="  top-[45px] left-0 font-medium text-[#252b48] text-[20px] tracking-[0] leading-[normal]">
                    Koordinator
                  </h1>

                  <p className="  top-[90px] left-[356px]     font-bold text-[#252b48] text-[20px] tracking-[0] leading-[normal]">
                    +3
                  </p>
                </li>
              </ul> */}
            </div>
            <div className="font-[poppins] flex  gap-[30px] w-full   ">
              <div className="flex-none py-[22px]  px-[22px]   w-[375px] h-[394px] bg-[#F0F0F0] rounded-[15px] border border-solid border-[#252b4880] shadow-[0px_4px_4px_#00000040]">
                {/* <h1 className="text-slate-800 text-[27px] font-bold leading-10 tracking-widest whitespace-nowrap">
                  {" "}
                  Top Peminjam{" "}
                </h1>
                <ul className="gap-5 my-[18px] flex flex-col">
                  <li className="flex w-full justify-between">
                    <div className="flex gap-[5px]">
                      <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-md"></div>
                      <div className="flex flex-col ">
                        <span>Alex Close ,</span>
                        <span>Karyawan</span>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-end text-slate-800  text-[20px] font-bold leading-8 whitespace-nowrap">
                        +27
                      </h2>
                    </div>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
