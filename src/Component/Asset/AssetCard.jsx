import React from "react";
import { useNavigate } from "react-router-dom";

export const AssetCard = ({id,NamaMobil,PLatNomor,JumKM,JumTerpakai,status,assetPath}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>{navigate(`/admin/asset/${id}`)}} className="flex  flex-col cursor-pointer  w-[200px] h-max font-[poppins]  overflow-hidden  shadow-[0px_4px_4px_#00000040] rounded-[15px]">
      <div style={{backgroundImage:`url(http://localhost:8080/etc/images/${assetPath})`}} className="  bg-cover  w-full h-[178px] bg-[#d9d9d9]  " />
      <div className="px-[9px] py-[9px]  w-full h-[109px]   bg-[#f0f0f0] rounded-[0px_0px_15px_15px]  ">
        <div className="flex justify-end">
      
          <StatusCard Status={status} />
        </div>
        <div className=" -mt-2   font-light text-[#252b48] text-[27px] tracking-[0] first-letter:uppercase leading-[normal]">
          {(NamaMobil.length > 11 ? NamaMobil.substr(0,11)+"...":NamaMobil)}
        </div>
        <div className="    -mt-1  font-semibold text-[#252b48] text-[20px] tracking-[1.20px] leading-[normal]">
           {PLatNomor}
        </div>
        <p className=" -mt-1  font-medium text-[#252b48b2] text-[11px] tracking-[0.22px] leading-[normal]">
          {JumKM} Km | {JumTerpakai} terpakai
        </p>
      </div>
    </div>
  );
};
 
 const StatusCard = ({Status}) => {
  console.log(Status)
  if (Status === "perjalanan") {
    return(
      <div className="  w-[15px] h-[15px] bg-[#FFC700] rounded-full border border-solid border-black" />
    )  
  }
  
  if (Status === "kerusakan") {
    return(
      <div className="  w-[15px] h-[15px] bg-[#ff0000] rounded-full border border-solid border-black" />
    )  
  }

  if (Status === "perawatan") {
    return(
      <div className="  w-[15px] h-[15px] bg-[#C9EAD4] rounded-full border border-solid border-black" />
    )  
  }
  if (Status === null || "batal") {
    return(
      <div className="  w-[15px] h-[15px] bg-[#00FF66] rounded-full border border-solid border-black" />
    )  
  }
  
}
