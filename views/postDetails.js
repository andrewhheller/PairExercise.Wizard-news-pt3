const timeAgo = require("node-time-ago");
const html = require("html-template-tag");

module.exports = (post) => html`<!DOCTYPE html>
<html>
<head>
  <title>Wizard News</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div class="news-list">
    <header><a href="/"><img src="/logo.png"/>Wizard News</a></header>

    <form method="POST" action="/posts/${post.id}?_method=delete">

      <input id="delete-button" type="submit" value="Delete Post">

    </form>

      <div class='news-item'>
      <p>
        ${post.title} <small>(by ${post.name})</small>
      </p>
      <small>${post.upvotes}</small>
      <p>${post.content}</p>
    </div>
  </div>
</body>
</html>`;
