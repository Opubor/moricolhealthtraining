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
  email: string;
  customerName: string;
  resetPasswordToken: string;
}

function ResetPasswordReciept({
  email,
  customerName,
  resetPasswordToken,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>Reset Password</Preview>
      <Tailwind>
        <Body className="bg-lightThemeColor">
          <Container>
            <Section className="bg-white border border-themeColor my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">Reset Password</Heading>
              <Text>Dear {customerName}</Text>
              <Text>
                We received a request to reset the password associated with your
                Moricol health training account {email}. To proceed with the
                password reset, please follow the instructions below:
              </Text>
              <Text>
                1. Click on the following link to reset your password:
              </Text>
              <Text>
                <Link
                  href={`${process.env.URL}/resetPassword?token=${resetPasswordToken}`}
                  className="text-blue-600 underline text-sm"
                >
                  Reset Password
                </Link>
              </Text>
              <Text>
                Note: This link is valid for 24 hours. After this period, you
                will need to request another password reset.
              </Text>
              <Text>
                2. If you did not initiate this request or if you have any
                concerns, please contact our support team immediately at
                09124460695
              </Text>
              <Text>
                Thank you for choosing Moricol! We appreciate your business.
              </Text>
              <Text>Best regards,</Text>
              <Text>Moricol</Text>
              <Text>+234 9124460695</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ResetPasswordReciept;
