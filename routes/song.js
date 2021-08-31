const router = require("express").Router();

const Song = require("../models/song");
// return all songs
router.get("/", async (req, res) => {
  const songs = await Song.find({});

  res.status(200).json({ msg: "song / get route works", songs });
});
//create song
router.post("/", async (req, res) => {
  const song = new Song({
    name: req.body.name,
    artist: req.body.artist,
    album: req.body.album,
  });
  await song.save();

  res.status(201).json({ msg: "song / post route works", song });
});
//update songs
router.put("/", async (req, res) => {
  try {
    const song = await Song.findOneAndUpdate(
      { _id: req.body.id },
      {
        $set: {
          name: req.body.name,
        },
      }
    );
    res.status(201).json({ msg: "song / put route works", song });
  } catch (error) {
    res.status(404).json({ msg: "song does not exist," });
  }
});
// delete songs
router.delete("/", async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.body.id);
    res.status(200).json({ msg: "song / delete route works", song });
  } catch (error) {
    res.status(404).json({ msg: "song does not exist," });
  }
});

module.exports = router;
