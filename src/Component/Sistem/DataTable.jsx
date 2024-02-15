import React, { useEffect, useState } from "react";
import { MSesiGuna } from "./MSesiGuna";
import { MKetLain } from "./MKetLain";
import { MEditData } from "./MTambajabatan";
import axios from "axios";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../App/Store/PunchData";
import { ToggleSwitch, theme } from "flowbite-react";
import QRCode from "react-qr-code";
 

export const DataTable = ({ data }) => {
  const [switchViPie, setswitchViPie] = useState(false);
  const [generateQR,setGenerateQR] = useState(null)
  const [qrPull,setQrPull] = useState(true)

  const handleApiWa=()=>{
    setQrPull(false)
    axios.get('http://localhost:8080/req/wa').then((res)=>setGenerateQR(res.data.data[0].qrWa)).catch((err)=>alert("error"))
    setTimeout(()=>{
      setQrPull(true)
    },15000)
  }
  
  return (
    <>
      <div className="">
        <hr className="py-[1px]  bg-black" />
        <ul className="flex mt-6 flex-col h-full w-full gap-7 justify-evenly">
          <li className="flex text-[#252b48] justify-between items-center">
            <h2 className=" text-[20px] font-semibold">Verifikasi Whatsapp</h2>
            <button disabled={qrPull?false:true} onClick={handleApiWa} className="ring-1 ring-[#252b48] py-1 px-2 rounded-md">
              Generate Qr Whatsapp
            </button>
          </li>
          {
            generateQR && <>
              <li className="flex text-[#252b48] justify-between items-center">
            <h2 className=" text-[20px] font-semibold">Scan QR Whatsapp</h2>
          <QRCode value={generateQR} />
          </li>
            </>
          }
        
          {/* <li className="flex text-[#252b48] justify-between items-center">
            <h2 className=" text-[20px] font-semibold">Visual Data Pie</h2>
            <ToggleSwitch
             
             color="success"
             theme={{root:{label:"ml-3 font-[poppins] text-sm font-semibold text-gray-900 dark:text-gray-300"},toggle:{checked:{color:{success:"bg-[#252b48]"}}}}}
              checked={switchViPie}
              label={switchViPie?"Enable":"Disable"}
              onChange={() => setswitchViPie(!switchViPie)}
            />
          </li> */}
          {/* <li className="flex text-[#252b48] justify-between items-center">
            <h2 className=" text-[20px] font-semibold">Perawatan</h2>
            <button className="ring-1 ring-[#252b48] py-2 px-2 rounded-md">
              Comingsoon
            </button>
          </li> */}
         
        </ul>
      </div>
    </>
  );
};
