import { User } from "@prisma/client";
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession;
  }
  interface User extends DefaultUser {
    role: string;
    password: string;
    gender: string;
    phone: string;
    address: string;
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string;
    password: string;
    gender: string;
    phone: string;
    address: string;
    id: string;
  }
  //   type JWT = User;
}

type PaystackEventData = {
  id: string;
  domain: string;
  type: string;
  data: {
    domain: string;
    status: string;
    gateway_response: string;
    message: string;
    channel: string;
    metadata: Record<string, any>;
    log: string;
    fees: number;
    created_at: string;
    transaction_date: string;
    transaction_id: string;
  };
  created_at: string;
};

type PaystackEventResponse = {
  event: string;
  data: PaystackEventData;
};
