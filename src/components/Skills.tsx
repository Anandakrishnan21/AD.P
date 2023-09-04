"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { skills } from "@/utils/constants";

type Props = {
  directionLeft?: boolean;
};

function Skills({ directionLeft }: Props) {
  return (
    <div id="skills" className="py-20">
      <div className="w-5/6 md:max-w-5xl m-auto flex flex-col justify-center items-center gap-3">
        <h1 className="text-xl font-bold">SKILLS</h1>
        <div className="w-full grid grid-cols-3 md:grid-cols-4 gap-10 place-content-center">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              initial={{
                x: directionLeft ? -25 : 25,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex flex-col gap-1 justify-center items-center"
            >
              <Image
                src={skill.name}
                alt="skills"
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <p className="text-sm font-semibold">{skill.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
