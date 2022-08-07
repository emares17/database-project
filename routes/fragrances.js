const express = require('express');

const {
    getFragrances,
    createFragrance
} = require('../controllers/fragrances');


const router = express.Router();

router.route('/')
    .get(getFragrances)
    .post(createFragrance);

module.exports = router;