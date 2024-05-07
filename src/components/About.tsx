import React from "react";
import { skills } from "@/utils/constants";
import Image from "next/image";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import Link from "next/link";

function About() {
  return (
    <div
      id="about"
      className="about"
    >
      <div className="w-1/2 p-4 flex flex-col gap-2">
        <div className="flex gap-2">
          <MdSubdirectoryArrowRight />
          <p>Skills</p>
        </div>
        <div>
          {skills.map((skill) => (
            <p>{skill}</p>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-2">
        <p className="p-4">About</p>
        <div className="flex flex-col gap-4">
          <Image
            src="/images/img1.png"
            alt="img"
            width={200}
            height={200}
            className="w-52 lg:w-60 p-4"
          />
          <h1 className="text-xl md:text-2xl p-4">
            To me, webdev is about solving a problem, while designing is about
            adding beauty to the world.
          </h1>
          <p className="text-sm md:text-base text-neutral-400 px-4">
            Hey! My name is Anandakrishnan. I&apos;m an Engineering graduate. I&apos;ve
            been working as a developer for over 4 years. I have completed
            internships in more than one company as a full-stack developer. For
            the last few years, I&apos;ve been focusing on my passion for creating
            websites and designing.
          </p>
          <Link href="../resume" className="px-4">
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
