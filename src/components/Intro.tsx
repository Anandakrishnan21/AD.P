import React from "react";
import Image from "next/image";
import img1 from "../../public/img1.png";
import { SocialIcon } from "react-social-icons";
import { medias, buttons } from "@/utils/constants";
import Link from "next/link";

function Intro() {
  return (
    <div
      id="intro"
      className="md:max-w-5xl m-auto flex flex-col md:flex-row justify-center items-center py-20"
    >
      <div className="w-5/6 md:w-1/2 flex flex-col justify-center items-center gap-3">
        <p className="text-lg text-center">
          Hey, My name is{" "}
          <span className="text-3xl font-bold w-full">Anandakrishnan.</span>
        </p>
        <p className="text-3xl md:text-4xl font-bold text-center">
          I'm a FULL STACK DEVELOPER
        </p>
        <p className="text-sm text-justify md:p-2">
          I'm a versatile full-stack developer proficient in both front-end and
          back-end technologies, delivering robust web solutions with efficiency
          and innovation.
        </p>
        <div className="w-full flex flex-col md:flex-row justify-center gap-2 items-center md:p-2">
          {buttons.map((button) => (
            <Link key={button.id} href={button.url} className="w-full flex flex-col md:flex-row justify-center md:p-2">
              <button
                className={`w-full ${button.bgColor1} ${button.textColor1} border-2 border-black hover:${button.bgColor2} hover:${button.textColor2} rounded duration-700 ease-out p-2`}
              >
                {button.text}
              </button>
            </Link>
          ))}
        </div>
        <div className="mb-4 font-bold">
          Connect
          {medias.map((media) => (
            <SocialIcon
              key={media.id}
              url={media.url}
              fgColor="black"
              bgColor="transparent"
              className="animate-pulse"
            />
          ))}
        </div>
      </div>
      <div className="w-5/6 md:w-1/2 flex justify-center items-center">
        <div className="w-96 h-96 p-2 bg-slate-300 rounded">
          <Image
            src={img1}
            alt="img"
            className="w-96 h-full object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
