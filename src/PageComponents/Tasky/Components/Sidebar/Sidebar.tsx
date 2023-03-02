import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FcFolder } from "react-icons/fc";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

//
import { HiBell } from "react-icons/hi";

import { AiFillHome, AiFillPieChart } from "react-icons/ai";
import { FaNotesMedical } from "react-icons/fa";
import { BsMoonFill, BsFillPeopleFill } from "react-icons/bs";
import { MdExplore, MdMessage } from "react-icons/md";
import { RiSettings5Fill, RiLogoutBoxRLine } from "react-icons/ri";
import { BsSunFill } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

const sidebarListsUl = [
  {
    title: "Menu",
    listData: [
      { id: 1, icon: <AiFillHome />, title: "Home", isActive: false },
      { id: 2, icon: <FaNotesMedical />, title: "Notes", isActive: false },
      { id: 3, icon: <BsMoonFill />, title: "Theme", isActive: true },
      { id: 4, icon: <MdExplore />, title: "Discover", isActive: false },
    ],
  },
  {
    title: "General",
    listData: [
      { id: 1, icon: <AiFillHome />, title: "Home", isActive: false },
      { id: 2, icon: <FaNotesMedical />, title: "Notes", isActive: false },
    ],
  },
];

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className=" h-full w-full bg-zinc-800 border-r border-zinc-700 min-h-[100vh] ">
      <div className=" header h-[var(--tsky-header-height)] flex justify-between items-center border-b px-4 border-zinc-600">
        <div className="  font-semibold text-4xl">
          <span className=" text-red-700">T</span>asky
        </div>
        <button className=" center h-full text-2xl font-bold text-white">
          <div className=" center p-2.5 width-[100px] rounded-full border border-zinc-600">
            <MdOutlineArrowBackIosNew />
          </div>
        </button>
      </div>
      <div className=" flex justify-between items-center px-4 py-6">
        <div className=" flex items-center">
          <div className=" text-6xl">
            <FcFolder />
          </div>
          <div className=" ml-3">
            <p className=" text-sm font-semibold text-zinc-500">Folder</p>
            <h1 className=" text-2xl font-semibold">Ali's Team</h1>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center text-zinc-500">
          <div className=" text-xl">
            <HiOutlineChevronUp />
          </div>
          <div className=" text-xl">
            <HiOutlineChevronDown />
          </div>
        </div>
      </div>

      <div className=" sidebar-lists-wrapper text-zinc-400">
        {sidebarListsUl.map((el) => {
          return (
            <div className=" sidebar-list-item-1 px-4">
              <div className=" flex flex-1 ">
                <h1 className=" text-2xl">{el.title}</h1>
              </div>
              <div className=" site-nav-wrapper ">
                {el.listData.map((item, index) => {
                  return (
                    <button
                      className="  flex flex-col my-3 w-full  hover:bg-zinc-700 rounded-lg px-2 "
                      key={index}
                      style={{
                        color: item.isActive ? "white" : "",
                      }}
                    >
                      <div className=" border-b border-zinc-500 border-opacity-30 w-full  py-3">
                        <div
                          className=" flex items-center "
                          // style={{ borderLeft: "1px solid red" }}
                        >
                          <div className=" mr-4">
                            <div className=" text-2xl h-100 2-100 center">
                              {item.icon}
                            </div>
                          </div>
                          <h4 className=" font-semibold text-xl ">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className=" theme-switcher-wrapper px-4 mt-[10vh]">
        <div className=" flex justify-evenly items-center bg-zinc-600 p-1 rounded-3xl">
          <button className=" flex justify-center items-center gap-2 bg-zinc-700 flex-1 rounded-3xl py-3 px-2  ">
            <div className=" text-2xl ">
              <BsMoonFill />
            </div>
            <div>Dark</div>
          </button>

          <button className=" flex justify-center items-center gap-2 flex-1 rounded-3xl py-1">
            <div className=" text-4xl ">
              <BsSunFill />
            </div>
            <div>Light</div>
          </button>
        </div>
      </div>

      <div className=" flex items-center justify-between px-4 my-10 cursor-pointer">
        <div className=" flex items-center">
          <div>
            <img
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1055.jpg"
              alt=""
              className=" rounded-full h-[3rem]"
            />
          </div>
          <div className=" ml-4">
            <h4 className=" text-xl">Nahean Fardous</h4>
            <p className=" text-sm text-zinc-500">@n4h34n</p>
          </div>
        </div>
        <div className=" text-2xl center">
          <AiOutlineDown />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
