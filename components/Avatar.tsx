import React from "react";
import Image from "next/image";

interface IAvatarProps {}

const Avatar: React.FunctionComponent<IAvatarProps> = (props) => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src="/bishal.png"
        width={737}
        height={678}
        alt="Avatar"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
