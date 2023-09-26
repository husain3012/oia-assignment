import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Apple, Google } from "@/assets/icons";
import Input from "./Input";
import Link from "next/link";
import { signIn } from "next-auth/react";


const SignInWithGoogle = () => {
  const loginHandler = async () =>{
    await signIn('google')
  }
  return (
    <button onClick={loginHandler} className="flex gap-2 items-center font-heading text-sm hover:shadow-sm transition-shadow p-2 bg-white rounded-sm ">
      <Image src={Google} alt="Google" width={18} />
      Sign in with Google
    </button>
  );
};

const SignInWithApple = () => {
  return (
    <button className="flex gap-2 items-center font-heading text-sm hover:shadow-sm transition-shadow p-2 bg-white rounded-sm ">
      <Image src={Apple} alt="Apple" width={18} />
      Sign in with Apple
    </button>
  );
};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<null | string>(null);
  useEffect(() => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    if(email.length>3 && !regex.test(email)){
      setEmailError("Enter a valid email address.")
    }else{
      setEmailError(null)
    }
  }, [email]);
  return (
    <div className="flex flex-col gap-4  sm:w-fit w-full">
      <div className="flex flex-col gap-2">
        <h2 className="font-heading font-bold text-3xl">Sign In</h2>
        <p className="font-content text-sm">Sign in to your account</p>
      </div>

      <div className="flex sm:flex-row flex-col gap-4">
        <SignInWithGoogle />
        <SignInWithApple />
      </div>

      <form className="bg-white p-4 rounded-md flex flex-col gap-4">
        <Input label="Email Address" onChange={setEmail} value={email} error={emailError} />
        <Input
          label="Password"
          type="password"
          onChange={setPassword}
          value={email}
        />

        <Link className="text-blue-text font-content" href="/forgot-password">
          Forgot Password?
        </Link>

        <button className="bg-blue-bg text-white p-2 rounded-md hover:shadow-md">
          Sign In
        </button>
      </form>

      <p className="m-auto">
        Don&apos;t have an account?{" "}
        <Link className="text-blue-text font-content" href="/dashboard">
          Register Here
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
