const mongoose = require("mongoose");

const jobDescSchema = new mongoose.Schema({
    id:{
        type: Number
    },
    jobName: {
        type : String,
        required:[true,"Job Name is required"],
    },
    location: {
        type :String ,
        required:[true,"location is required"],
   },
//    for reference not in code 

    {
        child1:{
            id:

        }
    }
// 
    duration: {
        type : String,
        required: true
    },
    featured:{
        type : Boolean,
        default: true
    },
    createdAt:{
        type: Date,
        default:Date.now()
    }
})

// table name

module.exports = mongoose.model("jobsdesc", jobDescSchema);