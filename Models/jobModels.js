const mongoose = require('mongoose')
const jobSchema = mongoose.Schema({
 

    JobTitle: {
        type: String,
        required: true
    },
    Experience: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    qualifications: {
        type: String,
        required: true,
    },
    employmentType: {
        type: String,
        required: true,
    },
    openings: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    Requirements: {
        type: String,
        required: true
    },
    Jobdescription: {
        type: String,
        required: true
    },
    status:{
        type:String,
        required:true,
        default:1,
    },
    cretedBy:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    }
   

})


const jobs = mongoose.model('jobs', jobSchema)
module.exports = jobs