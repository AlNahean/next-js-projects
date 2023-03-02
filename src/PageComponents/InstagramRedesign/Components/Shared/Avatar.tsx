import React from "react";

type Props = {
  size?: string | number;
  img?: string;
};

const Avatar = ({
  size = "7rem",
  img = "https://loremflickr.com/cache/resized/65535_52521302733_402fd40a70_z_640_480_nofilter.jpg",
}: Props) => {
  return (
    <div
      className="rounded-full aspect-square  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1  "
      style={{ height: size }}
    >
      <img src={img} className="rounded-full aspect-square h-[100%] " alt="" />
    </div>
  );
};

export default Avatar;
