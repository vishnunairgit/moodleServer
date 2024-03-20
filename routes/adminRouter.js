var express = require('express');
const { addJobpost, GetUser , getSingleJobdata, GetEditcompany } = require('../controllers/adminController');
const { adminAuth } = require('../middlewares/Authorization');
const multer = require('multer');

// const { userAuth } = require('../middlewares/Authorization');
var router = express.Router();

const fileStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/PetFiles');
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + "-" + file.originalname);
    }
});
 
// Define multer upload middleware for handling multiple files
const upload = multer({ storage: fileStorage }).fields([
    { name: 'logoUpload', maxCount: 1 },
    { name: 'imageUpload', maxCount: 1 },
   
]);




router.post('/addJobpost', adminAuth, addJobpost)
router.get('/GetUser',adminAuth, GetUser)
router.get('/getSingleJobdata', adminAuth, getSingleJobdata)
router.post('/GetEditcompany', adminAuth, upload , GetEditcompany)



// GetEditcompany




module.exports = router;
