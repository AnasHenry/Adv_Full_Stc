var mongod = require("mongoose");
var userSchema = mongod.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
})
var user_schema = mongod.model("users",userSchema);
module.exports = user_schema;