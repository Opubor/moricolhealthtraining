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
  studentEmail: string;
  studentPhoneNumber: string;
  registrationDate: string;
  courseAmount: number;
  paidAmount: number;

}

function NewRegistrationMail({ courseName, studentName, studentEmail, studentPhoneNumber,registrationDate, courseAmount, paidAmount }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Course Enrollment</Preview>
      <Tailwind>
        <Body className="bg-lightThemeColor">
          <Container>
            <Section className="bg-white border border-themeColor my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">Course Enrollment</Heading>
              <Text>
                Exciting news! A new registration has just been received for the
                course {courseName} on your website. Here are the details:
              </Text>
              <Text>Name of Registrant: {studentName}</Text>
              <Text>Email Address: <a href={`mailto:${studentEmail}`}>{studentEmail}</a></Text>
              <Text>Contact Number: <a href={`tel:${studentPhoneNumber}`}>{studentPhoneNumber}</a></Text>
              <Text>Course Selected: {courseName}</Text>
              <Text>Registration Date: {registrationDate}</Text>
              <Text>Course Amount: {courseAmount}</Text>
              <Text>Amount Paid: {paidAmount}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default NewRegistrationMail;
