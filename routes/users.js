var express = require('express');
const { getallJob } = require('../controllers/userController');
const { userAuth } = require('../middlewares/Authorization');

// const { userAuth } = require('../middlewares/Authorization');
var router = express.Router();




router.get('/getallJob', userAuth , getallJob)

// router.get('/addpost',  addpost)


module.exports = router;
