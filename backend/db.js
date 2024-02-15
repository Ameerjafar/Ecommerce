const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String
})