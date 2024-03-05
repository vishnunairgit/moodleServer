var express = require('express');
const { addJobpost, GetUser } = require('../controllers/adminController');
const { adminAuth } = require('../middlewares/Authorization');

// const { userAuth } = require('../middlewares/Authorization');
var router = express.Router();





router.post('/addJobpost', adminAuth, addJobpost)

router.get('/GetUser',  GetUser)








module.exports = router;
