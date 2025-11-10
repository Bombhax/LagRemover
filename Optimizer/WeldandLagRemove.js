

import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

const ID = process.env.ID || "115188487528112"; // Amount to Remove Lag (best amount ngl)

app.get("/", (req, res) => {

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.send(ID);
});


app.get("/json", (req, res) => {
  res.json({ id: ID });
});

app.listen(PORT, () => {
 
  console.log(`ID server listening on port ${PORT}. ID=${ID}`);
});
