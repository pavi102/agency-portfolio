const mongoose = require('mongoose');

function init(){
    mongoose.connect('mongodb+srv://admin:NOtIfhRE0QNoHae6@agency-portfolio.2ttf6.mongodb.net/portfolio?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true});
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

module.exports = init;