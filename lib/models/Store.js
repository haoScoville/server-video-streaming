var mongoose = require('mongoose')
var Schema = mongoose.Schema

var StoreSchema = new Schema({
    name: String,
    image: String,
    description: String,
    isLive: Boolean,
    sessionId: String,
    owner_token: String
})

module.exports = mongoose.model('Store', StoreSchema);