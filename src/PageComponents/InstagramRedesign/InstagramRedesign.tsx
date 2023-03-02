import React, { useState, useLayoutEffect, useRef } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainContent from "./Components/MainContent/MainContent";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
type pageProps = {};

gsap.registerPlugin(ScrollTrigger);

const InstagramRedesign = (props: pageProps) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const el = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el.current,
          pin: ".instagram-sidebar-holder",
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
    <div
      className=" instagram-redesign-page-wrapper max-w-[100vw] overflow-x-hidden"
      ref={el}
    >
      <div className=" flex  min-h-[100vh]  bg-zinc-800 ">
        <div className=" w-[400px] hidden lg:block h-[100%]">
          <div className=" instagram-sidebar-holder">
            <Sidebar />
          </div>
        </div>
        <div className=" flex-1 ">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default InstagramRedesign;
