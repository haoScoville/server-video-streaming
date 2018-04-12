var Store=require('../../../models/Store')
var Boom=require('boom')

module.exports = {
    findById: async function (request, h) {
        try {
            return await Store.findById(request.params.idStore)
        } catch (error) {
            console.log(error)
            return Boom.boomify(error)
        }
        
    }
}