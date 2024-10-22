const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (like your index.html) from the 'src' directory
app.use(express.static(path.join(__dirname, "src")));

// Default route to serve your index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "htmx", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
