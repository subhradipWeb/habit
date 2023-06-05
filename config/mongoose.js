const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/Habit_db');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'erroe connecting to db'));

db.once('open', function() {
    console.log('Success fully connected to the database')
})