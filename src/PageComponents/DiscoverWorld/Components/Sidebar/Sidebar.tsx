import React from "react";
import { HiBell } from "react-icons/hi";

import { AiFillHome, AiFillPieChart } from "react-icons/ai";
import { FaNotesMedical } from "react-icons/fa";
import { BsMoonFill, BsFillPeopleFill } from "react-icons/bs";
import { MdExplore, MdMessage } from "react-icons/md";
import { RiSettings5Fill, RiLogoutBoxRLine } from "react-icons/ri";

const sidebarUl = [
  { id: 1, icon: <AiFillHome />, title: "Home", isActive: false },
  { id: 2, icon: <FaNotesMedical />, title: "Notes", isActive: false },
  { id: 3, icon: <BsMoonFill />, title: "Theme", isActive: false },
  { id: 4, icon: <MdExplore />, title: "Discover", isActive: false },
  { id: 5, icon: <BsFillPeopleFill />, title: "Account", isActive: false },
  { id: 6, icon: <AiFillPieChart />, title: "Graph", isActive: false },
  { id: 7, icon: <MdMessage />, title: "Message", isActive: false },
  { id: 7, icon: <RiSettings5Fill />, title: "Settings", isActive: false },
];
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className=" w-full bg-slate-900 min-h-full px-2 border-r-2  border-slate-800 ">
      <div className=" header h-[var(--dw-header-height)] center font-semibold text-4xl">
        <span className=" text-red-700">V</span>isit
      </div>
      <div className=" site-nav-wrapper mt-12">
        {sidebarUl.map((item, index) => {
          return (
            <button
              className="  flex my-5 w-full  hover:bg-zinc-700 rounded-lg p-2"
              key={index}
            >
              <div
                className=" flex items-center"
                // style={{ borderLeft: "1px solid red" }}
              >
                <div className=" mr-4">
                  <div className=" text-3xl h-100 2-100 center">
                    {item.icon}
                  </div>
                </div>
                <h4 className=" font-semibold text-xl ">{item.title}</h4>
              </div>
            </button>
          );
        })}
      </div>

      <button className="  center my-5 w-full mt-32  ">
        <div className=" center hover:bg-slate-800 rounded-lg  mt-14  px-8 py-4 ">
          <div className=" mr-4">
            <div className=" text-3xl h-100 2-100 center">
              <RiLogoutBoxRLine />
            </div>
          </div>
          <h4 className=" font-semibold text-xl ">Logout</h4>
        </div>
      </button>
    </div>
  );
};

export default Sidebar;
