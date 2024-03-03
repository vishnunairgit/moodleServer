
const mongoose = require('mongoose');

const cannectPetDB = async ()=>{
    try {
        const connection = await mongoose.connect('mongodb+srv://infovishnunair:wsnTa45LAbrBEerL@cluster2.k2mqfgd.mongodb.net/');

        // const connection=await mongoose.connect('mongodb+srv://infovishnunair:4ORkmxd6t48WjgIL@moodle.zr4fots.mongodb.net/')
        console.log('moodle MongoDB connected');
    } catch (error) {
            console.log(error);
        
    }
}
module.exports=cannectPetDB
