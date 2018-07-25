// ### NODE MODULES ###

// bring in express library
const express = require("express");

// bring in morgan middleware (logging)
const morgan = require("morgan");

// bring in body-parser middleware
const bodyParser = require("body-parser")

// bring in method-override middleware
const methodOverride = require("method-override");


// ### CUSTOM MODULES ####

// views: all post listing
const postList = require("./views/postList");

// views: individual post
const postDetails = require("./views/postDetails");

// model / data (index.js)
const {getAllPosts, getOnePost, searchPosts, deletePost} = require("./db");

const routes = require('./routes/posts.js');

// instantiate express
const app = express();


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

app.get('/', (req, res) => {
  res.redirect('/posts');
});


module.exports = app;
