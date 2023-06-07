import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token);

    const token = req.nextauth.token;

    const pathname = req.nextUrl.pathname;

    const url = (pathname: string) => new URL(pathname, req.nextUrl.origin);

    const isAuthPage = pathname === "/signin";

    if (token && isAuthPage) {
      return NextResponse.redirect(url("/user"));
    }

    console.log(token);

    if (!token && !isAuthPage) {
      return Response.redirect(url("/signin"));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => true,
    },
  }
);

export const config = {
  matcher: ["/user", "/create"],
};
