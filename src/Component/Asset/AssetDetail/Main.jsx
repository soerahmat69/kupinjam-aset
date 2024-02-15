import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { useAsyncError, useNavigate, useParams } from "react-router-dom";
import { MAssetEdit } from "./MAssetEdit";
import { MAssetHapus } from "./MAssetHapus";

export const Main = ({ children }) => {
  const [moreLainnya, setmore] = useState(false);
  const [dataAsset, setdataAsset] = useState([]);
  const [edittog,setedittog] = useState(false)
  const [hapus,sethapus] = useState(false)
  const handleMore  = () => setmore(!moreLainnya);
  const handleHapus  = () => sethapus(!hapus);
  const handleEdit  = () => setedittog(!edittog);
  const { id } = useParams();
  ChartJS.register(ArcElement, Tooltip, Legend);
  const options = {
    responsive: true,
    // aspectRatio: 6/5,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
    },
  };
  const data = {
    labels: ["Red", "Blue"],
    datasets: [
      {
        label: "# of Votes",
        data: [90, 10],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(`http://localhost:8080/admin/asset/detail/${id}`)
      .then((res) => {
        console.log(res.data.data[0])
        res.data.data.length == 0 ? navigate("/admin/asset"):  setdataAsset(res.data.data[0]);
      
      })
      .catch((res) => {});
  }, []);
  return (
    <React.Fragment>
      {edittog && <MAssetEdit data={dataAsset}  setcloseStatus={handleEdit} />}
      {hapus && <MAssetHapus data={data}   setcloseStatus={handleHapus} />}
      <main className="font-[poppins] w-full text-[#252B48] flex flex-col ">
        <h1 className=" text-[51px] font-semibold">Asset</h1>

        <div className="flex gap-[30px] w-full     ">
          <img alt="profile aset" src={`http://localhost:8080/etc/images/${dataAsset.assetPath}`}   className="flex-none object-cover w-[315px] h-[328px]  bg-[#f0f0f0] rounded-[15px] border border-solid border-[#252b4880] shadow-[0px_4px_4px_#00000040]" />
           

          <div className=" w-full  h-[328px]  rounded-[15px]  flex justify-between">
            <div className="">
              <div className="flex  items-center ">
                <h1 className=" mr-10 first-letter:uppercase  font-medium text-[#252b48] text-[40px] tracking-[1.50px] leading-[normal]">
                  {dataAsset.nama_kendaraan && dataAsset.nama_kendaraan} {}
                </h1>
                <div className="relative">
                <svg onClick={handleMore}
                  className=" cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2ZM12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12C20.5 7.313 16.687 3.5 12 3.5ZM15.9482 11.0137C16.5012 11.0137 16.9482 11.4607 16.9482 12.0137C16.9482 12.5667 16.5012 13.0137 15.9482 13.0137C15.3952 13.0137 14.9432 12.5667 14.9432 12.0137C14.9432 11.4607 15.3862 11.0137 15.9382 11.0137H15.9482ZM11.9385 11.0137C12.4915 11.0137 12.9385 11.4607 12.9385 12.0137C12.9385 12.5667 12.4915 13.0137 11.9385 13.0137C11.3855 13.0137 10.9345 12.5667 10.9345 12.0137C10.9345 11.4607 11.3765 11.0137 11.9295 11.0137H11.9385ZM7.9297 11.0137C8.4827 11.0137 8.9297 11.4607 8.9297 12.0137C8.9297 12.5667 8.4827 13.0137 7.9297 13.0137C7.3767 13.0137 6.9247 12.5667 6.9247 12.0137C6.9247 11.4607 7.3677 11.0137 7.9207 11.0137H7.9297Z"
                    fill="#252B48"
                  />
                </svg>
                <div className="relative">
                <div
                  className={`${
                    !moreLainnya && "hidden"
                  }  top-[10px]  z-10 absolute overflow-hidden w-[100px] rounded-md shadow-lg bg-[#F0F0F0] ring-1 ring-[#252B4880] `}
                >
                  <ul className="divide-y divide-[#252B4880]">
                    <li onClick={setedittog}
                      href="#"
                      className=" cursor-pointer flex items-center   gap-[5px] px-4 py-[6px]   text-[13px] text-gray-700 hover:bg-gray-100"
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
                    onClick={handleHapus}
                      href="#"
                      className="  cursor-pointer flex   gap-[5px] px-4 py-[6px] items-center  text-[13px] text-gray-700 hover:bg-gray-100"
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
                  </div>
              </div>
              <p className="   font-bold text-[#252b48] text-[35px] tracking-[1.50px] leading-[normal]">
                {dataAsset.plat_nomor && dataAsset.plat_nomor}
              </p>
              <ul className=" flex-col flex gap-[4px] mt-4">
                <h1 className="text-[25px]">Informasi</h1>
                <li className="flex gap-5 py-[4px]">
                  <div className="w-[200px] h-max [50px] ring-1 ring-[#00000040] px-1 py-1 rounded-md  text-center  ">
                    <h2 className="font-bold ">
                      {dataAsset.km && dataAsset.km} Km
                    </h2>
                    <p>Kilometer</p>
                  </div>
                  <div className="w-[200px] h-max [50px] ring-1 ring-[#00000040] text-center px-1 py-1 rounded-md justify-center">
                    <h2 className="font-bold ">
                      {dataAsset.count && dataAsset.count}
                    </h2>
                    <p>Terpakai</p>
                  </div>
                </li>
                <li className="flex gap-5 py-[4px]">
                  {" "}
                  <div className="w-[200px] h-max [50px] ring-1 ring-[#00000040] text-center px-1 py-1 rounded-md justify-center">
                    <h2 className="font-bold ">0</h2>
                    <p>Perawatan</p>
                  </div>
                  <div className="w-[200px] h-max [50px] ring-1 ring-[#00000040] text-center px-1 py-1 rounded-md justify-center">
                    <h2 className="font-bold ">Rp 0.000</h2>
                    <p>Bahan Bakar Minyak</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-[350px] h-full ring-0 ring-[#00000040] rounded-[15px]">
              <h2 className="font-semibold text-[27px] text-center tracking-[1.20px]">
                Progress Perawatan
              </h2>
              <div className="w-[250px] mx-auto mt-2">
                <Doughnut data={data} options={options} />
                <h2 className="font-semibold text-[27px] relative -top-[140px] text-center tracking-[1.20px]">
                  80%
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="font-[poppins] mt-[22px]   w-full  ">
          <h2 className="font-[poppins] text-[35px] font-semibold mb-2">
            Daftar Penggunaan
          </h2>
          {children}
        </div>
      </main>
    </React.Fragment>
  );
};
