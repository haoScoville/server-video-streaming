var userHandler=require("./user_handler")

exports.plugin = {
    pkg: require('./package.json'),
    register: async function (server, options) {

        server.route({
            path: '/login',
            method: 'GET',
            handler: userHandler.login
        });
    
    }
}