const fs = require("fs");

const deleteSong = (req, res) => {
  const { id } = req.params;
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

    const jsonData = JSON.stringify(songsContent);

    fs.writeFile("songs.json", jsonData, (err) => {
      res.status(202);
      res.send("dato eliminado");
    });
  });
};

module.exports = deleteSong;
