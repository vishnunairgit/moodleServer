var express = require('express');
const { GetUser } = require('../controllers/userController');
const { userAuth } = require('../middlewares/Authorization');
var router = express.Router();

/* GET users listing. */



router.get( '/GetUser', userAuth , GetUser )

module.exports = router;
// 