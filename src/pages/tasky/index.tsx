import Tasky from "@/PageComponents/Tasky/Tasky";
import React from "react";
import { faker } from "@faker-js/faker";
import { TaskyPageContextProvider } from "@/PageComponents/Tasky/TaskyPageContext";
// import { getServerSideProps } from "../instagram-redesign";
import { GetServerSideProps } from "next";

export type TaskType = {
  id: Number;
  projectName: String;
  title: String;
  comment: Number;
  links: Number;
  date: String;
  img: string;
};

export type taskyListUlDataType = [
  {
    id: Number;
    title: String;
    count: Number;
    dataArray: TaskType[];

    // Array<Array<TaskType>>
  }
];
type Props = {
  taskyListUlData: taskyListUlDataType;
};

const createCardData = () => {
  let num = Math.floor(Math.random() * 100);

  let task: TaskType = {
    id: 1,
    projectName: faker.random.words().toString(),
    title: faker.random.words().toString(),
    comment: Math.floor(Math.random() * 100),
    links: Math.floor(Math.random() * 100),
    date: "Due Tomorrow",
    img:
      num % 3 === 0
        ? faker.image.abstract().toString() + "?" + num.toString()
        : "",
  };
  return task;
};
const taskyListUlData = [
  {
    id: 1,
    title: "Task",
    count: 8,
    dataArray: [
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
    ],
  },
  {
    id: 1,
    title: "In Work",
    count: 14,
    dataArray: [
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
    ],
  },
  {
    id: 1,
    title: "Review",
    count: 7,
    dataArray: [
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
      createCardData(),
    ],
  },
];

const TaskyPage = ({ taskyListUlData }: Props) => {
  return (
    <div>
      <TaskyPageContextProvider taskyListUlData={taskyListUlData}>
        <Tasky />
      </TaskyPageContextProvider>
    </div>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const { data } = await  // your fetch function here

  return {
    props: {
      taskyListUlData: taskyListUlData,
    },
  };
};
export default TaskyPage;
