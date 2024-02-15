import axios from "axios";
import React, { useEffect, useState } from "react";

export const MLanjutPermintaan = ({id,setcloseStatus }) => {
  const [isPengemudi, setisPengemudi] = useState([]);
  const [isAsset, setisAsset] = useState([]);
  const [formData,setformData] = useState({
    _pengemudiID:null,
    _requestID:null,
    _assetID:null,
  })

  useEffect(() => {
    axios
      .get(`http://localhost:8080/admin/asset/siap`)
      .then((res) => {
        const oV = res.data.data;
        setisAsset(oV);
        
      })
      .catch((err) => {});
      axios
      .get(`http://localhost:8080/admin/user/pengemudi`)
      .then((res) => {
        const oV = res.data.data;
        setisPengemudi(oV);

      })
      .catch((err) => {});
  }, []);
  const PostData = (e)=>{
    // e.preventDefault();
    if (formData._pengemudiID !== "default") {
    axios
    .post(`http://localhost:8080/admin/sesiguna/add`,formData)
    .catch((err) => {});  
  
    }
  }
  return (
    <div
      className={`  fixed font-[poppins] inset-0 flex items-center justify-center z-50 max-h-full`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Melakukan persetujuan
            </h3>
            <button
              onClick={setcloseStatus}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <form onSubmit={PostData} className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Pengemudi
                </label>
                <select
                required
                onChange={(e)=>{setformData({...formData,_pengemudiID:e.target.value,_requestID:id})}}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected value="default"   >Pilih nama pengemudi</option>
                  {isPengemudi.map((res) => {
                    return <option key={res._id} value={res._id}>{res.username}</option>;
                  })}
                </select>
              </div>
              <div className="col-span-2">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Asset
                </label>
                <select
                required
                onChange={(e)=>{setformData({...formData,_assetID:e.target.value})}}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected value="default"   >Pilih nama asset</option>
                  {isAsset.map((res) => {
                    return <option key={res._id} value={res._id}>{res.nama_kendaraan}</option>;
                  })}
                </select>
              </div>
            
           
          
            </div>
            <button
              type="submit"
              className="text-[#F0F0F0] inline-flex items-center bg-[#252B48] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Tambahkan permintaan baru
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
