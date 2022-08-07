const express = require('express');

const {
    createFragrance
} = require('../controllers/fragrances');

const router = express.Router();

router.route('/')
    .post(createFragrance);

module.exports = router;