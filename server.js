const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Sèvi fichye frontend yo ki nan menm folder ak server.js.
app.use(express.static(__dirname));

// Paj prensipal la.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Radio Lakay ap kouri sou pò ${PORT}`);
});
