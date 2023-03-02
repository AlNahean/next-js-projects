import BottomSlider from "./BoottonSlider";
import OverlaySlide from "./OverlaySlide";
import TopNav from "./TopNav";
import TripleStackingAvatar from "./TripleStackingAvatar";
import { BsPlusLg } from "react-icons/bs";

import { faker } from "@faker-js/faker";

const PartiesUl = [
  {
    id: 1,
    title: " Hauntiing of hill house",
    sub: "Horror marathon",
    img: "https://flxt.tmsimg.com/assets/p15880871_b_h10_ab.jpg",
  },
  {
    id: 2,
    title: "Bladerunner 2049",
    sub: " Sci fi binge",
    img: "https://images2.alphacoders.com/870/thumb-1920-870886.jpg",
  },
  {
    id: 3,
    title: "Mosters Inc.",
    sub: "Dont make me grow up",
    img: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1618860737025-EUSHOHFPWM9XKPBAF5MQ/mons_ott.jpg",
  },
  {
    id: 4,
    title: "Friends ",
    sub: " We were on a break",
    img: "https://play-images-prod-ctf.tech.tvnz.co.nz/api/v1/web/image/3CLEzO37tocxCoSmzzcxwx/2733ae58689b3e59e477a86d2da48a36/friends-showtile.png.2733ae58689b3e59e477a86d2da48a36.jpg?width=1200&height=630",
  },
];
const ContinueWatchingUl = [
  {
    id: 1,
    title: " Hauntiing of hill house",
    sub: "Horror marathon",
    img: "https://flxt.tmsimg.com/assets/p15880871_b_h10_ab.jpg",
    progress: 45,
    xp: 10,
  },
  {
    id: 2,
    title: "Ratched",
    sub: "Phycological Drama",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7C2VBfyPxvzlHriAKjfamGLsKntV7kaqzAMW3jZ1_M1xsYl0vTb79IkokfK36pZeftU&usqp=CAU",
    progress: 65,
    xp: 10,
  },
  {
    id: 3,
    title: "El Camino",
    sub: "Crime Drama",
    img: "https://occ-0-988-58.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABWvAhU1muESX93xfBCtNhpHT0qLbPcz5ZMksmD-XRSQoF0MTRv5k2Oa3Gjgne2VlKALwXbKPhmgVr3yf7iiIr-To4ZaRtfX2BvIN.jpg?r=5ca",
    progress: 35,
    xp: 40,
  },
  {
    id: 4,
    title: "Stranger Things ",
    sub: " Horror Fiction",
    img: "https://variety.com/wp-content/uploads/2022/05/Stranger-Things-4-1.jpg?w=1000",
    progress: 25,
    xp: 10,
  },
];

const MainContent = () => {
  return (
    <div className="  w-100 px-3">
      <TopNav />
      <div className=" w-100 bg-slate-600 rounded-xl px-3 md:px-6 py-5 relative  ">
        <OverlaySlide />

        <div className=" relative">
          <div className=" flex items-center">
            <div>
              <button className=" px-4 py-2 rounded-lg  left-2 top-2 bg-slate-700 bg-opacity-60">
                48 xp
              </button>
            </div>
            <TripleStackingAvatar />

            <div>+5 friends watching</div>
          </div>

          <div className=" flex flex-col">
            <div className=" text-5xl mt-28 ml-0 mb-2 ">Bladerunner 2049</div>
            <div className=" text-sm">98% Match</div>
          </div>

          <div className=" flex flex-col md:flex-row md:justify-between md:items-center   ">
            <div className=" flex  content-center my-3">
              <button
                className="px-6 py-3 bg-[var(--my-color-primary)] rounded-lg mr-3 "
                type="button"
              >
                Watch
              </button>
              <button
                className="px-4 py-3  bg-white bg-opacity-30 rounded-lg mr-3"
                type="button"
              >
                <div className="center">
                  <BsPlusLg />
                </div>
              </button>
            </div>
            <div className=" center mt-2">
              <div className=" w-full  max-w-[300px]  h-[100px]">
                <BottomSlider />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-100">
        <div className=" flex">
          <h1 className=" text-3xl my-5">Parties</h1>
        </div>
        <div className=" columns-1 md:columns-2 lg:columns-3 xl:columns-4 w-100 gap-2">
          {PartiesUl.map((item, index) => {
            return (
              <div
                className=" cursor-pointer rounded-xl hover:bg-neutral-700 bg-neutral-800 px-3 py-6 mb-3 "
                key={index}
              >
                <div className=" flex justify-between ">
                  <div className="flex flex-wrap justify-between  w-full ">
                    <div className="w-2/12 md:w-2/12 ">
                      <img
                        src={item.img}
                        alt="..."
                        className="shadow rounded max-w-full h-auto align-middle border-none"
                      />
                    </div>
                    <TripleStackingAvatar />
                  </div>
                </div>
                <h3 className=" text-2xl mt-7 font-semibold"> {item.title}</h3>

                <p className=" text-sm text-zinc-500 ">{item.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" w-100">
        <div className=" flex">
          <h1 className=" text-3xl my-5">Continue Watching</h1>
        </div>
        <div className=" columns-1 md:columns-2 lg:columns-3 xl:columns-4 w-100 gap-2">
          {ContinueWatchingUl.map((item, index) => {
            return (
              <div
                className=" cursor-pointer rounded-xl  hover:bg-neutral-700 bg-neutral-800 overflow-hidden relative mb-7 "
                key={index}
              >
                <button className=" absolute px-3 py-1 rounded-lg  left-2 top-2 bg-slate-700 bg-opacity-60">
                  {item.xp} xp
                </button>
                <img
                  src={item.img}
                  alt="..."
                  className="shadow rounded w-full h-[150px] object-cover"
                />
                <div className=" w-100 bg-slate-500 h-1 mb-2 bg-opacity-50">
                  <div
                    className={` h-full  bg-red-800`}
                    style={{ width: item.progress + "%" }}
                  ></div>
                </div>
                {/* <div className=" flex justify-between">
                  <div className="flex flex-wrap justify-between">
                    <div className="w-1/12 md:w-2/12 ">
                      <img
                        src={faker.image.avatar()}
                        alt="..."
                        className="shadow rounded max-w-full h-auto align-middle border-none"
                      />
                    </div>
                    <TripleStackingAvatar />
                  </div>
                </div> */}
                <div className=" w-full px-3  ">
                  <h3 className=" text-2xl mt-4"> {item.title}</h3>

                  <p className=" text-sm text-zinc-500 mb-7">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
