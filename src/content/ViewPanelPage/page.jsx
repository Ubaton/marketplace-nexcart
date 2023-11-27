import { AreaChart, PackageOpen } from "lucide-react";
import React from "react";

const ViewPanelPage = () => {
  return (
    <div>
      <div className="space-y-12">
        <div className="bg-object rounded-3xl w-48 h-58">
          <h1 className="flex flex-row items-center justify-center p-2 gap-2 text-lg font-bold hover:text-gray-300">
            Networth
            <AreaChart />
          </h1>
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className=" bg-secondary rounded-3xl w-44 h-10"></div>
            <div className=" bg-secondary rounded-3xl w-44 h-10"></div>
            <div className=" bg-secondary rounded-3xl w-44 h-10"></div>
            <div className=" bg-secondary rounded-3xl w-44 h-10"></div>
          </div>
        </div>
        <div className="bg-object rounded-3xl w-48 h-60">
          <h1 className="flex  items-center justify-center p-2 gap-2 text-lg font-bold hover:text-gray-300">
            Products
            <PackageOpen />
          </h1>
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className=" bg-secondary rounded-3xl w-44 h-10"></div>
            <div className=" bg-secondary rounded-3xl w-44 h-10"></div>
            <div className=" bg-secondary rounded-3xl w-44 h-10"></div>
            <div className=" bg-secondary rounded-3xl w-44 h-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPanelPage;
