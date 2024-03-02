var express = require('express');
const { GetUser } = require('../controllers/userController');
// const { userAuth } = require('../middlewares/Authorization');
var router = express.Router();




router.get('/GetUser', GetUser)
// router.get('/GetUser', userAuth, GetUser)


module.exports = router;
