import { faker } from "@faker-js/faker";

const TripleStackingAvatar = () => {
  return (
    <>
      <div className="flex justify-center -space-x-3 font-mono text-white text-sm font-bold leading-6  mx-5">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-20 dark:ring-slate-900">
          <img
            src={faker.image.avatar()}
            alt=""
            className=" h-100 w-100 rounded-full"
          />
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-10 dark:ring-slate-900">
          <img
            src={faker.image.avatar()}
            alt=""
            className=" h-100 w-100 rounded-full"
          />
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-0 dark:ring-slate-900">
          <img
            src={faker.image.avatar()}
            alt=""
            className=" h-100 w-100 rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default TripleStackingAvatar;
