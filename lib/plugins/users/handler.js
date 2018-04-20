var User = require('../../models/User')
var Boom = require('boom')

module.exports = {
    login: async function (request, h) {
        try {
            let username = request.query.username
            let user = await User.findOne({ username: username })

            if (user !== null) {
                let result = user.store_id
                return h.response(result).code(200)
            } else {
                return new Boom("User not found", { statusCode: 400 })
            }

        } catch (error) {
            console.log(error)
            return Boom.boomify(error)
        }
    }
}

