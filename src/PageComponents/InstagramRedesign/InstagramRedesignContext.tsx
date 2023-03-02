import React, { useContext, createContext, useState } from "react";
import { PostsPropType } from "@/pages/instagram-redesign";

type instagramRedesignContextType = {
  test: String | null;
  setTest: (value: string) => void;
  Stories: [{ img: string }];
  Posts: PostsPropType;
};
type TestStateType = String;

type InstagramRedesignContextProviderPropTypes = {
  children: React.ReactNode;
  Stories: [{ img: string }];
  Posts: PostsPropType;
};

const InstagramRedesignCoontext =
  React.createContext<instagramRedesignContextType>(
    {} as instagramRedesignContextType
  );

const InstagramRedesignContextProvider = ({
  children,
  Stories,
  Posts,
}: InstagramRedesignContextProviderPropTypes) => {
  const [test, setTest] = useState<String>("Test Text Text");
  return (
    <InstagramRedesignCoontext.Provider
      value={{ test, setTest, Stories, Posts }}
    >
      {children}
    </InstagramRedesignCoontext.Provider>
  );
};
const useInstagramRedesignContext = () => {
  return useContext(InstagramRedesignCoontext);
};
export { useInstagramRedesignContext, InstagramRedesignContextProvider };
