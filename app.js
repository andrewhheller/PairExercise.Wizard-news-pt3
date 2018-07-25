// ### NODE MODULES ###

// bring in express library and instantiate
const express = require("express");
const app = express();

// bring in morgan middleware (logging)
const morgan = require("morgan");

// bring in body-parser middleware
const bodyParser = require("body-parser")

// bring in method-override middleware
const methodOverride = require("method-override");

// bring in routes
const routes = require('./routes/posts.js');




// ### MIDDLEWARE ###

// activate morgan middleware with 'dev' mode
app.use(morgan('dev'));

// enable static library 'public'
app.use(express.static(__dirname + "/public"));

// activate body-parser middleware (urlenclded)
app.use(bodyParser.urlencoded({extended: false}));

// activate method override middleware
app.use(methodOverride('_method'));

// express router middleware
app.use('/posts', routes);


// ### REDIRECTION ROUTE ###

app.get('/', (req, res, next) => {
  res.redirect('/posts');
});


module.exports = app;
