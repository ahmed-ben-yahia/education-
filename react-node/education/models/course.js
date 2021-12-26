const mongoose = require('mongoose');
const courseSchema = mongoose.Schema({
    teacher :String,
    name:String,
    price:String,
    description:String,
    img:String
});
const Course = mongoose.model('Course',courseSchema);
module.exports = Course;