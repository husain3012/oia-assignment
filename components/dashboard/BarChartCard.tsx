"use client"
import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: "#98D89E",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: "#EE8484",
    },
  ],
};
const BarChartCard = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className="flex flex-col  py-4 px-4 sm:p-6  bg-white border-2 rounded-2xl shadow-md max-w-xs sm:max-w-full">
      <div className="flex justify-between items-center">
        <div className="font-heading">
          <h2 className="text-xl font-bold">{heading}</h2>
          <p className="text-xs text-gray-600">{subHeading}</p>
        </div>
      </div>
      <div className="h-52   ">
      <Bar  options={{responsive:true, maintainAspectRatio:false}} data={data} />
      </div>
    </div>
  );
};

export default BarChartCard;
