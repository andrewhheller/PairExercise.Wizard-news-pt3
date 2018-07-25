const timeAgo = require("node-time-ago");
const html = require("html-template-tag");

module.exports = posts => html`<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><a href="/"><img src="/logo.png"/>Wizard News</a></header>

      <br>

      <form method="POST" action="/posts/search">

        <div>
            <input id="search-box" name="name" placeholder="Search wizard posts..."></input>
            <input id="search-button" type="submit" value="Search">
        </div>

      </form>

      <p class="add-post"><a href="/posts/add" target="_blank">Add a new post >></a></p>

      <br>

      ${posts.map(post => html`
        <div class='news-item'>
          <p>
            <span class="news-position">${post.userid}. ▲</span>
            <a href="/posts/${post.userid}" target="_blank">${post.title}</a>
            <small>(by ${post.name})</small>
          </p>
          <small class="news-info">
            ${post.upvotes} upvotes | ${timeAgo(post.date)}
          </small>
        </div>`
      )}
    </div>
  </body>
  </html>`;
