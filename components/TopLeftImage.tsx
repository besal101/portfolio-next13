import Image from "next/image";
import * as React from "react";

interface ITopLeftImageProps {}

const TopLeftImage: React.FC<ITopLeftImageProps> = (props) => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
      <Image
        src="/top-left-img.png"
        width={400}
        height={400}
        alt="TOP LEFT IMAGE"
      />
    </div>
  );
};

export default TopLeftImage;
