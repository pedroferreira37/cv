import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  async function middleware(req: NextRequest) {
    const token = await getToken({ req });

    const isAuth = !!token;

    const isAuthPage = req.nextUrl.pathname.startsWith("/signin");
    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/user", req.url));
      }

      return null;
    }

    if (!isAuth) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  },

  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/user", "/signin"],
};
