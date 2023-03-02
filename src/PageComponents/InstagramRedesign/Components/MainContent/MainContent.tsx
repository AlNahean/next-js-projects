import React from "react";
import TopNav from "../TopNav/TopNav";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { HiBell } from "react-icons/hi";
import Avatar from "../Shared/Avatar";
import { useInstagramRedesignContext } from "../../InstagramRedesignContext";

import { v4 as uuidv4 } from "uuid";

type Props = {};

const MainContent = (props: Props) => {
  const { Stories, Posts } = useInstagramRedesignContext();
  return (
    <div className=" main-content-wrapper w-full px-4 text-white bg-zinc-800">
      <div className=" w-full ir-header  ">
        <TopNav />
      </div>

      <div className=" stories-wrapper w-full">
        <div className=" flex justify-between items-center my-2">
          <h3 className=" text-3xl">Stories</h3>
          <div className=" flex center gap-2">
            <div className=" text-2xl h-100 w-100 center">
              <MdOutlinePlayCircleOutline />
            </div>
            <h6>Watch All</h6>
          </div>
        </div>
        <div className=" w-full max-w-[100%] overflow-hidden flex flex-col">
          {/* <div className="  w-[120%]">a</div> */}
          <div className=" text-2xl flex w-full max-w-[calc(100vw_-_3rem)] lg:max-w-[var(--ir-story-width)]  overflow-hidden   ">
            {Stories.map((item, index) => {
              return (
                <div key={index} className=" p-4">
                  <Avatar img={item.img} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" stories-wrapper w-full mt-3">
        <div className=" flex justify-between items-center">
          <h3 className=" text-3xl">Feed</h3>
          <div className=" flex center gap-8">
            <h6 className=" border-b pb-2">Leatest</h6>
            <h6 className=" pb-2">Popular</h6>
          </div>
        </div>
        <div className=" columns-1 md:columns-2 xl:columns-3  gap-4 mt-4 ">
          {Posts.map((item, index) => {
            return (
              <div
                className=" w-full mb-6 bg-zinc-600  bg-opacity-80  hover:bg-opacity-50 px-3 py-4 rounded-lg"
                key={index}
              >
                <div className=" flex flex-col">
                  <img
                    src={`${item.post}?random=${(
                      Math.random() * 1000
                    ).toString()}}`}
                    alt=""
                    className=" w-[100%] h-[30rem] object-cover object-center rounded-xl"
                  />
                  <div className=" flex justify-between mt-3">
                    <div className=" flex items-center">
                      <img
                        src={item.avatar}
                        alt=""
                        className=" w-[2.5rem] h-[2.5rem] rounded-full"
                      />
                      <h6 className=" ml-2">{item.name} </h6>
                    </div>

                    <div className=" flex gap-2 center ">
                      <div className=" flex center">
                        <button className=" text-2xl h-100 2-100 center">
                          <HiBell />
                        </button>
                        <h5>{item.likes.toString()}</h5>
                      </div>
                      <div className=" flex center">
                        <button className=" text-2xl h-100 2-100 center">
                          <HiBell />
                        </button>
                        <h5>{item.comments.toString()}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
