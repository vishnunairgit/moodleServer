var express = require('express');
const { getallJob, getAllStudentJob } = require('../controllers/userController');
const { userAuth } = require('../middlewares/Authorization');

// const { userAuth } = require('../middlewares/Authorization');
var router = express.Router();




router.get('/getallJob', userAuth , getallJob)
router.get('/getAllStudentJob', userAuth , getAllStudentJob)




module.exports = router;
