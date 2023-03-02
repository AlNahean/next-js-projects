import React, { useState, useLayoutEffect, useRef } from "react";

import { useHomeContext } from "./HomeContext";

import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent/MainContent";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type HomePropType = {};

export const Home = ({}: HomePropType) => {
  const homeContext = useHomeContext();

  let { test } = homeContext;

  const el = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el.current,
          pin: ".netflix-sidebar-holder",
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
      <h1 className=" w-100 bg-neutral-900 text-white min-h-screen" ref={el}>
        <div className=" flex  ">
          <div className=" hidden lg:block w-[var(--left-sidebar-width)]  min-h-screen border-neutral-700 ">
            <div className=" netflix-sidebar-holder">
              <Sidebar />
            </div>
          </div>
          <div className=" flex-1  ">
            <MainContent />
          </div>
        </div>
      </h1>
    </>
  );
};

export default Home;
