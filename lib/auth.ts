import GoogleProvider from "next-auth/providers/google";
import MailProvider from "next-auth/providers/email";
import type { NextAuthOptions } from "next-auth";
import { getUser } from "@/model/find-user";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_KEY,
    }),
    MailProvider({
      from: process.env.SMTP,
      async sendVerificationRequest({ identifier, url, provider }) {
        const user = await getUser({ mail: identifier });

        const result = await post;
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      console.log(session);
      return session;
    },

    async jwt({ token, session }) {
      return token;
    },
  },
};
