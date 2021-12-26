const mongoose = require("mongoose");
const questionSchema = mongoose.Schema({
    email: String,
    message:String
});
const Question = mongoose.model('Question',questionSchema);
module.exports =Question;