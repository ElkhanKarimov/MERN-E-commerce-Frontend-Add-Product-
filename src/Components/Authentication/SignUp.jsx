import React from "react";
import Input from "./Input.tsx";
import Button from "./Button.tsx";

// Router
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="py-32 container mx-auto flex flex-col gap-[15px] justify-center items-center w-80">
      <div className="container mx-auto">
        <button className="flex items-center justify-center border border-[#B6B7BC] px-6 py-3 w-80 rounded-[4px]">
          <img
            className="w-[24px] pr-3"
            src={require("../../Images/Google.png")}
            alt=""
          />
          <span className="text-[#5C5F6A] font-medium text-sm leading-[24px]">
            Continue with Google
          </span>
        </button>
        <div className="flex items-center py-4">
          <div className="w-32 h-[1px] bg-[#E6E7E8]"></div>
          <span className="px-4 text-[#5C5F6A] text-xs font-medium">OR</span>
          <div className="w-32 h-[1px] bg-[#E6E7E8]"></div>
        </div>
        <Input type="text" label="Name" />
        <Input type="email" label="Email" />
        <Input type="password" label="Password" />
        <div className="leading-6 text-sm capitalize text-[#5C5F6A] mb-6">
          By creating an account you agree with our Terms of Service, Privacy
          Policy,
        </div>
        <Button>Create account</Button>
        <div className="leading-[24.5px] text-[#5C5F6A] mt-6 text-center">
          Already have an account? <Link to="/sign-in">Log in</Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
