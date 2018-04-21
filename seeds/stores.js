var mongoose = require('mongoose')
var ObjectId = mongoose.Types.ObjectId
var Store = require('../lib/models/Store')
var Faker = require('faker')
var {STORE1_ID, STORE2_ID, LIVE_STORE_ID} = require('./constants')

module.exports = {
    store1: new Store({
        _id: ObjectId(STORE1_ID),
        name: "store1",
        image: Faker.image.avatar(),
        description: Faker.lorem.paragraph(),
        isLive: false,
        sessionId: "",
        owner_token: ""
    }),
    
    store2: new Store({
        _id: ObjectId(STORE2_ID),
        name: "store2",
        image: Faker.image.avatar(),
        description: Faker.lorem.paragraph(),
        isLive: false,
        sessionId: "",
        owner_token: ""
    }),

    liveStore: new Store({
        _id: ObjectId(LIVE_STORE_ID),
        name: "live store",
        image: Faker.image.avatar(),
        description: Faker.lorem.paragraph(),
        isLive: true,
        sessionId: "123456789",
        owner_token: "abcdefghijk"
    })
}