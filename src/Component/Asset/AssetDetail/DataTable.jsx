import React, { useEffect, useState } from "react";
import { MInfo } from "../../MInfo";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

export const DataTable = () => {
  const [data, setdata] = useState([]);

  const [modalStatus, setModalStatus] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/admin/asset/etc/${id}`)
      .then((res) => {
        setdata(res.data.data);
      })
      .catch((res) => {});
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
  return (
    <>
      <table class="w-full font-[poppins] ">
        <thead className="border-[#252B48]  border-b-2   sticky top-0 uppercase  text-[#00000080]">
          <tr className="text-[14px] ">
            <th className="text-start pb-[26px] ">Ket Pengguna</th>
            <th className="text-start  pb-[26px]  ">Keperluan</th>
            <th className="text-start pb-[26px] ">Waktu</th>
            <th className="text-start  pb-[26px]  ">Pengemudi</th>
            <th className="text-start  pb-[26px]  ">Jumlah bbm</th>
            <th className="text-start  pb-[26px] ">status</th>
          </tr>
        </thead>
        <tbody className="">
          {data.length > 0 ? (
            data.map((res) => {
              return (
                <>
                  {modalStatus[res._id] && (
                    <MInfo
                      setcloseStatus={() => toggleModalData(res._id)}
                      tittle={"Keperluan"}
                      info={res.request_data[0].keperluan}
                    />
                  )}

                  <tr className="">
                    <td className="flex py-[17px] items-center gap-[5px] ">
                      <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-md"></div>
                      <div className="flex flex-col">
                        <span>
                          {" "}
                          {res.peminjam_data[0].username.length > 12
                            ? res.peminjam_data[0].username.substring(0, 12) +
                              "..."
                            : res.peminjam_data[0].username}{" "}
                          ,
                        </span>
                        <span>{res.role_peminjam_data[0].role}</span>
                      </div>
                    </td>
                    <td
                      onClick={() => toggleModalData(res._id)}
                      className="py-[17px] cursor-pointer underline underline-offset-4"
                    >
                      Lihat
                    </td>
                    <td className="py-[17px]">
                      <p>
                        {res.request_data[0].waktu_jam &&
                          res.request_data[0].waktu_jam}{" "}
                        -{" "}
                        {res.request_data[0].waktu_tanggal &&
                          moment(res.request_data[0].waktu_tanggal).format(
                            "DD/MM/YYYY"
                          )}
                      </p>
                      <p>
                        {res.sesi_data[0].jam_kembali &&
                          res.sesi_data[0].jam_kembali}{" "}
                        -{" "}
                        {res.sesi_data[0].waktu_tanggal_kembali &&
                          moment(res.sesi_data[0].waktu_tanggal_kembali).format(
                            "DD/MM/YYYY"
                          )}
                      </p>
                    </td>
                    <td className="py-[17px]">
                      {res.pengemudi_data[0].username.length > 12
                        ? res.pengemudi_data[0].username.substring(0, 12) +
                          "..."
                        : res.pengemudi_data[0].username}
                    </td>
                    <td className="py-[17px]">
                      {res.sesi_data[0].bbm &&
                        parseInt(res.sesi_data[0].bbm).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                    </td>
                    <td className="py-[17px]">
                      {res.sesi_data[0].status_sesi}
                    </td>
                  </tr>
                </>
              );
            })
          ) : (
            <tr>
              <td colSpan={6} className="text-center">
                Belum ada data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
