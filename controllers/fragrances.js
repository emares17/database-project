const fragrances = require('../models/fragrances');

// Description: Create new fragrance
// Route: POST, /api/v1/fragrances
exports.createFragrance = async (req, res, next) => {
    try {
        const fragrance = await fragrances.create(req.body);
        res.status(201).json({
            success: true,
            data: fragrance
        });
    } catch(err) {
        res.status(400).json({
            success: false
        })
    }
};