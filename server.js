// bring in main app module
const app = require('./app.js');

const {syncAndSeed} = require('./db');


// ### SERVER LISTENING PORT ###

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
  console.log(`listening on port... ${PORT}`);
  console.log(process.env.DATABASE_URL);
});

syncAndSeed();

