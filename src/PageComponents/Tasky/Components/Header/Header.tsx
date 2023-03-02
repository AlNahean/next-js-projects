import React from "react";

import { GoSearch } from "react-icons/go";

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import { HiBell } from "react-icons/hi";
import {
  AiOutlineMessage,
  AiOutlinePlus,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiShow } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { TbMenu2 } from "react-icons/tb";
type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="flex flex-wrap bg-zinc-800 border-b border-zinc-600 h-[80px]">
        <div className="w-full">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-4  rounded-xl">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
              {/* Left */}
              <div className=" relative hidden  xl:flex justify-between  px-4 ">
                <div className=" flex items-center">
                  {/* <div className=" flex text-3xl">
                    <div>
                      <MdOutlineArrowBackIosNew />
                    </div>
                    <div className=" text-neutral-700 center h-full scale-[1.1]">
                      <MdOutlineArrowForwardIos />
                    </div>
                  </div> */}

                  <div className="relative flex w-full flex-wrap items-center ml-4 ">
                    <span className="z-10 h-100 leading-snug font-normal  text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 left-2  mr-3">
                      <div className=" text-xl h-100 center">
                        <GoSearch />
                      </div>
                    </span>
                    <input
                      type="text"
                      placeholder="Search tasks"
                      className="px-6 py-3 pl-14 placeholder-slate-300 text-slate-300 relative rounded-xl text-sm border border-transparent  outline-none focus:outline-none focus:ring-0 pr-10 bg-transparent w-[450px] bg-zinc-700 bg-opacity-40"
                    />
                    <span className="z-10 h-100 leading-snug font-normal  text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center  right-0 top-2 bottom-2 bg-zinc-600 px-2 center mr-3">
                      <div className=" text-xl h-100 center  ">
                        ⌘ <span className=" ml-1 text-lg">K</span>
                      </div>
                    </span>
                  </div>
                </div>
                {/* <div className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                  pink Menu
                </div> */}

                {/* <button
                  className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                >
                  <span className="block relative w-6 h-px rounded-sm bg-white">
                    a
                  </span>
                  <span className="block relative w-6 h-px rounded-sm bg-white mt-1">
                    a
                  </span>
                  <span className="block relative w-6 h-px rounded-sm bg-white mt-1">
                    a
                  </span>
                </button> */}
              </div>
              <div className=" xl:hidden text-2xl h-100 center    ">
                <TbMenu2 />
              </div>

              <div className=" hidden 2xl:flex items-center gap-6">
                <div className=" flex gap-2">
                  <div className=" text-xl h-100 center   ">
                    <BsFillPeopleFill />
                  </div>
                  <h1>Assignes</h1>
                </div>
                <div className=" flex gap-2">
                  <div className=" text-xl h-100 center   ">
                    <BiShow />
                  </div>
                  <h1>Show</h1>
                </div>
                <div className=" flex gap-2">
                  <div className=" text-xl h-100 center   ">
                    <CiCircleMore />
                  </div>
                  <h1>More</h1>
                </div>
              </div>

              {/* Right */}
              <div
                className="flex  items-center gap-2"
                id="example-navbar-info"
              >
                <button className=" flex gap-2  items-center border border-zinc-700 px-6 py-2 rounded-lg">
                  <div className=" text-xl h-100 center ">
                    <AiOutlineShareAlt />
                  </div>
                  <h1>Share</h1>
                </button>
                <button className=" flex gap-2 items-center  bg-blue-600 px-6 py-2 rounded-lg">
                  <div className=" text-xl h-100 center">
                    <AiOutlinePlus />
                  </div>
                  <h1>Create New</h1>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
