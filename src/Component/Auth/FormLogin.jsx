import React, {useEffect, useState } from "react";
import { LoginUser, UserSess, reset, resetLogin } from "../../App/Store/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
 
export const FormLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [puc,setpuc] = useState(true)
  const { messageLogin, isLoading } = useSelector((state) => state.authLogin);
  const dispatch = useDispatch();
  
  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ username, password })).then(()=>setpuc(false))
  }
  useEffect(()=>{
    if (messageLogin) {
      alert(messageLogin.message)
    }
    return()=>{
      dispatch(resetLogin())
    }
   },[Auth])

 
 
  return (
    <form onSubmit={Auth} className=" flex flex-col gap-5  md:mx-[59px] lg:mx-[89px]" action="">
      <div className="md:my-7 my-3 text-center md:text-start">
        <h1 className="font-[poppins] text-2xl text-center lg:text-4xl">
          Login
        </h1>
      </div>
      <div className="w-full lg:w-[381px]">
        <input
          className="w-full h-[40px] lg:h-[60px] rounded-md bg-[#DFDFE0] text-xl lg:text-2xl placeholder-poppins px-4 lg:px-8 placeholder-text-xl"
          placeholder="username"
          type="text"
          // value={"surahmat"}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="w-full lg:w-[381px]">
        <input
          className="w-full h-[40px] lg:h-[60px]  rounded-md bg-[#DFDFE0] text-xl lg:text-2xl placeholder-poppins px-4 lg:px-8 placeholder-text-xl"
          placeholder="password"
          type="password"
          // value={"gisel123"}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        {/* <h3 className="font-[poppins] font-semibold">Lupa sandi ?</h3> */}
      </div>
      <div>
        <button
          className="w-full lg:w-[381px] h-[40px] lg:h-[60px]  bg-[#252B48] font-poppins rounded-md text-xl lg:text-2xl text-[#DFDFE0]"
          type="submit"
        >
          Login
        </button>
      </div>
      <div className="text-center mt-[20px] md:mt-[40px]">
          <h2 className="font-[poppins]  text-[17px]">
            Kamu belum punya akun ?,{" "}
            <a target="blank" href="https://api.whatsapp.com/send?phone=628123456789&text=Halo%20min,%20saya%20ingin%20buat%20akun%20kupinjam%20
"  className="underline ">
              registrasi ke admin
            </a>
          </h2>
        </div>
    </form>
  );
};
