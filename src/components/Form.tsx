"use client";
import React from "react";
import Image from "next/image";
import message from "../../public/send.png";
import { sendEmail } from "../../actions/sendEmail";
import toast from "react-hot-toast";
function Form() {
  return (
    <form
      action={async (FormData) => {
        const { data, error } = await sendEmail(FormData);

        if (error) {
          toast.error(error);
          return;
        }

        toast.success("Email sent successfully!");
      }}
      autoComplete="off"
      className="w-full md:w-3/6 flex flex-col gap-2"
    >
      <div className="flex flex-row gap-2 items-center">
        <input
          name="senderName"
          placeholder="Name"
          type="text"
          required
          className="w-full border-slate-200 border-2 p-2 rounded"
        />
        <input
          name="senderEmail"
          placeholder="E-mail"
          type="email"
          required
          className="w-full border-slate-200 border-2 p-2 rounded"
        />
      </div>
      <input
        name="senderSubject"
        placeholder="subject"
        type="text"
        required
        className="border-slate-200 border-2 p-2 rounded"
      />
      <textarea
        name="senderMessage"
        placeholder="Message"
        required
        className="w-full h-48 border-slate-200 border-2 p-2 resize-none rounded"
      ></textarea>
      <button
        type="submit"
        className="flex flex-row bg-black text-white justify-center gap-4 items-center p-2 rounded"
      >
        <p className="text-md">Send</p>
        <Image
          src={message}
          alt="message"
          className="w-6 h-6 hover:w-4 hover:h-4"
        />
      </button>
    </form>
  );
}

export default Form;
