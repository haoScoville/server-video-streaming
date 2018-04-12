var User=require('../../models/User')
var Store=require('../../models/Store')
var Faker=require("faker")
var Boom=require('boom')

module.exports = {
    init: async function (request, h) {
        try {
            let store1 = new Store({
                name: "store1",
                image: Faker.image.image(),
                description: Faker.lorem.paragraph(),
                isLive: false,
                sessionId: "",
                owner_token: ""
            })
    
            let savedStore1 = await store1.save()
    
            let user1 = new User({
                username: "store1",
                password: "123456",
                store_id: savedStore1.id
            })
    
            await user1.save()
    
            let store2 = new Store({
                name: "store2",
                image: Faker.image.image(),
                description: Faker.lorem.paragraph(),
                isLive: false,
                sessionId: "",
                owner_token: ""
            })
    
            let savedStore2 = await store2.save()
        
            let user2 = new User({
                username: "store2",
                password: "123456",
                store_id: savedStore2.id
            })
    
            await user2.save()

            return h.response("OK").code(200)
        } catch (error) {
            console.log(error)
            return Boom.boomify(error)
        }
    }
}