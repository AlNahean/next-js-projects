import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { TaskType } from "../ProjectGrids/ProjectGrids";
type Props = {
  task: TaskType;
};

const Card = ({ task }: Props) => {
  return (
    <>
      <div className=" task-card px-6 py-6 bg-zinc-800 rounded-xl my-4">
        <div className=" flex justify-between">
          <div>{task.projectName}</div>
          <div className=" text-2xl center">
            <MdMoreHoriz />
          </div>
        </div>
        <h1 className=" title text-4xl">{task.title}</h1>

        {task?.img && (
          <div className=" my-4">
            <img src={task.img} alt="" className=" rounded-lg" />
          </div>
        )}

        <hr className=" border  border-zinc-600 border-opacity-40 my-6" />

        <div className=" flex gap-6">
          <div className=" flex items-center gap-2 text-lg ">
            <div className="">
              <FaRegCommentDots />
            </div>
            <div>{task.comment.toString()}</div>
          </div>
          <div className=" flex items-center gap-2 text-lg ">
            <div className="">
              <AiOutlineLink />
            </div>
            <div>{task.links.toString()}</div>
          </div>
          <div className=" flex items-center text-lg gap-2">
            <div className="">
              <SlCalender />
            </div>
            <div>Due Tomorrow</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
