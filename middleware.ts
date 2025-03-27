import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    const role = req.cookies.get("role")?.value;

    if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (req.nextUrl.pathname === "/dashboard") {
        if (role === "farmer") {
            return NextResponse.redirect(new URL("/dashboard/farmer", req.url));
        } else if (role === "buyer") {
            return NextResponse.redirect(new URL("/dashboard/buyer", req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};
