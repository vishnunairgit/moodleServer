var express = require('express');
const multer = require('multer');

const { addJobpost, GetUser , getSingleJobdata, Editcompany, editJob, Deletejob } = require('../controllers/adminController');
const { adminAuth } = require('../middlewares/Authorization');

var router = express.Router();

const fileStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/UserFiles');
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + "-" + file.originalname);
    }
});
 
const upload = multer({ storage: fileStorage }).fields([
    { name: 'logo', maxCount: 1 },
    { name: 'image', maxCount: 1 },
   
]);




router.post('/addJobpost', adminAuth, upload, addJobpost)
router.get('/GetUser',adminAuth,upload, GetUser)
router.get('/getSingleJobdata', adminAuth,upload, getSingleJobdata)
router.post('/Editcompany/', adminAuth, upload ,Editcompany)
router.post('/editJob/', adminAuth, upload , editJob)
router.delete('/Deletejob/', adminAuth, upload, Deletejob)





// editJob


module.exports = router;
