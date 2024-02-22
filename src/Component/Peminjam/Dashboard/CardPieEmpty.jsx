import React, { useEffect, useState } from "react";
import { MDashboardPie } from "./MDashboardPie";
import axios, { formToJSON } from "axios";
import moment from 'moment';
export const CardPieEmpty = () => {
  const [toggleON, settoggleON] = useState(false);
  const [getDaftar, setDaftar] = useState([]);
  const handleToggleON = () => settoggleON(!toggleON);
  const getDaftarPeminjaman = async () => {
    await axios.get("http://localhost:8080/peminjam/dashboard").then((res) => {
        setDaftar(res.data.data[1]);
    });
  };
  const fetch = async () => {
    await getDaftarPeminjaman();
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      {toggleON && <MDashboardPie setcloseStatus={handleToggleON} />}
      <div
        // onClick={handleToggleON}
        className="  grow  flex-row  py-5 px-5 font-[poppins] h-[394px] rounded-[15px]  ring-1   ring-[#252b4880] "
      >
        <h2 className="text-slate-800 text-[27px] font-bold leading-10 tracking-widest whitespace-nowrap">
          Daftar pemesanan
        </h2>
        {getDaftar && getDaftar.map((res)=>{
return (<>
<div className="flex justify-between h-max my-3 ">
          <div className="flex gap-3">
            <img src={`http://localhost:8080/etc/images/${res.asset[0].assetPath}`} alt="aset" className="object-cover  w-[60px] h-[60px]  rounded-md " />
            <div className="">
              <p className="font-poppins text-[20px] first-letter:uppercase">{res.asset[0].nama_kendaraan}</p>
              <p className="font-poppins text-[20px] uppercase">{res.asset[0].plat_nomor}</p>
            </div>
          </div>
          <div className="h-auto   w-max flex items-center">
            <p className="font-poppins text-[20px]">{moment(res.request[0].waktu_tanggal).format("DD/MM/YYYY")}</p>
          </div>
          <div className="h-auto   w-max flex items-center">
            <p className="font-poppins text-[20px]">{res.request[0].waktu_pinjam} hari</p>
          </div>
        </div>
</>)

        })}
       
      </div>
    </>
  );
};
