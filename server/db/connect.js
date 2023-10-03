const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");

const connectDB = (url)=>{
    try{
         mongoose.connect(url,{    
            useNewUrlParser: true,
            useUnifiedTopology :true ,
        });
        console.log(`mongo database is connected!!! `)
        console.log(process.env.MONGODB_URL);
        console.log(process.env.MONGODB_URL);
        // const conn = await mongoose.connect(process.env.MONGO_URI,{
        //     //must add in order to not get any error masseges:
        //     useUnifiedTopology:true,
        //     useNewUrlParser: true,
        //     useCreateIndex: true
        // })
    }catch(error){
        console.error(`Error: ${error} `)
        // process.exit(1) //passing 1 - will exit the proccess with error
    }
    // console.log("d")
    // return mongoose.connect(url);
    // console.log(`mongo database is connected!!! `)
};

module.exports=connectDB;