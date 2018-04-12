var User=require('../../models/User')
var Boom=require('boom')

module.exports = {
    login: async function (request, h) {
        try {
            let username = request.query.username
            let result = ""

            let user = await User.findOne({username: username})
            if(user !== null){
                result = user.store_id
            }

            return h.response(result).code(200)
        } catch (error) {
            console.log(error)
            return Boom.boomify(error)
        }  
    }
}

