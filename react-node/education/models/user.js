const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
    firstName :String,
    lastName:String,
    email:{type:String,unique:true },
    pwd:String,
    tel:String,
    role:String
});
userSchema.plugin(uniqueValidator);
const User = mongoose.model('User',userSchema);
module.exports = User;