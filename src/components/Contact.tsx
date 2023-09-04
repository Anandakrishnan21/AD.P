import React from "react";
import { contacts } from "@/utils/constants";
import Image from "next/image";
import Form from "./Form";
import Link from "next/link";

function Contact() {
  return (
    <div id="contact" className="py-20">
      <div className="w-5/6 md:max-w-5xl m-auto flex flex-col justify-center items-center gap-3">
        <h1 className="text-xl font-bold text-center">GET IN TOUCH</h1>
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex flex-row items-center bg-slate-200 w-full md:w-3/6 p-2 justify-center"
          >
            <Link href={contact.url}>
              <Image
                src={contact.img}
                alt="contact"
                className="w-8 animate-pulse"
              />
            </Link>
            <p className="w-5/6 text-center text-sm md:text-base">
              {contact.link}
            </p>
          </div>
        ))}
        <Form />
      </div>
    </div>
  );
}

export default Contact;
