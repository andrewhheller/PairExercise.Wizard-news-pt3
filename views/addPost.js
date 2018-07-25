const html = require('html-template-tag');

const postAdd = () => {
  return html`
    
    <!DOCTYPE html>

    <html lang="en-US">

    <head>
      <title>Add a Post</title>
      <meta charset="UTF-8">
      <link rel="stylesheet" type="text/css" href="/style.css">
    </head>

    <body>

      <div class="news-list">

        <header><a href="/"><img src="/logo.png"/>Wizard News</a></header>
      
        <form method="POST" action="/posts">
          <label for="name">Author</label>
          <input type="text" name="name">
          <label for="title">Title</label>
          <input type="text" name="title">
          <textarea name="content"></textarea>
          <br>
          <br>
          <button type="submit">Submit</button>
        </form>

      </div>

    </body>
    </html>
 
  `
}


module.exports = postAdd;
