const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
    name : String,
    description:String , 
    price:String ,
    date:String,
    teacherId:String
});
const Event = mongoose.model('Event',eventSchema);
module.exports = Event;