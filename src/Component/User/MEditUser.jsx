import axios from "axios";
import React, { useEffect, useState } from "react";

export const MEditUser = ({ setcloseStatus, dataUser }) => {
  const [data, setdata] = useState({
    username: null,
    password: null,
    no_wa: null,
    _role: null,
  });
  const [jabatan, setjabatan] = useState([]);

  useEffect(() => {
   
    
    axios
      .get(`http://localhost:8080/admin/jabatan`)
      .then((res) => {
        setjabatan(res.data.data);
        const resjab  =  res.data.data
        setdata({
          ...data,
          username: dataUser.username,
          password: dataUser.password,
          no_wa: dataUser.no_wa,
          _role: resjab.find((result) => dataUser.jabatan[0] === result.role)._id
        });
      })
      .catch((res) => {});
  
       
     
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    axios
      .put(`http://localhost:8080/admin/user/edit/${dataUser._id}`, data)
      .then((res) => {
       

      })
      .catch((err) => {
        alert(err.response.data);
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
              Edit User
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
              <div className="col-span-1 ">
                <label
                  for="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nama User
                </label>
                <input
                  type="text"
                  onChange={(e) =>
                    setdata({ ...data, username: e.target.value })
                  }
                  defaultValue={dataUser.username}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Nama user akun"
                />
              </div>
              <div className="col-span-1 ">
                <label
                  for="nowa"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Whatsapp
                </label>
                <input
                  type="number"
                  onChange={(e) => setdata({ ...data, no_wa: e.target.value })}
                  defaultValue={dataUser.no_wa}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Nomor Whatsapp"
                />
              </div>

              <div className="col-span-2 ">
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="text"
                  onChange={(e) =>
                    setdata({ ...data, password: e.target.value })
                  }
                  defaultValue={dataUser.password}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Password akun"
                />
              </div>

              <div className="col-span-2">
                <label
                  for="jabatan"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Jabatan
                </label>
                <select
                defaultValue={dataUser.jabatan[0]}
                  onChange={(e) => setdata({ ...data, _role: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  {jabatan &&
                    jabatan.map((res) => {
                      
                      if (dataUser.jabatan[0] === res.role) {
                        return (
                          <option selected  value={res._id}>
                            {res.role}
                          </option>
                        );
                      }
                      return <option key={res._id} value={res._id}>{res.role}</option>;
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
              Edit user baru
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
