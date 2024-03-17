import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Legend, Tooltip } from "chart.js";
Chart.register(ArcElement, Legend, Tooltip);

const PieChart = ({ chartData }) => {
  console.log(chartData);
  return (
    <div className="chart-container mt-5">
      <h2 style={{ textAlign: "center" }}>Population</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Population percentage in the cities",
            },
          },
          showTooltips: true,
          responsive: true,
          aspectRatio: 1.5,
          scales: {
            y: {
              type: "linear",
              display: true,
              position: "left",
            },
            y1: {
              type: "linear",
              display: true,
              position: "right",
              grid: {
                drawOnChartArea: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
