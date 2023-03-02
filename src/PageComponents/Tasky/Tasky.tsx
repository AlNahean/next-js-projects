import React, { useState, useLayoutEffect, useRef } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainContext from "./Components/MainContent/MainContext";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
//
gsap.registerPlugin(ScrollTrigger);
type pageProps = {};

const Tasky = (props: pageProps) => {
  const el = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el.current,
          pin: ".tasky-sidebar-holder",
          // scrub: true,
          // start: "0%",
          // end: "100%",
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <>
      <div
        className=" tasky-page-wrapper max-w-[100vw] overflow-x-hidden text-white"
        ref={el}
      >
        <div className=" flex  min-h-[100vh] bg-zinc-900">
          <div className=" w-[var(--tsky-sidebar-width)] hidden lg:block">
            <div className=" tasky-sidebar-holder">
              <Sidebar />
            </div>
          </div>
          <div className=" flex-1">
            <MainContext />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasky;
