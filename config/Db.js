
const mongoose = require('mongoose');

const cannectPetDB = async ()=>{
    try {
        const connection=await mongoose.connect('mongodb+srv://infovishnunair:4ORkmxd6t48WjgIL@moodle.zr4fots.mongodb.net/')

        // const connection=await mongoose.connect('mongodb+srv://infovishnunair:PiiUzx5Vdo3slA9q@moodle.fjk4inv.mongodb.net/')
        console.log('moodle MongoDB connected');
    } catch (error) {
            console.log(error);
        
    }
}
module.exports=cannectPetDB




// const mongoose = require('mongoose');
// const cannectPetDB = async ()=>{
//     try {
//         const connection=await mongoose.connect('mongodb+srv://infovishnunair:vishnunairmypetapp-1@cluster0.fjk4inv.mongodb.net/')
//         console.log('My pet MongoDB connected');
//     } catch (error) {
//             console.log(error);
        
//     }
// }
// module.exports=cannectPetDB

// mongodb+srv://infovishnunair:<password>@moodle.zr4fots.mongodb.net/

// 4ORkmxd6t48WjgIL