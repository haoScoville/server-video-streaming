var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    username: String,
    password: String,
    store_id: Schema.Types.ObjectId
})

module.exports = mongoose.model("User", UserSchema);