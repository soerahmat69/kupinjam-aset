import React, { useState } from "react";
import { MDashboardPie } from "./MDashboardPie";

export const CardPieEmpty = () => {
  const [toggleON, settoggleON] = useState(false);
  const handleToggleON = () => settoggleON(!toggleON);
  return (
    <>
      {toggleON && <MDashboardPie setcloseStatus={handleToggleON} />}
      <div
        onClick={handleToggleON}
        className=" items-center grow cursor-pointer  py-5 flex justify-center  font-[poppins] h-[394px] rounded-[15px]  border-2 border-dashed border-[#252b4880] "
      >
        <h1 className="w-[250px] text-center text-[25px] text-[#252B4880]">
          +
        </h1>
      </div>
    </>
  );
};
