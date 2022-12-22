const fs = require("fs");

const getSongs = (req, res) => {
  fs.readFile("songs.json", (err, content) => {
    if (err) {
      res.status(404);
      res.send("Not Found file songs.json");
      throw err;
    }

    const songs = JSON.parse(content);

    res.status(200);
    res.json(songs);
  });
};

module.exports = getSongs;
