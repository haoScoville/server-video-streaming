var Boom = require('boom')
var {user1, user2} = require('../../../seeds/users')
var {store1, store2, liveStore} = require('../../../seeds/stores')

module.exports = {
    init: async function (request, h) {
        try {
            store1.save()
            store2.save()
            liveStore.save()

            user1.save()
            user2.save()

            return h.response("OK").code(200)
        } catch (error) {
            console.log(error)
            return Boom.boomify(error)
        }
    }
}