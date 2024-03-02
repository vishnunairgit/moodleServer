var express = require('express');
var router = express.Router();
const { doSignUp, doLogin  } = require('../controllers/authController');



router.post('/signUp', doSignUp )
router.post('/Login', doLogin )





module.exports = router;
