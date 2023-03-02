import React from "react";
import { BsGrid, BsCardList } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import Card from "../Card/Card";
import { faker } from "@faker-js/faker";
// import DraggableList from "react-draggable-lists";
import { useTaskyPageContext } from "../../TaskyPageContext";
type Props = {};

export type TaskType = {
  id: Number;
  projectName: String;
  title: String;
  comment: Number;
  links: Number;
  date: String;
  img: string;
};

const ProjectGrids = (props: Props) => {
  const { taskyListUlData } = useTaskyPageContext();
  return (
    <div className=" Project-Grids-wrapper mt-10  ">
      <div className=" header-nav flex justify-between max-w-[calc(100vw_-_1rem)] py-6 px-6 border-y border-zinc-600">
        <div className=" flex items-center gap-6 text-xl flex-1 overflow-scroll scrollbar-hide whitespace-nowrap ">
          <div>Tasks(24)</div>
          <div>Objectives(12)</div>
          <div>Watch List (8)</div>
          <div> Favourite(6)</div>
        </div>
        <div className=" flex items-center gap-2 ml-1">
          <div>View by</div>
          <div className=" flex border border-zinc-800 text-2xl p-1 rounded-lg">
            <button className=" p-2 bg-zinc-700 rounded-lg">
              <BsGrid />
            </button>
            <button className=" p-2">
              <BsCardList />
            </button>
          </div>
        </div>
      </div>
      <div className=" grid md:grid-cols-2 xl:grid-cols-3 px-6 ">
        {/* <div className=" md:columns-2 xl:columns-3 px-6 "> */}
        {taskyListUlData.map((item, index) => {
          return (
            <div className="  md:border-r md:border-l border-zinc-600 border-opacity-0 pt-6 px-3 ">
              <div className=" flex justify-between items-center my-4">
                <div className=" bg-slate-800 px-6 py-2 rounded-3xl text-2xl">
                  <span>{item.title}</span>
                  <span>{` (${item.count.toString()})`}</span>
                </div>
                <div className=" flex items-center gap-6 text-2xl ">
                  <div className=" center">
                    <AiOutlinePlus />
                  </div>
                  <div className=" center">
                    <MdMoreHoriz />
                  </div>
                </div>
              </div>
              <div className=" flex flex-col">
                {item.dataArray.map((task, idx) => {
                  return <Card task={task} />;
                })}
              </div>
              {/* <DraggableList width={440} height={210} rowSize={1}>
                {item.dataArray.map((task, idx) => {
                  return <Card task={task} />;
                })}
              </DraggableList> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectGrids;
