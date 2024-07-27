import React from "react";
import { projects } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

function Project() {
  const transitionAnimation = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: 0.1,
        duration: 0.5,
      }}
      variants={transitionAnimation}
      className="work"
    >
      <div id="work" className="md:w-1/3 p-4">
        <div className="flex gap-2">
          <MdSubdirectoryArrowRight />
          <p>Selected Works</p>
        </div>
      </div>
      <div className="md:w-2/3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-2 p-4 border-b-[1px] border-neutral-700"
          >
            <Link href={project.link}>
              <motion.img
                src={project.img}
                alt="project1"
                whileHover={{ scale: 0.99 }}
                transition={{
                  duration: 0.5,
                }}
                width={800}
                height={800}
                className="w-full"
              />
            </Link>
            <div className="flex text-xl flex-col md:flex-row justify-between gap-1">
              <p>{project.title}</p>
              <span className="text-neutral-300 text-sm">{project.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Project;
