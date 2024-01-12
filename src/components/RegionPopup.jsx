import React from "react";

export default function RegionPopup(popup) {
  if (!popup.isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-4 max-w-xl w-full">
        <img
          className="h-6 w-full bg-cyan-950 "
          src="/images/patrin2.png"
          alt="style"
        />

        <div className="flex justify-between p-2 items-center bg-cyan-950 ">
          <h2 className="text-2xl font-bold text-white ">{popup.name}</h2>
          <button
            className="text-xl text-white hover:bg-gray-800 rounded-full w-8  h-8 "
            onClick={popup.onClose}
          >
            ×
          </button>{" "}
          {/* Replace with close icon */}
        </div>
        <img
          className="h-6 w-full bg-cyan-950 "
          src="/images/patrin2.png"
          alt="style"
        />

        <div className=" relative flex flex-row gap-7 m-6">
          <a
            href="#"
            className="block w-52  p-6 bg-cyan-500/35 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl  font-bold tracking-tight text-cyan-500 dark:text-white">
              Traditional
            </h5>
          </a>
          <a
            href="#"
            className="block w-52 p-6 bg-orange-600/35 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-600 dark:text-white">
              Modernized Traditional
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
}
