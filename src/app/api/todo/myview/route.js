import { connect } from '@/dbconfig/connect';
import Box from "@/dbconfig/models/todoschema";
import { NextResponse } from 'next/server';
import { getID } from "@/helpers/getid";
import User from "@/dbconfig/models/userschema";


export async function POST(req) {

    try {

        await connect();
        const id = getID(req)
        const user = await User.findById(id)
        const owner = user.username;
        const formData = await req.formData()
        const topic = formData.get('topic')
        const description = formData.get('description')
        const imageFile = formData.get('imageFile') // file = Blob
        let buffer = null
        let contentType = null

        if (imageFile && imageFile.size > 0) {
            buffer = Buffer.from(await imageFile.arrayBuffer())
            contentType = imageFile.type // e.g. 'image/png'
        }

        const v = await new Box({
            topic: topic,
            description: description,
            owner: owner,
            image: {
                data: buffer,
                contentType: contentType,
            }

        })
        await v.save()
        return NextResponse.json({ message: "created!" }, { status: 201 })
    }
    catch (err) {
        console.log(err.message)
        return NextResponse.json({ error: err.message, status: 500 })
    }
}

export async function GET(req) {

    try {
        await connect();
        const id_user = getID(req)
        const user = await User.findById(id_user)
        const b = await Box.find({ owner: user.username })
        return NextResponse.json({ b: b }, { status: 200 })
    }
    catch (err) {
        return NextResponse.json({ error: err.message, status: 500 })
    }
}

export async function DELETE(req) {
    try {
        await connect();
        const w = req.nextUrl.searchParams.get("id")
        await Box.findByIdAndDelete(w);
        return NextResponse.json({ message: "created!" }, { status: 200 })
    }
    catch (err) {
        return NextResponse.json({ error: err.message, status: 500 })
    }

}


export async function PATCH(req) {
    try {
        await connect();
        const { id, newtopic, newdescription } = await req.json();
        await Box.findByIdAndUpdate(id, { topic: newtopic, description: newdescription },);
        return NextResponse.json({ message: "updated!" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

