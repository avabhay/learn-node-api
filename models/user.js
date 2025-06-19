const mongoose = require('mongoose');

//scema and model for users
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    gender: String,
    job_title: String,
},{timestamps: true});

const User = mongoose.model('user', userSchema);  

module.exports = User;