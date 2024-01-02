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
  id: number,
  amount: number,
  status: string,
  reference: string,
  metadata: Record<string, any>,
  paid_at: string,
  created_at: string,
  currency: 'NGN' | 'USD' | 'EUR'
};

type PaystackEventResponse = {
  event: string;
  data: PaystackEventData;
};

type CURRENCIES = "USD" | "EUR" | "NGN" | "GBP" | "CAD" | "AUD"

