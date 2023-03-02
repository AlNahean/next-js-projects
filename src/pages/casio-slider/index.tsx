import CasioSlider from "@/PageComponents/CasioSlider/CasioSlider";
import { CasioSliderContextProvider } from "@/PageComponents/CasioSlider/CasioSliderContext";
import React from "react";

type Props = {};

const CasioSliderPage = (props: Props) => {
  return (
    <div>
      <CasioSliderContextProvider>
        <CasioSlider />
      </CasioSliderContextProvider>
    </div>
  );
};

export default CasioSliderPage;
