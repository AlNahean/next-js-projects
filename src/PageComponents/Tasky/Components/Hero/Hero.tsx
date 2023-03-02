import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import TripleStackingAvatar from "../TripleStackingAvatar/TripleStackingAvatar";
type Props = {};

const breadCrumbUl = [
  {
    id: 1,
    title: "Projects",
    isFirst: true,
  },
  {
    id: 2,
    title: "Apps",
    isFirst: false,
  },
  {
    id: 3,
    title: "Move Apps",
    isFirst: false,
  },
];

const Hero = (props: Props) => {
  return (
    <div className=" px-6">
      <div className=" breadcrumb-wrapper flex items-center text-xl mt-12">
        {breadCrumbUl.map((item, index) => {
          return (
            <div className=" flex items-center">
              {!item.isFirst && (
                <div className=" center mt-1 mx-3 ">
                  <MdArrowForwardIos />
                </div>
              )}
              <a className=" uppercase" href="#">
                {item.title}
              </a>
            </div>
          );
        })}
      </div>
      <div className=" flex flex-col lg:flex-row justify-between lg:items-center">
        <h1 className=" text-7xl mt-4">Crypter App</h1>
        <div className=" flex items-center gap-2 text-xl mt-10">
          <TripleStackingAvatar />
          <button className=" flex  items-center h-[50px] gap-2  px-4 py-2 border border-zinc-600 rounded-lg ">
            <AiOutlinePlus />
            <div>Add Member</div>
          </button>
          <button className=" flex  items-center h-[50px] w-[50px] gap-2  px-4 py-2 border border-zinc-600 rounded-full  ">
            <BsPencilSquare />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
