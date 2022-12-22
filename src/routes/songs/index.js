const express = require("express");
const router = express.Router();

const getSongs = require("../../services/songs/getSongs");
const getSong = require("../../services/songs/getSong");
const createSong = require("../../services/songs/createSong");
const deleteSong = require("../../services/songs/deleteSong");
const updateSong = require("../../services/songs/updateSong");

router.post("/canciones", (req, res) => {
  createSong(req, res);
});

router.get("/canciones", (req, res) => {
  getSongs(req, res);
});

router.get("/cancion/:id", (req, res) => {
  getSong(req, res);
});

router.put("/canciones/:id", (req, res) => {
  updateSong(req, res);
});

router.delete("/canciones/:id", (req, res) => {
  deleteSong(req, res);
});

module.exports = router;
