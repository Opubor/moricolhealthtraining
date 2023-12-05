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
  customerName: string;
  courseName: string;
  registrationDate: string;
  enrollmentId: string;
  courseAmount: number;
  paidAmount: number;
}

function StudentRegEmail({
  customerName,
  courseName,
  registrationDate,
  enrollmentId,
  courseAmount,
  paidAmount
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>Course Enrollment</Preview>
      <Tailwind>
        <Body className="bg-lightThemeColor">
          <Container>
            <Section className="bg-white border border-themeColor my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">Course Enrollment</Heading>
              <Text>Dear {customerName},</Text>
              <Text>
                Congratulations! Your enrollment for the "{courseName}" course
                has been successfully processed. We're thrilled to have you join
                our learning community.
              </Text>
              <Text>Here are some details about your enrollment:</Text>
              <Text>Course Name: {courseName}</Text>
              <Text>Registration Date: {registrationDate}</Text>
              <Text>Enrollment ID: {enrollmentId}</Text>
              <Text>Course Amount: &#8358;{courseAmount}</Text>
              <Text>Amount Paid: &#8358;{paidAmount}</Text>
              <Text>
                Our team is working diligently to finalize the details, and you
                can expect to be contacted shortly with further instructions.
                Whether it's accessing the course materials, meeting your
                instructors, or understanding the schedule, we are here to guide
                you every step of the way.
              </Text>
              <Text>
                Should you have any immediate questions or if there's anything
                specific you'd like to know before we reach out, feel free to
                reply to this email.
              </Text>
              <Text>
                Thank you for choosing Moricol for your learning journey. We
                look forward to supporting you in achieving your educational
                goals.
              </Text>
              <Text>Best regards,</Text>
              <Text>Moricol Support Team</Text>
              <Text><a href="mailto:infomoricolhealthcare@gmail.com">infomoricolhealthcare@gmail.com</a></Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default StudentRegEmail;
