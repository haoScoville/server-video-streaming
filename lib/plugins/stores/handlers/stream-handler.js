var Store=require('../../../models/Store')
var OpenTok=require('opentok')
var openTokConfig=require('../../../../config/opentok')
var opentok = new OpenTok(openTokConfig.apiKey, openTokConfig.apiSecret)
var Boom=require('boom')

module.exports = {
    startPublish: async function (request, h) {
        let promise = new Promise(function(resolve, reject) {
            opentok.createSession({mediaMode:"routed"}, function(error, session){
                if(error) reject(error)
                else{
                    let sessionId = session.sessionId
                    let token = session.generateToken()
                    
                    Store.findByIdAndUpdate(
                        request.params.idStore,
                        {
                            $set: {
                                isLive: true,
                                sessionId: sessionId,
                                owner_token: token
                            }
                        },
                        {
                            new: true
                        },
                        (error, res) => {
                            if(error) reject(error)
                            else {
                                if(res!==null){
                                    let result = {
                                        sessionId: res.sessionId,
                                        token: res.owner_token
                                    }
    
                                    resolve(result)
                                }else{
                                    reject(new Boom("publish to inactive store", {statusCode: 400}))
                                }
                            }
                        }
                    )
                }
            })
        })
        
        try {
            let result = await promise
            return h.response(JSON.stringify(result)).code(200)
        } catch (error) {
            console.log(error)
            return Boom.boomify(error)
        }
    },
    stopPublish: async function (request, h) {
        try {
            let store = await Store.findOneAndUpdate(
                {_id:request.params.idStore, isLive: true},
                {
                    $set: {
                        isLive: false,
                        sessionId: "",
                        owner_token: ""
                    }
                },
                {
                    new: true
                }
            )
            if(store!==null){
                return h.response(JSON.stringify(store)).code(200)
            }else{
                return new Boom("unpublish to inactive store", {statusCode: 400})
            }
            
        } catch (error) {
            console.log(error)
            return Boom.boomify(error)
        }
        
    },
    subscribe: async function (request, h) {
        try {
            let store = await Store.findOne({_id:request.params.idStore, isLive: true})

            if(store!==null){
                let sessionId = store.sessionId
                let token = opentok.generateToken(sessionId, {role: "subscriber"})
                return h.response(JSON.stringify({
                    sessionId: sessionId,
                    token: token
                })).code(200)
            }else{
                return new Boom("subscribe to unlive store", {statusCode: 400})
            }
            
        } catch (error) {
            console.log(error)
            return Boom.boomify(error)
        }
    }
}