import KnivesSlider from "@/PageComponents/KnivesSlider/KnivesSlider";
import { KnivesSliderContextProvider } from "@/PageComponents/KnivesSlider/KnivesSliderContext";
import * as React from "react";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div>
      <KnivesSliderContextProvider>
        <KnivesSlider />
      </KnivesSliderContextProvider>
    </div>
  );
}
