import { connect } from '@/dbconfig/connect';
import Box from "@/dbconfig/models/todoschema";
import { NextResponse } from 'next/server';
import { getID } from '@/helpers/getid';



export async function GET(req) {
    try {
        await connect();
        const id_user = getID(req)
        //const user=await User.findById(id_user)
        const w = await Box.find()
        const b = w.map(obj => {
            const a = obj.image// otherwise base 64 conversion gets error as we lose some attributes 
            const plain = obj.toObject(); // convert to plain JS object
            plain.image = a;
            plain.liked = plain.likes.map(id => id.toString()).includes(id_user);
            // console.log(plain.image)
            return plain;
        });
        //console.log(b.image)  
        return NextResponse.json({ b: b }, { status: 200 })
    }
    catch (err) {

        return NextResponse.json({ error: err.message, status: 500 })
    }
}


