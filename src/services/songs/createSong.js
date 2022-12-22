const fs = require("fs");

const createSong = (req, res) => {
  const data = req.body;

  fs.readFile("songs.json", (err, content) => {
    if (err) {
      res.status(404);
      res.send("Not Found file songs.json");
      throw err;
    }

    var songsContent = JSON.parse(content);
    const findSongById = songsContent.find((song) => song.id === data.id);

    if (findSongById) {
      res.status(404);
      res.send("this id already exists");
      return;
    }

    const fullData = [...songsContent, data];
    const jsonData = JSON.stringify(fullData);

    fs.writeFile("songs.json", jsonData, (err) => {
      res.status(201);
      res.send("dato agregado exitosamente");
    });
  });
};

module.exports = createSong;
