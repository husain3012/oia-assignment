"use client";
import React from "react";
import SearchBox from "../Search";
import Image from "next/image";
import { BellIcon } from "@/assets/icons";

import { signOut, useSession } from "next-auth/react";

const username = Math.random().toString(36).substring(2, 10);
const Navbar = ({ pageTitle }: { pageTitle: string }) => {
  const session = useSession();
  console.log("🚀 ~ file: Navbar.tsx:12 ~ Navbar ~ session:", session);
  const signOutHandler = async () => {
    await signOut();
  };
  return (
    <div className="flex sm:flex-row flex-col sm:justify-between  w-full sm:items-center gap-1">
      <h1 className="font-heading font-bold text-2xl">{pageTitle}</h1>

      <div className="flex gap-6 items-center ">
        <SearchBox placeholder="Search..." className="w-full" />
        <button>
          <Image src={BellIcon} alt="notifications" className="w-5" />
        </button>

        <div className="group inline-block relative">
          <Image
            className="rounded-full w-11 cursor-pointer"
            src={
              session.data?.user?.image ||
              `https://api.dicebear.com/7.x/adventurer/svg?backgroundColor=4285F4,7FCD93,F6DC7D&seed=${session.data?.user?.email}`
            }
            alt={username}
            width={64}
            height={64}
          />

          <div className="absolute text-sm transparent  -left-20   group-hover:block overflow-hidden h-0 group-hover:h-32  transition-all ">
            <ul className="bg-white p-1 rounded-md border-2 mt-4 w-32 flex flex-col ">
              <button className="text-sm hover:bg-red-dark p-2 rounded-md transition-all items-center hover:text-white" onClick={signOutHandler}> Sign Out </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
