import {
  PointElement,
  CategoryScale,
  Chart,
  LinearScale,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import React from "react";

import { Line } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const LineChart = ({ chartData }) => {
  return (
    <div className="chart-container mt-5">
      <h2 style={{ textAlign: "center" }}>High vs Low Temperature</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
          showLine: true,
          responsive: true,
          aspectRatio: 1.5,
        }}
      />
    </div>
  );
};
export default LineChart;
