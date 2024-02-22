import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";

export const MEditData = ({ data, setcloseStatus }) => {
  const [NextForm, setNextForm] = useState(false);
  const [assetID, setassetID] = useState([]);
  const [pengemudiID, setpengemudiID] = useState([]);
  const handleNextForm = () => setNextForm(!NextForm);
  const status = ["perjalanan", "persiapan", "selesai"];
 
  const [form, setform] = useState({
    _pengemudiID: null,
    _assetID: null,
    _requestID: null,
    kondisi_pergi: null,
    kendala_pergi: null,
    kondisi_kembali: null,
    kendala_kembali: null,
    km_pergi: null,
    km_kembali: null,
    status_sesi: null,
    jam_kembali: null,
    waktu_tanggal_kembali: null,
    bbm: null,
    strukPath:null
  });
  useEffect(() => {
    axios
      .get(`http://localhost:8080/admin/asset/siap`)
      .then((res) => {
        const oV = res.data.data;
        setassetID(oV);
      })
      .catch((err) => {});
    axios
      .get(`http://localhost:8080/admin/user/pengemudi`)
      .then((res) => {
        const oV = res.data.data;
        setpengemudiID(oV);
      })
      .catch((err) => {});
   
      setform({...form,
        _pengemudiID: data._pengemudiID,
        _assetID: data._assetID,
        _requestID: data._requestID,
        kondisi_pergi:data.sesi_kondisi_pergi.kondisi,
        kondisi_kembali:data.sesi_kondisi_kembali.kondisi,
        kendala_pergi: data.sesi_kondisi_pergi.kendala,
        kendala_kembali: data.sesi_kondisi_kembali.kendala,
        km_pergi: data.sesi_kondisi_pergi.km,
        km_kembali: data.sesi_kondisi_kembali.km,
        status_sesi: data.status_sesi,
        jam_kembali: data.jam_kembali,
        strukPath:data.strukPath,
        waktu_tanggal_kembali: data.waktu_tanggal_kembali,
        bbm: data.bbm})
      
  }, []);
  const formPost = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    if (form.strukPath) {
      formData.append('strukPath', form.strukPath[0]);
    }
    formData.append('_pengemudiID', form._pengemudiID);
    formData.append('_assetID', form._assetID);
    formData.append('_requestID', form._requestID);
    formData.append('kondisi_pergi', form.kondisi_pergi);
    formData.append('kendala_pergi', form.kendala_pergi);
    formData.append('kondisi_kembali', form.kondisi_kembali);
    formData.append('kendala_kembali', form.kendala_kembali);
    formData.append('km_pergi', form.km_pergi);
    formData.append('km_kembali', form.km_kembali );
    formData.append('status_sesi', form.status_sesi );
    formData.append('jam_kembali', form.jam_kembali );
    formData.append('waktu_tanggal_kembali', form.waktu_tanggal_kembali);
    formData.append('bbm', form.bbm)

    axios.put(
      `http://localhost:8080/driver/sesiguna/edit/${data._id}`,
      formData
    ).then((res)=>{
      alert("Berhasil menambah informasi")
    }).catch((res)=>{
      console.log(res)
    })
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
              Ubah informasi
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
          <form  encType="multipart/form-data"  onSubmit={formPost} className="p-4 md:p-5">
            {!NextForm && (
              <>
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2  ">
                    <label
                      for="category"
                      className="block   text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Kondisi pergi
                    </label>
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex items-center gap-[5px]  ">
                    <input
                      onChange={(e) => {
                        if (e.target.checked) {
                          setform({
                            ...form,
                            kondisi_pergi: "baik",
                          });
                        }
                      }}
                      name="kondisi_pergi_baik"
                      type="checkbox"
                      checked={form.kondisi_pergi === "baik"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[25px] h-[25px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />

                    <label
                      for="name"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Baik
                    </label>
                    <input
                      onChange={(e) => {
                        if (e.target.checked) {
                          setform({
                            ...form,
                            kondisi_pergi: "tidak",
                          });
                        }
                      }}
                      name="kondisi_pergi_tidak"
                      type="checkbox"
                      checked={form.kondisi_pergi === "tidak"}
                      className="bg-gray-50 border ml-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[25px] h-[25px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />

                    <label
                      for="name"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tidak Baik
                    </label>
                  </div>
                  <div className="col-span-2  ">
                    <label
                      for="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Kilometer pergi
                    </label>
                    <input
                      type="number"
                      onChange={(e) =>{
                        setform({ ...form, km_pergi: e.target.value })
                      
                      }}
                      value={
                        data.sesi_kondisi_pergi.km &&
                        parseInt(data.sesi_kondisi_pergi.km)
                      }
                      name="km_pergi"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Angka pada kilometer"
                    />
                  </div>
                  {form.kondisi_pergi === "tidak" && (
                    <div className="col-span-2">
                      <label
                        for="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Kendala
                      </label>
                      <textarea
                        onChange={(e) =>
                          setform({
                            ...form,
                            kendala_pergi: e.target.value,
                          })
                        }
                        value={
                          data.sesi_kondisi_pergi.kendala &&
                          data.sesi_kondisi_pergi.kendala
                        }
                        name="kendala_pergi"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Jelaskan kendala pada kondisi kendaraan tidak baik  "
                      ></textarea>
                    </div>
                  )}
                </div>
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2  ">
                    <label
                      for="category"
                      className="block   text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Kondisi kembali
                    </label>
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex items-center gap-[5px]  ">
                    <input
                     onChange={(e) => {
                      if (e.target.checked) {
                      setform({
                        ...form,
                        kondisi_kembali:"baik"
                          } );
                    }}}
                    name="kondisi_kembali_baik"
                      type="checkbox"
                      checked={form.kondisi_kembali === "baik"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[25px] h-[25px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />

                    <label
                      for="name"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Baik
                    </label>
                    <input
                      onChange={(e) => {
                        if (e.target.checked) {
                        setform({
                          ...form,
                          kondisi_kembali:"tidak"
                            } );
                      }}}
                      name="kondisi_kembali_tidak"
                      type="checkbox"
                      checked={form.kondisi_kembali === "tidak"}
                      className="bg-gray-50 border ml-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[25px] h-[25px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />

                    <label
                      for="name"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tidak Baik
                    </label>
                  </div>
                  <div className="col-span-2  ">
                    <label
                      for="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Kilometer kembali
                    </label>
                    <input
                      onChange={(e) =>
                        setform({ ...form, km_kembali: e.target.value })
                      }
                      value={
                        data.sesi_kondisi_kembali.km &&
                        parseInt(data.sesi_kondisi_kembali.km)
                      }
                      name="km_kembali"
                      type="number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Angka pada kilometer"
                    />
                  </div>
                  {form.kondisi_kembali === "tidak" && (
                    <div className="col-span-2">
                      <label
                        for="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Kendala
                      </label>
                      <textarea
                        onChange={(e) =>
                          setform({
                            ...form,
                            kendala_kembali: e.target.value,
                          })
                        }
                        value={
                          data.sesi_kondisi_kembali.km &&
                          data.sesi_kondisi_kembali.kendala
                        }
                        name="kendala_kembali"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Jelaskan kendala pada kondisi kendaraan tidak baik  "
                      ></textarea>
                    </div>
                  )}
                </div>
                <div
                  onClick={handleNextForm}
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
                  Next
                </div>
              </>
            )}
            {NextForm && (
              <>
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-1">
                    <label
                      for="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Pengemudi
                    </label>
                    <select
                      onChange={(e) =>
                        setform({
                          ...form,
                          _pengemudiID: e.target.value,
                        })
                      }
                    name="_pengemudiID"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option selected value={data.pengemudi_data[0] && data.pengemudi_data[0]._id}>
                        {data.pengemudi_data[0]?data.pengemudi_data[0].username:"Pilih driver"}
                      </option>
                      {pengemudiID.map((res) => {
                        return <option value={res._id}>{res.username}</option>;
                      })}
                    </select>
                  </div>
                  <div className="col-span-1">
                    <label
                      for="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Kendaraan
                    </label>
                    <select
                      onChange={(e) =>{
                        console.log(e.target.value)
                        setform({ ...form, _assetID: e.target.value })
                      }}
                      name="_assetID"
                      id="category"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option selected value={data.asset_data[0]._id}>
                        {data.asset_data[0].nama_kendaraan}
                      </option>
                      {assetID.map((res) => {
                        return (
                          <option value={res._id}>{res.nama_kendaraan}</option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-span-1  ">
                    <label
                      for="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Jam kembali
                    </label>
                    <input
                      onChange={(e) => {
                     
                        setform({
                          ...form,
                          jam_kembali: e.target.value,
                        });
                      }}
                      name="jam_kembali"
                      value={data.jam_kembali && data.jam_kembali}
                      type="time"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                  </div>
                  <div className="col-span-1  ">
                    <label
                      for="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tanggal kembali
                    </label>
                    <input
                      onChange={(e) =>{
                     
                        setform({
                          ...form,
                          waktu_tanggal_kembali: e.target.value,
                        })
                      }}
                      name="waktu_tanggal_kembali"
                      type="date"
                      defaultValue={data.waktu_tanggal_kembali && data.waktu_tanggal_kembali}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Angka pada kilometer"
                    />
                  </div>
                  <div className="col-span-2  ">
                    <label
                      for="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Biaya pembelian bbm
                    </label>
                    <input
                      onChange={(e) => {
                        setform({ ...form, bbm: e.target.value });
                      }}
                      name="bbm"
                       defaultValue={data.bbm && parseInt(data.bbm)}
                      type="number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Total biaya bbm "
                    />
                  </div>
                  <div className="col-span-2  ">
                    <label
                      for="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Struk pembelian bbm
                    </label>
                    <input
                      onChange={(e) => {
                        setform({ ...form, strukPath: [e.target.files[0]] });
                      }}
                      name="strukPath"
                      //  defaultValue={data.strukPath && data.strukPath }
                      accept=".jpg, .jpeg, .png"
                      type="file"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Total biaya bbm "
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      for="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Status
                    </label>
                    <select
                      onChange={(e) =>
                        setform({
                          ...form,
                          status_sesi: e.target.value,
                        })
                      }
                      name="status_sesi"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option value={data.status_sesi}>
                        {data.status_sesi}
                      </option>
                      {status.map((res) => {
                        if (data.status_sesi !== res) {
                          return <option value={res}>{res}</option>;
                        }
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
                  Edit sesi penggunaan
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
