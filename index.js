const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () =>
  console.log("Servidor ordnado em http://localhost:3000")
)