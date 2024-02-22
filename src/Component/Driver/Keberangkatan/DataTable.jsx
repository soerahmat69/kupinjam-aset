import React, { useEffect, useState } from "react";
import { MSesiGuna } from "./MSesiGuna";
import { MKetLain } from "./MKetLain";
import { MEditData } from "./MEditData";
import axios from "axios";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { reset, setPunchStatus } from "../../../App/Store/PunchData";
import { MTolak } from "./MTolak";
import { MStruk } from "./MStruk";
export const DataTable = ({ data }) => {
  const [moreTable, setmoreTable] = useState(false);
  const [EditModal, setEditModal] = useState([]);
  const [KetPergi, setKetPergi] = useState([]);
  const [KetKembali, setKetKembali] = useState([]);
  const [ketstruk, setketstruk] = useState([]);
  const [Tolak, setTolak] = useState([]);
  const [EditClick, setEditCLick] = useState([]);
  const [Datatd, setData] = useState([]);
  const [KetLainnya, setKetLainnya] = useState([]);
  const HandlemoreTable = () => setmoreTable(!moreTable);
  const { PunchStatus } = useSelector((state) => state.punchh);
  const toggleAction = (id) => {
    setEditCLick((prevStatus) => {
      const newStatus = { ...prevStatus };
      Object.keys(newStatus).forEach((key) => {
        newStatus[key] = false;
      });
      newStatus[id] = !prevStatus[id];
      return newStatus;
    });
  };
  const HandleEditModal = (id) => {
    setEditModal((prevStatus) => {
      const newStatus = { ...prevStatus };
      Object.keys(newStatus).forEach((key) => {
        newStatus[key] = false;
      });
      newStatus[id] = !prevStatus[id];
      return newStatus;
    });
  };
  const HandleTolakModal = (id) => {
    setTolak((prevStatus) => {
      const newStatus = { ...prevStatus };
      Object.keys(newStatus).forEach((key) => {
        newStatus[key] = false;
      });
      newStatus[id] = !prevStatus[id];
      return newStatus;
    });
  };
  const toggleKetPergi = (id) => {
    setKetPergi((prevStatus) => {
      const newStatus = { ...prevStatus };
      Object.keys(newStatus).forEach((key) => {
        newStatus[key] = false;
      });
      newStatus[id] = !prevStatus[id];
      return newStatus;
    });
  };
  const toggleKetKembali = (id) => {
    setKetKembali((prevStatus) => {
      const newStatus = { ...prevStatus };
      Object.keys(newStatus).forEach((key) => {
        newStatus[key] = false;
      });
      newStatus[id] = !prevStatus[id];
      return newStatus;
    });
  };
  const handleStruk = (id) => {
    setketstruk((prevStatus) => {
      const newStatus = { ...prevStatus };
      Object.keys(newStatus).forEach((key) => {
        newStatus[key] = false;
      });
      newStatus[id] = !prevStatus[id];
      return newStatus;
    });
  };
  const toggleKetLainnya = (id) => {
    setKetLainnya((prevStatus) => {
      const newStatus = { ...prevStatus };
      Object.keys(newStatus).forEach((key) => {
        newStatus[key] = false;
      });
      newStatus[id] = !prevStatus[id];
      return newStatus;
    });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (PunchStatus) {
      axios
        .get(`http://localhost:8080/admin/sesiguna/status/selesai`)
        .then((res) => {
          const overa = res.data.data;

          setData(overa);
        })
        .catch((Res) => {});
    }
    return () => {
      dispatch(reset());
    };
  }, [PunchStatus, dispatch]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/driver/keberangkatan`)
      .then((res) => {
        const overa = res.data.data;
        setData(overa);
      })
      .catch((Res) => {});
  }, []);
  const SelectPerjalanan = (id) => {
    axios
      .put(`http://localhost:8080/driver/perjalanan/${id}`)
      .then((res) => {
        axios
          .get(`http://localhost:8080/driver/keberangkatan`)
          .then((response) => {
            const overa = response.data.data;
            setData(overa);
            dispatch(setPunchStatus(!PunchStatus));
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((res) => {
        // alert(res.data.data[0].message)
        alert(res.response.data.message);
      });
  };
  return (
    <>
      <table class="w-full font-[poppins] ">
        <thead className="border-[#252B48]  border-b-2   sticky top-0 uppercase  text-[#00000080]">
          <tr className="text-[14px] ">
            <th className="text-start pb-[26px] ">Ket Kendaraan</th>
            <th className="text-start pb-[26px] ">ket pergi </th>
            <th className="text-start pb-[26px] ">ket kembali </th>
            <th className="text-start  pb-[26px]  ">Jumlah BBM</th>
            <th className="text-start  pb-[26px] ">Ket Lainnya</th>
            <th className="text-start  pb-[26px] ">status</th>
            <th className="text-start pb-[26px]  ">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {Datatd.length > 0 ? (
            Datatd.map((res) => {
              return (
                <>
                  {EditModal[res._id] && (
                    <MEditData
                      data={res}
                      
                      setcloseStatus={() => HandleEditModal(res._id)}
                    />
                  )}
                   {ketstruk[res._id] && (
                    <MStruk
                    sourceImage={res.strukPath}
                      data={res}
                      title={"Struk BBM"}
                      setcloseStatus={() => handleStruk(res._id)}
                    />
                  )}
                  {KetPergi[res._id] && (
                    <MSesiGuna
                      title={"Kondisi Pergi"}
                      kondisi={
                        res.sesi_kondisi_pergi.kondisi !== null
                          ? res.sesi_kondisi_pergi.kondisi
                          : ""
                      }
                      kendala={res.sesi_kondisi_pergi.kendala}
                      setcloseStatus={() => toggleKetPergi(res.id)}
                      tittle={"Keperluan"}
                    />
                  )}
                  {KetKembali[res._id] && (
                    <MSesiGuna
                      title={"Kondisi Kembali"}
                      kondisi={
                        res.sesi_kondisi_kembali.kondisi !== null
                          ? res.sesi_kondisi_kembali.kondisi
                          : ""
                      }
                      kendala={res.sesi_kondisi_pergi.kendala}
                      setcloseStatus={() => toggleKetKembali(res._id)}
                    />
                  )}
                  {Tolak[res._id] && (
                    <MTolak
                      id={res._id}
                      setcloseStatus={() => HandleTolakModal(res._id)}
                    />
                  )}
                  {KetLainnya[res._id] && (
                    <MKetLain
                      jabatan={res.peminjam_role.role}
                      profil={res.peminjam[0].profilPath}
                      username={res.peminjam[0].username}
                      title={"Keterangan Lainnya"}
                      setcloseStatus={() => toggleKetLainnya(res._id)}
                      KmPergi={
                        res.sesi_kondisi_pergi.km !== null
                          ? res.sesi_kondisi_pergi.km
                          : 0
                      }
                      KmKembali={
                        res.sesi_kondisi_kembali.km !== null
                          ? res.sesi_kondisi_kembali.km
                          : 0
                      }
                      Keperluan={res.request_data[0].keperluan}
                    />
                  )}

                  <tr key={res._id} className="  ">
                    <td className="flex py-[17px] items-center gap-[5px] ">
                      <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-md"></div>
                      <div className="flex flex-col ">
                        <span className="uppercase">
                          {res.asset_data[0].plat_nomor} ,
                        </span>
                        <span className="first-letter:uppercase">
                          {res.asset_data[0].nama_kendaraan.length > 11
                            ? res.asset_data[0].nama_kendaraan.substring(
                                0,
                                11
                              ) + "..."
                            : res.asset_data[0].nama_kendaraan}
                        </span>
                      </div>
                    </td>

                    <td
                      onClick={() => toggleKetPergi(res._id)}
                      className="py-[17px] cursor-pointer"
                    >
                      <p>
                        {res.request_data[0].waktu_jam} -{" "}
                        {moment(res.request_data[0].waktu_tanggal).format(
                          "DD/MM/YYYY"
                        )}
                      </p>
                      <p className=" underline underline-offset-4">
                        Lihat Kondisi
                      </p>
                    </td>
                    <td
                      onClick={() => toggleKetKembali(res._id)}
                      className="py-[17px] cursor-pointer"
                    >
                      <p>
                        {res.jam_kembali
                          ? res.jam_kembali +
                            " - " +
                            moment(res.waktu_tanggal_kembali).format(
                              "DD/MM/YYYY"
                            )
                          : "belum ada"}
                      </p>
                      <p className=" underline underline-offset-4">
                        Lihat Kondisi
                      </p>
                    </td>
                    <td onClick={() => handleStruk(res._id)} className="py-[17px]">
                     
                    <p >
                      {res.bbm !== null
                        ? parseInt(res.bbm).toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })
                        : "belum ada"}
                      </p>
                      {res.bbm !== null
                        ?  
                        <>
                         <p className=" cursor-pointer underline underline-offset-4">
                        Lihat Struk
                      </p>
                       
                        </>
                        : ""}
                       
                    </td>
                    <td
                      onClick={() => toggleKetLainnya(res._id)}
                      className="py-[17px] underline underline-offset-4 cursor-pointer"
                    >
                      Lihat
                    </td>
                    <td className="py-[17px]">{res.status_sesi}</td>
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
                            !EditClick[res._id] && "hidden"
                          }  top-[10px]  z-10 absolute overflow-hidden w-[100px] rounded-md shadow-lg bg-[#F0F0F0] ring-1 ring-[#252B4880] `}
                        >
                          {res.status_sesi === "perjalanan" ? (
                            <>
                              <ul className="divide-y divide-[#252B4880]">
                                <li
                                  // onClick={() => toggleLanjut(res._id)}
                                  onClick={() => HandleEditModal(res._id)}
                                  href="#"
                                  className=" cursor-pointer  flex   gap-[5px] px-4 py-[6px]   text-[13px] text-gray-700 hover:bg-gray-100"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.2798 1H4.71946C2.4333 1 1 2.6187 1 4.90941V11.0906C1 13.3813 2.42649 15 4.71946 15H11.279C13.5728 15 15 13.3813 15 11.0906V4.90941C15 2.6187 13.5728 1 11.2798 1Z"
                                      stroke="#252B48"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M5.30493 7.99989L7.10147 9.79567L10.693 6.2041"
                                      stroke="#252B48"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                  Informasi
                                </li>
                              </ul>
                            </>
                          ) : (
                            <>
                              <ul className="divide-y divide-[#252B4880]">
                                <li
                                  onClick={() => SelectPerjalanan(res._id)}
                                  // onClick={()=>HandleEditModal(res._id)}
                                  href="#"
                                  className=" cursor-pointer  flex   gap-[5px] px-4 py-[6px]   text-[13px] text-gray-700 hover:bg-gray-100"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.2798 1H4.71946C2.4333 1 1 2.6187 1 4.90941V11.0906C1 13.3813 2.42649 15 4.71946 15H11.279C13.5728 15 15 13.3813 15 11.0906V4.90941C15 2.6187 13.5728 1 11.2798 1Z"
                                      stroke="#252B48"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M5.30493 7.99989L7.10147 9.79567L10.693 6.2041"
                                      stroke="#252B48"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                  Lanjut
                                </li>
                                <li
                                  onClick={() => HandleTolakModal(res._id)}
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
                                  Tolak
                                </li>
                              </ul>
                            </>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                  {res.status_sesi === "perjalanan" && (
                    <tr>
                      <td
                        colSpan={8}
                        className="text-center py-[17px] first-letter:uppercase"
                      >
                        Dalam sesi perjalanan
                      </td>
                    </tr>
                  )}
                </>
              );
            })
          ) : (
            <tr>
              <td
                colSpan={8}
                className="text-center py-[17px] first-letter:uppercase"
              >
                Belum ada data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
