const mongoose=require ('mongoose')
const userSchema=mongoose.Schema({
    // userID: {
    //      type: String,
    //      required:true,
    // },

    
    CompanyName:{
        type:String,
        required:true
    },
    registrationNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phonenumber:{
        type:Number,
        required:true,
    },
    Address:{
        type:String
    },
    website:{
        type:String
    },
    LinkedIn:{
        type:String
    },
    Industry:{
        type:String
    },
    Incorporationdate:{
        type: Date,
    },
    about:{
        type:String
    },
    logoUpload:{
        type:String
    },
    imageUpload:{
        type:String
    },




    role:{
        type:Number,
        required:true,
        default:1
    },

    password:{
        type:String,
        required:true
    },

})


const users=mongoose.model('users',userSchema)
module.exports=users
