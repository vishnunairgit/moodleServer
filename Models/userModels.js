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
        // unique:true
    },
    phonenumber:{
        type:Number,
        // required:true,
        // unique:true
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
