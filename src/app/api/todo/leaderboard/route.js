58
import { connect } from "@/dbconfig/connect";
import  Box from "@/dbconfig/models/todoschema";
import User from "@/dbconfig/models/userschema";
import { NextResponse } from "next/server";

export async function GET() {
    
  try{ 
    await connect();

    const a = await Box.aggregate([
        {
        $project: {
            owner: 1,
            likeCount: { $size: "$likes" }
        }
        },
        {
        $group: {
            _id: "$owner", // group by user
            totalLikes: { $sum: "$likeCount" },
            
        }
        },
        {
        $sort: { totalLikes: -1 } // descending
        },
        {
        $limit: 10 // top 10 users
        },
        {
        $project: {
            username: "$_id",
            totalLikes: 1, //include it
            _id: 0  //dont include
            }
        }
        
    ]);
    return NextResponse.json({ leaderboard: a || [] }, { status: 200 });
   
}catch(err){
   console.log(err.message)
   return NextResponse.json({leaderboard:[]},{ status: 200 }); 
}
}
