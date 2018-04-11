'use strict';

var Hapi=require('hapi');
var Glue=require('glue');

// Start the server
async function start() {
    let options = {
        relativeTo: __dirname + '/lib/plugins'
    };

    try {
        let server = await Glue.compose(require('./config/manifest.json'), options)
        await server.start();

        console.log('Server running at:', server.info.uri);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    
};

start();