import React, { useLayoutEffect, useState, useRef } from "react";
import { useGridWebsiteContext } from "../../GridWebsiteContext";

import gsap from "gsap";

let my: any[] | undefined = [];
// const mainUlData: any[] | undefined = [
//   {
//     id: 1,
//     type: "Food and drink",
//     title: "Happiness is warm bread, fresh baked from oven",
//     isActive: true,
//   },
//   {
//     id: 2,
//     type: "Travel",
//     title:
//       "Fill your life with Adventures, not things. Have Stories to telll, not stuff to show",
//     isActive: false,
//   },
//   {
//     id: 3,
//     type: "Lifestyle",
//     title: "Style is not a display of wealth, but an expression of imagination",
//     isActive: false,
//   },
//   {
//     id: 4,
//     type: "Fashion",
//     title: "Fashion is the armour to survive the reality of everyday life",
//     isActive: false,
//   },
// ];
let animDuration = 0.6;
type Props = {};

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export default function MainContent({}: Props) {
  const el = useRef(null);
  // const mainUlDataRef = useRef(mainUlData);
  // const [renderdCards, setRenderedCards] = useState(
  //   mainUlDataRef.current?.slice(0, 2)
  // );
  // const animationAction = useRef<string | null>(null);

  const { mainUlDataRef, renderdCards, setRenderedCards, animationAction } =
    useGridWebsiteContext();

  const previousSlide = () => {
    animationAction.current = "previous";
    if (mainUlDataRef.current) {
      mainUlDataRef.current.unshift(mainUlDataRef.current.pop());
    }

    // let cachedArray: any[] | undefined = mainUlDataRef.current?.slice(0, 2);

    // console.log(cachedArray[0].index, cachedArray[1].index);
    // @ts-ignore
    // setRenderedCards(cachedArray?.slice(0, 2));
    setRenderedCards([mainUlDataRef.current![1], mainUlDataRef.current![2]]);
  };
  const nextSlide = () => {
    animationAction.current = "next";

    // console.log(mainContentContainer.current.children[0]);
    if (mainUlDataRef.current) {
      mainUlDataRef.current.push(mainUlDataRef.current.shift());
    }
    let cachedArray = mainUlDataRef.current?.slice(1, 3);

    // console.log(cachedArray[0].index, cachedArray[1].index);
    console.log(mainUlDataRef.current![0]);
    // console.log([mainUlDataRef.current[1], mainUlDataRef[0]]);
    // @ts-ignore
    // setRenderedCards(cachedArray?.slice(0, 2));
    setRenderedCards([mainUlDataRef.current![1], mainUlDataRef.current![0]]);

    // finalSlide =  mainUlDataRef.current.pop()
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (animationAction.current === "next") {
        gsap.fromTo(
          ".nav-btn",
          {
            scale: 0.2,
          },
          { scale: 1, duration: animDuration }
        );
        // aaaa
        gsap.fromTo(
          ".gw-item-type-0",
          { x: "-100%", opacity: 0 },
          { x: 0, opacity: 1, duration: animDuration }
        );
        gsap.fromTo(
          ".gw-item-type-1",
          { x: "-100%", opacity: 1 },
          { x: 1, opacity: 0, duration: animDuration }
        );
        // aaaa
        gsap.fromTo(
          ".target-text-0",
          { x: "-100%", opacity: 0 },
          { x: 0, opacity: 1, duration: animDuration }
        );
        gsap.fromTo(
          ".target-text-1",
          { x: "-100%", opacity: 1 },
          { x: 1, opacity: 0, duration: animDuration }
        );
      } else if (animationAction.current === "previous") {
        gsap.fromTo(
          ".target-text-0",
          { x: "100%", opacity: 0 },
          { x: 0, opacity: 1, duration: animDuration }
        );
        gsap.fromTo(
          ".target-text-1",
          { x: "-100%", opacity: 1 },
          { x: "-200%", opacity: 0, duration: animDuration }
        );
        gsap.fromTo(
          ".gw-item-type-0",
          { x: "100%", opacity: 0 },
          { x: 0, opacity: 1, duration: animDuration }
        );
        gsap.fromTo(
          ".gw-item-type-1",
          { x: "-100%", opacity: 1 },
          { x: "-200", opacity: 0, duration: animDuration }
        );
      }
    }, el);

    return () => {
      ctx.revert();
    };
  }, [renderdCards]);
  return (
    <div
      className="main-content-wrapper h-[var(--gw-main-content-height)] "
      ref={el}
    >
      <div className=" grid  grid-cols-1 lg:grid-cols-3 grid-rows-5 lg:grid-rows-1 h-full ">
        <div className=" lg:col-start-1 lg:col-end-3 row-start-1 row-end-3 flex flex-col justify-center lg:justify-end px-12 py-5 md:py-20 border-b lg:border-b-0 lg:border-r border-[var(--gw-border-color)]">
          <div className=" flex flex-col lg:flex-row justify-between">
            <div className=" relative overflow-hidden">
              <div className=" gw-main-text">
                <div>
                  {renderdCards?.map((item, index) => {
                    return (
                      <span
                        className={`text-xs font-semibold inline-block py-1 px-2 my-6 rounded text-orange-600 bg-orange-200 uppercase last:mr-0 mr-1 gw-item-type-${index} `}
                      >
                        {item.type}
                      </span>
                    );
                  })}
                </div>
                <div className=" flex text-4xl font-semibold">
                  {renderdCards?.map((item, index) => {
                    return (
                      <h1
                        className={` min-w-[450px] target-text-${index}`}
                        key={index}
                      >
                        {item?.title}
                      </h1>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className=" center text-7xl gap-6 text-orange-400 mt-2">
              <div
                className=" nav-btn"
                onClick={() => {
                  previousSlide();
                }}
              >
                <BsFillArrowLeftCircleFill />
              </div>
              <div
                className=" nav-btn"
                onClick={() => {
                  nextSlide();
                }}
              >
                <BsFillArrowRightCircleFill />
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:col-start-3 lg:col-span-1 row-start-3 row-end-6 lg:row-start-1 lg:row-end-2 max-h-100 h-full px-4  py-4 blur-bg flex flex-col">
          <div className=" flex-1"></div>
          <div className=" flex flex-col  overflow-y-auto max-h-100  h-100 mt-auto scrollbar-hide">
            {mainUlDataRef.current?.map((item, index) => {
              return (
                <div className={`order-${item.id}`} style={{ order: item.id }}>
                  <div
                    className={` flex flex-col my-4 gw-side-text px-3 ${
                      index === 1 && "border-l-2"
                    } `}
                  >
                    <h3 className="  uppercase mb-1 text-zinc-400 font-semibold">
                      {item.type}
                    </h3>
                    <p className=" text-lg font-semibold">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
