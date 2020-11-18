const express = require('express');
const { signup, signin } = require('../controller/UserController');
const router = express.Router();

router.post('/signup',signup);
router.post('/signin',signin)

module.exports = router;