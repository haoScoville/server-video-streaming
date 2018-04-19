var Store=require('../../../models/Store')
var Boom=require('boom')

module.exports = {
    findById: async function (request, h) {
        try {
            let store = await Store.findById(request.params.idStore)
        
            if(store!==null){
                return h.response(JSON.stringify(store)).code(200)
            }else{
                return new Boom("Store not found", {statusCode: 404})
            }
        } catch (error) {
            console.log(error)
            return Boom.boomify(error)
        }
        
    },
    findLiveStore: async function (request, h) {
        try {
            let stores

            if(request.query.live === "t"){
                stores = await Store.find({isLive: true})
            }else{
                stores = await Store.find()
            }
            
            return h.response(
                JSON.stringify({
                    stores: stores
                })
        ).code(200)
        } catch (error) {
            console.log(error)
            return Boom.boomify(error)
        }
    }
}