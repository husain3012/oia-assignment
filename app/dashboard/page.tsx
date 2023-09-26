"use client";
import React, { useState } from "react";
import StatCard from "@/components/dashboard/StatCard";
import { TransactionIcon, Revenue, ThumbsUp, Users } from "@/assets/icons";
import BarChartCard from "@/components/dashboard/BarChartCard";
import PieChartCard from "@/components/dashboard/PieChartCard";
import AddProfileModal from "@/components/dashboard/profiles/AddProfileModal";
import AddProfileCard from "@/components/dashboard/profiles/AddProfileCard";
import { IProfile } from "@/types/profile";
import ProfileCard from "@/components/dashboard/profiles/ProfileCard";
const CardData = [
  {
    id: 1,
    heading: "Total Revenues",
    icon: Revenue,
    text: "$2,123,131",
    percentageChange: 1.4,
    positiveChange: true,
    bgColor: "#7FCD93",
  },
  {
    id: 2,
    heading: "Total Transactions",
    icon: TransactionIcon,
    text: "214",
    percentageChange: -2.6,
    positiveChange: false,

    bgColor: "#DEBF85",
  },
  {
    id: 3,
    heading: "Total Likes",
    icon: ThumbsUp,
    text: "2141",
    percentageChange: 3.1,
    positiveChange: true,

    bgColor: "#ECA4A4",
  },
  {
    id: 4,
    heading: "Total Transactions",
    icon: Users,
    text: "214",
    percentageChange: +4.2,
    positiveChange: false,

    bgColor: "#A9B0E5",
  },
];

const BarChartData = {
  heading: "Activities",
  subHeading: "May - June 2021",
};

const Dashboard = () => {
  const [userProfiles, setUserProfiles] = useState<IProfile[]>([]);
  return (
    <div className="flex flex-col h-full py-2 gap-4  ">
      {/* -------------------------------- First Row -------------------------------  */}

      <div className="w-full flex flex-wrap gap-4 justify-between items-center sm:justify-start ">
        {CardData.map((c) => (
          <div key={c.id} className="my-0 sm:my-1 w-5/6  sm:w-52">
            <StatCard {...c} />
          </div>
        ))}
      </div>

      {/* -------------------------------- Second Row -------------------------------  */}

      <div>
        <BarChartCard {...BarChartData} />
      </div>
      {/* -------------------------------- Third Row -------------------------------  */}

      <div className="mb-2 flex flex-wrap gap-4">
        <PieChartCard heading="Top Product" subHeading="May - June 2021" />
        {
          userProfiles.map(p=><ProfileCard key={p.email} profile={p} />)
        }
        <AddProfileCard
          setUserProfiles={setUserProfiles}
          userProfiles={userProfiles}
        />
      </div>
    </div>
  );
};

export default Dashboard;
