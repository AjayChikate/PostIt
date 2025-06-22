import { connect } from "@/dbconfig/connect";
import User from "@/dbconfig/models/userschema";
import bcryptjs from "bcryptjs"
import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export async function POST(req) {
    try {
        await connect()
        const rbody = await req.json()
        const { email, password } = rbody

        const u = await User.findOne({ email: email })
        console.log(u)
        //if user exist , if user not exist we get null
        if (u === null) {

            return NextResponse.json({ error: "NOT found" }, { status: 401 })
        }

        //comparing password
        const validpass = await bcryptjs.compare(password, u.password)
        if (!validpass) {
            return NextResponse.json({ error: "INVALID PASSWORD" }, { status: 401 })
        }

        //create a payload for token
        const token_data = {
            id: u._id,
            email: u.email,
            name: u.username

        }

        //creating a token ..... 
        const token = await jwt.sign(token_data, process.env.SECRET_KEY, {
            expiresIn: "1d"
        })

        //sending a token...
        const response = NextResponse.json({
            meassage: "LOGIN SUCCESS",
            success: true
        })
        response.cookies.set("token", token, { //cookie generation in response
            httpOnly: true,
        })

        return response;


    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}