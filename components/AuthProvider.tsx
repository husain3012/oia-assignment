"use client";

import { Session } from "next-auth";
import { SessionProvider, } from "next-auth/react";
import { ReactNode } from "react";

type Props = {
  children?: React.ReactNode;
};

const AuthProvider = ({ children, session }: {children:ReactNode, session:Session|null}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider