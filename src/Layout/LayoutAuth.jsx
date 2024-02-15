import React from "react";

export const LayoutAuth = ({ children }) => {
  return (
    <React.Fragment>
      <div className="flex flex-col lg:flex-row items-center   md:justify-between  lg:gap-[40px]   only:md:px-[40px] xl:px-20 lg:px-[50px]   lg:py-5 h-screen ">
        <content className=" hidden lg:block relative w-full h-full ">
          <div className=" absolute lg:top-[258px] left-[65px] font-[poppins] font-semibold text-[#252b48] text-[85px] tracking-[3.40px] leading-[normal]  ">
            <h1 className="  font-semibold  text-[#252b48]  text-[65px] tracking-[3.40px] leading-[normal]">
              Pinjam Aset
            </h1>
            <p className="   font-normal text-[#252b48] text-[40px] tracking-[0] leading-[normal]">
              Minjam aset, ya pakai kupin.
            </p>
          </div>
        </content>

        <aside className="h-full w-[284px]   md:w-max  flex justify-center items-center">
          {children}
        </aside>
      </div>
    </React.Fragment>
  );
};
