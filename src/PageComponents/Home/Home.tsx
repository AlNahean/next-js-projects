import { useHomeContext } from "./HomeContext";

import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent/MainContent";

type HomePropType = {};

export const Home = ({}: HomePropType) => {
  const homeContext = useHomeContext();

  let { test } = homeContext;
  return (
    <>
      <h1 className=" w-100 bg-neutral-900 text-white min-h-screen">
        <div className=" flex  ">
          <div className=" hidden lg:block w-[var(--left-sidebar-width)]  min-h-screen border-neutral-700 ">
            <Sidebar />
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
