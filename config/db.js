const mongoose = require('mongoose');

const connectToDB = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log(`MongoDB connected to: ${connection.connection.host}`);
}

module.exports = connectToDB;