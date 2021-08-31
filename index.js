require("dotenv").config();
require("./db");

const express = require("express");
const songRouter = require("./routes/song");

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.status(200).json({ msg: "HELLO WORLD" }));
app.use("/song", songRouter);

app.listen(process.env.EXPRESS_PORT || 5000, () => {
  console.log(`APP ONLINE AT LOCALHOST ${process.env.EXPRESS_PORT}`);
});
