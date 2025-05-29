// index.js
// where your node app starts

const express = require('express');
const app = express();
const cors = require('cors');

// Enable CORS to allow FCC to test the API
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files
app.use(express.static('public'));

// Serve the main HTML page
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Example endpoint
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

// Request Header Parser API endpoint
app.get("/api/whoami", function (req, res) {
  const ip = req.ip;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];

  res.json({
    ipaddress: ip,
    language: language,
    software: software
  });
});

// Start server
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
