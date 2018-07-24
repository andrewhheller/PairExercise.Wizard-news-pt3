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
const {client} = require("./db");


// instantiate express
const app = express();


// ### MIDDLEWARE ###

// activate morgan middleware with 'dev' mode
app.use(morgan('dev'));

// enable static library 'public'
app.use(express.static(__dirname + "/public"));

// activate body-parser middleware (urlenclded)
app.use(bodyParser.urlencoded());

// activate method override middleware
app.use(methodOverride('_method'));


// ### ROUTES ###

// home page
app.get("/", async (req, res, next) => {

  // try {
  //   const data = await client.query('SELECT * FROM posts');
  //   const posts = data.rows;
  //   // console.log('test');
  //   res.send(postList(posts));
  // }
  // catch (error) {
  //   console.error(error);
  //   res.status(500).send(`Something went wrong... ${error}`);
  // }
  
  try {
    const data = await client.query(`
      SELECT userid, title, name, upvotes, date
      FROM posts
      LEFT JOIN users
        ON posts.id = users.id
      FULL JOIN (
        SELECT postid, COUNT(*) AS upvotes FROM upvotes GROUP BY postid
      ) AS tally
        ON posts.id = tally.postid
        ORDER BY userid`);

    // console.log(data.rows);

    res.send(postList(data.rows));
  }
  catch (error) {
    next(error);
  }

});

// individual post page
app.get("/posts/:id", async (req, res, next) => {

  try {
    const data = await client.query(`
      SELECT *
      FROM posts
      LEFT JOIN users
      ON posts.id = users.id
      WHERE posts.id = ${+req.params.id}`);

      res.send(postDetails(data.rows[0]));
  }
  catch (error) {
    next(error);
  }

  // console.log(data.rows);

  
});

// search query results
app.post("/search", async (req, res, next) => {

  // console.log(req.body.name);

  try {
    const data = await client.query(`
      SELECT userid, title, name, content, upvotes, date
        FROM posts
        FULL JOIN users
          ON posts.id = users.id
        FULL JOIN (
          SELECT postid, COUNT(*) AS upvotes FROM upvotes GROUP BY postid
        ) AS tally
          ON posts.id = tally.postid
        WHERE LOWER(content)
          LIKE LOWER('%${req.body.name}%')
        OR LOWER(title)
          LIKE LOWER('%${req.body.name}%');
      `);

      res.send(postList(data.rows));
  }
  catch (error) {
    next(error);
  }

  // console.log(data);

});

// delete post
app.delete('/posts/:id', async (req, res) => {

  // console.log(req.params.id);

  try {
    const deletePost = await client.query(`
    
      DELETE from upvotes
        WHERE postid = ${+req.params.id};

      DELETE from posts
        WHERE id = ${+req.params.id};
    `)

    res.redirect('/');
  }
  catch (error) {
    next(error);
  }
  
});

module.exports = app;
