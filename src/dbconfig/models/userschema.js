import mongoose from "mongoose";//talk to db


//creating Schema named schemauser

const schemauser = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "Please provide valid username"]
    },

    email: {
        type: String,
      //  unique: true,
        required: [true, "Please provide valid email"],
        match: [/\S+@\S+\.\S+/, "Please provide a valid email address"]
    },

    password: {
        type: String,
        required: [true, "Please provide valid passkey"]
    },

    //imp
    // isverify:{
    //     type:Boolean,
    //     default:false
    // },

    // isAdmin:{
    //     type:Boolean,
    //     default:false
    // },

    // forgotToken : {type : String},
    // forgotTokenExpiry : {type : Date},

    // verifyToken : {type : String},
    // verifyTokenExpiry :{type : Date},

})

//creating table named user using schema..
//mongo will store User as users ..

const User = mongoose.models.users || mongoose.model("users", schemauser)

//mongoose.model("users",schemauser) -> for first time this will execute on;y
//mongoose.models.users - > for second time only this will execute ,rest will not be executed this to avoid creating duolicate users ...and resusing previous one

export default User