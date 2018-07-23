// bring in main app module
const app = require('./app.js');


// ### SERVER LISTENING PORT ###

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});