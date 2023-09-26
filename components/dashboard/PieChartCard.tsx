"use client";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = [
  {
    label: "Basic Tees",
    value: 23,
    color: "#98D89E",
  },
  {
    label: "Custom Short Pants",
    value: 21,
    color: "#F6DC7D",
  },
  {
    label: "Super Hoodies",
    value: 32,
    color: "#EE8484",
  },
];
const totalValue = chartData.reduce((a, v) => (a += v.value), 0);

export const data: ChartData<"doughnut", number[], string> = {
  labels: chartData.map((d) => d.label),
  datasets: [
    {
      data: chartData.map((d) => d.value),
      backgroundColor: chartData.map((d) => d.color),

      borderWidth: 0,
    },
  ],
};

const PieChartCard = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading?: string;
}) => {
  return (
    <div className="flex flex-col py-4 px-4 sm:px-6  bg-white border-2 rounded-2xl shadow-md max-w-xs sm:max-w-md">
      <div className="flex justify-between font-heading items-center">
        <h1 className="font-bold text-lg">{heading}</h1>
        <span className="text-xs text-gray-400">{subHeading}</span>
      </div>
      <div className="flex flex-col sm:flex-row justify-between  ">
        <div className=" w-full sm:w-1/2 p-0 sm:p-3 flex items-center justify-center">
          <div className="w-20 sm:w-28 ">

          <Doughnut
           
            data={data}
            options={{
              plugins: {
                legend: { display: false },
                tooltip: { enabled: false },
                title: { display: false },
              },
              cutout: "80%",
              // radius: 60,
            }}
          />
           </div>
        </div>
        <div className="sm:w-1/2 flex flex-row sm:flex-col flex-wrap gap-2 ">
          {chartData.map((d) => (
            <div className="flex items-start gap-2" key={d.label}>
              {/* <div className="fle"> */}
              <span
                style={{ backgroundColor: d.color }}
                className="h-3 w-3 rounded-full mt-1"
              ></span>
              {/* </div> */}
              <div className="flex flex-col">
                <h3 className="font-bold font-heading sm:text-sm  text-xs w-16 sm:w-fit  ">
                  {d.label}
                </h3>
                <p className="text-xs text-gray-400 font-content">
                  {(d.value / totalValue).toFixed(2)}%
                </p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default PieChartCard;
