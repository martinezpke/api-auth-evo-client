const express = require('express');
const router = express.Router();
const { login } = require('../controllers/controllerLogin')

router.get('/', login)

module.exports = router;