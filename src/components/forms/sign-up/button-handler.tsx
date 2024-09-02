"use client";

import { Button } from "@/components/ui/button";
import { useAuthContextHook } from "@/context/useAuthContext";
import { useSignUpForm } from "@/hooks/sign-up/use-signup";

import Link from "next/link";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

type Props = {};
const ButtonHandler = (props: Props) => {
  const { setCurrentStep, currentStep } = useAuthContextHook();
  const [loading, setLoading] = useState(false); // Loading state
  const { formState, getFieldState, getValues } = useFormContext();
  const { onGenerateOTP } = useSignUpForm();
  const { isDirty: isName } = getFieldState("fullname", formState);
  const { isDirty: isEmail } = getFieldState("email", formState);
  const { isDirty: isPassword } = getFieldState("password", formState);

  const handleClick = async () => {
    setLoading(true); // Start loading
    try {
      if (currentStep === 1) {
        await onGenerateOTP(
          getValues("email"),
          getValues("password"),
          setCurrentStep
        );
      } else if (currentStep === 2) {
       //Empty for Now
      } else {
        setCurrentStep((prev: number) => prev + 1);
      }
    } finally {
      setLoading(false); 
    }
  };

  if (currentStep === 2) {
    return (
      <div className="w-full flex flex-col gap-3 items-center">
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Creating an account..." : "Create an account"}
        </Button>
        <p>
          Already have an account?
          <Link href="/auth/sign-in" className="font-bold">
            Sign In
          </Link>
        </p>
      </div>
    );
  }

  if (currentStep === 1) {
    return (
      <div className="w-full flex flex-col gap-3 items-center">
        <Button
          type="submit"
          className="w-full"
          onClick={handleClick}
          disabled={loading || !(isName && isEmail && isPassword)}
        >
          {loading ? "Continuing..." : "Continue"}
        </Button>
        <p>
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="font-bold">
            Sign In
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-3 items-center">
      <Button
        type="submit"
        className="w-full"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? "Continuing..." : "Continue"}
      </Button>
      <p>
        Already have an account?{" "}
        <Link href="/auth/sign-in" className="font-bold">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default ButtonHandler;
