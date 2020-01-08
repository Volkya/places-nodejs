const mongoose = require('mongoose');
const { mongodb } = require('./keys');

mongoose.connect(mongodb.DEV, {useNewUrlParser: true, useUnifiedTopology: true})
// mongoose.connect('mongodb://localhost/placesApp')
    // Test connect
    .then(db => console.log('database is connected'))
    .catch(err => console.error(err));
