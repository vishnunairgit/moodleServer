const mongoose=require ('mongoose')
const userSchema=mongoose.Schema({
  
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
        unique:true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
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
        type:Date,
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
        default:1,
        enum: [1, 2, 3] // Example: 1 for User, 2 for Admin, 3 for Super Admin

    },

    password:{
        type:String,
        required:true
    },

})


const users=mongoose.model('users',userSchema)
module.exports=users
