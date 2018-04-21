var mongoose = require('mongoose')
var ObjectId = mongoose.Types.ObjectId
var User = require('../lib/models/User')
var {STORE1_ID, STORE2_ID} = require('./constants')

module.exports = {
    user1: new User({
        username: "store1",
        password: "123456",
        store_id: ObjectId(STORE1_ID)
    }),
    
    user2: new User({
        username: "store2",
        password: "123456",
        store_id: ObjectId(STORE2_ID)
    })
}