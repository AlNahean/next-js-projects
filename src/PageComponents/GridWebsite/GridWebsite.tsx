import { useRef, useState, useLayoutEffect } from "react";

import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContext/MainContent";
import { useGridWebsiteContext } from "./GridWebsiteContext";
import gsap from "gsap";
let animDuration = 0.6;
let my: any[] | undefined = [];
const mainUlData: any[] | undefined = [
  {
    id: 1,
    type: "Food and drink",
    title: "Happiness is warm bread, fresh baked from oven",
    isActive: true,
    img: "./Magazine/sl1-bg.jpg",
  },
  {
    id: 2,
    type: "Travel",
    title:
      "Fill your life with Adventures, not things. Have Stories to telll, not stuff to show",
    isActive: false,
    img: "./Magazine/sl2-bg.jpg",
  },
  {
    id: 3,
    type: "Lifestyle",
    title: "Style is not a display of wealth, but an expression of imagination",
    isActive: false,
    img: "./Magazine/sl3-bg.jpg",
  },
  {
    id: 4,
    type: "Fashion",
    title: "Fashion is the armour to survive the reality of everyday life",
    isActive: false,
    img: "./Magazine/sl4-bg.jpg",
  },
];

const GridWebsite = () => {
  const { renderdCards, animationAction } = useGridWebsiteContext();
  const el = useRef(null);
  // const mainUlDataRef = useRef(mainUlData);
  // const [renderdCards, setRenderedCards] = useState(
  //   mainUlDataRef.current?.slice(0, 2)
  // );
  // const animationAction = useRef<string | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (animationAction.current === "next") {
        gsap.fromTo(
          ".gw-bg-image-0",
          { x: "-100%", opacity: 1 },
          { x: 0, opacity: 1, duration: animDuration }
        );
        gsap.fromTo(
          ".gw-bg-image-1",
          { x: "0%", opacity: 1 },
          { x: "100%", opacity: 1, duration: animDuration }
        );
      } else if (animationAction.current === "previous") {
        gsap.fromTo(
          ".gw-bg-image-0",
          { x: "100%", opacity: 1 },
          { x: 0, opacity: 1, duration: animDuration }
        );
        gsap.fromTo(
          ".gw-bg-image-1",
          { x: "0%", opacity: 1 },
          { x: "-100%", opacity: 1, duration: animDuration }
        );
      }
    }, el);

    return () => {
      ctx.revert();
    };
  }, [renderdCards]);
  return (
    <div
      className=" grid-website-page-wrapper relative text-white overflow-hidden"
      ref={el}
    >
      {renderdCards?.map((item, index) => {
        return (
          <img
            key={index}
            className={`absolute h-[100vh] w-[100vw] object-cover object-center gw-bg-image gw-bg-image-${index}`}
            src={item.img}
            alt="..."
          />
        );
      })}
      <div className=" gw-bg-image-overlay"></div>
      <div className=" relative" style={{ zIndex: 10 }}>
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default GridWebsite;
