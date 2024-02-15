import axios from "axios";
import React, { useState } from "react";

export const MAssetEdit = ({data, setcloseStatus }) => {
  const [form, setform] = useState({
    nama_kendaraan: null,
    plat_nomor: null,
    km: null,
    bbm: null,
    assetPath: null,
  });

  const handleSubmit = (e) => {

    e.preventDefault()
    // alert(form.)
    const formData = new FormData();
    formData.append("assetPath", form.assetPath[0]);
    formData.append("nama_kendaraan", form.nama_kendaraan || data.nama_kendaraan);
    formData.append("plat_nomor", form.plat_nomor || data.plat_nomor);
    formData.append("km", form.km || data.km);
    formData.append("bbm", form.bbm || data.bbm);

    axios
      .put(`http://localhost:8080/admin/asset/edit/${data._id}`, formData)
      .then((res) => {
        alert("berhasil edit asset kendaraan");
        
      })
      .catch((res) => {
        console.log(res.response.data);
        alert(res.response.data.message);
      });
  };
  return (
    <div
      className={`  fixed font-[poppins] inset-0 flex items-center justify-center z-50 max-h-full`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Edit Asset Kendaraan
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

          <form onSubmit={handleSubmit} className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Kendaraan
                </label>
                <input
                  type="text"
                  onChange={(e) =>
                    setform({ ...form, nama_kendaraan: e.target.value })
                  }
                 defaultValue={data.nama_kendaraan && data.nama_kendaraan}
                 name="nama_kendaraan"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Nama kendaraan"
                  required=""
                />
              </div>
              <div className="col-span-2">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Plat kendaraan
                </label>
                <input
                  type="text"
                  onChange={(e) =>
                    setform({ ...form, plat_nomor: e.target.value })
                  }
                 defaultValue={data.plat_nomor && data.plat_nomor}
                  className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Plat kendaraan"
                  required=""
                />
              </div>
              <div className="col-span-2">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Foto Kendaraan
                </label>
                <input
                  type="file"
                  onChange={(e) =>
                    setform({ ...form, assetPath: [e.target.files[0]] })
                  }
                
                  accept=".jpg, .jpeg, .png"
                  id="price"
                  className="bg-gray-50 border file:rounded-lg focus:file:bg-[#252B48] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Plat kendaraan"
                  required=""
                />
              </div>
              <div className="col-span-2">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Kilometer
                </label>
                <input
                  type="number"
                  onChange={(e) => setform({ ...form, km: e.target.value })}
                  defaultValue={data.km && data.km}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Jumlah kilometer"
                  required=""
                />
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
              Edit asset kendaraan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
