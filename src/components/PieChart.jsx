import React from "react"
import { Pie } from "react-chartjs-2"
//import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Items",
            },
          },
        }}
      />
    </div>
  )
}
export default PieChart
