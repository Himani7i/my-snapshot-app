import React, { useState } from "react";
import { Download } from "lucide-react";

const EmbodiedEmissions = () => {
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("Complete");

  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-80 items-start px-10">
  {/* Left Side - Filters */}
  <div className="space-y-10">
    <div>
      <h2 className="font-semibold text-xl">Filter by</h2>

      <div className="mt-4 space-y-4">
        <div>
          <p className="font-medium">Type</p>
          <div className="flex gap-3 mt-1 flex-wrap">
            {["Refurbishment", "New build", "All"].map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`px-5 py-2 rounded-full border transition ${
                  type === t
                    ? "bg-[#7a4141] text-white"
                    : "bg-white dark:bg-black text-black dark:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-medium">Status</p>
          <div className="flex gap-3 mt-1 flex-wrap">
            {["Complete", "Estimate"].map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`px-5 py-2 rounded-full border transition ${
                  status === s
                    ? "bg-[#7a4141] text-white"
                    : "bg-white dark:bg-black text-black dark:text-white"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Key Section */}
    <div>
      <p className="font-semibold text-lg mb-2">Key</p>
      <div className="flex flex-col space-y-1 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-3">
          <div className="w-10 border-t-2 border-dashed" />
          <p>
            500 kgCO₂e/m² – <span className="italic">Embodied Carbon Target 2030</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 border-t-2 border-black dark:border-white" />
          <p>
            600 kgCO₂e/m² – <span className="italic">Embodied Carbon Target 2025</span>
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Right Side - Title + Button */}
  <div className="text-center md:text-right space-y-6">
    <h1 className="text-5xl font-extrabold leading-tight text-white dark:text-white">
      <span className="text-white dark:text-white">EMBODIED</span> <br />
      <span className="text-[#7a4141]">CARBON</span> <br />
      <span className="text-[#7a4141]">EMISSIONS</span>
    </h1>

    <p className="italic text-gray-500 dark:text-gray-300 text-sm">
      Intensity measured by kgCO₂e/m²
    </p>

    <button className="inline-flex items-center gap-2 px-5 py-2 border rounded-full hover:bg-gray-100 dark:hover:bg-zinc-900 transition">
      Download the data <Download size={16} />
    </button>
  </div>
</div>

  );
};

export default EmbodiedEmissions;
