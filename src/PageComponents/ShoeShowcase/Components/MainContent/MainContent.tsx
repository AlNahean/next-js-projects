import { log } from "console";
import React, { useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";

import { FiArrowRight } from "react-icons/fi";

const mainUlData = [
  {
    id: 1,
    img: "./ShoeWebsite/shoe-2.png",
    title: "Shishido",
    rating: 4,
    price: "749",
  },
  {
    id: 2,
    img: "./ShoeWebsite/shoe-3.png",
    title: "Nakasone",
    rating: 4,
    price: "749",
  },
  {
    id: 3,
    img: "./ShoeWebsite/shoe-4.png",
    title: "Miyasato",
    rating: 4,
    price: "749",
  },
  {
    id: 4,
    img: "./ShoeWebsite/shoe-5.png",
    title: "Kitamura",
    rating: 4,
    price: "749",
  },
];
const animDuration = 0.6;
type Props = {};

const MainContent = (props: Props) => {
  const el = useRef(null);
  const currentState = useRef<string | null>(null);
  const [ctx] = useState(gsap.context(() => {}, el));
  const currentSlideNum = useRef(0);
  const [currentSlide, setCurrentSlide] = useState(
    mainUlData[currentSlideNum.current]
  );

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowRight":
        // code block
        console.log(e.key);
        ctx.removeRight();
        break;
      case "ArrowLeft":
        console.log(e.key);

        ctx.removeLeft();

        break;
      default:
      // code block
    }
  };

  const checkNum = (num: number) => {
    if (num > 3) {
      return 0;
    }
    if (num < 0) {
      return 3;
    }

    return num;
  };
  const nextSlide = () => {
    currentSlideNum.current = checkNum(currentSlideNum.current + 1);
    setCurrentSlide(mainUlData[currentSlideNum.current]);
    currentState.current = "next";
  };
  const previousSlide = () => {
    currentSlideNum.current = checkNum(currentSlideNum.current - 1);
    setCurrentSlide({ ...mainUlData[currentSlideNum.current] });

    currentState.current = "previous";
  };
  useLayoutEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // const ctx = gsap.context(() => {}, el);

    ctx.add("removeRight", () => {
      let tl = gsap.timeline({
        duration: animDuration,
        onComplete: () => {
          console.log("remove");
          nextSlide();
        },
      });
      tl.fromTo(
        ".hero-image, .hero-image-shadow",
        { x: 0 },
        { x: "100vw", duration: animDuration },
        "0"
      );
      tl.fromTo(
        ".hero-text",
        { x: 0 },
        { x: "-100vw", duration: animDuration },
        "0"
      );
      tl.fromTo(
        ".bottom-bar",
        { y: 0 },
        { y: "-100%", duration: animDuration },
        "0"
      );
    });
    ctx.add("removeLeft", () => {
      let tl = gsap.timeline({
        duration: animDuration,
        onComplete: () => {
          console.log("remove");
          previousSlide();
        },
      });
      tl.fromTo(
        ".hero-image, .hero-image-shadow",
        { x: 0 },
        { x: "-100vw", duration: animDuration },
        "0"
      );
      tl.fromTo(
        ".hero-text",
        { x: 0 },
        { x: "100vw", duration: animDuration },
        "0"
      );
      tl.fromTo(
        ".bottom-bar",
        { y: 0 },
        { y: "100%", duration: animDuration },
        "0"
      );
    });
    ctx.add("addRight", () => {
      let tl = gsap.timeline({
        // duration: 2,
        duration: animDuration,
      });
      tl.fromTo(
        ".hero-image, .hero-image-shadow",
        { x: "-100vw" },
        { x: 0, duration: animDuration },
        "0"
      );
      tl.fromTo(
        ".hero-text",
        { x: "100vw" },
        { x: 0, duration: animDuration },
        "0"
      );
      tl.fromTo(
        ".bottom-bar",
        { y: "100%" },
        { y: 0, duration: animDuration },
        "0"
      );
    });
    ctx.add("addLeft", () => {
      let tl = gsap.timeline({
        // duration: 2,
        duration: animDuration,
      });
      tl.fromTo(
        ".hero-image, .hero-image-shadow",
        { x: "100vw" },
        { x: 0, duration: animDuration },
        "0"
      );
      tl.fromTo(
        ".hero-text",
        { x: "-100vw", duration: animDuration },
        { x: 0 },
        "0"
      );
      tl.fromTo(
        ".bottom-bar",
        { y: "-100%" },
        { y: 0, duration: animDuration },
        "0"
      );
    });

    if (currentState.current === "next") {
      ctx.addRight();
    } else if (currentState.current === "previous") {
      ctx.addLeft();
    } else {
      ctx.addRight();
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      ctx.revert();
    };
  }, [currentSlide]);
  return (
    <div
      className=" ss-main-content-wrapper h-[var(--ss-main-content-height)] w-full "
      ref={el}
    >
      <div className=" h-full grid grid-cols-1 grid-rows-4 gap-3 py-10  overflow-hidden">
        <div className=" row-start-1 row-end-4 relative">
          {/* Shadow */}
          <div className=" absolute h-full w-full flex  items-end justify-center z-20 hero-image-shadow">
            <img
              src="./ShoeWebsite/shadow11.png"
              alt="..."
              className=" h-auto "
            />
          </div>
          {/* Show Image */}
          <div className=" absolute h-full w-full center  z-20 ">
            <img
              src={currentSlide.img}
              alt="..."
              className=" h-auto w-[100%] max-w-[550px] pb-[10vh] scale-[1] hero-image"
            />
          </div>
          {/* Show Name bottom*/}
          <div className=" absolute h-full w-full w-100 center z-30 hero-text">
            <h1 className=" uppercase sw-hero-text-size font-bold scale-[2] text-transparent text-stroke">
              {currentSlide.title}
            </h1>
          </div>
          {/* Show Name top*/}
          <div className=" absolute h-full w-full w-100 center z-10 hero-text">
            <h1 className=" uppercase  sw-hero-text-size font-bold scale-[2] text-white">
              {currentSlide.title}
            </h1>
          </div>
          {/* <div className=" absolute h-full w-full w-100 center">
            <h1 className=" uppercase text-8xl font-bold bg-white bg-clip-text text-transparent mix-blend-overlay ">
              Shishido
            </h1>
          </div> */}
          {/* <div className=" absolute h-full w-full w-100 center">
            <h1 className=" uppercase text-8xl font-bold   text-white opacity-30">
              Shishido
            </h1>
          </div> */}
        </div>
        <div className=" mx-auto  row-start-4 row-end-5 container px-4 overflow-hidden relative ">
          <div className=" h-full flex flex-col md:flex-row  justify-between md:items-end bottom-bar">
            <div>
              <h2 className=" text-5xl font-bold mb-4">
                ${currentSlide.price}
              </h2>
              <p className="  max-w-[600px] text-xl ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos, alias accusantium?
              </p>
            </div>
            <div className=" ">
              {" "}
              <button className=" w-fit text-4xl font-bold border-b-2 pb-4">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}

      <div
        className=" next-btn fixed z-50 top-[50%] right-4 text-8xl cursor-pointer"
        onClick={() => {
          ctx.removeRight();
        }}
      >
        <FiArrowRight />
      </div>
      <div
        className=" next-btn fixed z-50 top-[50%] left-4 rotate-180 text-8xl cursor-pointer"
        onClick={() => {
          ctx.removeLeft();
        }}
      >
        <FiArrowRight />
      </div>
    </div>
  );
};

export default MainContent;
