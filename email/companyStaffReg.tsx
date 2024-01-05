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
  courseName: string;
  studentName: string;
}

function CompanyStaffRegMail({ courseName, studentName }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Course Enrollment</Preview>
      <Tailwind>
        <Body className="bg-lightThemeColor">
          <Container>
            <Section className="bg-white border border-themeColor my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">Course Enrollment</Heading>
              <Text>Dear {studentName},</Text>
              <Text>
                We are pleased to inform you that your company has successfully
                registered you for our upcoming Professional Health Training
                Course. Congratulations on this commitment to continuous
                professional development and dedication to staying at the
                forefront of healthcare excellence.
              </Text>
              <Text>Course Details:</Text>

              <Text>Title: {courseName}</Text>
              <Text>Course Overview:</Text>
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
                Professional Health Training Course.
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

export default CompanyStaffRegMail;
