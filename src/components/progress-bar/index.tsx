"use client";

import { useAuthContextHook } from "@/context/useAuthContext";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {};

const HighlightBar = (props: Props) => {
  const { currentStep } = useAuthContextHook();

  return (
    <div className="grid grid-cols-2 gap-2">
      <div
        className={cn(
          "rounded-full h-2 col-span-1",
          currentStep == 1 ? "bg-green-500" : "bg-zinc-600"
        )}
      ></div>
      <div
        className={cn(
          "rounded-full h-2 col-span-1",
          currentStep == 2 ? "bg-green-500" : "bg-zinc-600"
        )}
      ></div>
    </div>
  );
};

export default HighlightBar;
