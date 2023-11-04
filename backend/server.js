const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const dbConnect = require("./config/dbConnection");
const port = process.env.PORT || 5001;

dbConnect();
app.use(express.json());
app.get("/", (req, res) => {
  return res.send({ msg: "server is up and running" });
});
app.use("/user", require("./routes/userRouter"));
app.use("/movies", require("./routes/movieRouter"));
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
