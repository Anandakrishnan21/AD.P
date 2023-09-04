import React from "react";
import { abouts } from "@/utils/constants";

function About() {
  return (
    <div id="about" className="bg-slate-100 py-20">
      <div className="w-5/6 md:max-w-5xl m-auto flex flex-col justify-center items-center gap-3">
        <h1 className="text-xl font-bold">ABOUT</h1>
        {abouts.map((about) => (
          <p 
          key={about.id}
          className="text-sm text-md text-justify"
          >
            {about.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default About;
