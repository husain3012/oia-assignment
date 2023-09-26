// These styles apply to every route in the application
import "@/styles/globals.css";
import AuthProvider from "@/components/AuthProvider";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";

const title = "Next.js Auth Starter";
const description =
  "This is a Next.js starter kit that uses Next-Auth for simple email + password login and a Postgres database to persist the data.";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL("https://nextjs-postgres-auth.vercel.app"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className="min-h-screen w-full flex bg-white-bg overflow-auto">
        <AuthProvider session={session}>{children}</AuthProvider>
      </body>
    </html>
  );
}
