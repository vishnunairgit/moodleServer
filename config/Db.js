
const mongoose = require('mongoose');

const cannectPetDB = async ()=>{
    try {
        const connection=await mongoose.connect('mongodb+srv://infovishnunair:4ORkmxd6t48WjgIL@moodle.zr4fots.mongodb.net/')
        console.log('moodle MongoDB connected');
    } catch (error) {
            console.log(error);
        
    }
}
module.exports=cannectPetDB





// const mongoose = require('mongoose');

// const cannectPetDB = async () => {
//     try {
//         // Provide your MongoDB Compass connection string here
//         const connectionString = 'mongodb+srv://infovishnunair:4ORkmxd6t48WjgIL@moodle.zr4fots.mongodb.net/';
//         const connection = await mongoose.connect(connectionString, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true,
//             useFindAndModify: false
//         });

//         console.log('MongoDB connected');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error.message);
//     }
// };

// module.exports = cannectPetDB;