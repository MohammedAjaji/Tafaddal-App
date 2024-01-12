import React from "react";

export default function ImageBackground() {
  return (
    <div>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/door.jpeg")' }}
      >
        <div className=" bg-red-500/35 absolute inset-0 flex  py-72 pl-12  justify-start">
          <div className="text-5xl text-cyan-300 font-bold mr-3 ">
            Tafaddal{" "}
          </div>
          <div className="text-white text-4xl font-bold">to our Page</div>
        </div>
      </div>
    </div>
  );
}
