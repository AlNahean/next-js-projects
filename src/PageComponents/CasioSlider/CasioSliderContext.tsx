import React, {
  useContext,
  createContext,
  useLayoutEffect,
  useState,
  useRef,
} from "react";

const mainDataUl = [
  {
    id: 1,
    title: "Edifice",
    top: "Edifice Collection",
    bottom: "エディフィス コレクション",
    img: "./casio-slide/watch-1.png",
    // mobileBg: "#010101",
    mobileBg: "white",
  },
  {
    id: 2,
    title: "G-SHOCK",
    top: "G-SHOCK Collection",
    bottom: "ジーショックコレクション",
    img: "./casio-slide/watch-2.png",
    mobileBg: "#fefefe",
  },
  {
    id: 3,
    title: "BABY-G",
    top: "Baby-G Collection Collection",
    bottom: "ベビーコレクション",
    img: "./casio-slide/watch-3.png",
    mobileBg: "#4db0e0",
  },
  {
    id: 4,
    title: "PRO-TRk",
    top: "Pro-Trek Collection",
    bottom: "プロトレック コレクション",
    img: "./casio-slide/watch-4.png",
    mobileBg: "#95a5cb",
  },
];

type casioSliderContextType = {
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

type CasioSliderContextProviderPropTypes = {
  children: React.ReactNode;
};

const CasioSliderCoontext = React.createContext<casioSliderContextType>(
  {} as casioSliderContextType
);

const CasioSliderContextProvider = ({
  children,
}: CasioSliderContextProviderPropTypes) => {
  const [test, setTest] = useState<String>("Test Text Text");

  const mainUlDataRef = useRef<any[] | undefined>(mainDataUl);
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
    <CasioSliderCoontext.Provider
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
    </CasioSliderCoontext.Provider>
  );
};
const useCasioSliderContext = () => {
  return useContext(CasioSliderCoontext);
};
export { useCasioSliderContext, CasioSliderContextProvider };
