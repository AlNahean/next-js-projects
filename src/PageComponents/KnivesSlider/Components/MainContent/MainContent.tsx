import React, { useLayoutEffect, useState, useRef } from "react";
import { useKnivesSliderContext } from "../../KnivesSliderContext";
import { gsap } from "gsap";

let duration = 0.8;

type Props = {};

const MainContent = (props: Props) => {
  const el = useRef(null);
  const { renderdCards, animationAction } = useKnivesSliderContext();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({});

      let animArray0: string[] = [
        ".knifeImage-0, .top-image-0, .mid-img-0, .bottom-img-0, .marble-bottom-0 , .hero-texts-0",
      ];
      let animArray1: string[] = [
        ".knifeImage-1, .top-image-1, .mid-img-1, .bottom-img-1, .marble-bottom-1, .hero-texts-1",
      ];

      if (animationAction.current === "next") {
        //0 --> -
        //1 ==> +
        tl.fromTo(animArray0, { x: "-60vw" }, { x: 0, opacity: 1, duration });
        tl.fromTo(
          animArray1,
          { x: 0 },
          { x: "100vw", opacity: 0, duration },
          "0"
        );
      } else if (animationAction.current === "previous") {
        tl.fromTo(animArray0, { x: "100vw", opacity: 0 }, { x: 0, opacity: 1 });
        tl.fromTo(
          animArray1,
          { x: 0, opacity: 1 },
          { x: "-30vw", opacity: 0, duration },
          "0"
        );
      } else {
        //0 --> -
        //1 ==> +
        tl.fromTo(animArray0, { x: "-60vw" }, { x: 0, opacity: 1, duration });
        tl.fromTo(
          animArray1,
          { x: 0 },
          { x: "100vw", opacity: 0, duration },
          "0"
        );
      }
    }, el);
    return () => {
      ctx.revert();
    };
  }, [renderdCards]);

  return (
    <div className="   h-screen w-screen overflow-hidden" ref={el}>
      <div className=" flex flex-col lg:flex-row h-full w-100 center items-center">
        <div className=" h-[50vh] lg:h-[100vh] w-[100%] lg:w-[50%] center relative z-20 ">
          <div className=" h-[50vh] lg:h-[50vw] w-[50vh] lg:w-[50vw]   rotate-45  absolute translate-y-[-60%] lg:translate-y-[0%] lg:translate-x-[-50%] rounded-3xl scale-[1.4] order-2">
            <div className=" w-full h-full absolute translate-x-[160%]  marble-bottom-0 ">
              <img
                src="./knives-slider/marble4.jpg"
                alt=""
                className=" h-full w-full rounded-3xl"
              />
            </div>
            <div className=" w-full h-full  absolute marble-bottom-1">
              <img
                src="./knives-slider/marble4.jpg"
                alt=""
                className=" h-full w-full rounded-3xl a"
              />
            </div>
          </div>
          <div className="h-full w-full absolute flex flex-col lg:flex-row items-center  justify-center">
            <div className=" h-[50%] lg:h-full w-[100%] lg:w-[50%] flex lg:flex-col justify-evenly lg:justify-center items-center gap-6 px-[5vw] lg:py-[15vh] translate-y-[-20%] lg:translate-y-0 ">
              {/* Top */}
              <div className=" h-32 w-28 relative translate-y-[75%] lg:translate-y-[0%] translate-x-[0%] lg:translate-x-[100%] ">
                <img
                  className=" h-full  absolute top-image-0"
                  src={renderdCards && renderdCards[0].topImg}
                  alt=""
                />
                <img
                  className=" h-full absolute top-image-1"
                  src={renderdCards && renderdCards[1].topImg}
                  alt=""
                />
              </div>

              {/* Mid */}
              <div className=" relative center w-36  flex-1 ">
                <div className=" relative h-full  max-h-[20vh] lg:max-h-[45vh] w-full  center rotate-90 lg:rotate-0">
                  <img
                    className=" absolute  max-h-[30vh] lg:max-h-[45vh] mid-img-0"
                    src={renderdCards && renderdCards[0].midImg}
                    alt=""
                  />
                  <img
                    className=" absolute  max-h-[30vh] lg:max-h-[45vh] mid-img-1 "
                    src={renderdCards && renderdCards[1].midImg}
                    alt=""
                  />
                </div>
                {/* <div className=" center absolute center rotate-90 scale-75 lg:rotate-0"></div> */}
              </div>
              {/* Bottom */}
              <div className=" h-32 w-28 relative translate-y-[75%] lg:translate-y-[0%] translate-x-[0%] lg:translate-x-[100%]">
                <img
                  src={renderdCards && renderdCards[0].bottomImg}
                  alt=""
                  className="  h-full absolute bottom-img-0"
                />
                <img
                  src={renderdCards && renderdCards[1].bottomImg}
                  alt=""
                  className="  h-full absolute bottom-img-1"
                />
              </div>
            </div>
            {/* Knife */}
            <div className=" h-[50%] lg:h-full w-[100%] lg:w-[50%] center relative translate-y-[-25%] lg:translate-y-[0%] lg:translate-x-[-5%] scale-75 lg:scale-125 ">
              {renderdCards &&
                renderdCards.map((item, index) => {
                  return (
                    <div
                      className={` h-full w-full absolute knife-enclosure knifeImage-${index} `}
                      key={index}
                    >
                      <div className=" h-[15rem] w-[15rem] lg:h-[22rem] lg:w-[24rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                        <img
                          className="  h-full w-auto"
                          src="./knives-slider/woodboard.png"
                          alt=""
                        />
                      </div>

                      {/* Knife container */}
                      <div className=" h-[12rem] w-[20rem] lg:h-[22rem] lg:w-[24rem] center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                        <img
                          className={` absolute h-auto w-full `}
                          src={item.knifeImg}
                          alt=""
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className=" h-[50%] lg:h-full w-[100%] lg:w-[50%] flex-1  relative order-1 flex flex-col mb-[10vh] lg:mb-0 ">
          {renderdCards &&
            renderdCards.map((item, index) => {
              return (
                <div
                  className={`h-full text-slate-700 absolute px-20 flex flex-col justify-center lg:justify-center items-center lg:text-start lg:items-start text-center hero-texts-${index}`}
                  key={index}
                >
                  <h1 className=" text-5xl lg:text-6xl font-bold mb-5">
                    {item.name}
                  </h1>
                  <p className=" text-sm lg:text-base mb-5 max-w-[500px] font-semibold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsa consequuntur maxime eos, deleniti velit consequatur?
                    Exercitationem, ipsam?
                  </p>
                  <div>
                    <button
                      className=" rounded-lg bg-slate-700 text-white text-xl px-6 py-2
          "
                    >
                      Learn More
                    </button>
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
