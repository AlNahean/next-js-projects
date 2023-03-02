import { AiFillStar, AiTwotoneSetting } from "react-icons/ai";
import { MdOutlineExplore, MdOutlineLogout } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCalendarEventFill, BsFillPersonFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
const SidebarUlData = [
  {
    id: 1,
    title: "Menu",
    ul: [
      { id: 1, title: "Browse", icon: <MdOutlineExplore /> },
      { id: 2, title: "Watchlist", icon: <AiFillHeart /> },
      { id: 3, title: "Coming Soon", icon: <BsFillCalendarEventFill /> },
    ],
  },
  {
    id: 2,
    title: "Social",
    ul: [
      { id: 1, title: "Friends", icon: <BsFillPersonFill /> },
      { id: 2, title: "Parties", icon: <IoIosPeople /> },
    ],
  },
  {
    id: 3,
    title: "General",
    ul: [
      { id: 1, title: "Settings", icon: <AiTwotoneSetting /> },
      { id: 2, title: "Log out", icon: <MdOutlineLogout /> },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className=" w-full h-full border-r-2 border-[#fff1] ">
      <div className=" sidebar-hero h-[var(--header-height)] grid place-items-center">
        <h1 className="text-4xl font-normal leading-normal mt-0 mb-2 ">
          Netflix<span className=" text-[var(--my-color-primary)]">.</span>
        </h1>
      </div>

      {SidebarUlData.map((item, index) => {
        return (
          <div className=" sidebar-list-wrapper" key={index}>
            <div className="  px-10   py-3 ">
              <div className=" list-leading text-lg">{item.title}</div>
              {item.ul.map((single, idx) => {
                return (
                  <button
                    className=" w-full flex items-center gap-8 px-3 py-2 mt-2 rounded-lg hover:bg-neutral-800 text-xl"
                    key={idx}
                  >
                    <div className=" center"> {single.icon}</div>
                    <h1 className=" center">{single.title}</h1>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      <div className=" cursor-pointer sidebar-more-nfo rounded-lg hover:bg-neutral-700 bg-neutral-800 w-100 flex flex-col items-center mx-3 px-2 py-6 mt-32">
        <div className="flex flex-wrap justify-center">
          <div className="w-6 h-6 px-4 relative">
            <img
              src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
              alt="..."
              className="shadow rounded max-w-full h-auto align-middle border-none absolute inset-0 translate-y-[-100%] scale-[2]"
            />
          </div>
        </div>
        <div className=" text-xl">Popcorn Addict</div>
        <p className=" text-sm mb-5">4/6h viewing time</p>

        <button
          className=" px-6 py-2 bg-[var(--my-color-primary)] rounded-lg "
          type="button"
        >
          View Challanges
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
