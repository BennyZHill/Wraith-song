const mongoose = require("mongoose");

const Song = mongoose.model("Song", {
  name: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String, required: true },
});

module.exports = Song;
