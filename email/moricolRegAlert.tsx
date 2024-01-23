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

function MoricolRegAlert({ userName, userEmail, phoneNumber }: Props) {
  return (
    <Html>
      <Head />
      <Preview>New User Registration</Preview>
      <Tailwind>
        <Body className="bg-lightThemeColor">
          <Container>
            <Section className="bg-white border border-themeColor my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                New User Registration on Moricol Health Training
              </Heading>
              <Text>Dear {userName},</Text>
              <Text>
                A new user has registered on Moricol health training. Here are
                the details:
              </Text>
              <Text>Registration Details:</Text>

              <Text>User Name: {userName}</Text>
              <Text>Email Address: {userEmail}</Text>
              <Text>Phone Number: {phoneNumber}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default MoricolRegAlert;
