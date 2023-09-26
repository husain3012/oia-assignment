"use client";
import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const session = useSession();
  if (session.status == "unauthenticated") {
    router.replace("/");
    return
  }
  return (
    <section className="flex w-screen h-screen  pl-0  p-2 sm:p-6 gap-3 sm:gap-8 md:gap-12 transition-all  ">
      {/* Include shared UI here e.g. a header or sidebar */}

      <div className="sm:w-56 ">
        <Sidebar />
      </div>

      <div className="flex-grow flex flex-col  ">
        <div>
          <Navbar pageTitle="Dashboard" />
        </div>
        <div className=" overflow-y-auto w-full  h-full  ">{children}</div>
      </div>
    </section>
  );
}
