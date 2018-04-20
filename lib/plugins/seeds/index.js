var handler = require('./handler')

exports.plugin = {
    pkg: require('./package.json'),
    register: async function (server, options) {
        server.route({
            path: '/init',
            method: 'GET',
            handler: handler.init
        })
    }
}