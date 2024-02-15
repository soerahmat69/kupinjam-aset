import React, { useState } from "react";
 
import { useDispatch, useSelector } from "react-redux";
import { setPunchStatus } from "../../App/Store/PunchData";
import {  MTambajabatan } from "./MTambajabatan";

export const Main = ({ children }) => {
  const [moreLainnya, setmoreLainnya] = useState(false);
  const [moreSecurity, setmoreSecurity] = useState(false);
  const [TambahData, setTambahData] = useState(false);
  const [Jabatan, setJabatan] = useState({
    add: false,
    edit: false,
    delete: false,
  });
 
  const handleJabatan = (prop, value) =>{
    setJabatan({ ...Jabatan,[prop] : !value })};
  const handleMoreLainnya = () => setmoreLainnya(!moreLainnya);
  const handleMoreSecurity = () => setmoreSecurity(!moreSecurity);
  const dispatch = useDispatch();
  const { PunchStatus } = useSelector((state) => state.punchh);
  const handleClickSelesai = () => dispatch(setPunchStatus(!PunchStatus));

  return (
    <React.Fragment>
      
      {Jabatan.add && <MTambajabatan setcloseStatus={() => handleJabatan("add", Jabatan.add)} />}
      <main className="font-[poppins] black  text-[#252B48] w-full h-max ">
        <div className="flex-none w-min ">
          <h1 className=" text-[51px] font-semibold">Sistem</h1>
        </div>
        <div className="flex  w-full gap-[30px] ">
          <div className=" w-full h-[660px]  flex flex-col gap-[22px]">
            <div className="w-full h-full overflow-y-auto overflow-x-hidden px-4  py-4">
              {children}
            </div>
          </div>
          <div className="flex gap-[30px] w-max flex-col ">
            <div className="flex-none w-[375px] h-[240px] px-[22px] bg-[#f0f0f0] rounded-[15px] border border-solid border-[#252b4880] shadow-[0px_4px_4px_#00000040]">
              <div className="relative">
                <span
                  onClick={() => handleMoreLainnya()}
                  className=" cursor-pointer absolute w-[39px] h-[27px] -top-[5px] right-[0px]     font-bold text-[#252b48] text-[30px] tracking-[6.30px] leading-[normal] whitespace-nowrap"
                >
                  ...
                </span>
                <div
                  className={`${
                    !moreLainnya && "hidden"
                  } right-0 top-[40px] z-10 absolute overflow-hidden w-[150px] rounded-md shadow-lg bg-[#F0F0F0] ring-1 ring-[#252B4880] `}
                >
                  <ul className="divide-y divide-[#252B4880]">
                    <li
                      onClick={() => handleJabatan("add", Jabatan.add)}
                      className=" cursor-pointer block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                    >
                      Tambah jabatan
                    </li>
                    <li
                      href="#"
                      className="cursor-pointer block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                    >
                      Edit jabatan
                    </li>
                    <li
                      href="#"
                      className="cursor-pointer block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                    >
                      Hapus jabatan
                    </li>
                  </ul>
                  {/* </div> */}
                </div>
              </div>
              {/* <h1 className=" mt-[22px] h-[45px]  font-bold text-[#252b48] text-[27px] tracking-[1.51px] leading-[normal]">
                Jabatan
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
              <div className="flex-none   px-[22px]   w-[375px] h-[394px] bg-[#F0F0F0] rounded-[15px] border border-solid border-[#252b4880] shadow-[0px_4px_4px_#00000040]">
                <div className="relative">
                  <span
                    onClick={() => handleMoreSecurity()}
                    className=" cursor-pointer absolute w-[39px] h-[27px] -top-[5px] right-[0px]     font-bold text-[#252b48] text-[30px] tracking-[6.30px] leading-[normal] whitespace-nowrap"
                  >
                    ...
                  </span>
                  <div
                    className={`${
                      !moreSecurity && "hidden"
                    } right-0 top-[40px] z-10 absolute overflow-hidden w-[150px] rounded-md shadow-lg bg-[#F0F0F0] ring-1 ring-[#252B4880] `}
                  >
                    <ul className="divide-y divide-[#252B4880]">
                      <li
                        href="#"
                        className="cursor-pointer block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                      >
                        Hapus logs
                      </li>
                    </ul>
                    {/* </div> */}
                  </div>
                </div>
                {/* <h1 className="text-slate-800 mt-[22px] text-[27px] font-bold leading-10 tracking-widest whitespace-nowrap">
                  Security logs
                </h1>
                <ul className="gap-5 my-[18px] flex flex-col">
                  <li className="flex w-full justify-between">
                    <div className="flex gap-[5px]">
                      <img
                        src={require("../../Asset/ProfilDefault/peep-25.png")}
                        alt="profil"
                        className="w-[50px] h-[50px]   object-cover  bg-[#D9D9D9] rounded-md"
                      ></img>
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
