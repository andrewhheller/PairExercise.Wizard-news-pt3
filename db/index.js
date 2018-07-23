// setting up the node-postpgres driver
const pg = require('pg');

// destructuring, pulling out and naming 'Client' constructor function from pg library
const {Client} = pg;

// assigning connection string to variable
const postgresURL = 'postgres://localhost/wnews_test';

// assigning client as new instance of Client constructor function passing in connection string
const client = new Client(postgresURL);

// connecting to the 'postgres' server
client.connect();

// const synchAndSeed = () => {

//   const sql = 


// }

// make the client available as a node module
module.exports = client;


