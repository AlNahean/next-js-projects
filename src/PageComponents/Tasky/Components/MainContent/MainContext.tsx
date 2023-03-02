import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ProjectGrids from "../ProjectGrids/ProjectGrids";
type Props = {};

const MainContext = (props: Props) => {
  return (
    <div>
      <Header />
      <Hero />
      <ProjectGrids />
    </div>
  );
};

export default MainContext;
