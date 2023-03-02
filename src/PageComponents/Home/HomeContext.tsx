import React, { useContext, createContext, useState } from "react";

// type globalContextType = {
//   test: String | null;
//   setTest: (value: string) => void;
// };
// type TestStateType = String;

// type GlobalContextProviderPropTypes = {
//   children: React.ReactNode;
// };

// const GlobalCoontext = React.createContext<globalContextType>(
//   {} as globalContextType
// );

// const GlobalContextProvider = ({
//   children,
// }: GlobalContextProviderPropTypes) => {
//   const [test, setTest] = useState<String>("Test Text Text");
//   return (
//     <GlobalCoontext.Provider value={{ test, setTest }}>
//       {children}
//     </GlobalCoontext.Provider>
//   );
// };
// const useGlobalContext = () => {
//   return useContext(GlobalCoontext);
// };
// export { useGlobalContext, GlobalContextProvider };

type homeContextType = {
  test: string | null;
  setTest: (value: string) => void;
};
type HomeContextProviderPropTypes = {
  children: React.ReactNode;
};
const HomeContext = React.createContext<homeContextType>({} as homeContextType);

const HomeContextProvider = ({ children }: HomeContextProviderPropTypes) => {
  const [test, setTest] = useState<string>("Test");
  return (
    <HomeContext.Provider value={{ test, setTest }}>
      {children}
    </HomeContext.Provider>
  );
};

const useHomeContext = () => {
  return useContext(HomeContext);
};

export { HomeContextProvider, useHomeContext };
