import React from "react";
import { TransactionIcon } from "@/assets/icons";
import Image from "next/image";
const StatCard = ({
  icon,
  heading,
  text,
  percentageChange,
  positiveChange,
  bgColor,
}: {
  icon: any;
  heading: string;
  text: string;
  percentageChange: false | number;
  positiveChange?: boolean;

  bgColor: string;
}) => {
  return (
    <div className="flex flex-col py-3 px-6  bg-white border-2 rounded-2xl shadow-md w-full">
      <div  className="flex mb-1">
        <div style={{ backgroundColor: bgColor }} className="rounded-full p-2">

        <Image className="w-3 h-3" src={icon} alt="heading" height={32} width={32} />
        </div>
      </div>

      <div className="flex flex-col w-full ">
        {/* stats */}
        <p className="font-content text-xs">{heading}</p>
        <div className="flex justify-between items-center flex-grow">
          <span className="font-sans font-bold text-xl">{text}</span>
          {percentageChange!=false && (
            <div className={`${positiveChange?"bg-green-light text-green-500":"bg-red-light text-red-500"}  bg-opacity-20 rounded-2xl  px-2 py-1   text-xs flex items-center justify-center`}>{percentageChange>0?"+":""}{percentageChange} %</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
