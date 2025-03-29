import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    const role = req.cookies.get("role")?.value;

    console.log("Middleware Token:", token);
    console.log("Middleware Role:", role);

    const res = NextResponse.next();
    res.headers.set("Cache-Control", "no-store");

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

    if (req.nextUrl.pathname === "/dashboard/buyer" && !req.nextUrl.pathname.startsWith("/dashboard/buyer/profile")) {
        return NextResponse.redirect(new URL("/dashboard/buyer/marketplace", req.url));
    }

    return res;
}

export const config = {
    matcher: ["/dashboard", "/dashboard/:path*"],
};