import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainContext from "./Components/MainContent/MainContext";

type Props = {};

const Tasky = (props: Props) => {
  return (
    <>
      <div className=" tasky-page-wrapper max-w-[100vw] overflow-x-hidden text-white">
        <div className=" flex  min-h-[100vh] bg-zinc-900">
          <div className=" w-[var(--tsky-sidebar-width)] hidden lg:block">
            <Sidebar />
          </div>
          <div className=" flex-1">
            <MainContext />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasky;
