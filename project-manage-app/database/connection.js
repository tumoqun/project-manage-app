const mongoose=require('mongoose');
const uri = "mongodb+srv://tumoqun:tudoi0905581500@project-manage-weenh.mongodb.net/test?retryWrites=true&w=majority";

const connectDB=async()=>{
   await mongoose.connect(uri,{useUnifiedTopology:true,useNewUrlParser:true});
   console.log('db connected!')
}

module.exports=connectDB;