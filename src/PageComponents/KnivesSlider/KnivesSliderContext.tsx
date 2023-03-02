import React, {
  useContext,
  createContext,
  useLayoutEffect,
  useState,
  useRef,
} from "react";

const KnivesSlidesUlData = [
  {
    id: 1,
    name: "Chef's Knife",
    des: "",
    knifeImg: "./knives-slider/knife-1.png",
    topImg: "./knives-slider/tomatoes.png",
    midImg: "./knives-slider/veg.png",
    bottomImg: "./knives-slider/carrots.png",
  },
  {
    id: 2,
    name: "Bread Knife",
    des: "",
    knifeImg: "./knives-slider/bread-knife.png",
    topImg: "./knives-slider/wheat.png",
    midImg: "./knives-slider/bread.png",
    bottomImg: "./knives-slider/small-bread.png",
  },
  {
    id: 3,
    name: "Cleaver",
    des: "",
    knifeImg: "./knives-slider/cleaver.png",
    topImg: "./knives-slider/meat.png",
    midImg: "./knives-slider/onion.png",
    bottomImg: "./knives-slider/peppers.png",
  },
  {
    id: 4,
    name: "Boning Knife",
    des: "",
    knifeImg: "./knives-slider/boning-knife.png",
    topImg: "./knives-slider/fish.png",
    midImg: "./knives-slider/meat2.png",
    bottomImg: "./knives-slider/lemons.png",
  },
];

type knivesSliderContextType = {
  test: String | null;
  setTest: (value: string) => void;
  mainUlDataRef: React.MutableRefObject<any[] | undefined>;
  renderdCards: any[] | undefined;
  setRenderedCards: (value: any[]) => void;
  animationAction: React.MutableRefObject<string | null>;
  previousSlide: () => void;
  nextSlide: () => void;
};
type TestStateType = String;

type KnivesSliderContextProviderPropTypes = {
  children: React.ReactNode;
};

const KnivesSliderCoontext = React.createContext<knivesSliderContextType>(
  {} as knivesSliderContextType
);

const KnivesSliderContextProvider = ({
  children,
}: KnivesSliderContextProviderPropTypes) => {
  const [test, setTest] = useState<String>("Test Text Text");

  const mainUlDataRef = useRef<any[] | undefined>(KnivesSlidesUlData);
  const [renderdCards, setRenderedCards] = useState<any[] | undefined>(
    mainUlDataRef.current?.slice(1, 3)
  );
  const animationAction = useRef<string | null>(null);

  const previousSlide = () => {
    animationAction.current = "previous";
    if (mainUlDataRef.current) {
      mainUlDataRef.current.unshift(mainUlDataRef.current.pop());
    }

    setRenderedCards([mainUlDataRef.current![1], mainUlDataRef.current![2]]);
  };
  const nextSlide = () => {
    animationAction.current = "next";

    // console.log(mainContentContainer.current.children[0]);
    if (mainUlDataRef.current) {
      mainUlDataRef.current.push(mainUlDataRef.current.shift());
    }
    ``;
    setRenderedCards([mainUlDataRef.current![1], mainUlDataRef.current![0]]);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowRight":
        // code block
        nextSlide();
        break;
      case "ArrowLeft":
        previousSlide();

        break;
      default:
      // code block
    }
  };
  useLayoutEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <KnivesSliderCoontext.Provider
      value={{
        test,
        setTest,
        mainUlDataRef,
        renderdCards,
        setRenderedCards,
        animationAction,
        previousSlide,
        nextSlide,
      }}
    >
      {children}
    </KnivesSliderCoontext.Provider>
  );
};
const useKnivesSliderContext = () => {
  return useContext(KnivesSliderCoontext);
};
export { useKnivesSliderContext, KnivesSliderContextProvider };
