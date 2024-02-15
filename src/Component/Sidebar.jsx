import React, { useEffect, useState } from "react";
import { UserSess, reset } from "../App/Store/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export const Sidebar = () => {
  const { isSuccess, userses } = useSelector((state) => state.auth);
  const [profilClick, setProfilClick] = useState(false);
  const [profil, setProfil] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleProfilClick = () => setProfilClick(!profilClick);
  const handleLogout = () =>{
  axios.post('http://localhost:8080/logout').then((res)=>{
    if (res.data.status === 200) {
      dispatch(reset())
      navigate("/")
    }
  })
 
}
  useEffect(() => {
    dispatch(UserSess())
    if (isSuccess) {
      setProfil(userses);
    }
  }, []);
  useEffect(() => {
    if (isSuccess) {
      setProfil(userses);
    } 
  }, [userses, isSuccess]);
  const handleClickSidebar = (name) => {
    navigate(name);
  };

  return (
    <nav className="flex-none px-[22px] py-[22px] w-[273px] flex flex-col justify-between h-full    bg-[#252b48] font-[poppins] rounded-[16px] ">
      <ul className="">
        <li className=" mb-[10px]">
          <h1 className="font-semibold text-[#d9d9d9] text-[45px] tracking-[0] leading-[normal]">
            Kupin.
          </h1>
        </li>
        <li
          onClick={() => handleClickSidebar("/admin/dashboard")}
          className="cursor-pointer flex gap-3 items-center   h-[38px] "
        >
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
        <li
          onClick={() => handleClickSidebar("/admin/permintaan")}
          className="cursor-pointer flex gap-3 items-center  h-[38px] "
        >
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
            Permintaan
          </h1>
        </li>
        <li
          onClick={() => handleClickSidebar("/admin/sesiguna")}
          className="  cursor-pointer flex gap-3 items-center    h-[38px] "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="20"
            viewBox="0 0 17 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.17048 13.2553C4.30286 13.2553 1 13.8272 1 16.1174C1 18.4077 4.2819 19 8.17048 19C12.0381 19 15.34 18.4272 15.34 16.1379C15.34 13.8486 12.059 13.2553 8.17048 13.2553Z"
              stroke="#D9D9D9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.17046 9.98868C10.7086 9.98868 12.7657 7.97599 12.7657 5.49388C12.7657 3.01177 10.7086 1 8.17046 1C5.63237 1 3.57425 3.01177 3.57425 5.49388C3.5657 7.9676 5.60951 9.9803 8.13808 9.98868H8.17046Z"
              stroke="#D9D9D9"
              stroke-width="1.42857"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="       font-medium text-[#d9d9d9] text-[25px] tracking-[0] leading-[normal]">
            Sesi guna
          </h1>
        </li>
        <li
          onClick={() => handleClickSidebar("/admin/sistem")}
          className=" cursor-pointer flex gap-3 items-center   h-[38px]  "
        >
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
              d="M18.7381 6.00571L18.1082 4.99429C17.5753 4.13846 16.3944 3.84323 15.4682 4.33429C15.0274 4.5746 14.5013 4.64278 14.0061 4.52379C13.5109 4.4048 13.0871 4.10842 12.8283 3.7C12.6618 3.4404 12.5723 3.14472 12.5689 2.84286C12.584 2.35889 12.3866 1.88991 12.0219 1.54275C11.6572 1.19558 11.1562 0.999801 10.633 1H9.36394C8.85134 1 8.35987 1.18901 7.99828 1.52521C7.63668 1.86142 7.43478 2.3171 7.43725 2.79143C7.42205 3.77075 6.55973 4.55724 5.50129 4.55714C5.17507 4.55401 4.85553 4.47122 4.57499 4.31714C3.64885 3.82608 2.46792 4.12132 1.93504 4.97714L1.25885 6.00571C0.726609 6.86047 1.04132 7.95254 1.96283 8.44857C2.56183 8.76858 2.93082 9.35998 2.93082 10C2.93082 10.64 2.56183 11.2314 1.96283 11.5514C1.04249 12.0441 0.727436 13.1335 1.25885 13.9857L1.89799 15.0057C2.14767 15.4226 2.56658 15.7302 3.06204 15.8605C3.55749 15.9908 4.08864 15.9331 4.53794 15.7C4.97962 15.4615 5.50596 15.3962 5.99996 15.5185C6.49396 15.6408 6.91469 15.9407 7.16862 16.3514C7.33512 16.611 7.42459 16.9067 7.42798 17.2086C7.42798 18.198 8.29474 19 9.36394 19H10.633C11.6986 19 12.5638 18.2032 12.5689 17.2171C12.5665 16.7413 12.7696 16.2843 13.1332 15.9479C13.4968 15.6114 13.9907 15.4234 14.5049 15.4257C14.8303 15.4338 15.1485 15.5162 15.4312 15.6657C16.3549 16.1582 17.5351 15.867 18.0711 15.0143L18.7381 13.9857C18.9962 13.5757 19.0671 13.0874 18.9349 12.6289C18.8028 12.1703 18.4786 11.7795 18.0341 11.5429C17.5896 11.3062 17.2654 10.9154 17.1332 10.4569C17.0011 9.99836 17.0719 9.51002 17.3301 9.1C17.498 8.82879 17.741 8.60391 18.0341 8.44857C18.9501 7.95281 19.264 6.86712 18.7381 6.01429V6.00571Z"
              stroke="#F0F0F0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.0031 12.4686C11.4765 12.4686 12.6709 11.3634 12.6709 10C12.6709 8.63665 11.4765 7.53143 10.0031 7.53143C8.52977 7.53143 7.33539 8.63665 7.33539 10C7.33539 11.3634 8.52977 12.4686 10.0031 12.4686Z"
              stroke="#F0F0F0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="    font-medium text-[#d9d9d9] text-[25px] tracking-[0] leading-[normal]">
            Sistem
          </h1>
        </li>
        <li
          onClick={() => handleClickSidebar("/admin/asset")}
          className=" cursor-pointer flex gap-3 items-center     h-[38px] "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="21"
            viewBox="0 0 19 21"
            fill="none"
          >
            <path
              d="M12.9656 14.9054H5.74561"
              stroke="#F0F0F0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.9656 10.5847H5.74561"
              stroke="#F0F0F0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.50073 6.27405H5.74573"
              stroke="#F0F0F0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.158 1C13.158 1 5.481 1.00413 5.469 1.00413C2.709 1.02167 1 2.89587 1 5.75464V15.2454C1 18.1186 2.722 20 5.506 20C5.506 20 13.182 19.9969 13.195 19.9969C15.955 19.9794 17.665 18.1041 17.665 15.2454V5.75464C17.665 2.88142 15.942 1 13.158 1Z"
              stroke="#F0F0F0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="     font-medium text-[#d9d9d9] text-[25px] tracking-[0] leading-[normal]">
            Asset
          </h1>
        </li>

        <li
          onClick={() => handleClickSidebar("/admin/user")}
          className="cursor-pointer flex gap-3 items-center  h-[38px] "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="20"
            viewBox="0 0 17 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.17048 13.2553C4.30286 13.2553 1 13.8272 1 16.1174C1 18.4077 4.2819 19 8.17048 19C12.0381 19 15.34 18.4272 15.34 16.1379C15.34 13.8486 12.059 13.2553 8.17048 13.2553Z"
              stroke="#D9D9D9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.17046 9.98868C10.7086 9.98868 12.7657 7.97599 12.7657 5.49388C12.7657 3.01177 10.7086 1 8.17046 1C5.63237 1 3.57425 3.01177 3.57425 5.49388C3.5657 7.9676 5.60951 9.9803 8.13808 9.98868H8.17046Z"
              stroke="#D9D9D9"
              stroke-width="1.42857"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="       font-medium text-[#d9d9d9] text-[25px] tracking-[0] leading-[normal]">
            User
          </h1>
        </li>
      </ul>
      <div
        onClick={handleProfilClick}
        className="w-max cursor-pointer h-max  flex items-center gap-3 "
      >
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
        <img
          alt="Profile"
          src={
            profil && profil.profilPath
              ? require(profil.profilPath)
              : require("../Asset/ProfilDefault/peep-85.png")
          }
          className="    w-[60px] h-[60px] ring-2 ring-[#FF9B50] bg-[#d9d9d9]  rounded-full object-cover"
        />
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
