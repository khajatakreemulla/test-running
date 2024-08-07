const express = require('express');
const http = require('http');
const RED = require('node-red');

// Create an Express app
const app = express();

// Create a server
const server = http.createServer(app);

// Create the settings object for Node-RED
const settings = {
  httpAdminRoot: '/red',
  httpNodeRoot: '/api',
  userDir: './.nodered/',
  flowFile: 'flows.json',
  functionGlobalContext: {} // enables global context
};

// Initialize Node-RED with the server and settings
RED.init(server, settings);

// Serve the Node-RED editor UI from /red
app.use(settings.httpAdminRoot, RED.httpAdmin);

// Serve the Node-RED node UI from /api
app.use(settings.httpNodeRoot, RED.httpNode);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Start Node-RED
RED.start();

module.exports = app; // Export the app for testing purposes
