import { connect } from '@/dbconfig/connect';
import Box from "@/dbconfig/models/todoschema";
import { NextResponse } from 'next/server';
import { getID } from "@/helpers/getid";
import User from "@/dbconfig/models/userschema";



export async function PATCH(req) {
  try {

    await connect();
    const id_user = getID(req);
    const { id } = await req.json();
    const box = await Box.findById(id)
    const alreadyLiked = box.likes.includes(id_user);

    if (alreadyLiked) {
      box.likes.pull(id_user); // unlike
    }
    else {
      box.likes.addToSet(id_user); // like uniquely
    }

    await box.save();
    return NextResponse.json({ message: "updated" }, { status: 200 });


  }

  catch (err) {
    console.log(err.message)
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}