import { onLoginUser } from "@/actions/auth";
import SideBar from "@/components/sidebar";
import Provider from "@/utils/provider";

import React from "react";

type Props = {
  children: React.ReactNode;
};

const OwnerLayout = async ({ children }: Props) => {
  const authenticated = await onLoginUser();
  if (!authenticated) return null;
  return (
    <div className="flex h-screen w-full">
      <SideBar />
      <div
        className="w-full h-screen flex flex-col  pl-20
        md:pl-20"
      >
        {children}
      </div>
    </div>
  );
};
export default OwnerLayout;
