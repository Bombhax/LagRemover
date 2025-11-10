import express from "express";
const app = express();

app.get("/id", (req, res) => {
  res.json({ id: 2342323234 });
});

export default app;
