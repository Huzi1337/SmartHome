import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DoughnutChart: React.FC = () => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    // Get a reference to the canvas element
    const ctx = document.getElementById("doughnutChart") as HTMLCanvasElement;

    // Destroy previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Define the chart data
    const data = {
      labels: ["Label 1", "Label 2", "Label 3"],
      datasets: [
        {
          data: [30, 40, 50],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(75, 192, 192, 0.7)",
          ],
        },
      ],
    };

    // Define chart options
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false, // Hide the legend
        },
        tooltips: {
          mode: "index",
          position: "nearest",
          intersect: false,
          callbacks: {
            label: (context: any) => {
              const labelIndex = context.dataIndex;
              const value = data.datasets[0].data[labelIndex];
              return `${data.labels[labelIndex]}: ${value}%`; // Display label and value with "%" sign
            },
            // Remove color box
            labelColor: (context: any) => {
              return {
                borderColor: "transparent",
                backgroundColor: "transparent",
              };
            },
          },
        },
      },
    };

    // Create a doughnut chart
    chartRef.current = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: options,
    });
  }, []);

  return (
    <div>
      <canvas id="doughnutChart"></canvas>
    </div>
  );
};

export default DoughnutChart;
