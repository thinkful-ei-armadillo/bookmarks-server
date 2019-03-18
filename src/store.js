const uuid = require("uuid/v4");

const bookmarks = [
  {
    id: uuid(),
    title: "Google",
    url: "https://google.com",
    description: "search engine my guy",
    rating: 5
  }
];

module.exports = { bookmarks };
