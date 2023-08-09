import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

type Props = {
  className: string;
};

const DoughnutChart = ({ className }: Props) => {
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
      labels: ["Modem", "Lightings", "TV", "Heater"],
      datasets: [
        {
          data: [22, 28, 30, 20],
          backgroundColor: [
            "rgba(65, 1, 255, 0.9)",
            "rgba(109, 63, 243, 1",
            "rgba(153, 123, 240, 1)",
            "rgba(42, 16, 120, 1)",
          ],
        },
      ],
    };

    // Define chart options
    const options: any = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 1,

      plugins: {
        legend: {
          display: true,
          position: "right" as const,
          labels: {
            color: "#0C0C0C",
            font: { family: "Inter", size: 16, weight: 500 },
            fontSize: 20,
            boxWidth: 16,
            boxHeight: 16,
            boxBorderRadius: 16,
            align: "center" as const,
          },
        },
        tooltip: {
          callbacks: {
            title: () => "", // Remove title
            label: (context: any) => {
              const labelIndex = context.dataIndex;
              const value = data.datasets[0].data[labelIndex];
              return `${data.labels[labelIndex]}: ${value}%`; // Display label and value with "%" sign
            },
          },
          displayColors: false, // Hide color indicators
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
    <div className={className}>
      <canvas id="doughnutChart"></canvas>
    </div>
  );
};

export default DoughnutChart;
