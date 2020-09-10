if (
  process.env.NODE_ENV === "development" ||
  !process.env.NODE_ENV === "development"
) {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const PORT = 2000;
const server = require("http").createServer(app);
const redis = require("redis");


//db.connect
// require("./config/db.connect")();

//app.use Router
app.use(require("./routes"));

//app.use error handler
app.use(require("./middlewares/errHandler"));

//Listening
server.listen(PORT, () => console.log("Server started on " + PORT));

//set NODE_ENV=development&&
