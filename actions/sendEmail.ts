"use server";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/utils/utils";
import React from "react";
import ContactFormEmail from "../email/ContactForm"; 

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const senderName = formData.get("senderName");
  const senderSubject = formData.get("senderSubject");
  const senderMessage = formData.get("senderMessage");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(senderMessage, 200)) {
    return {
      error: "Invalid sender message",
    };
  }

  if (!validateString(senderSubject, 200)) {
    return {
      error: "Invalid sender subject",
    };
  }

  if (!validateString(senderName, 5000)) {
    return {
      error: "Invalid sender name",
    };
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "anandakrishnandinej02@gmail.com",
      subject: `Message from ${senderName} - AD.P Portfolio website`,
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, { 
        senderName: senderName as string,
        senderEmail: senderEmail as string,
        senderSubject: senderSubject as string,
        senderMessage: senderMessage as string,
      }),
    });

    return { data };
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
};
