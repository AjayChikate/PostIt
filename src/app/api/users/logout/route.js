import { NextResponse } from "next/server"





export async function GET(req) {
    try {
        const respons = NextResponse.json({
            message: "logout success",
            success: true
        })
        respons.cookies.set("token", "", {
            httpOnly: true, //client cant tamper
            expires: new Date(0)
        })

        return respons
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}