const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server on the Heroku port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
