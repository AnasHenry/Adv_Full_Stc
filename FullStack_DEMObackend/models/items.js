var mongod = require("mongoose");
var itemSchema = mongod.Schema({
    itemID:String,
    itemQuantity:Number,
    itemRating:Number
})
var item_schema = mongod.model("items",itemSchema);
module.exports = item_schema;