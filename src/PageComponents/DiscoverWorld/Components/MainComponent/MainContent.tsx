import React from "react";

import { AiFillHeart, AiFillStar, AiOutlinePause } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Header from "../Header/Header";

const dwHeroUl = [
  {
    id: 1,
    img: "./discover-world/1675030267_beolin-club-p-priroda-vektornii-risunok-instagram-5.jpg",
    title: "Moonlight Light",
    location: "Canada",
    rating: "4.6",
  },
  {
    id: 2,
    img: "./discover-world/desert-sunrise.png",
    title: "Sahara Desert",
    location: "Africa",
    rating: "4.9",
  },
  {
    id: 3,
    img: "./discover-world/night-forest-with-camp-fire-river-and-mountains-free-vector.jpg",
    title: "Night Camping",
    location: "New York",
    rating: "4.8",
  },
];
const featuredTourImg = [
  {
    id: 1,
    img: "./discover-world/1675030318_beolin-club-p-priroda-vektornii-risunok-instagram-22.png",
  },
  {
    id: 1,
    img: "./discover-world/1675030344_beolin-club-p-priroda-vektornii-risunok-instagram-58.jpg",
  },
  {
    id: 1,
    img: "./discover-world/1675030348_beolin-club-p-priroda-vektornii-risunok-instagram-19.jpg",
  },
  {
    id: 1,
    img: "./discover-world/1675030371_beolin-club-p-priroda-vektornii-risunok-instagram-71.jpg",
  },
];
const dwPlaceListUl = [
  {
    id: 1,
    img: "./discover-world/1675030271_beolin-club-p-priroda-vektornii-risunok-instagram-4.jpg",
    title: "Nature Lake",
    location: "Afganistan",
    rating: "4.6",
  },
  {
    id: 2,
    img: "./discover-world/camels-and-desert-19-mahnoor-shah.jpg",
    title: "Camel Ride",
    location: "Africa",
    rating: "4.9",
  },
  {
    id: 3,
    img: "./discover-world/1675030298_beolin-club-p-priroda-vektornii-risunok-instagram-57.jpg",
    title: "Mid Forest",
    location: "Brazil",
    rating: "4.8",
  },
];

type Props = {};
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var d = new Date();

let getweekDay = (num: number) => {
  let dayName = days[(d.getDay() + num) % 7];

  // console.log(d.);

  return dayName;
};

const MainContent = (props: Props) => {
  return (
    <div className=" main-content-wrapper ">
      <div className=" h-[var(--dw-header-height)] w-full header-wrapper">
        <Header />
      </div>

      <div className="  bg-slate-900 xl:grid grid-cols-12 ">
        {/* Part 1 */}
        <div className=" col-span-8 px-4">
          <div className=" w-full  wrapper">
            <div>
              <h1 className=" text-4xl font-semibold my-5">Discover World</h1>
            </div>
            <div className=" flex gap-10 my-3 py-2 ">
              <button className=" text-sm">Recomemned </button>
              <button className=" text-sm">Popular Places </button>
              <button className=" text-sm">Tops </button>
            </div>
          </div>
          <div className=" md:columns-2 lg:columns-3xs gap-7">
            {dwHeroUl.map((item, index) => {
              return (
                <div className=" mb-4" key={index}>
                  <div className="  w-full h-[37vh] rounded-3xl  relative">
                    <img
                      src={item.img}
                      alt=""
                      className=" w-full h-full rounded-3xl"
                    />

                    <button className=" absolute top-3 right-3 text-2xl p-3 bg-slate-300  bg-opacity-60 rounded-full center">
                      <AiFillHeart />
                    </button>
                  </div>
                  <h1 className=" text-xl mt-4">{item.title}</h1>
                  <div className=" flex justify-between mt-1">
                    <div className=" flex">
                      <button className="  text-base mr-2 center">
                        <GoLocation />
                      </button>
                      <h3>{item.location}</h3>
                    </div>
                    <div className=" flex">
                      <div className="  text-base mr-2 center">
                        <AiFillStar />
                      </div>
                      <h3>4.7</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className=" ed-wrapper">
            <h1 className=" text-3xl mb-4 mt-2">Event dates</h1>
            <div className=" flex flex-wrap gap-8 mb-4">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                return (
                  <button
                    className=" w-full flex-1 bg-slate-800  h-[12vh] p-6 flex flex-col items-center justify-center gap-4 rounded-3xl"
                    style={{ backgroundColor: index === 3 ? "#ea580c" : "" }}
                  >
                    <div>{getweekDay(index)}</div>
                    {/* working */}
                    <div className=" font-bold text-xl">{index + 10}</div>
                  </button>
                );
              })}
            </div>
            <div className="grid w-full grid-cols-6 md:grid-cols-10 gap-4 mb-6">
              <div className=" col-span-6 w-full  bg-slate-800 rounded-3xl flex p-4 justify-between  items-center">
                <div className=" flex">
                  <div className=" aspect-square h-24 ">
                    <img
                      className=" w-full h-full object-cover object-center rounded-3xl"
                      src="./discover-world/1675030339_beolin-club-p-priroda-vektornii-risunok-instagram-21.jpg"
                    />
                  </div>
                  <div className=" flex flex-col justify-center ml-4 ">
                    <h6>Netherlands travel tour</h6>

                    <div className=" flex items-center mt-2">
                      <button className=" text-2xl  mr-2  center">
                        <AiFillStar />
                      </button>

                      <p>4.7</p>
                    </div>
                  </div>
                </div>

                <div>
                  <button className=" text-2xl  rounded-lg center px-4 py-6  bg-orange-500 ">
                    <AiOutlinePause />
                  </button>
                </div>
              </div>
              <div className=" col-span-3 md:col-span-2 w-full ">
                <div className=" w-auto  h-full ">
                  <img
                    className=" w-full h-full object-cover object-center rounded-3xl"
                    src="./discover-world/1675030345_beolin-club-p-priroda-vektornii-risunok-instagram-68.png"
                  />
                </div>
              </div>
              <div className=" col-span-3 md:col-span-2 w-full ">
                <div className=" w-auto  h-full ">
                  <img
                    className=" w-full h-full object-cover object-center rounded-3xl"
                    src="./discover-world/1675030355_beolin-club-p-priroda-vektornii-risunok-instagram-15.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2 */}

        <div className=" col-span-4 wrapper px-4">
          <div className=" mt-6">
            <div className=" h-[33vh] w-full bg-pink-500 rounded-3xl relative overflow-hidden">
              <img
                className=" h-full w-full object-cover object-center absolute"
                src="./discover-world/view-4872670_960_720.jpg"
              />
              <div className=" absolute bottom-3 w-full   ">
                <div className=" flex justify-between gap-4 mx-4 rounded-3xl px-4 py-4 bg-slate-200 bg-opacity-40">
                  {featuredTourImg.map((item, index) => {
                    return (
                      <button className=" h-14  flex-1" key={index}>
                        <img
                          className=" w-full h-full object-cover object-center rounded-3xl"
                          src={item.img}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              <button className=" absolute top-3 right-3 text-2xl p-3 bg-slate-300  bg-opacity-60 rounded-full center">
                <AiFillHeart />
              </button>
            </div>
            <div className=" mb-4 mt-4">
              <h1 className=" text-3xl mb-2">Brazil Forest</h1>
              <p className=" text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                rem cum ipsum illo dignissimos dicta quasi, asperiores excepturi
                quidem aut culpa, saepe tempora recusandae! Enim, incidunt
                dolore?
              </p>
            </div>

            <div className=" flex justify-between items-center mb-5 mt-8">
              <div>
                <p className=" text-sm font-semibold">preperation</p>
                <h1 className=" text-3xl font-bold">$1500</h1>
              </div>
              {/* <div className=" h-full bg-red-800 center"> */}
              <button className=" bg-slate-800 px-6 py-3 rounded-3xl font-semibold">
                Book Travel
              </button>
              {/* </div> */}
            </div>
          </div>

          <div className="  wrapper mt-8">
            {dwPlaceListUl.map((item, index) => {
              return (
                <div className=" flex justify-between items-center mb-5">
                  <div className=" flex  ">
                    <div className=" aspect-video h-20">
                      <img
                        className=" w-full h-full object-cover object-center rounded-3xl"
                        // 1675030271_beolin-club-p-priroda-vektornii-risunok-instagram-4.jpg
                        src={item.img}
                      />
                    </div>
                    <div className=" flex flex-col justify-center ml-4">
                      <div className=" flex">
                        <h3>{item.title}</h3>
                      </div>
                      <div className=" flex items-center">
                        <div className=" mr-3 text-base  center">
                          <AiFillHeart />
                        </div>
                        <p>{item.location}</p>
                      </div>
                    </div>
                  </div>
                  <button className="  text-2xl p-3  center">
                    <AiFillHeart />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

let a = 20;
let b = 20;
