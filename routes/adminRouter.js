var express = require('express');
const multer = require('multer');

const { addJobpost, GetUser , getSingleJobdata, GetEditcompany, editJob, Deletejob } = require('../controllers/adminController');
const { adminAuth } = require('../middlewares/Authorization');

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




router.post('/addJobpost', adminAuth, upload, addJobpost)
router.get('/GetUser',adminAuth,upload, GetUser)
router.get('/getSingleJobdata', adminAuth,upload, getSingleJobdata)
router.post('/GetEditcompany/', adminAuth, upload , GetEditcompany)
router.post('/editJob/', adminAuth, upload , editJob)
router.delete('/Deletejob/', adminAuth, upload, Deletejob)





// editJob


module.exports = router;
