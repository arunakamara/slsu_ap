const mongoose = require("mongoose");
const cors = require("cors")
const members = require("./routes/members");
const home = require("./routes/home");
const university = require("./routes/universities")
const express = require("express");


const app = express();

app.set("view engine", "pug");

mongoose
  .connect("mongodb://localhost/slsu_ap")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.use(cors());
app.use(express.json());
app.use("/", home);
app.use("/api/university", university)
app.use("/api/members", members);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));


