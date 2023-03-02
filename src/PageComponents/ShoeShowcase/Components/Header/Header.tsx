import React from "react";
import { FaFacebookF } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { GiHamburgerMenu } from "react-icons/gi";

type Props = {};

const socialIcon = [
  {
    id: 1,
    icon: <FaFacebookF />,
  },
  {
    id: 1,
    icon: <AiFillInstagram />,
  },
  {
    id: 1,
    icon: <AiFillYoutube />,
  },
  {
    id: 1,
    icon: <AiFillTwitterCircle />,
  },
];

const Header = (props: Props) => {
  return (
    <div className=" header-wrapper h-[var(--ss-header-height)] px-4 ">
      <div className=" header-container flex items-center justify-between h-full">
        <h1 className=" text-4xl uppercase font-bold">Float</h1>
        <div className=" uppercase text-xl hidden md:block ">
          Product Slider
        </div>
        <div className="  gap-4  hidden lg:flex">
          {socialIcon.map((item) => {
            return (
              <button className=" center h-100 text-2xl">{item.icon}</button>
            );
          })}
        </div>
        <div className=" uppercase text-xl"> Cart (0)</div>
      </div>
    </div>
  );
};

export default Header;
