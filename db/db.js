const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/';

// mongodb://localhost - this is whare our mongodb server is being run on
// our computer

// /test this is what we are calling database, a db called test
// is automatically created when we connect

mongoose.connect(connectionString);

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose disconnected `);
});

mongoose.connection.on('error', (err) => {
    console.log(err, 'mongoose error');
});