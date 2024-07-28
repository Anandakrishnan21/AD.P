import React from "react";
import { socials } from "@/utils/constants";
import Link from "next/link";
import {
  MdOutlineArrowOutward,
  MdSubdirectoryArrowRight,
} from "react-icons/md";
import { motion } from "framer-motion";

function Contact() {
  const transitionAnimation = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.6,
      }}
      variants={transitionAnimation}
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
            <div key={social.id} className="flex gap-2 items-center">
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
    </motion.div>
  );
}

export default Contact;
