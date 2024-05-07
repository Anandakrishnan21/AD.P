import React from "react";
import Image from "next/image";
import { MdOutlineArrowDownward } from "react-icons/md";

function Intro() {
  return (
    <div
      id="intro"
      className="intro"
    >
      <div className="w-full md:grid md:grid-cols-12 gap-x-4 gap-y-4">
        <div className="introDiv">
          <div className="w-full flex gap-2">
            <Image
              src="/images/img1.png"
              alt="img"
              width={100}
              height={100}
              className="w-32 h-10 object-cover"
            />
            <span className="text-xl md:text-4xl">
              I&apos;m a versatile full-stack developer proficient in both front-end
              and back-end technologies, delivering robust web solutions with
              efficiency and innovation.
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <p>Scroll Down</p>
            <MdOutlineArrowDownward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
