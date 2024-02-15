import React, { useEffect, useState } from "react";
import axios from "axios";
import Countdown from "../../Etc/Countdown";
import { LineChart } from "./LineChart";
import moment from "moment";
export const Main = ({ children }) => {
  const [dashboardData, setDashboard] = useState([]);
  const [Herror, setHerror] = useState(false);
  const [getList, setgetList] = useState(false);
  const [datadate, setdatadate] = useState("1");

  const getData = async (tahun = 0, bulan = 0) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/admin/dashboard/${tahun}/${bulan}`
      );
      setDashboard(response.data.data[0]);
    } catch (error) {
      console.error(error);
      setHerror(true);
    }
  };
  const getTopList = async () => {
    await axios.get("http://localhost:8080/peminjam/dashboard").then((res) => {
      setgetList(res.data.data);
    });
  };
  const handleDatedata = (id) => {
    setdatadate(id);
  };
  useEffect(() => {
    const fetchData = async () => {
      await getData();
      await getTopList();
    };

    fetchData();
  }, []);

  const [moreTotalitas, setmoreTotalitas] = useState(false);
  const handleMoreTotalitas = () => setmoreTotalitas(!moreTotalitas);

  return (
    <React.Fragment>
      <main className="font-[poppins] w-full text-[#252B48] flex flex-col ">
        <h1 className=" text-[51px] font-semibold">Beranda</h1>

        <div className="flex gap-[30px] w-full     ">
          <div className="flex-none w-[375px] h-[230px] px-[22px] bg-[#f0f0f0] rounded-[15px] border border-solid border-[#252b4880] shadow-[0px_4px_4px_#00000040]">
         
            <h1 className=" mt-[22px] h-[45px]  font-bold text-[#252b48] text-[27px] tracking-[1.51px] leading-[normal]">
              Totalitas
            </h1>
            <ul className=" w-full h-max font-[poppins] ">
              <li className="flex justify-between items-center">
                <h1 className="   font-medium text-[#252b48] text-[20px] tracking-[0] leading-[normal]">
                  Total Pinjamanmu
                </h1>
                {dashboardData && dashboardData.totalitas ? (
                  <>
                    <Countdown
                      Classvalue={
                        "font-bold text-[#252b48] text-[20px] tracking-[0] leading-[normal]"
                      }
                      etcValue={"+"}
                      finalValue={dashboardData.totalitas.pinjaman}
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

          <div className=" px-[25px]  w-full pt-[22px] h-[230px]  rounded-[15px] border-2 border-dashed border-[#252b4880]   ">
            {/* <h1 className="  font-semibold text-[rgb(37,43,72)] text-[27px] tracking-[1.50px] leading-[normal]">
              Total pinjaman
            </h1> */}
            <h1 className=" flex   w-full h-full items-center justify-center">
              +
            </h1>
          </div>
        </div>

        <div className="font-[poppins] mt-[22px] flex  gap-[30px] w-full  ">
          <div className="flex-none py-[22px]  px-[22px]  w-[375px] h-[394px] bg-[#F0F0F0] rounded-[15px] border border-solid border-[#252b4880] shadow-[0px_4px_4px_#00000040]">
            <h1 className="text-slate-800 text-[27px] font-bold leading-10 tracking-widest whitespace-nowrap">
              {" "}
              Top pinjamanmu{" "}
            </h1>
            <ul className="">
              {getList && getList.map((res)=>{
               return( <>
                   <li key={res.plat_nomor[0]} className="flex gap-[5px] my-2">
                <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-md"></div>
                <div className="flex flex-col ">
                  <span className="first-letter:uppercase">{res.nama_kendaraan[0]}</span>
                  <span className=" first-letter:uppercase">{res.plat_nomor[0]}</span>
                </div>
              </li>
                </>)
              })}
          
            </ul>
          </div>
          <div className="flex  gap-[30px] justify-between w-full">
            {children}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
