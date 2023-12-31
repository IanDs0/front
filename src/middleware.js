import { NextResponse } from "next/server";

function verifyToken(token) {
	if (token) {
		return true;
		// return token.value === "12345";
	}
	return false;
	
}
 
export function middleware(request) {

	const sigin = new URL("/sigin", request.url);
	const signup = new URL("/signup", request.url);
	const homepage = new URL("/", request.url);
	
	const token = request.cookies.get("access_token");

	if(verifyToken(token)){
		if(request.nextUrl.pathname === "/sigin" || request.nextUrl.pathname === "/signup"){
			return NextResponse.redirect(homepage);
		}
		return NextResponse.next();
	}else{
		if(request.nextUrl.pathname === "/sigin" || request.nextUrl.pathname === "/signup"){
			const response = NextResponse.next();
			return response;
		}

		return NextResponse.redirect(sigin);

	};
}

export const config = {
	matcher: [
		"/",
		"/pessoa",
		"/pessoa/:path*",
		"/sigin",
		"/signup",
		"/cliente",
		"/cliente/:path*",
	],
};