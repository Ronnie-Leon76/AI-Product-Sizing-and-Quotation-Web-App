import React from "react";

type Props = {
  title: string;
  value: number;
  icon: JSX.Element;
  sales?: boolean;
};

const DashboardCard = ({ icon, title, value, sales }: Props) => {
  return (
    <div className=" rounded-lg flex flex-col gap-3 p-5 md:p-10 border border-gray-200 bg-white shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full">
      <div className="flex items-center gap-3">
        {icon}
        <h2 className="font-bold text-xl">{title}</h2>
      </div>
      <p className="font-bold text-4xl">
        {sales && "$"}
        {value}
      </p>
    </div>
  );
};

export default DashboardCard;