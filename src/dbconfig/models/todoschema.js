import mongoose from 'mongoose';


//create a schema named a which acts as blueprint for how
//data will look like in databse
const a = new mongoose.Schema({

     topic: String,

     description: String,

     likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', default: [] }], // array of MongoDB IDs that point to documents in the User collection.
     owner: String,

     image: {
          data: Buffer,
          contentType: String
     }
},
     {
          timestamps: true,
     }
)

//creating dataframe in moongoose named box with col topic,desc
//mongoose.model() takes two arguments:
//'box': The name of the collection .
//a: The schema that defines the structure of the data in that collection.
const Box = mongoose.models.box || mongoose.model('box', a)
export default Box 

