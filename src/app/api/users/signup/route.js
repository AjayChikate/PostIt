import { connect } from "@/dbconfig/connect"
import { NextRequest, NextResponse } from "next/server"
import User from "@/dbconfig/models/userschema"
import bcryptjs from "bcryptjs"

export async function POST(req) {
    try {
        await connect();
        const rbody = await req.json()
        const { name, email, password } = rbody
        //NOTE -> befor any db call always use await

        //check unique user
        const u = await User.findOne({ username: name })

        if (u) {
            return NextResponse.json({ error: "user already exist", status: 409 })
        }

        //hashing password using bcrypt js 
        const salt = await bcryptjs.genSalt(10)//salt random generation
        const hash_password = await bcryptjs.hash(password, salt) //creating hash

        const v = await new User({
            username: name,
            email: email,
            password: hash_password
        })
        await v.save()
        return NextResponse.json({ message: "user created", success: true })


    }
    catch (err) {
        return NextResponse.json({ error: err.message, status: 500 })
    }
}


