const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 500;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use("/api/cities", require("../api/cities.js"));
app.use("/api/weather", require("../api/weathers.js"));
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
