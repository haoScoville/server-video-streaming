var searchHandler=require('./handlers/search-handler')
var streamHandler=require('./handlers/stream-handler')

exports.plugin = {
    pkg: require('./package.json'),
    register: async function (server, options) {

        server.route({
            path: '/store/{idStore}',
            method: 'GET',
            handler: searchHandler.findById
        })

        server.route({
            path: '/stores',
            method: 'GET',
            handler: searchHandler.findLiveStore
        })

        server.route({
            path: '/store/{idStore}/start_publish',
            method: 'GET',
            handler: streamHandler.startPublish
        })

        server.route({
            path: '/store/{idStore}/stop_publish',
            method: 'GET',
            handler: streamHandler.stopPublish
        })

        server.route({
            path: '/store/{idStore}/subscribe',
            method: 'GET',
            handler: streamHandler.subscribe
        });
    

    }
}