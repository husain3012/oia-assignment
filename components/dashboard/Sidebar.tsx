import { DashboardIcon, ScheduleIcon, SettingsIcon, TransactionIcon, UserIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const MenuItems = [
    {
        name: "Dashboard",
        link:"/dashboard",
        icon: DashboardIcon
    },
    {
        name: "Transaction",
        link:"/dashboard/transaction",
        icon: TransactionIcon
    },
    {
        name: "Schedules",
        link:"/dashboard/schedules",
        icon: ScheduleIcon
    },
    {
        name: "Users",
        link:"/dashboard/users",
        icon: UserIcon
    },
    {
        name: "Settings",
        link:"/dashboard/settings",
        icon: SettingsIcon
    },
]

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4 bg-blue-bg h-full  rounded-l-none rounded-xl sm:rounded-l-xl sm:px-6 px-3 py-8 text-white transition-all ">
      <div className="mb-8">
        {" "}
        <h1 className="font-heading font-bold text-white text-2xl ">
          B<span className="sm:inline-block hidden">oard</span>.
          
        </h1>
      </div>

      <div className="flex flex-col gap-5 font-heading  ">
        {
            MenuItems.map(m=><Link href={m.link} key={m.link} className="flex gap-3 items-center justify-center sm:justify-start border-b-2 border-transparent hover:border-white-bg transition-all py-2">
                
                <div>
                    <Image src={m.icon} alt={m.name} className="transition-all w-5 sm:w-4" />

                </div>
                <div className="hidden sm:block">
                    {m.name}
                </div>
                

            </Link>)
        }
      </div>

    </div>
  );
};

export default Sidebar;
