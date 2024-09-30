const express = require('express');
const router = express.Router();
const moviecontroller = require('../controller/moviecontroller');

router.post('/',moviecontroller.createmovie);
module.exports = router;