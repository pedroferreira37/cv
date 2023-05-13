import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import type { NextAuthOptions } from "next-auth";
import { db } from "./db";
import { NextResponse } from "next/server";

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
