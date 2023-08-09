import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

type Props = {
  className: string;
};

const BarChartNoTooltipLegend = ({ className }: Props) => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const ctx = document.getElementById("barChart") as HTMLCanvasElement;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const data = {
      labels: ["Heater", "Speaker", "Lights", "Humidifier"],
      datasets: [
        {
          label: "Data",
          data: [6, 24, 20, 10],
          backgroundColor: [
            "rgba(65, 1, 255, 0.9)",
            "rgba(109, 63, 243, 1",
            "rgba(153, 123, 240, 1)",
            "rgba(42, 16, 120, 1)",
          ],
          borderRadius: 10,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          display: false, // Hide the x-axis
        },
        y: {
          display: false, // Hide the y-axis
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            title: () => "", // Remove title
            label: (context: any) => {
              const labelIndex = context.dataIndex;
              const value = data.datasets[0].data[labelIndex];
              return `${data.labels[labelIndex]}: ${value} hours`; // Display label and value with "%" sign
            },
          },
          displayColors: false, // Hide color indicators
        },
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
    };

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });
  }, []);

  return (
    <div>
      <div></div>
      <div className={className}>
        <canvas id="barChart"></canvas>
      </div>
    </div>
  );
};

export default BarChartNoTooltipLegend;
