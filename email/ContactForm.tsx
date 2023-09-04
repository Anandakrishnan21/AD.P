import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  senderMessage: string;
  senderEmail: string;
  senderSubject: string;
  senderName: string;
};

export default function ContactForm({
  senderMessage,
  senderEmail,
  senderSubject,
  senderName,
}: ContactFormEmailProps) {
  return (
    <div>
      <Html>
        <Head />
        <Preview>New message from your portfolio website</Preview>
        <Tailwind>
          <Body className="bg-slate-100 text-gray-900">
            <Container>
              <Section className="bg-white border border-slate-600 my-10 px-10 py-4 rounded">
                <Heading className="leading-tight text-xl">
                  You received the following message from the Portfolio Contact
                  Form
                </Heading>
                <Text className="font-normal text-gray-500">
                  From: {senderName}
                </Text>
                <Text className="font-normal text-gray-500">
                  Subject: {senderSubject}
                </Text>
                <Text className="text-lg text-gray-700 text-justify">
                  {senderMessage}
                </Text>
                <Text>Email from {senderEmail}</Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    </div>
  );
}
