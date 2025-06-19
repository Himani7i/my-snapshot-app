import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
  ReferenceLine
} from "recharts";

const data = [
  { name: "A", complete: 549, estimate: 278 },
  { name: "B", complete: 875, estimate: 617 },
  { name: "C", complete: 506, estimate: 36 },
  { name: "D", complete: 185, estimate: 191 },
  { name: "E", complete: 122, estimate: 0 },
  { name: "F", complete: 550, estimate: 881 },
  { name: "G", complete: 539, estimate: 269 },
  { name: "H", complete: 29, estimate: 82 },
  { name: "I", complete: 44, estimate: 109 },
  { name: "J", complete: 106, estimate: 607 },
  { name: "K", complete: 528, estimate: 0 },
];

const Chart = () => {
  return (
    <div className="pt-10">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis
            label={{
              value: "Embodied carbon intensity (kgCO₂e/m²)",
              angle: -90,
              position: "insideLeft",
              offset: 10,
              style: { textAnchor: "middle" }
            }}
          />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />

          <ReferenceLine y={500} strokeDasharray="4 4" stroke="#999" label={{
            value: "500 kgCO₂e/m² - Target 2030",
            position: "right",
            fontSize: 12,
            fill: "#666"
          }} />
          <ReferenceLine y={600} stroke="#444" strokeWidth={1.5} label={{
            value: "600 kgCO₂e/m² - Target 2025",
            position: "right",
            fontSize: 12,
            fill: "#222"
          }} />

          <Bar dataKey="complete" fill="#7a4141" barSize={35}>
            <LabelList dataKey="complete" position="top" fill="#333" fontSize={12} />
          </Bar>
          <Bar dataKey="estimate" fill="#c98e8e" barSize={35}>
            <LabelList dataKey="estimate" position="top" fill="#333" fontSize={12} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
