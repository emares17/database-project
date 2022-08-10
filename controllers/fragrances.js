const fragrances = require('../models/fragrances');

// Description: Get all fragrances
// Route: GET /api/v1/fragrances
exports.getFragrances = async (req, res, next) => {
    try {
        const fragrances = await fragrances.find();
        res.status(200).json({
            success: true,
            count: fragrances.length,
            data: fragrances
        });
    } catch(err) {
        res.status(400).json({
            success: false
        });
    }
}


// Description: Create new fragrance
// Route: POST, /api/v1/fragrances
exports.createFragrance = async (req, res) => {
    try {
        const fragrance = await fragrances.create(req.body);
        res.location('/')
        res.status(302).json({
            success: true,
            data: fragrance
        })
        // res.render('index.ejs');
    } catch(err) {
        res.status(400).json({
            success: false
        });
    }
};
