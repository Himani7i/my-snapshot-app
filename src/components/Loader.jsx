import React from "react";

const Loader = ({ count }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="absolute inset-0 bg-white/20 backdrop-blur-xl"></div>

    <div className="relative w-40 h-40 flex items-center justify-center">
      {count < 100 ? (
        <div className="w-32 bg-gray-200 h-2 rounded-full overflow-hidden">
          <div
            className="bg-gray-800 h-full transition-[width] duration-150 ease-linear"
            style={{ width: `${count}%` }}
          ></div>
        </div>
      ) : (
        <>
          <span className="loader-bar loader-bar--h" />
          <span className="loader-bar loader-bar--v" />
        </>
      )}
    </div>

    <div className="absolute left-4 bottom-4 text-[100px] font-mono text-gray-700">
      {count.toString().padStart(3, "0")}
    </div>
  </div>
);

export default Loader;
