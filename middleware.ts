import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    const token = req.nextauth.token;

    console.log(token);
    const pathname = req.nextUrl.pathname;

    const url = (pathname: string) => new URL(pathname, req.nextUrl.origin);

    const isAuthPage = pathname === "/login";

    if (token && isAuthPage) {
      return NextResponse.redirect(url("/user"));
    }

    if (!token && !isAuthPage) {
      return Response.redirect(url("/login"));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => true,
    },
  }
);

export const config = {
  matcher: ["/login", "/user", "/create"],
};
