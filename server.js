// server.js
const express = require("express");
const path = require("path");

const app = express();

// Serve uploads folder (VERY IMPORTANT for images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Serve all normal frontend files (index.html, courses.html, ott.html, editing.html, style.css)
app.use(express.static(path.join(__dirname)));

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// OTT Page
app.get("/ott", (req, res) => {
  res.sendFile(path.join(__dirname, "ott.html"));
});

// Courses Page
app.get("/courses", (req, res) => {
  res.sendFile(path.join(__dirname, "courses.html"));
});

// Editing Page
app.get("/editing", (req, res) => {
  res.sendFile(path.join(__dirname, "editing.html"));
});

// Details Page (for dynamic products)
app.get("/details", (req, res) => {
  res.sendFile(path.join(__dirname, "details.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 SERVER RUNNING ON PORT ${PORT}`));
