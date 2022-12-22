const fs = require("fs");

const getSong = (req, res) => {
  const { id } = req.params;

  fs.readFile("songs.json", (err, content) => {
    if (err) {
      res.status(404);
      res.send("Not Found file songs.json");
      throw err;
    }

    const songs = JSON.parse(content);

    const song = songs.find((song) => song.id === id);

    if (!song) {
      res.status(404);
      res.send("Not Found song");
    }

    res.status(200);
    res.json(song);
  });
};

module.exports = getSong;
