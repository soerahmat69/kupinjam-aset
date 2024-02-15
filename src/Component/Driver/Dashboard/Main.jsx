import React, { useEffect, useState } from "react";
import axios from "axios";
import Countdown from "../../Etc/Countdown";
import { LineChart } from "./LineChart";
import moment from 'moment'
export const Main = ({ children }) => {
  const [dashboardData, setDashboard] = useState([]);
  const [Herror, setHerror] = useState(false);
 const [datadate,setdatadate] = useState("1") 

  const getData = async (tahun = 0, bulan = 0) => {

    try {
      const response = await axios.get(`http://localhost:8080/driver/dashboard/${tahun}/${bulan}`);
      setDashboard(response.data.data[0]);
    } catch (error) {
      console.error(error);
      setHerror(true);
    }
  };
 const handleDatedata = (id)=>{
  setdatadate(id)
 }
  useEffect(() => {
    const fetchData = async () => {
      await getData();
 
    };

    fetchData();
  }, []);

  const [moreTotalitas, setmoreTotalitas] = useState(false);
  const handleMoreTotalitas = () => setmoreTotalitas(!moreTotalitas);

  return (
    <React.Fragment>
      <main className="font-[poppins] w-full text-[#252B48] flex flex-col ">
        <h1 className=" text-[51px] font-semibold">Dashboard</h1>

        <div className="flex gap-[30px] w-full     ">
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
                    onChange={(e)=>handleDatedata(e.target.value)}
                      className="w-full focus:border-0 aft focus:ring-0 border-0 bg-[#F0F0F0] rounded-b-md text-[13px] pl-4 "
                      name=""
                      id=""
                    >
                      <option value="1">1 Bulan</option>
                      <option value="3">3 Bulan</option>
                      <option value="1111">1 Tahun</option>
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
                  Total Perjalanan
                </h1>
                {dashboardData && dashboardData.totalitas ? (
                  <>
                    <Countdown
                      Classvalue={
                        "font-bold text-[#252b48] text-[20px] tracking-[0] leading-[normal]"
                      }
                      etcValue={"+"}
                      finalValue={dashboardData.totalitas.perjalanan}
                    />
                  </>
                ) : (
                  <>
                    <Countdown
                      Classvalue={
                        "font-bold text-[#252b48] text-[20px] tracking-[0] leading-[normal]"
                      }
                      etcValue={"+"}
                      finalValue={0}
                    />
                  </>
                )}
              </li>
          
            
            </ul>
          </div>

          <div className=" px-[25px] w-full pt-[22px] h-[240px]  rounded-[15px] border border-solid border-[#252b4880] shadow-[0px_4px_4px_#00000040] ">
            <h1 className="   font-bold text-[#252b48] text-[27px] tracking-[1.50px] leading-[normal]">
              Status
            </h1>
            <ul className="flex justify-around items-center  ">
              <li className="  flex  flex-col items-center ">
                {dashboardData && dashboardData.status_kendaraan ? (
                  <>
                    <Countdown
                      Classvalue={
                        " font-bold text-[#252b48] text-[70px] tracking-[0] leading-[normal]"
                      }
                      finalValue={
                        dashboardData.status_kendaraan.status_digunakan
                      }
                    />
                  </>
                ) : (
                  <>
                    <Countdown
                      Classvalue={
                        " font-bold text-[#252b48] text-[70px] tracking-[0] leading-[normal]"
                      }
                      finalValue={0}
                    />
                  </>
                )}
                <div className="flex gap-1  items-center">
                  <div className="  w-[19px] h-[19px]  bg-[#ffc600] rounded-[9.5px] border border-solid border-[#252b48]" />
                  <h2 className=" font-semibold text-[#252b48] text-[27px] tracking-[0] leading-[normal]">
                    Digunakan
                  </h2>
                </div>
              </li>
              <li className=" flex  flex-col items-center">
                {dashboardData && dashboardData.status_kendaraan ? (
                  <>
                    <Countdown
                      Classvalue={
                        " font-bold text-[#252b48] text-[70px] tracking-[0] leading-[normal]"
                      }
                      finalValue={
                        dashboardData.status_kendaraan.status_tidak_terpakai
                      }
                    />
                  </>
                ) : (
                  <>
                    <Countdown
                      Classvalue={
                        " font-bold text-[#252b48] text-[70px] tracking-[0] leading-[normal]"
                      }
                      finalValue={0}
                    />
                  </>
                )}
                <div className="flex gap-1 items-center">
                  <div className="  w-[19px] h-[19px]  bg-[#00ff66] rounded-[9.5px] border border-solid border-[#252b48]" />
                  <h1 className="   font-semibold text-[#252b48] text-[27px] tracking-[0] leading-[normal]">
                    Tidak Terpakai
                  </h1>
                </div>
              </li>
              <li className=" flex  flex-col items-center   ">
                {dashboardData && dashboardData.status_kendaraan ? (
                  <>
                    <Countdown
                      Classvalue={
                        " font-bold text-[#252b48] text-[70px] tracking-[0] leading-[normal]"
                      }
                      finalValue={
                        dashboardData.status_kendaraan.status_rusak
                      }
                    />
                  </>
                ) : (
                  <>
                    <Countdown
                      Classvalue={
                        " font-bold text-[#252b48] text-[70px] tracking-[0] leading-[normal]"
                      }
                      finalValue={0}
                    />
                  </>
                )}
                <div className="flex gap-1  items-center">
                  <div className="  w-[19px] h-[19px] bg-[#ff0000] rounded-[9.5px] border border-solid border-[#252b48]" />
                  <h1 className="    font-semibold text-[#252b48] text-[27px] tracking-[0] leading-[normal]">
                    Kerusakan
                  </h1>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="font-[poppins] mt-[22px] flex  gap-[30px] w-full  ">
          <div className="flex-none py-[22px]  px-[22px]  w-[375px] h-[394px] bg-[#F0F0F0] rounded-[15px] border border-solid border-[#252b4880] shadow-[0px_4px_4px_#00000040]">
            <p className="   font-normal text-[#252b48] text-[13px] tracking-[0.60px] leading-[normal]">
              # Rekap {datadate === "1111"? datadate +" tahun": datadate + " bulan"} ( sekarang - {moment().format("DD-MM-YYYY")})
            </p>
            <div className="h-full w-full  ">
              <LineChart data={datadate} />
            </div>
          </div>
          <div className="flex  gap-[30px] justify-between w-full">
            {children}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
