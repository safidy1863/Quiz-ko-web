import { logo, rounded } from "@/assets";
import { Button, Input } from "@/components";
import React from "react";

type Props = {};

export const Login = (props: Props) => {
  return (
    <div className="h-screen flex">
      <div className="hidden relative desktop:flex flex-col justify-center padding flex-1 bg-gradient-to-br to-purple from-garnet">
        <h1 className="font-gilroy-bold text-5xl text-white">
          Welcome to Quiz'ko
        </h1>
        <p className="text-white text-opacity-75 mt-5">
          The educational application designed for students at the Ecole
          Nationale <br /> d'Informatique Fianarantsoa in Madagascar!
        </p>

        <img src={logo} alt="logo" className="absolute bottom-10" />
        <img src={rounded} alt="rounded" className="absolute bottom-0 right-0" />
      </div>
      <main className="desktop:max-w-[600px] w-full h-full padding flex flex-col gap-y-5 justify-center">
        <h2 className="font-gilroy-bold text-4xl text-center">
          Sign in to Quiz'ko
        </h2>
        <div className="flex flex-col gap-y-3">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>

        <Button className="bg-purple text-white">Sign in</Button>

        <p className="text-center text-gray-1">
          By clicking sign in, you agree to our Terms of <br /> Service and
          Privacy Policy.
        </p>
      </main>
    </div>
  );
};
