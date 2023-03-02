import GridWebsite from "@/PageComponents/GridWebsite/GridWebsite";
import { GridWebsiteContextProvider } from "@/PageComponents/GridWebsite/GridWebsiteContext";
import React from "react";

const GridWebsitePage = () => {
  return (
    <div>
      <GridWebsiteContextProvider>
        <GridWebsite />
      </GridWebsiteContextProvider>
    </div>
  );
};

export default GridWebsitePage;
