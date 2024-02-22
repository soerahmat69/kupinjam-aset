import React, { useEffect, useState } from "react";
import { MInfo } from "../MInfo";
import axios from "axios";
import { MHapus } from "./MHapus";
import { MEditUser } from "./MEditUser";
import { useSelector } from "react-redux";

export const DataTable = () => {
  const [hapususer, sethapususer] = useState(false);
  const [LihatClick, setLihatClick] = useState(false);
  const [Editclick, seteditClick] = useState([]);

  const [actiontb, setActionTable] = useState([]);
  const [data, setdata] = useState([]);
  const {PunchSearch} = useSelector((state)=>state.punchh)
  const searchGet = async()=>{
  await  axios
    .post(`http://localhost:8080/admin/user/search`,{keyword:PunchSearch})
    .then((res) => {
      setdata(res.data.data);
      console.log(res.data.data)
    })
    .catch((res) => {});
      
  }
  useEffect(() => {
    axios
      .get(`http://localhost:8080/admin/user`)
      .then((res) => {
        setdata(res.data.data);
      })
      .catch((res) => {});
      return ()=>{
      searchGet()
      }
  }, [PunchSearch]);

  const toggleAction = (id) => {
    setActionTable((prevStatus) => {
      const newStatus = { ...prevStatus };
      Object.keys(newStatus).forEach((key) => {
        newStatus[key] = false;
      });
      newStatus[id] = !prevStatus[id];
      return newStatus;
    });
  };
  const toggleHapus = (id) => {
    sethapususer((prevStatus) => {
      const newStatus = { ...prevStatus };
      Object.keys(newStatus).forEach((key) => {
        newStatus[key] = false;
      });
      newStatus[id] = !prevStatus[id];
      return newStatus;
    });
  };
  const toggleEdit = (id) => {
    seteditClick((prevStatus) => {
      const newStatus = { ...prevStatus };
      Object.keys(newStatus).forEach((key) => {
        newStatus[key] = false;
      });
      newStatus[id] = !prevStatus[id];
      return newStatus;
    });
  };

  const toggleModalData = (id) => {
    setLihatClick((prevStatus) => {
      const newStatus = { ...prevStatus };

      Object.keys(newStatus).forEach((key) => {
        newStatus[key] = false;
      });
      newStatus[id] = !prevStatus[id];
      return newStatus;
    });
  };

  return (
    <>
      <table class="w-full font-[poppins] ">
        <thead className="border-[#252B48]  border-b-2   sticky top-0 uppercase  text-[#00000080]">
          <tr className="text-[14px] ">
            <th className="text-start pb-[26px] ">Ket pengguna</th>
            <th className="text-start  pb-[26px]  ">Password</th>
            <th className="text-start pb-[26px] ">No Whatsapp</th>
            <th className="text-start  pb-[26px]  ">Meminjam</th>

            <th className="text-start pb-[26px]  ">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {data.length > 0 ? 
            data.map((res) => (
              
                <>
                {LihatClick[res._id] && <MInfo info={res.password} tittle={"Password"} setcloseStatus={()=>toggleModalData(res._id)} />}
                {hapususer[res._id] && <MHapus id={res._id} tittle={"Password"} setcloseStatus={()=>toggleHapus(res._id)} />}
                {Editclick[res._id] && <MEditUser dataUser={res} setcloseStatus={()=>toggleEdit(res._id)} />}
                  
                   <tr className="  ">
                    <td className="flex py-[17px] items-center gap-[5px] ">
                      <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-md"></div>
                      <div className="flex flex-col">
                        <span>
                          {" "}
                          {res.username.length > 12
                            ? res.username.substring(0, 12) + "..."
                            : res.username}{" "}
                          ,
                        </span>
                        <span>{res.jabatan[0]}</span>
                      </div>
                    </td>
                    <td
                      onClick={()=>toggleModalData(res._id)}
                      className="py-[17px] cursor-pointer underline underline-offset-4"
                    >
                      Lihat
                    </td>
                    <td className="py-[17px]">{res.no_wa}</td>
                    <td className="py-[17px]">{res.count}</td>

                    <td className="py-[17px] ">
                      <svg
                        onClick={()=>toggleAction(res._id)}
                        className="cursor-pointer"
                        width="25"
                        height="5"
                        viewBox="0 0 25 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.18 4.18C1.66 4.18 1.22 4 0.86 3.64C0.5 3.28 0.32 2.84 0.32 2.32C0.32 1.8 0.5 1.36 0.86 1C1.22 0.64 1.66 0.46 2.18 0.46C2.68 0.46 3.1 0.64 3.44 1C3.8 1.36 3.98 1.8 3.98 2.32C3.98 2.84 3.8 3.28 3.44 3.64C3.1 4 2.68 4.18 2.18 4.18ZM12.5288 4.18C12.0088 4.18 11.5688 4 11.2088 3.64C10.8488 3.28 10.6688 2.84 10.6688 2.32C10.6688 1.8 10.8488 1.36 11.2088 1C11.5688 0.64 12.0088 0.46 12.5288 0.46C13.0288 0.46 13.4488 0.64 13.7888 1C14.1488 1.36 14.3288 1.8 14.3288 2.32C14.3288 2.84 14.1488 3.28 13.7888 3.64C13.4488 4 13.0288 4.18 12.5288 4.18ZM22.8777 4.18C22.3577 4.18 21.9177 4 21.5577 3.64C21.1977 3.28 21.0177 2.84 21.0177 2.32C21.0177 1.8 21.1977 1.36 21.5577 1C21.9177 0.64 22.3577 0.46 22.8777 0.46C23.3777 0.46 23.7977 0.64 24.1377 1C24.4977 1.36 24.6777 1.8 24.6777 2.32C24.6777 2.84 24.4977 3.28 24.1377 3.64C23.7977 4 23.3777 4.18 22.8777 4.18Z"
                          fill="#252B48"
                        />
                      </svg>
                      <div className="relative">
                        <div
                          className={`${
                            !actiontb[res._id] && "hidden"
                          }  top-[10px]  z-10 absolute overflow-hidden w-[100px] rounded-md shadow-lg bg-[#F0F0F0] ring-1 ring-[#252B4880] `}
                        >
                          <ul className="divide-y divide-[#252B4880]">
                            <li
                            onClick={()=>toggleEdit(res._id)}
                              href="#"
                              className=" cursor-pointer  flex   gap-[5px] px-4 py-[6px]   text-[13px] text-gray-700 hover:bg-gray-100"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                              >
                                <path
                                  d="M8.76208 13.9998H14.0001"
                                  stroke="#252B48"
                                  stroke-width="1.17361"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.06334 1.59235C8.62353 0.901464 9.63055 0.800156 10.3139 1.36648C10.3517 1.39721 11.5657 2.37042 11.5657 2.37042C12.3165 2.83876 12.5498 3.83439 12.0857 4.5942C12.061 4.63489 5.19752 13.4943 5.19752 13.4943C4.96917 13.7883 4.62255 13.9618 4.2521 13.966L1.62366 14L1.03144 11.4133C0.948478 11.0496 1.03144 10.6677 1.25978 10.3737L8.06334 1.59235Z"
                                  stroke="#252B48"
                                  stroke-width="1.17361"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M6.79285 3.23645L10.7306 6.35705"
                                  stroke="#252B48"
                                  stroke-width="1.17361"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              Edit
                            </li>
                            <li
                            onClick={()=>toggleHapus(res._id)}
                              href="#"
                              className=" cursor-pointer  flex   gap-[5px] px-4 py-[6px]   text-[13px] text-gray-700 hover:bg-gray-100"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                              >
                                <path
                                  d="M10.8833 5.47852C10.8833 5.47852 10.5213 9.96851 10.3113 11.8598C10.2113 12.7632 9.65327 13.2925 8.73927 13.3092C6.99994 13.3405 5.25861 13.3425 3.51994 13.3058C2.64061 13.2878 2.09194 12.7518 1.99394 11.8645C1.78261 9.95651 1.42261 5.47852 1.42261 5.47852"
                                  stroke="#252B48"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M11.8055 3.32617H0.500122"
                                  stroke="#252B48"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.62713 3.326C9.1038 3.326 8.65313 2.956 8.55047 2.44333L8.38847 1.63267C8.28847 1.25867 7.9498 1 7.5638 1H4.7418C4.3558 1 4.01713 1.25867 3.91713 1.63267L3.75513 2.44333C3.65247 2.956 3.2018 3.326 2.67847 3.326"
                                  stroke="#252B48"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              Hapus
                            </li>
                          </ul>
                          {/* </div> */}
                        </div>
                      </div>
                    </td>
                  </tr>
                
                </>
              
            ))
          : ""}
        </tbody>
      </table>
    </>
  );
};
