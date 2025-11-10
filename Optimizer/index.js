// index.js
import express from "express";

const app = express();

// Minimal endpoint that returns the ID as JSON
app.get("/id", (req, res) => {
  res.json({ id: 2342323234 });
});

// Start server (required for the endpoint to work)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
