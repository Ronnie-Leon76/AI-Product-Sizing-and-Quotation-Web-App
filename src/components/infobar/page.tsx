import React from "react";
import { Card } from "../ui/card";
import { BellRing, Headphones, Star, Trash } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import InforBarText from "./Infobar-text";

type Props = {};

const InfoBar = (props: Props) => {
  return (
    <div className="flex w-full justify-between items-center py-1 mb-8">
      <InforBarText />
      <div className="flex gap-3 items-center">

        <Avatar>
          <AvatarFallback className="bg-green-500 text-white">
            <BellRing />
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default InfoBar;
