const mongoose=require("mongoose")

const DB="mongodb+srv://naushaddb:mongodb.com@cluster0.0fe0mzl.mongodb.net/prosescrud?retryWrites=true&w=majority";

mongoose.connect(DB,{
   
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    try{
        console.log("connection start");
    }
    catch(e){
        console.log("error:",e)
    }
})