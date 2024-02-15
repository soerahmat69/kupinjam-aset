import React, { useEffect, useState } from "react";
import { MInfo } from "../../MInfo";
import axios from "axios";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setPunchStatus, reset } from "../../../App/Store/PunchData";
import { MLanjutPermintaan } from "./MLanjutPermintaan";
import { MPermintaanEdit } from "./MPermintaanEdit";
export const DataTable = () => {
  const [ActionTable, setActionTable] = useState(false);
  const [EditToggle, setEditToggle] = useState(false);
  const [modalStatus, setModalStatus] = useState({});
  const [modalLanjut, setModalLanjut] = useState({});
  const [Datatd, setData] = useState([]);
  const dispatch = useDispatch();
  const { PunchStatus } = useSelector((state) => state.punchh);
  const handleEditToggle = ()=>setEditToggle(!EditToggle)
  useEffect(() => {
    if (!PunchStatus) {
      setData([])
      axios
        .get(`http://localhost:8080/peminjam/request/selesai`)
        .then((response) => {
          console.log("e")
          const overa = response.data.data;
          setData(overa);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return () => {
      dispatch(reset());
    };
  }, [PunchStatus]);
  useEffect(() => {
    
    axios
      .get(`http://localhost:8080/peminjam/request`)
      .then((response) => {
        const overa = response.data.data;
        setData(overa);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const toggleModalData = (id) => {
    setModalStatus((prevStatus) => {
      const newStatus = { ...prevStatus };

      Object.keys(newStatus).forEach((key) => {
        newStatus[key] = false;
      });
      newStatus[id] = !prevStatus[id];
      return newStatus;
    });
  };
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
  const toggleLanjut = (id) => {
    setModalLanjut((prevStatus) => {
      const newStatus = { ...prevStatus };
      Object.keys(newStatus).forEach((key) => {
        newStatus[key] = false;
      });
      newStatus[id] = !prevStatus[id];
      return newStatus;
    });
  };
  const deleteData = (id) => {
    axios
      .delete(`http://localhost:8080/peminjam/request/delete/${id}`)
      .then((res) => {
        axios
          .get(`http://localhost:8080/peminjam/request`)
          .then((response) => {
            const overa = response.data.data;
            setData(overa);
            dispatch(setPunchStatus(!PunchStatus));
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };
  const cancelData = (id) => {
    axios
      .put(`http://localhost:8080/peminjam/request/cancel/${id}`)
      .then((res) => {
        axios
          .get(`http://localhost:8080/peminjam/request`)
          .then((response) => {
            const overa = response.data.data;
            setData(overa);
            dispatch(setPunchStatus(!PunchStatus));
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };
  return (
    <>
    {EditToggle && <MPermintaanEdit datas={Datatd[0]} setcloseStatus={handleEditToggle} />}
      <table class="w-full font-[poppins] ">
        <thead className="border-[#252B48]  border-b-2   sticky top-0 uppercase  text-[#00000080]">
          <tr className="text-[14px] ">
            <th className="text-start pb-[26px] ">Ket Pengguna</th>
            <th className="text-start  pb-[26px]  ">Keperluan</th>
            <th className="text-start pb-[26px] ">Penggunaan</th>
            <th className="text-start pb-[26px] ">Waktu Pergi</th>
            <th className="text-start pb-[26px] ">Waktu Kembali</th>
            <th className="text-start  pb-[26px]  ">Pengemudi</th>
            <th className="text-start  pb-[26px] ">status</th>
            <th className="text-start pb-[26px]  ">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {true &&
            Datatd.map((res) => {
              return (
                <>
                  {modalStatus[res._id] && (
                    <MInfo
                      setcloseStatus={() => toggleModalData(res._id)}
                      tittle={"Keperluan"}
                      info={res.keperluan}
                    />
                  )}
                  {modalLanjut[res._id] && (
                    <MLanjutPermintaan
                      id={res._id}
                      setcloseStatus={() => toggleLanjut(res._id)}
                    />
                  )}
                  <tr key={res._id} className="  ">
                    <td className="flex py-[17px] items-center gap-[5px] ">
                      <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-md"></div>
                      <div className="flex flex-col  ">
                        <span className="first-letter:uppercase">
                          {res.user_data[0].username.length > 12
                            ? res.user_data[0].username.substring(0, 12) + "..."
                            : res.user_data[0].username}
                          ,
                        </span>
                        <span className="first-letter:uppercase">
                          {res.role_data[0].role}
                        </span>
                      </div>
                    </td>
                    <td
                      onClick={() => toggleModalData(res._id)}
                      className="py-[17px] cursor-pointer underline underline-offset-4"
                    >
                      Lihat
                    </td>
                    <td className="py-[17px]">
                     {res.waktu_pinjam} hari
                    </td>
                    <td className="py-[17px]">
                      {res.waktu_jam} -{" "}
                      {moment(res.waktu_tanggal).format("DD/MM/YYYY")}{" "}
                    </td>
                    <td className="py-[17px]">
                      {res.sesi_data[0] && res.sesi_data[0].jam_kembali !== null && res.sesi_data[0].waktu_tanggal_kembali !== null? (<>
                      {res.sesi_data[0].jam_kembali} -{" "}
                      {moment(res.sesi_data[0].waktu_tanggal_kembali).format("DD/MM/YYYY")}{" "}
                      </>):"Belum ada"}
                      
                    </td>
                  
                    <td className="py-[17px] first-letter:uppercase">
                      {res.pengemudi[0] !== undefined
                        ? res.pengemudi[0].username
                        : "belum ada"}
                    </td>
                    <td className="py-[17px]">{res.status}</td>
                    <td className="py-[17px] ">
                      <svg
                        onClick={() => toggleAction(res._id)}
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
                            !ActionTable[res._id] && "hidden"
                          }  top-[10px]  z-10 absolute overflow-hidden w-[100px] rounded-md shadow-lg bg-[#F0F0F0] ring-1 ring-[#252B4880] `}
                        >
                          <ul className="divide-y divide-[#252B4880]">
                            {res.status === "pending" ? (
                              <>
                                <li
                                onClick={handleEditToggle}
                                href="#"
                                className="  flex  cursor-pointer  gap-[5px] px-4 py-[6px]   text-[13px] text-gray-700 hover:bg-gray-100"
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
                              onClick={() => deleteData(res._id)}
                              href="#"
                              className=" cursor-pointer flex   gap-[5px] px-4 py-[6px]   text-[13px] text-gray-700 hover:bg-gray-100"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  d="M9.81254 6.17969L6.18616 9.80607"
                                  stroke="#252B48"
                                  stroke-width="1.13514"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.81349 9.80838L6.18408 6.17822"
                                  stroke="#252B48"
                                  stroke-width="1.13514"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M11.2798 1H4.71946C2.4333 1 1 2.6187 1 4.90941V11.0906C1 13.3813 2.42649 15 4.71946 15H11.279C13.5728 15 15 13.3813 15 11.0906V4.90941C15 2.6187 13.5728 1 11.2798 1Z"
                                  stroke="#252B48"
                                  stroke-width="1.13514"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              Hapus
                            </li>
                            </>
                           
                              
                            ) : (<>
                                 <li
                                onClick={()=>cancelData(res._id)}
                                href="#"
                                className="  flex  cursor-pointer  gap-[5px] px-4 py-[6px]   text-[13px] text-gray-700 hover:bg-gray-100"
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
                                Batal
                              </li>
                            </>)
                            }
                            
                           
                          </ul>
                        
                        </div>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
