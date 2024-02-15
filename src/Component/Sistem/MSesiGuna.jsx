import React from "react";

export const MSesiGuna = ({ title, kondisi, kendala, setcloseStatus }) => {
  return (
    <div
      className={`  fixed font-[poppins] inset-0 flex items-center justify-center z-50 max-h-full`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
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

          <div className="p-4 md:p-5">
            <div className="col-span-2 sm:col-span-1 flex items-center gap-[5px]">
              <label
                for="name"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Kondisi kendaraan
              </label>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center gap-[5px] my-3">
              {kondisi === "baik" ? (
                <input
                  disabled
                  checked
                  type="checkbox"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[25px] h-[25px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Nama kendaraan"
                />
              ) : (
                <input
                  disabled
                  type="checkbox"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[25px] h-[25px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Nama kendaraan"
                />
              )}
              <label
                for="name"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Baik
              </label>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center gap-[5px] my-3">
              {kondisi === "tidak" ? (
                <input
                  disabled
                  checked
                  type="checkbox"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[25px] h-[25px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Nama kendaraan"
                />
              ) : (
                <input
                  disabled
                  type="checkbox"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[25px] h-[25px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Nama kendaraan"
                />
              )}
              <label
                for="name"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Tidak Baik
              </label>
            </div>
            {kondisi === "tidak" ? (
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Kendala
                  </label>
                  <textarea
                    value={kendala}
                    disabled
                    id="description"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Jelaskan kendala pada kondisi kendaraan tidak baik  "
                  ></textarea>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
