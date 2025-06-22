
import { NextResponse } from 'next/server'
//import jwt from "jsonwebtoken"
//alternative
import { jwtVerify } from 'jose';


export async function middleware(request) {
    const path_name = request.nextUrl.pathname  //gives which path u currently on...
    const token = request.cookies.get("token")?.value || ""
    // console.log(token)
    //public path
    if (path_name === "/login" || path_name === "/signup") {
        if (token) {
            try {
                //     await jwt.verify(token,process.env.SECRET_KEY)  //we cant do jwt verification as it is crypto module and not supported by nextjs as it is unavailable in edge runtime and next use edgeruntime to fast
                await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));

                return NextResponse.redirect(new URL('/profile', request.url))
            }
            catch (err) {

                return NextResponse.json({ error: "dont try hecking" })
            }

        }
    }

    //private path
    if (path_name === "/profile" || path_name === "/myview" || path_name === "/newadd" || path_name === "/edit") {
        if (!token) {

            return NextResponse.redirect(new URL('/login', request.url))
        }

        else {
            if (token) {
                try {
                    //const decoded=jwt.verify(token,process.env.SECRET_KEY)
                    await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
                }
                catch (err) {

                    return NextResponse.redirect(new URL('/login', request.url))
                }

            }
        }
    }
    return NextResponse.next();


}


export const config = {
    matcher: [
        "/myview",
        "/edit",
        "/newadd",
        "/profile",
        "/login",
        "/signup"
    ]
}