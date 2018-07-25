const express = require('express');
const router = express.Router();

const {getAllPosts, getOnePost, searchPosts, deletePost, addPost} = require('../db');

const postList = require('../views/postList.js');
const postDetails = require('../views/postDetails.js');
const postAdd = require('../views/addPost.js');




// ### ROUTES ###

// home page
router.get("/", async (req, res, next) => {

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
    const posts = await getAllPosts();
    res.send(postList(posts));
  }
  catch (error) {
    next(error);
  }

});

router.get('/add', async (req, res, next) => {

  try {
    await res.send(postAdd());
  }
  catch (error) {
    next (error);
  }

  // this will POST data to /posts page (see / redirect below for SQL action)

});

router.post('/', async (req, res, next) => {

  try {
    const name = req.body.name;
    const title = req.body.title;
    const content = req.body.content;

    console.log(name);
    console.log(title);
    console.log(content);

    // sql query

    const newPost = await addPost(name, title, content);

    res.redirect(`/posts/${newPost.userid}`);
  }
  catch (error) {
    next (error)
  }

});



// individual post page
router.get("/:id", async (req, res, next) => {

  try {
    const post = await getOnePost(+req.params.id);
    res.send(postDetails(post));
  }
  catch (error) {
    next(error);
  }

  // console.log(data.rows);

});


// search query results
router.post("/search", async (req, res, next) => {

  // console.log(req.body.name);

  try {
    const posts = await searchPosts(req.body.name);
    res.send(postList(posts));
  }
  catch (error) {
    next(error);
  }

  // console.log(data);

});

// delete post
router.delete('/:id', async (req, res, next) => {

  try {
    const post = await deletePost(+req.params.id);
    res.redirect('/');
  }
  catch (error) {
    next(error);
  }
  
});






module.exports = router;
