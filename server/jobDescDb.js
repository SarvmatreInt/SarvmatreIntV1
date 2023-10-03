const dotenv = require('dotenv');
dotenv.config({path: './.env'});
const connectDB = require("./db/connect");
const Job = require("./models/jobDesc");

const jobDescJson = require("./jobdec.json");
const start =async ()=>{
    try{
        await  connectDB(process.env.MONGODB_URL);
        await Job.create(jobDescJson);
        console.log("succ")
        
    }catch(error){
        console.log(error)
    }
}
start();