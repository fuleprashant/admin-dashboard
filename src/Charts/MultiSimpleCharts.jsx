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
  { name: "January", pageviews: 1200, bounceRate: 15, conversionRate: 4.2 },
  { name: "February", pageviews: 1400, bounceRate: 13, conversionRate: 5.0 },
  { name: "March", pageviews: 1600, bounceRate: 16, conversionRate: 4.8 },
  { name: "April", pageviews: 1800, bounceRate: 14, conversionRate: 6.1 },
  { name: "May", pageviews: 2000, bounceRate: 12, conversionRate: 5.9 },
  { name: "June", pageviews: 2200, bounceRate: 18, conversionRate: 6.4 },
  { name: "July", pageviews: 2400, bounceRate: 17, conversionRate: 5.7 },
  { name: "August", pageviews: 2600, bounceRate: 19, conversionRate: 6.0 },
  { name: "September", pageviews: 2800, bounceRate: 11, conversionRate: 6.5 },
  { name: "October", pageviews: 3000, bounceRate: 15, conversionRate: 6.8 },
  { name: "November", pageviews: 3200, bounceRate: 13, conversionRate: 7.0 },
  { name: "December", pageviews: 3400, bounceRate: 14, conversionRate: 7.3 },
];

const MultiSimpleCharts = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="bounceRate"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="conversionRate" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MultiSimpleCharts;
