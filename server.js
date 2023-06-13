const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the dist directory
app.use(express.static(__dirname + '/dist/coldstack-frontend'));

// Redirect all routes to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/coldstack-frontend/index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server running on port ' + port);
});
