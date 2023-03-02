import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainContent from "./Components/MainComponent/MainContent";

type pageProps = {};

const DiscoverWorld = (props: pageProps) => {
  return (
    <div className=" instagram-redesign-page-wrapper max-w-[100vw] overflow-x-hidden text-white">
      <div className=" flex  min-h-[100vh] bg-slate-800">
        <div className=" w-[var(--dw-sidebar-width)] hidden lg:block">
          <Sidebar />
        </div>
        <div className=" flex-1">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default DiscoverWorld;
