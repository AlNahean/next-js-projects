import React, { useContext, createContext, useState } from "react";
import { taskyListUlDataType } from "@/pages/tasky";

type TaskyPageContextType = {
  test: string | null;
  setTest: (value: string) => void;
  taskyListUlData: taskyListUlDataType;
};
type TaskyPageContextProviderPropTypes = {
  children: React.ReactNode;
  taskyListUlData: taskyListUlDataType;
};
const TaskyPageContext = React.createContext<TaskyPageContextType>(
  {} as TaskyPageContextType
);

const TaskyPageContextProvider = ({
  children,
  taskyListUlData,
}: TaskyPageContextProviderPropTypes) => {
  const [test, setTest] = useState<string>("Test");
  return (
    <TaskyPageContext.Provider value={{ test, setTest, taskyListUlData }}>
      {children}
    </TaskyPageContext.Provider>
  );
};

const useTaskyPageContext = () => {
  return useContext(TaskyPageContext);
};

export { TaskyPageContextProvider, useTaskyPageContext };
