import { getID} from "@/helpers/getid";
import User from "@/dbconfig/models/userschema";
import { connect } from "@/dbconfig/connect";
import { NextResponse } from "next/server";

export async function GET(request) {
    try{
        await connect()
        //console.log(request)
        const id=getID(request)
        const user=await User.findById(id)
        
        return NextResponse.json(
           
           { b:user},{status:200}
        )
    }catch(err){
        return NextResponse.json({error:err.message},{status:400})
    }
}
