import InstagramRedesign from "@/PageComponents/InstagramRedesign/InstagramRedesign";
import { InstagramRedesignContextProvider } from "@/PageComponents/InstagramRedesign/InstagramRedesignContext";
import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { faker } from "@faker-js/faker";

export type PostsPropType = [
  {
    name: string;
    comments: Number;
    likes: Number;
    avatar: string;
    post: string;
  }
];

type Props = {
  Stories: [{ img: string }];
  Posts: PostsPropType;
};

const InstagramRedesignPage = (props: Props) => {
  let { Stories, Posts } = props;
  return (
    <div>
      {/* <ProSidebarProvider></ProSidebarProvider> */}
      <InstagramRedesignContextProvider Stories={Stories} Posts={Posts}>
        <InstagramRedesign />
      </InstagramRedesignContextProvider>
    </div>
  );
};
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const { data } = await  // your fetch function here
  let Stories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
    let img = faker.image.avatar();

    return {
      img,
    };
  });
  let Posts = [0, 1, 2, 3, 4, 5, 6].map((item, index) => {
    let post = faker.image.city();
    return {
      name: faker.name.fullName(),
      comments: faker.datatype.number({ max: 100 }),
      likes: faker.datatype.number({ max: 100 }),
      avatar: faker.image.avatar(),
      post,
    };
  });

  return {
    props: {
      Stories,
      Posts,
    },
  };
};
export default InstagramRedesignPage;
