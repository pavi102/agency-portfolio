const mongoose = require('mongoose');

function init(){
    mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true , useUnifiedTopology: true});
    mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

module.exports = init;