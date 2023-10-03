const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT ;

const jobs_routes = require("./routes/JobDesc");
app.get("/", (req, res)=>{
  res.send("hellooo")
});

// middleware or to set router 
app.use("/api/jobs", jobs_routes)
const start = async ()=>{
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
        console.log(`listening http://localhost:${PORT}`);
      });
  }catch(error){
    console.log('Error in starting the server g', error);
  }
}

start();