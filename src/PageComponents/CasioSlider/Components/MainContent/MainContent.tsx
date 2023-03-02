import React, { useState, useLayoutEffect, useRef } from "react";
import { useCasioSliderContext } from "../../CasioSliderContext";
import gsap from "gsap";

type Props = {};

let offset = "100vw";
let negOffset = "-100vw";
let duration = 2;
let scale = 0.2;

const MainContent = (props: Props) => {
  const el = useRef(null);
  const { renderdCards, animationAction } = useCasioSliderContext();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, el);

    let tl = gsap.timeline({});

    if (animationAction.current === "next") {
      // Watch
      // 0
      tl.fromTo(".watch-0", { x: offset, scale }, { x: 0, scale: 1 });
      // 1
      tl.fromTo(".watch-1", { x: 0, scale: 1 }, { x: negOffset, scale }, "0");

      // Mobile Bg
      // 0
      tl.fromTo(" .phone-bg-0", { x: "100%" }, { x: 0 }, "0");
      // 1
      tl.fromTo(
        ".phone-bg-1",
        { x: 0, scale: 1 },
        { x: "-100%", scale: 1 },
        "0"
      );

      // text
      // 0
      tl.fromTo(".title-text-0", { x: negOffset }, { x: 0 }, "0");
      // 1
      tl.fromTo(".title-text-1", { x: 0 }, { x: offset }, "0");
    } else if (animationAction.current === "previous") {
      // Watch
      // 0
      tl.fromTo(".watch-0", { x: negOffset, scale }, { x: 0, scale: 1 });
      // 1
      tl.fromTo(".watch-1", { x: 0, scale: 1 }, { x: offset, scale }, "0");

      // Mobile Bg
      // 0
      tl.fromTo(" .phone-bg-0", { x: "-100%" }, { x: 0 }, "0");
      // 1
      tl.fromTo(
        ".phone-bg-1",
        { x: 0, scale: 1 },
        { x: "100%", scale: 1 },
        "0"
      );

      // text
      // 0
      tl.fromTo(".title-text-0", { x: offset }, { x: 0 }, "0");
      // 1
      tl.fromTo(".title-text-1", { x: 0 }, { x: negOffset }, "0");
    } else {
      // Watch
      // 0
      tl.fromTo(".watch-0", { x: offset, scale }, { x: 0, scale: 1 });
      // 1
      tl.fromTo(".watch-1", { x: 0, scale: 1 }, { x: negOffset, scale }, "0");

      // Mobile Bg
      // 0
      tl.fromTo(" .phone-bg-0", { x: "100%" }, { x: 0 }, "0");
      // 1
      tl.fromTo(
        ".phone-bg-1",
        { x: 0, scale: 1 },
        { x: "-100%", scale: 1 },
        "0"
      );

      // text
      // 0
      tl.fromTo(".title-text-0", { x: negOffset }, { x: 0 }, "0");
      // 1
      tl.fromTo(".title-text-1", { x: 0 }, { x: offset }, "0");
    }

    return () => {
      ctx.revert();
    };
  }, [renderdCards]);
  return (
    <div
      className=" w-full h-full min-h-[100vh]  wrapper max-w-[100vw] max-h-[100vh] overflow-hidden"
      ref={el}
    >
      <div className=" h-[100vh] flex flex-col items-center justify-evenly pt-[5vh]">
        <div className=" flex flex-col m-9 text-center text-2xl font-semibold uppercase ">
          <div className=" mb-4 whitespace-nowrap ">
            {renderdCards && renderdCards[0].top}
          </div>
          <div>{renderdCards && renderdCards[0].bottom}</div>
        </div>
        <div className=" flex-1 w-full relative">
          {/*********************************************************************************************
           ******************************************Texts -1 -bg-********************************************************************************************
           *********************************************************************************************/}
          <div className=" absolute left-[50%] top-[16vh] translate-x-[-50%] translate-y-[-100%] scale-[1]   ">
            <h1
              className=" uppercase  font-bold scale-[1] cs-hero-text  title-text-0"
              style={{ color: renderdCards && renderdCards[0].mobileBg }}
            >
              {renderdCards && renderdCards[0].title}
            </h1>
          </div>
          <div className=" absolute left-[50%] top-[16vh] translate-x-[-50%] translate-y-[-100%] scale-[1]  ">
            <h1
              className=" uppercase  font-bold scale-[1] cs-hero-text   title-text-1"
              style={{ color: renderdCards && renderdCards[0].mobileBg }}
            >
              {renderdCards && renderdCards[1].title}
            </h1>
          </div>
          {/*********************************************************************************************
           ******************************************Stroke Text********************************************************************************************
           *********************************************************************************************/}
          <div className=" absolute left-[50%] top-[16vh] translate-x-[-50%] translate-y-[-100%]  z-40 scale-[1] ">
            <h1
              className=" uppercase  font-bold scale-[1] text-transparent cs-hero-text text-stroke title-text-0"
              style={{
                WebkitTextStrokeColor: renderdCards && renderdCards[0].mobileBg,
              }}
            >
              {renderdCards && renderdCards[0].title}
            </h1>
          </div>
          <div className=" absolute left-[50%] top-[16vh] translate-x-[-50%] translate-y-[-100%]  z-40 scale-[1] ">
            <h1
              className=" uppercase  font-bold scale-[1] text-transparent cs-hero-text text-stroke title-text-1"
              style={{
                WebkitTextStrokeColor: renderdCards && renderdCards[0].mobileBg,
              }}
            >
              {renderdCards && renderdCards[1].title}
            </h1>
          </div>
          {/*********************************************************************************************
           ******************************************Bg Phone ********************************************************************************************
           *********************************************************************************************/}
          <div className="absolute h-[60vh] w-[300px] max-w-[60vw]  left-[50%] translate-x-[-50%] rounded-3xl overflow-hidden border">
            <div
              className=" h-full w-full absolute phone-bg-0"
              style={{
                backgroundColor: renderdCards && renderdCards[0].mobileBg,
              }}
            ></div>
            <div
              className=" h-full w-full absolute phone-bg-1"
              style={{
                backgroundColor: renderdCards && renderdCards[1].mobileBg,
              }}
            ></div>
            {/* <div className=" h-full w-full bg-slate-400 absolute"></div> */}

            {/*********************************************************************************************
             ****************************************** mid Texts 1 ********************************************************************************************
             *********************************************************************************************/}
            <div className=" absolute left-[50%] top-[16vh] translate-x-[-50%] translate-y-[-100%] scale-[1]   ">
              <h1 className=" uppercase  font-bold scale-[1] text-zinc-800 bg-opacity-40 cs-hero-text whitespace-nowrap title-text-0">
                {renderdCards && renderdCards[0].title}
              </h1>
            </div>
            <div className=" absolute left-[50%] top-[16vh] translate-x-[-50%] translate-y-[-100%] scale-[1]  ">
              <h1 className=" uppercase  font-bold scale-[1]   text-zinc-800 cs-hero-text whitespace-nowrap title-text-1">
                {renderdCards && renderdCards[1].title}
              </h1>
            </div>
          </div>

          {/*********************************************************************************************
           ******************************************Watch ********************************************************************************************
           *********************************************************************************************/}
          <div className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  ">
            <img
              src={renderdCards && renderdCards[0].img}
              alt=""
              // className=" absolute "
              className="  h-[55vh] w-auto max-w-[200vw]  max-w-auto watch-0 "
            />
          </div>
          <div className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  ">
            <img
              src={renderdCards && renderdCards[1].img}
              alt=""
              // className=" absolute "
              className="  h-[55vh] w-auto max-w-[200vw]  max-w-auto watch-1 "
            />
          </div>
        </div>
        <div className=" h-[10vh] center">
          <div className=" border  px-5 py-2 text-2xl text-black bg-white font-semibold rounded-lg">
            See Full Collection
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
