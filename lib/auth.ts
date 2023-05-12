import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import type { NextAuthOptions } from "next-auth";
import { getUser } from "@/model/find-user";
import { NextResponse } from "next/server";

interface Credentials {
  mail: "asdasd";
  password: "asdasd";
  csrfToken: "d8e13167263904cb1ed37132c6f1cebde26c3cf812936a3de5b73c8d188d32bf";
  callbackUrl: "http://localhost:3000/signin";
  json: "true";
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_KEY,
    }),
    CredentialsProvider({
      async authorize(credentials: Credentials, req) {
        const { mail } = credentials;

        const user = await getUser({ mail });

        if (user) return user;

        throw new Error("authentication_failed");
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.id = token.id;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (token) {
        token.id = user.id;
      }
      return token;
    },
  },
};
