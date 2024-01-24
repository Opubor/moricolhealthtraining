import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

interface Props {
  userName: string;
  userEmail: string;
  phoneNumber: string;
}

function NewUserMail({ userName, userEmail, phoneNumber }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Moricol</Preview>
      <Tailwind>
        <Body className="bg-lightThemeColor">
          <Container>
            <Section className="bg-white border border-themeColor my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">Registration</Heading>
              <Text>Dear {userName},</Text>
              <Text>
                We are thrilled to welcome you to Moricol! Thank you for
                choosing us as your partner on your journey. Your registration
                is confirmed, and we're excited to have you as part of our
                community.
              </Text>
              <Text>Your Registration Details:</Text>

              <Text>Full Name: {userName}</Text>
              <Text>Email Address: {userEmail}</Text>
              <Text>Phone Number: {phoneNumber}</Text>
              <Text>
                This specialized training program is designed to provide you
                with advanced insights and skills relevant to your role in
                healthcare. From the latest medical advancements to specialized
                patient care techniques, we aim to equip you with the knowledge
                necessary to excel in your professional endeavors.
              </Text>
              <Text>Contact Information:</Text>
              <Text>
                Should you have any inquiries or require additional information,
                our dedicated support team is available to assist you. You can
                reach them at <a href="tel:09124460695">+234 9124460695</a>.
              </Text>
              <Text>
                We are confident that this training will contribute
                significantly to your ongoing professional development. Your
                active participation is not only valued but crucial to the
                success of the program.
              </Text>
              <Text>
                Thank you for your commitment to continuous learning, and we
                look forward to your active involvement in the upcoming
                Professional Health Training Courses.
              </Text>
              <Text>Best regards,</Text>
              <Text>Moricol</Text>
              <Text>
                <a href="tel:447417551811">+447 417551811</a>
              </Text>
              <Text>
                <a href="tel:447479545757">+447 479545757</a>
              </Text>
              <Text>
                <a href="tel:2349124460695">+234 9124460695</a>
              </Text>
              <Text>
                <a href="mailto:infomoricolhealthcare@gmail.com">
                  infomoricolhealthcare@gmail.com
                </a>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default NewUserMail;
