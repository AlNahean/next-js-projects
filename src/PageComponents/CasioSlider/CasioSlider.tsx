import React from "react";
import MainContent from "./Components/MainContent/MainContent";

import { AiOutlineMenu } from "react-icons/ai";

import { GrFormNext } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useCasioSliderContext } from "./CasioSliderContext";

type pageProps = {};

const CasioSlider = (props: pageProps) => {
  const { nextSlide, previousSlide } = useCasioSliderContext();
  return (
    <div className=" max-h-[100vh] max-w-[100vw] overflow-hidden bg-zinc-800 text-white ">
      <div className=" header fixed top-0 w-full max-[100vw] h-[var(--cs-header-height)] ">
        <div className=" absolute h-full w-full center text-2xl font-semibold hidden lg:flex capitalize">
          Pick your own casio
        </div>
        <div className=" h-full w-full px-4 flex justify-between items-center ">
          <div className=" uppercase text-4xl font-bold">Casio</div>
          <button className="  text-3xl center">
            <AiOutlineMenu />
          </button>
        </div>
      </div>
      <MainContent />

      <div
        className=" fixed top-[50vh] right-1 translate-y-[-50%] text-white text-8xl"
        onClick={() => {
          nextSlide();
        }}
      >
        <MdOutlineNavigateNext />
      </div>
      <div
        className=" fixed top-[50vh] left-1 translate-y-[-50%]  rotate-180 text-white text-8xl"
        onClick={() => {
          previousSlide();
        }}
      >
        <MdOutlineNavigateNext />
      </div>
    </div>
  );
};

export default CasioSlider;
