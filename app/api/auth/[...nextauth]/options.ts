import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "E-mail",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "******",
        },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch(`${process.env.LOGIN_URL}api/login`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });

          const user = await res.json();

          // If no error and we have user data, return it
          if (res.ok && user) {
            return user;
          }
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user?.name;
        token.email = user?.email;
        token.id = user?.id;
        token.address = user?.address;
        token.gender = user?.gender;
        token.password = user?.password;
        token.role = user?.role
        token.phone = user?.phone        
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.name = token?.name;
        session.user.email = token?.email;
        session.user.id = token.id;
        session.user.address = token?.address;
        session.user.phone = token?.phone;
        session.user.gender = token?.gender;
        session.user.password = token?.password;
        session.user.role = token?.role
      }
      return session;
    },
  },
  // =========================================================
  //   async jwt({ token, user }) {
  //     return { ...token, ...user };
  //   },
  //   async session({ session, token }) {
  //     session.user.role = token.role;
  //     return session;
  //   },
  // },
};
