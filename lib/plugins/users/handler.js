var User=require('../../models/User')

module.exports = {
    login: async function (request, h) {
        let username = request.query.username
        let result = ""

        let user = await User.findOne({username: username})
        if(user !== null){
            result = user.store_id
        }

        return result
    }
}

