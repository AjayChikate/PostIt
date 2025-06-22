import mongoose from "mongoose";//talk to db


export async function connect(){
    try{
        await mongoose.connect(process.env.mongo_url)
        const con=mongoose.connection;
        con.on('connected',()=>{
            console.log("connection successful")
        })
        con.on("error",(e)=>{
            console.log("there is error in connecting mongo db"+e);
            return ;
        })

    } 
    catch(error){
        console.log("something went wrong");
        console.log(error);
    }
    
}

