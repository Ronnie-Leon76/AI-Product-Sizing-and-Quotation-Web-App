"use client";
import { useAuthContextHook } from "@/context/useAuthContext";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

import dynamic from "next/dynamic";
import SpinnerWrapper from "@/components/spinner/spinner-wrapper";

const OTPForm = dynamic(() => import("./otp-form"), {
  ssr: false,
  loading: SpinnerWrapper,
});

const DetailForm = dynamic(() => import("./account-details-form"), {
  ssr: false,
  loading: SpinnerWrapper,
});
type Props = {};

const RegistrationFormStep = (props: Props) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const { currentStep } = useAuthContextHook();
  const [onOTP, setOnOTP] = useState<string>("");

  setValue("otp", onOTP);
  switch (currentStep) {
    
    case 1:
      return <DetailForm errors={errors} register={register} />;
    case 2:
      return <OTPForm onOTP={onOTP} setOTP={setOnOTP} />;
  }

  return <div>RegistrationFormStep</div>;
};

export default RegistrationFormStep;
