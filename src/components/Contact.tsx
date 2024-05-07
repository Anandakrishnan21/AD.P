import React from "react";
import { socials } from "@/utils/constants";
import Link from "next/link";
import {
  MdOutlineArrowOutward,
  MdSubdirectoryArrowRight,
} from "react-icons/md";

function Contact() {
  return (
    <div
      id="contact"
      className="contact"
    >
      <div className="w-1/2 p-4 flex flex-col justify-between">
        <div className="flex gap-2">
          <MdSubdirectoryArrowRight />
          <p>Contact</p>
        </div>
        <Link
          href="#intro"
          className="hidden md:flex hover:text-neutral-300 duration-200"
        >
          Back to Top
        </Link>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4 p-4">
        <div className="grid grid-cols-2 lg:grid-cols-1">
          {socials.map((social) => (
            <div className="flex gap-2 items-center">
              <MdOutlineArrowOutward />
              <Link href={social.link}>{social.name}</Link>
            </div>
          ))}
        </div>
        <p className="text-sm lg:text-xl flex-wrap text-neutral-400">
          You can contact me directly through gmail:
          <span className="lg:text-xl text-white">
            {" "}
            anandakrishnandinej02@gmail.com
          </span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
