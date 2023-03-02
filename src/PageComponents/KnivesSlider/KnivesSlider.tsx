import React from "react";
import { useKnivesSliderContext } from "./KnivesSliderContext";
import MainContent from "./Components/MainContent/MainContent";
import { FiMenu } from "react-icons/fi";
type pageProps = {};

const KnivesSlider = (props: pageProps) => {
  const { test, previousSlide, nextSlide, renderdCards } =
    useKnivesSliderContext();
  return (
    <div className=" knives-slider-psge-wrapper max-w-screen overflow-hidden  text-slate-700 ">
      <MainContent />
      {/* Header */}
      <div className=" fixed top-0 z-50 w-full h-[70px] text-white">
        <div className=" px-6 h-full flex  justify-between items-center">
          <button>
            <img
              src="./knives-slider/logocc.png"
              alt=""
              className=" h-[30px] w-auto"
            />
          </button>
          <div className=" text-4xl center  lg: text-slate-700 ">
            <FiMenu />
          </div>
        </div>
      </div>

      <div className=" fixed bottom-4  w-full flex justify-between items-center z-50  ">
        <div className=" flex items-end  font-bold  ml-1 lg:ml-10 text-slate-700 lg:text-white">
          <div className=" text-3xl lg:text-6xl">
            0{renderdCards && renderdCards[0].id}/
          </div>
          <div className=" text-lg lg:text-3xl">04</div>
        </div>

        <div className=" flex font-semibold text-2xl mr-1 lg:mr-10 ">
          <button
            className=" border-r-2 border-slate-700  py-1 px-4"
            onClick={() => {
              previousSlide();
            }}
          >
            Previous
          </button>

          <button
            className=" py-1 px-4"
            onClick={() => {
              nextSlide();
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default KnivesSlider;
