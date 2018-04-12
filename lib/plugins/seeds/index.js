var Faker=require("faker")

exports.plugin = {
    pkg: require('./package.json'),
    register: async function (server, options) {
        var stores
        var users
        var ObjectID
        server.dependency("hapi-mongodb", (_server) => {
            users = _server.plugins["hapi-mongodb"].db.collection("users")
            stores = _server.plugins["hapi-mongodb"].db.collection("stores")
            ObjectID = _server.plugins["hapi-mongodb"].ObjectID
        })

        server.route({
            path: '/init',
            method: 'GET',
            handler: async function (request, h) {
                let userId1 = new ObjectID()
                let storeId1 = new ObjectID()
    
                let user1 = {
                    _id: userId1,
                    name: "store1",
                    password: "123456",
                    store_id: storeId1
                }

                let store1 = {
                    _id: storeId1,
                    name: "store1",
                    image: Faker.image.image(),
                    description: Faker.lorem.paragraph(),
                    isLive: false,
                    sessionId: "",
                    owner_token: ""
                }
            
                let userId2 = new ObjectID()
                let storeId2 = new ObjectID()
            
                let user2 = {
                    _id: userId2,
                    name: "store2",
                    password: "123456",
                    store_id: storeId2
                }

                let store2 = {
                    _id: storeId2,
                    name: "store2",
                    image: Faker.image.image(),
                    description: Faker.lorem.paragraph(),
                    isLive: false,
                    sessionId: "",
                    owner_token: ""
                }
            
                try{
                    await users.insertOne(user1)
                    await users.insertOne(user2)
                    await stores.insertOne(store1)
                    await stores.insertOne(store2)
                    return "OK"
                } catch(e){
                    console.log(err)
                }
                
            }
        });
    }
}