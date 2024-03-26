var express = require('express');
const { getAllJob, getSingleJob } = require('../controllers/userController');
const { userAuth } = require('../middlewares/Authorization');

// const { userAuth } = require('../middlewares/Authorization');
var router = express.Router();




// router.get('/getallJob', userAuth , getallJob)
router.get('/getAllJob', userAuth , getAllJob)
router.get('/getSingleJob', userAuth , getSingleJob)





module.exports = router;
