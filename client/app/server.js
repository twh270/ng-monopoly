var Hapi = require('hapi');
var Inert = require('inert');
var Path = require('path');

var createServer = function(options) {
    var server = new Hapi.Server();

    server.connection(options);
    
    server.route({ method: 'GET', path: '/', handler: test });
    
    server.register(Inert, function(err) {});

    function test(request, reply) {
        reply({ status: 'ok for now' });
    }
    return server;
}

module.exports = function(options) {
    return createServer(options);
}


