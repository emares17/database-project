const mongoose = require('mongoose');

const fragranceSchema = new mongoose.Schema({
    name: {
        require: [true, 'Please add a fragrance name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    brand: {
        type: String,
        require: [true, 'Please add a brand name'],
        maxlength: [50, 'Brand can not be more than 50 characters']
    },
    category: {
        type: String,
        require: true,
        maxlength: [50, 'Category can not be more than 50 characters'],
    },
    type: {
        type: String,
        require: true,
        maxlength: [50, 'Type can not be more than 50 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('fragrances', fragranceSchema);