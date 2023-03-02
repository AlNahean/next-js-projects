import { FaFacebookF } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { GiHamburgerMenu } from "react-icons/gi";

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
const Header = () => {
  return (
    <div className=" grid-website-page-wrapper">
      <div className=" w-full grid grid-cols-1 md:grid-cols-3 h-[var(--gw-header-height)]">
        <div className=" border-b border-r-0 md:border-r border-[var(--gw-border-color)]  col-start-1 col-end-3 flex items-center justify-between px-4 md:px-24 h-full ">
          <h1 className=" text-4xl">
            <span className=" text-yellow-500">M</span>
            agazine
          </h1>
          <div className="hidden lg:flex gap-4 items-center h-100 ">
            {socialIcon.map((item) => {
              return (
                <button className=" center h-100 text-xl">{item.icon}</button>
              );
            })}
          </div>
          <div className=" md:hidden">
            <button className=" center h-100 text-4xl">
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
        <div className="border-b  border-[var(--gw-border-color)] col-span-1 hidden md:flex items-center justify-between px-24 h-full">
          <div className="hidden xl:block uppercase ">
            Featured Content Slider
          </div>
          <button className=" center h-100 text-4xl">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
