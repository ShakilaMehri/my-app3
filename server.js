const express = require("express");
const cors = require('cors');
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8000;

app.use(express.static("public"));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my express server! Use /items to get the list of items and /sliderItems to get the slider data");
})

app.get("/items", (req, res) => {
  fs.readFile("items.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading file");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.get("/sliderItems", (req, res) => {
  const sliderItemsPath = path.join(__dirname, "sliderItems.json");
  fs.readFile(sliderItemsPath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading sliderItems.json:", err);
      res.status(500).send("Error reanding file");
    } else {
     res.json(JSON.parse(data));
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
