"use client";

import Image from "next/image";
import Link from "next/link";
import leftSide from "@/assets/images/left-side.png";

import { useSession, signIn, signOut } from "next-auth/react";
import SplitBackground from "@/components/SplitBackground";

import { Discord, Github, LinkedIn, Twitter } from "@/assets/icons";
import SignIn from "@/components/SignIn";
import { useRouter } from "next/navigation";

export default function Home() {
  const session = useSession();
  const router = useRouter();


  if (session.status == "authenticated") {
    router.replace("/dashboard");
    return;
  }

  return (
    <SplitBackground>
      <div className="flex flex-col sm:flex-row min-h-screen   w-full bg-transparent">
        <div className="flex flex-col sm:w-1/2 sm:h-screen  justify-between p-10  h-72 ">
          <div>
            <h2 className="font-logo font-bold text-base text-white">LOGO</h2>
          </div>

          <div>
            <h1 className="font-heading font-bold text-white text-6xl text-center sm:mr-12">
              Board.
            </h1>
          </div>

          <div className="flex gap-8 items-center justify-center sm:mr-12  ">
            <Image src={Github} alt="Github" className="sm:w-9 w-6" />
            <Image src={Twitter} alt="Twitter" className="sm:w-9 w-6" />
            <Image src={LinkedIn} alt="LinkedIn" className="sm:w-9 w-6" />
            <Image src={Discord} alt="Discord" className="sm:w-9 w-6" />
          </div>
        </div>

        <div className="flex flex-col sm:w-1/2 w-full  items-center justify-center p-10">
          <SignIn />
        </div>
      </div>
    </SplitBackground>
  );
}
