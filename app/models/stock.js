var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var stockSchema = new Schema({
    names: [String]
});

var Stock = mongoose.model('Stock', stockSchema);

module.exports = {
    stock: Stock
}