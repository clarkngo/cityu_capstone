/**
 * Created by irfan.maulana on 11/24/2015.
 */
var mongoose = require('mongoose');

var conn = mongoose.connect('mongodb://localhost/restapi_database');

mongoose.connection.on('open', function (ref) {
    connected=true;
    console.log('open connection to mongo server.');
});

mongoose.connection.on('connected', function (ref) {
    connected=true;
    console.log('connected to mongo server.');
});

mongoose.connection.on('disconnected', function (ref) {
    connected=false;
    console.log('disconnected from mongo server.');
});

mongoose.connection.on('close', function (ref) {
    connected=false;
    console.log('close connection to mongo server');
});

mongoose.connection.on('error', function (err) {
    connected=false;
    console.log('error connection to mongo server!');
    console.log(err);
});

mongoose.connection.db.on('reconnect', function (ref) {
    connected=true;
    console.log('reconnect to mongo server.');
});

module.exports = conn;