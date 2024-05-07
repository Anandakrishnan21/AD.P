import React from "react";
import { projects } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { MdSubdirectoryArrowRight } from "react-icons/md";

function Project() {
  return (
    <div className="work">
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
              <Image
                src={project.img}
                alt="project1"
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
    </div>
  );
}

export default Project;
