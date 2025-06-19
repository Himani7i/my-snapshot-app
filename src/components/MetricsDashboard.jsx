import React from "react";
import MetricCard from "./MetricCard";

const MetricsDashboard = () => {
  return (
    <div className="px-6 sm:px-10 space-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {/* Carbon */}
        <MetricCard
          title="Managed portfolio carbon footprint"
          unit="tCO₂e"
          value={45048}
          change={16}
          changeType="up"
          years={[
            { year: 2022, value: 45048, percent: 88 },
            { year: 2021, value: 14111, percent: 30 },
            { year: 2020, value: 32813, percent: 65 },
            { year: 2019, value: 38673, percent: 76 },
          ]}
        />
        {/* Energy Intensity */}
        <MetricCard
          title="Managed portfolio energy intensity"
          unit="kWh/m²"
          value={123}
          change={22}
          changeType="down"
          years={[
            { year: 2022, value: 123, percent: 90 },
            { year: 2021, value: 128, percent: 80 },
            { year: 2020, value: 135, percent: 70 },
            { year: 2019, value: 157, percent: 55 },
          ]}
        />
        {/* Energy Consumption */}
        <MetricCard
          title="Managed portfolio energy consumption"
          unit="kWh"
          value={47790662}
          change={27}
          changeType="down"
          years={[
            { year: 2022, value: 47790662, percent: 85 },
            { year: 2021, value: 49324077, percent: 88 },
            { year: 2020, value: 48784205, percent: 85 },
            { year: 2019, value: 65198706, percent: 100 },
          ]}
        />
      </div>

      {/* Footer Actions */}
      <div className="flex flex-wrap gap-8 text-sm text-[#4f4b4c] font-medium pt-8">
        <button className="hover:underline flex items-center gap-2">
          See full breakdown of carbon footprint →
        </button>
        <button className="hover:underline flex items-center gap-2">
          ⬇ Download the data
        </button>
      </div>
    </div>
  );
};

export default MetricsDashboard;
