import { useEffect, useRef } from "react";
import Chart, { ChartType } from "chart.js/auto";

type Props = {
  className: string;
};

const ElectricityUsageChart = ({ className }: Props) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<ChartType | null | any>(null); // To keep track of the Chart instance

  // Hypothetical data
  const currentHour = new Date().getHours(); // Get the current hour of the day
  const hoursOfDay = Array.from(
    { length: 7 },
    (_, i) => `${(currentHour + i) % 24}:00`
  );
  const usageData = [20, 10, 30, 25, 50, 15, 45];

  useEffect(() => {
    if (chartRef.current) {
      // Destroy the previous chart instance if it exists
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      // Create a new Chart instance
      chartInstanceRef.current = new Chart(ctx as CanvasRenderingContext2D, {
        type: "line",
        data: {
          labels: hoursOfDay,
          datasets: [
            {
              pointRadius: 0,

              label: "Electricity Usage",
              data: usageData,
              borderColor: "#6D3FF3",
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              display: true,
              title: {
                display: false,
              },
              offset: true,
              ticks: {
                font: {
                  size: 12,
                  family: "Inter",
                  weight: 600 as any,
                },
              },
            },
            y: {
              display: true,
              beginAtZero: false,
              title: {
                display: false,
              },
              ticks: {
                font: {
                  weight: 600 as any,
                  size: 12,
                  family: "Inter",
                },
                stepSize: 10,
                //@ts-ignore

                beginAtZero: false,
                max: 50,
              },
            },
          },
          elements: {
            line: {
              tension: 0.5,
            },
          },
        },
      });
    }
  }, []);

  return (
    <div className={className}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ElectricityUsageChart;
