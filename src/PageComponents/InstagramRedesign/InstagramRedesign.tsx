import React, { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainContent from "./Components/MainContent/MainContent";

type Props = {};

const InstagramRedesign = (props: Props) => {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <div className=" instagram-redesign-page-wrapper max-w-[100vw] overflow-x-hidden">
      <div className=" flex  min-h-[100vh] bg-slate-800">
        <div className=" w-[400px] hidden lg:block">
          <Sidebar />
        </div>
        <div className=" flex-1 ">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default InstagramRedesign;
