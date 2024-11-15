import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", sales: 30 },
  { name: "February", sales: 50 },
  { name: "March", sales: 40 },
  { name: "April", sales: 60 },
  { name: "May", sales: 70 },
  { name: "June", sales: 90 },
];

const SimpleCharts = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      {" "}
      {/* Responsive container */}
      <ResponsiveContainer width="100%" height={300}>
        {" "}
        {/* Full width */}
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleCharts;
