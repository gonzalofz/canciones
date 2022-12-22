const fs = require("fs");

const updateSong = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  fs.readFile("songs.json", (err, content) => {
    if (err) {
      res.status(404);
      res.send("Not Found file songs.json");
      throw err;
    }

    var songsContent = JSON.parse(content);
    const findIndexSongById = songsContent.findIndex((song) => song.id === id);
    console.log("findIndexSongById: ", findIndexSongById);

    if (findIndexSongById === -1) {
      res.status(404);
      res.send("Not Found data");
      return;
    }

    songsContent.splice(findIndexSongById, 1);

    const fullData = [...songsContent, data];
    const jsonData = JSON.stringify(fullData);

    fs.writeFile("songs.json", jsonData, (err) => {
      res.status(204);
      res.send("dato actualizado");
    });
  });
};

module.exports = updateSong;
