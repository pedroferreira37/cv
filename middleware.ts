import { getToken } from "next-auth/jwt";
import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    const token = req.nextauth.token;

    const isAuth = !!token;

    if (isAuth) {
      return NextResponse.redirect(new URL("/user", process.env.NEXTAUTH_URL));
    }

    if (isAuth) {
      return NextResponse.redirect(
        new URL("/signin", process.env.NEXTAUTH_URL)
      );
    }
  },

  {
    callbacks: {
      async authorized({ token }) {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/user"],
};
