const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    FirstName : {type:String},
    LastName : {type:String},
    Email : {type:String},
    Phone : {type:String},
    City : {type:String},
    UserName : {type:String},
    Password : {type:String},
},{versionKey:false});

const UserModel = mongoose.model('users',dataSchema);

module.exports = UserModel;