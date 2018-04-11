'use strict';

var Hapi=require('hapi');
var Glue=require('glue');

// Start the server
async function start() {

    try {
        let server = await Glue.compose(require('./config/manifest.json'))
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();