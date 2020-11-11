const mongoose = require('mongoose'); 

const user = new mongoose.Schema(
{
firstName:{
    type: String
}, 

lastName:{
    type: String
}, 




})

module.export = User = mongoose.model('user', user);