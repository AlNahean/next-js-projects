import React from "react";

import { GoSearch } from "react-icons/go";

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import { HiBell } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-4  rounded-xl">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              {/* Right */}
              <div className=" relative flex justify-between  px-4 ">
                <div className=" flex items-center">
                  <div className=" flex text-3xl">
                    <div>
                      <MdOutlineArrowBackIosNew />
                    </div>
                    <div className=" text-neutral-700 center h-full scale-[1.1]">
                      <MdOutlineArrowForwardIos />
                    </div>
                  </div>

                  <div className="relative hidden  xl:flex w-full flex-wrap items-center ml-4 ">
                    <input
                      type="text"
                      placeholder="Search"
                      className="px-6 py-3 placeholder-slate-300 text-slate-300 relative rounded-xl text-sm border border-slate-600  outline-none focus:outline-none focus:ring-0 pr-10 bg-transparent w-[450px]"
                    />
                    <span className="z-10 h-100 leading-snug font-normal  text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0  mr-3">
                      <div className=" text-xl h-100 center">
                        <GoSearch />
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

              {/* Right */}
              <div
                className="flex flex-grow items-center"
                id="example-navbar-info"
              >
                <ul className="flex flex-row list-none ml-auto">
                  <li className="nav-item center">
                    <div className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                      <button className=" text-2xl h-100 2-100 center">
                        <HiBell />
                      </button>
                    </div>
                  </li>
                  <li className="nav-item center">
                    <div className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                      <button className=" text-2xl h-100 w-100 center">
                        <AiOutlineMessage />
                      </button>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                      <button className=" h-8 w-8 ">
                        <img
                          src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                          alt="..."
                          className="shadow rounded-full  h-100 w-100 align-middle border-none"
                        />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
