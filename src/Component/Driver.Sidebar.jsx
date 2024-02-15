import React, { useEffect, useState } from "react";
import { UserSess, reset } from "../App/Store/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
 
export const DriverSidebar = () => {
  const {isSuccess, userses } = useSelector((state) => state.auth);
  const [profilClick, setProfilClick] = useState(false);
  const [profil, setProfil] = useState({});
  const handleProfilClick = () => setProfilClick(!profilClick);
  const dispatch = useDispatch();
 const navigate = useNavigate()
 const handleLogout = () =>{
  axios.post('http://localhost:8080/logout').then((res)=>{
    if (res.data.status === 200) {
      dispatch(reset())
      navigate("/")
    }
  })
}
  useEffect(() => {
    if (isSuccess) {
      setProfil(userses);
    } 
  }, [userses, isSuccess]);
  // useEffect(() => {
  //   dispatch(UserSess());
  // }, [dispatch]);
const handleClickSidebar = (name) =>{
navigate(name)
}

  return (
    <nav className="flex-none px-[22px] py-[22px] w-[273px] flex flex-col justify-between h-full    bg-[#252b48] font-[poppins] rounded-[16px] ">
      <ul className="">
        <li className=" mb-[10px]">
          <h1 className="font-semibold text-[#d9d9d9] text-[45px] tracking-[0] leading-[normal]">
            Kupin.
          </h1>
        </li>
        <li onClick={()=>handleClickSidebar("/driver/dashboard")} className="cursor-pointer flex gap-3 items-center   h-[38px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 4.5C1 1.87479 1.02811 1 4.5 1C7.97189 1 8 1.87479 8 4.5C8 7.12521 8.01107 8 4.5 8C0.988927 8 1 7.12521 1 4.5Z"
              stroke="#F0F0F0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 4.5C12 1.87479 12.0281 1 15.5 1C18.9719 1 19 1.87479 19 4.5C19 7.12521 19.0111 8 15.5 8C11.9889 8 12 7.12521 12 4.5Z"
              stroke="#F0F0F0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 15.5C1 12.8748 1.02811 12 4.5 12C7.97189 12 8 12.8748 8 15.5C8 18.1252 8.01107 19 4.5 19C0.988927 19 1 18.1252 1 15.5Z"
              stroke="#F0F0F0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 15.5C12 12.8748 12.0281 12 15.5 12C18.9719 12 19 12.8748 19 15.5C19 18.1252 19.0111 19 15.5 19C11.9889 19 12 18.1252 12 15.5Z"
              stroke="#F0F0F0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h1 className="     font-medium text-[#d9d9d9] text-[25px] tracking-[0] leading-[normal]">
            Dashboard
          </h1>
        </li>
   
        <li onClick={()=>handleClickSidebar("/driver/keberangkatan")} className="cursor-pointer flex gap-3 items-center  h-[38px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M5.4668 13.5035L8.45993 9.61329L11.8741 12.2952L14.8032 8.51489"
              stroke="#F0F0F0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.2174 4.84439C19.279 4.84439 20.1396 3.9838 20.1396 2.9222C20.1396 1.8606 19.279 1 18.2174 1C17.1558 1 16.2952 1.8606 16.2952 2.9222C16.2952 3.9838 17.1558 4.84439 18.2174 4.84439Z"
              stroke="#F0F0F0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.1465 1.8421H5.87872C2.86728 1.8421 1 3.97483 1 6.98627V15.0686C1 18.0801 2.83066 20.2037 5.87872 20.2037H14.4828C17.4943 20.2037 19.3616 18.0801 19.3616 15.0686V8.02975"
              stroke="#F0F0F0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="   font-medium text-[#d9d9d9] text-[25px] tracking-[0] leading-[normal]">
            Keberangkatan
          </h1>
        </li>
      </ul>
      <div onClick={handleProfilClick} className="w-max h-max cursor-pointer  flex items-center gap-3 ">
      <div className="relative">
          <div
            className={`${
              !profilClick && "hidden"
            }   -top-20 left-44 z-10 absolute overflow-hidden w-[110px] rounded-md shadow-lg bg-[#F0F0F0] ring-1 ring-[#252B4880] `}
          >
            <ul className="divide-y divide-[#252B4880]">
              <li
                href="#"
                className=" block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
              >
                Profil
              </li>
              <li
              onClick={handleLogout}
                href="#"
                className=" block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
        <img  alt="Profile" src={profil && profil.profilPath?require(profil.profilPath):require('../Asset/ProfilDefault/peep-85.png')} className="    w-[60px] h-[60px] ring-2 ring-[#FF9B50] bg-[#d9d9d9]  rounded-full object-cover" />
        <div>
          {profil && profil.jabatan ? (
            <>
              <p className="font-bold first-letter:uppercase text-[#d9d9d9] text-[20px] tracking-[0] leading-[28px] whitespace-nowrap">
                {profil.jabatan.map((res) => res.role)}
              </p>
              <h1 className="font-normal first-letter:uppercase text-[#d9d9d9] text-[20px] tracking-[0] leading-[28px] whitespace-nowrap">
                {profil.username}
              </h1>
            </>
          ) : (
            <p className=" text-['poppins'] text-white ">Loading...</p>
          )}
        </div>
      </div>
    </nav>
  );
};
