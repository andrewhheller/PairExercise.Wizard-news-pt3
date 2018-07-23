// // bring in module
// const {Client} = require('pg');

// // create an object that includes connection settings
// const client = new Client({
//   connectionString: "postgres://localhost/wnews"
// });

// await client.connect();

// const res = await client.query('SELECT * FROM users');
// console.log(res);

// // closes connection
// await client.end();

// setting up the node-postpgres driver
const pg = require('pg');

const postgresUrl = 'postgres://localhost/wnews';

const client = new pg.Client(postgresUrl);

// connecting to the 'postgres' server
client.connect();

// make the client available as a node module
module.exports = client;


