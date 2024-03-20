var express = require('express');
var router = express.Router();
const { doSignUp, doLogin  } = require('../controllers/authController');


// const fileStorage = multer.diskStorage({
//     destination: (req, file, callback) => {
//         callback(null, 'public/Files');
//     },
//     filename: (req, file, callback) => {
//         callback(null, Date.now() + "-" + file.originalname);
//     }
// });
 
// // Define multer upload middleware for handling multiple files
// const uploadcompany = multer({ storage: fileStorage }).fields([
//     { name: 'logoUpload', maxCount: 1 },
//     { name: 'imageUpload', maxCount: 1 },
   
// ]);







router.post('/signUp', doSignUp )
router.post('/Login', doLogin )











module.exports = router;
