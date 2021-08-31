const mongoose = require("mongoose");

const mongoConnection = mongoose.connection;

mongoose.connect(
  `mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_NAME}`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoConnection.once("open", () => {
  console.log("connection to mongo made");
});
