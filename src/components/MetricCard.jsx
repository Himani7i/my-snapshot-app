import React from "react";

const MetricCard = ({ title, unit, value, change, changeType, years }) => {
  return (
    <div className="space-y-4">
      {/* Title + Value */}
      <div>
        <p className="text-[17px] text-[#4f4b4c] font-medium">{title}</p>
        <div className="flex justify-between items-start mt-2">
          <h2 className="text-5xl text-[#3b3b3b] font-normal">
            {value.toLocaleString()}
          </h2>
          <div className="text-right text-sm text-[#4f4b4c]">
            <p className="text-[12px]">{unit}</p>
            <p
              className={`text-[15px] font-normal ${
                changeType === "down" ? "text-[#c94c4c]" : "text-[#6c9f66]"
              }`}
            >
              {changeType === "down" ? "↓" : "↑"} {change}%
            </p>
            <p className="text-[11px] text-zinc-400">from 2019</p>
          </div>
        </div>
      </div>

      {/* Yearly Bars */}
      <div className="space-y-3 mt-3">
        {years.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between text-[14px] text-[#4f4b4c] mb-1">
              <span>{item.year}</span>
              <span>{item.value.toLocaleString()}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#e9e4e3] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#8b4f4a] transition-all duration-500"
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricCard;
