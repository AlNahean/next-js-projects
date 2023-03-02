import React, { useContext, createContext, useState, useRef } from "react";

let my: any[] | undefined = [];
const mainUlData: any = ([] = [
  {
    id: 1,
    type: "Food and drink",
    title: "Happiness is warm bread, fresh baked from oven",
    isActive: true,
    img: "./Magazine/sl1-bg.jpg",
  },
  {
    id: 2,
    type: "Travel",
    title:
      "Fill your life with Adventures, not things. Have Stories to telll, not stuff to show",
    isActive: false,
    img: "./Magazine/sl2-bg.jpg",
  },
  {
    id: 3,
    type: "Lifestyle",
    title: "Style is not a display of wealth, but an expression of imagination",
    isActive: false,
    img: "./Magazine/sl3-bg.jpg",
  },
  {
    id: 4,
    type: "Fashion",
    title: "Fashion is the armour to survive the reality of everyday life",
    isActive: false,
    img: "./Magazine/sl4-bg.jpg",
  },
]);

type gridWebsiteContextType = {
  test: string | null;
  setTest: (value: string) => void;
  mainUlDataRef: React.MutableRefObject<any[] | undefined>;
  renderdCards: any[] | undefined;
  setRenderedCards: (value: any[]) => void;
  animationAction: React.MutableRefObject<string | null>;
};
type GridWebsiteContextPropTypes = {
  children: React.ReactNode;
};
const GridWebsiteContext = React.createContext<gridWebsiteContextType>(
  {} as gridWebsiteContextType
);

const GridWebsiteContextProvider = ({
  children,
}: GridWebsiteContextPropTypes) => {
  const [test, setTest] = useState<string>("Test");

  const mainUlDataRef = useRef<any[] | undefined>(mainUlData);
  const [renderdCards, setRenderedCards] = useState<any[] | undefined>(
    mainUlDataRef.current?.slice(1, 3)
  );
  const animationAction = useRef<string | null>(null);
  return (
    <GridWebsiteContext.Provider
      value={{
        test,
        setTest,
        mainUlDataRef,
        renderdCards,
        setRenderedCards,
        animationAction,
      }}
    >
      {children}
    </GridWebsiteContext.Provider>
  );
};

const useGridWebsiteContext = () => {
  return useContext(GridWebsiteContext);
};

export { GridWebsiteContextProvider, useGridWebsiteContext };
