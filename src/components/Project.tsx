"use client";
import React from "react";
import { projects } from "@/utils/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  directionTop?: boolean;
};

function Project({ directionTop }: Props) {
  return (
    <div id="project" className="bg-slate-100 py-20">
      <div className="w-5/6 md:max-w-5xl m-auto flex flex-col justify-center gap-3">
        <h1 className="text-xl font-bold text-center">PROJECTS</h1>
        <div className="grid grid-rows-2 place-content-center">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{
                y: directionTop ? 150 : -150,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row justify-center md:justify-around items-center"
            >
              <Image
                key={project.id}
                src={project.img}
                alt="project"
                className="w-80 md:w-96"
              />
              <div className="w-5/6 md:w-1/2 flex flex-col items-center gap-3">
                <h1 className="text-lg font-bold">{project.title}</h1>
                <p className="text-justify text-sm">{project.desc}</p>
                <div className="flex flex-row gap-3 text-md">
                  <Link href={project.url1}>
                    <button className=" bg-black text-white border-2 border-black p-1 rounded hover:bg-white hover:text-black duration-300 ">
                      {project.button1}
                    </button>
                  </Link>
                  <Link href={project.url2}>
                    <button className=" bg-white text-black border-2 border-black p-1 rounded hover:bg-black hover:text-white duration-300 ">
                      {project.button2}
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
